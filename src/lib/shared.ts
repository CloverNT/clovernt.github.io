import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'CloverNT';

export const siteUrl = 'https://clovernt.github.io';

export const siteDescription =
  '面向 QQNT 的现代插件开发平台。';

export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'CloverNT',
  repo: 'clovernt.github.io',
  branch: 'main',
};

export const orgUrl = 'https://github.com/CloverNT';

export const repos = {
  core: 'https://github.com/CloverNT/CloverCore',
  coreReleases: 'https://github.com/CloverNT/CloverCore/releases',
  coreActions: 'https://github.com/CloverNT/CloverCore/actions',
  loaderSdk: 'https://github.com/CloverNT/CloverLoader-Release',
  nativePluginTemplate: 'https://github.com/CloverNT/NativePluginTemplate',
  qqntSdk: 'https://github.com/CloverNT/qqnt-sdk',
  libcxxBuild: 'https://github.com/CloverNT/libcxx-build',
  alka: 'https://github.com/SingerBallad/Alka',
  mortis: 'https://github.com/SingerBallad/Mortis',
} as const;

export const qqGroup = '1097520805';

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
