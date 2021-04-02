import React, { useState } from "react";

interface TreeViewNodeProps {
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  icon?: React.ReactNode;

  title: string;
  nodes?: TreeViewNodeProps[];
}

interface TreeViewProps {
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  icon?: React.ReactNode;

  nodes: TreeViewNodeProps[];
}

export const TreeView: React.FC<TreeViewProps & React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  openIcon,
  closeIcon,
  icon,
  nodes,
}) => {
  return (
    <div className={className}>
      {nodes.map((node, index) => (
        <TreeViewNode key={index} openIcon={openIcon} closeIcon={closeIcon} icon={icon} {...node} />
      ))}
    </div>
  );
};

export const TreeViewNode: React.FC<TreeViewNodeProps> = ({ openIcon, closeIcon, icon, title, nodes }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(open => !open);
  };

  const renderIcon = () => {
    if (!nodes?.length) return icon;

    return open ? openIcon : closeIcon;
  };

  return (
    <>
      <div
        className="node w-full cursor-pointer select-none hover:bg-secondary p-2 rounded transition text-sm font-medium"
        onClick={toggleOpen}
      >
        {renderIcon()} {title}
      </div>
      {nodes?.length && open && (
        <TreeView openIcon={openIcon} closeIcon={closeIcon} icon={icon} nodes={nodes} className="ml-7 tree" />
      )}
    </>
  );
};
