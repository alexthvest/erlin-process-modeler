import React from "react";

import { BookmarkIcon, GearIcon, ServerIcon } from "@primer/octicons-react";
import { NavigationBar } from "~/pages/Home/components/NavigationBar";

export const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/5 flex bg-white shadow">
        <NavigationBar
          items={[
            {
              icon: <ServerIcon />,
            },
            {
              icon: <BookmarkIcon />,
            },
            {
              icon: <GearIcon />,
            },
          ]}
        />
        <div className="p-6">
          <h2 className="text-lg font-semibold">Список проектов</h2>
          <hr className="my-4" />
          <div>List of projects</div>
        </div>
      </div>
      <main className="w-4/5">Main</main>
    </div>
  );
};
