import type { MarkdownHeading } from "astro";

export interface TreeHeading extends MarkdownHeading {
  children: TreeHeading[];
}

export const buildHeadingTree = (
  headings: MarkdownHeading[],
): TreeHeading[] => {
  return headings.reduce<TreeHeading[]>((tree, heading) => {
    const node: TreeHeading = { ...heading, children: [] };

    if (heading.depth === 2) {
      return [...tree, node];
    }

    const lastParent = tree.at(-1);
    if (lastParent && heading.depth > lastParent.depth) {
      return [
        ...tree.slice(0, -1),
        { ...lastParent, children: [...lastParent.children, node] },
      ];
    }

    return tree;
  }, []);
};
