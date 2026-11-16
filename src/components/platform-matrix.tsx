const SYSTEMS = [
  { key: 'windows', label: 'Windows' },
  { key: 'linux', label: 'Linux' },
] as const;

const ARCHES = [
  { key: 'x64', label: 'x64' },
  { key: 'arm64', label: 'ARM64' },
] as const;

export type PlatformKey = `${(typeof SYSTEMS)[number]['key']}-${(typeof ARCHES)[number]['key']}`;

const ALL: PlatformKey[] = [
  'windows-x64',
  'windows-arm64',
  'linux-x64',
  'linux-arm64',
];

export function PlatformMatrix({
  supported = ALL,
  caption,
}: {
  supported?: PlatformKey[];
  caption?: string;
}) {
  const set = new Set<string>(supported);

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-fd-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-fd-muted/50">
            <th className="px-4 py-2 text-start font-medium">平台</th>
            {ARCHES.map((arch) => (
              <th key={arch.key} className="px-4 py-2 text-start font-medium">
                {arch.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SYSTEMS.map((system) => (
            <tr key={system.key} className="border-t border-fd-border">
              <td className="px-4 py-2 font-medium">{system.label}</td>
              {ARCHES.map((arch) => {
                const ok = set.has(`${system.key}-${arch.key}`);

                return (
                  <td key={arch.key} className="px-4 py-2">
                    <span
                      className={
                        ok ? 'text-fd-success' : 'text-fd-muted-foreground'
                      }
                    >
                      {ok ? '✓ 支持' : '— 暂无'}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {caption ? (
        <p className="border-t border-fd-border bg-fd-muted/30 px-4 py-2 text-xs text-fd-muted-foreground">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
