import Icon from "components/Icon";

export function HeaderButton<T>(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    _sortDirection: "asc" | "desc";
    _sortKey: keyof T;
    _activeSortKey: keyof T;
  }
) {
  const { _activeSortKey, _sortKey, _sortDirection, children, ...restProps } =
    props;
  return (
    <button
      {...restProps}
      className="flex items-center justify-between gap-1 uppercase"
    >
      <span>{children}</span>

      <Icon
        type={
          _activeSortKey === _sortKey
            ? _sortDirection === "asc"
              ? "Up"
              : "Down"
            : "Unsorted"
        }
        className={`w-4 h-4 shrink-0 ${
          _activeSortKey === _sortKey
            ? "text-gray-d2 dark:text-white"
            : "text-gray dark:text-white"
        }`}
      />
    </button>
  );
}
