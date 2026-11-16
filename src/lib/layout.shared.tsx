import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, docsRoute, orgUrl, repos } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {}
          <span className="font-semibold">{appName}</span>
        </>
      ),
      url: '/',
    },
    githubUrl: orgUrl,
    links: [
      {
        type: 'main',
        text: '文档',
        url: docsRoute,
        active: 'nested-url',
      },
      {
        type: 'main',
        text: '下载',
        url: repos.coreReleases,
        external: true,
      },
    ],
  };
}
