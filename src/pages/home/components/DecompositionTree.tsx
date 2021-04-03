import React from "react";

import { DecompositionTreeItem, DecompositionTreeItemProps } from "~/pages/home/components/DecompositionTreeItem";

interface DecompositionTreeProps {
  items: DecompositionTreeItemProps[];
}

export const DecompositionTree: React.FC<DecompositionTreeProps> = ({ items }) => {
  return (
    <ul className="tree">
      {items.map((item, index) => (
        <DecompositionTreeItem key={index} {...item} />
      ))}
    </ul>
  );
};
