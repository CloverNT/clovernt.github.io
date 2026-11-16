import { source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { generateOGImage } from 'fumadocs-ui/og';
import { appName, getPageImageUrl } from '@/lib/shared';

export const revalidate = false;

let fontPromise: Promise<ArrayBuffer | null> | undefined;

function collectText(): string {
  const chars = new Set<string>();
  const add = (text: string | undefined) => {
    if (!text) return;
    for (const ch of text) chars.add(ch);
  };

  add(appName);
  for (const page of source.getPages()) {
    add(page.data.title);
    add(page.data.description);
  }

  return [...chars].join('');
}

async function fetchFont(): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@600&text=${encodeURIComponent(collectText())}`;
    const css = await fetch(url).then((res) => res.text());
    const src = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
    if (!src) return null;

    return await fetch(src).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

function loadFont(): Promise<ArrayBuffer | null> {
  return (fontPromise ??= fetchFont());
}

export async function GET(_req: Request, { params }: RouteContext<'/og/docs/[...slug]'>) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  const font = await loadFont();

  return generateOGImage({
    title: page.data.title,
    description: page.data.description,
    site: appName,
    fonts: font
      ? [{ name: 'Noto Sans SC', data: font, weight: 600, style: 'normal' }]
      : undefined,
  });
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImageUrl(page).segments,
  }));
}
