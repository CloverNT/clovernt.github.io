import type { ReactNode } from 'react';

const presets: Record<string, { label: string; className: string }> = {
  wip: { label: '编写中', className: 'bg-fd-muted text-fd-muted-foreground' },
  todo: { label: '待写', className: 'bg-fd-muted text-fd-muted-foreground' },
  new: { label: '新', className: 'bg-fd-primary/10 text-fd-primary' },
  beta: { label: 'Beta', className: 'bg-fd-info/10 text-fd-info' },
  deprecated: { label: '已弃用', className: 'bg-fd-error/10 text-fd-error' },
};

export function renderStatusBadge(status: string): ReactNode {
  const preset = presets[status.toLowerCase()] ?? {
    label: status,
    className: 'bg-fd-muted text-fd-muted-foreground',
  };

  return (
    <span
      className={`ms-auto shrink-0 rounded-full px-1.5 py-0.5 text-[10px] leading-4 font-medium ${preset.className}`}
    >
      {preset.label}
    </span>
  );
}
