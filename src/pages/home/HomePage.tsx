import React from "react";

import { BookmarkIcon, GearIcon, ServerIcon } from "@primer/octicons-react";

import { NavigationBar } from "~/pages/home/components/NavigationBar";
import { DecompositionTree } from "~/pages/home/components/DecompositionTree";

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
      name: "Element #1",
      active: true,
    },
    {
      name: "Element #2",
      items: [
        {
          name: "Element #2.1",
        },
        {
          name: "Element #2.2",
          items: [
            {
              name: "Element #2.2.1",
            },
            {
              name: "Element #2.2.2",
            },
            {
              name: "Element #2.2.3",
            },
          ],
        },
        {
          name: "Element #2.3",
        },
      ],
    },
    {
      name: "Element #3",
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-1/5 flex bg-white shadow">
        <NavigationBar items={navigationBarItems} />
        <div className="w-full p-6">
          <h2 className="text-lg font-semibold">Дерево декомпозиций</h2>
          <hr className="my-4" />
          <DecompositionTree items={treeViewNodes} />
        </div>
      </div>
      <main className="w-4/5">Main</main>
    </div>
  );
};
