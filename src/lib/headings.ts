import type { MarkdownHeading } from "astro";

export interface TreeHeading extends MarkdownHeading {
  children: TreeHeading[];
}

export const buildHeadingTree = (
  headings: MarkdownHeading[],
): TreeHeading[] => {
  const findParentAndInsert = (
    items: TreeHeading[],
    heading: MarkdownHeading,
    node: TreeHeading,
  ): TreeHeading[] => {
    const lastItem = items.at(-1);
    if (!lastItem) return items;

    // If current heading is direct child of last item
    if (heading.depth === lastItem.depth + 1) {
      return [
        ...items.slice(0, -1),
        { ...lastItem, children: [...lastItem.children, node] },
      ];
    }

    // If we need to go deeper into the tree
    if (heading.depth > lastItem.depth) {
      return [
        ...items.slice(0, -1),
        {
          ...lastItem,
          children: findParentAndInsert(lastItem.children, heading, node),
        },
      ];
    }

    return items;
  };

  return headings.reduce<TreeHeading[]>((tree, heading) => {
    const node: TreeHeading = { ...heading, children: [] };

    // h2
    if (heading.depth === 2) {
      return [...tree, node];
    }

    return findParentAndInsert(tree, heading, node);
  }, []);
};
