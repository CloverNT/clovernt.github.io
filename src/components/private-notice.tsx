import type { ReactNode } from 'react';
import {
  CalloutContainer,
  CalloutDescription,
  CalloutTitle,
} from 'fumadocs-ui/components/callout';


export function PrivateNotice({ children }: { children?: ReactNode }) {
  return (
    <CalloutContainer type="warn">
      <CalloutTitle>CloverLoader 不公开发布</CalloutTitle>
      <CalloutDescription>
        {children ?? (
          <>
            本分区只覆盖 <strong>CloverLoader-Release</strong>{' '}
            公开的 SDK，即头文件与各平台预编译库。CloverLoader
            本体不对外分发，文档也不涉及它的内部实现。
          </>
        )}
      </CalloutDescription>
    </CalloutContainer>
  );
}
