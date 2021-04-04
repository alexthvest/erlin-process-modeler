import React, { useState } from "react";

import { ChevronDownIcon, ChevronRightIcon, GitForkIcon } from "@primer/octicons-react";

export interface DecompositionTreeItemProps {
  name: string;
  items?: DecompositionTreeItemProps[];
  active?: boolean;
}

export const DecompositionTreeItem: React.FC<DecompositionTreeItemProps> = ({ name, items, active }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(open => !open);

  const renderIcon = () => {
    if (!items?.length) {
      return <GitForkIcon className="mr-2" />;
    }

    return open ? <ChevronDownIcon className="mr-2" /> : <ChevronRightIcon className="mr-2" />;
  };

  return (
    <>
      <li className="tree-item">
        <div onClick={toggleOpen} className={`${active ? "bg-primary text-white" : ""}`}>
          {renderIcon()}
          {name}
        </div>
        {items?.length && open && (
          <ul>
            {items.map((item, index) => (
              <DecompositionTreeItem key={index} {...item} />
            ))}
          </ul>
        )}
      </li>
    </>
  );
};
