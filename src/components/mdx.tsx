import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import {
  Tab,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'fumadocs-ui/components/tabs';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { Banner } from 'fumadocs-ui/components/banner';
import { PlatformMatrix } from '@/components/platform-matrix';
import { PrivateNotice } from '@/components/private-notice';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Tabs,
    Tab,
    TabsList,
    TabsTrigger,
    TabsContent,
    Steps,
    Step,
    Files,
    File,
    Folder,
    Accordions,
    Accordion,
    TypeTable,
    Banner,
    PlatformMatrix,
    PrivateNotice,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
