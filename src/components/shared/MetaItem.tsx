/**
 * The MetaItem function in TypeScript React renders a label and value in a styled div if a value is
 * provided.
 * @param  - The `MetaItem` function is a React component that takes two props: `label` and `value`.
 * The `label` prop is a required string, while the `value` prop is an optional string.
 * @returns The `MetaItem` function returns a JSX element that displays the `label` and `value` props
 * in a styled format if the `value` prop is not null. If the `value` prop is null, it returns null.
 */

export default function MetaItem({ label, value }: { label: string; value?: string }) {
  if (!value) return null;

  return (
    <div className="flex flex-col gap-1">
      <span className="text-lg font-semibold uppercase tracking-wide font-ubuntu-condensed">
        {label}
      </span>
      <span className="text-md fontt-inter">{value}</span>
    </div>
  );
}
