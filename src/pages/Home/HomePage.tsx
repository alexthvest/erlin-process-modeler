import React from "react";

import {
  BookmarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  GearIcon,
  GitForkIcon,
  ServerIcon,
} from "@primer/octicons-react";
import { NavigationBar } from "~/pages/Home/components/NavigationBar";
import { TreeView } from "~/components/TreeView";

export const HomePage: React.FC = () => {
  const navigationBarItems = [
    {
      icon: <ServerIcon />,
    },
    {
      icon: <BookmarkIcon />,
    },
    {
      icon: <GearIcon />,
    },
  ];

  const treeViewNodes = [
    {
      title: "Element #1",
    },
    {
      title: "Element #2",
      nodes: [
        {
          title: "Element #2.1",
        },
        {
          title: "Element #2.2",
          nodes: [
            {
              title: "Element #2.2.1",
            },
            {
              title: "Element #2.2.2",
            },
            {
              title: "Element #2.2.3",
            },
          ],
        },
      ],
    },
    {
      title: "Element #3",
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-1/5 flex bg-white shadow">
        <NavigationBar items={navigationBarItems} />
        <div className="p-6">
          <h2 className="text-lg font-semibold">Список проектов</h2>
          <hr className="my-4" />
          <TreeView
            className="tree"
            icon={<GitForkIcon className="mr-2" />}
            openIcon={<ChevronDownIcon className="mr-2" />}
            closeIcon={<ChevronRightIcon className="mr-2" />}
            nodes={treeViewNodes}
          />
        </div>
      </div>
      <main className="w-4/5">Main</main>
    </div>
  );
};
