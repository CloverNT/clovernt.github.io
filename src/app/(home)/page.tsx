import Link from 'next/link';
import { Cpu, Puzzle } from 'lucide-react';
import { appName, qqGroup, repos, siteDescription } from '@/lib/shared';

const entries = [
  {
    href: '/docs/core',
    icon: Puzzle,
    title: 'CloverCore',
    description:
      'Native / JavaScript 双端插件开发框架。',
  },
  {
    href: '/docs/loader',
    icon: Cpu,
    title: 'CloverLoader SDK',
    description:
      '底层加载器对外暴露的 C 接口与预编译库。',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {appName}
        </h1>
        <p className="mt-4 text-lg text-fd-muted-foreground">
          {siteDescription}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {entries.map(({ href, icon: Icon, title, description }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:bg-fd-accent"
            >
              <Icon className="size-5 text-fd-muted-foreground transition-colors group-hover:text-fd-accent-foreground" />
              <h2 className="mt-3 font-medium">{title}</h2>
              <p className="mt-1 text-sm text-fd-muted-foreground">
                {description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fd-muted-foreground">
          <a
            href={repos.core}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-fd-foreground"
          >
            CloverCore 仓库
          </a>
          <a
            href={repos.loaderSdk}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-fd-foreground"
          >
            CloverLoader SDK 仓库
          </a>
          <span>官方交流群 {qqGroup}</span>
        </div>
      </div>
    </main>
  );
}
