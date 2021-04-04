import React from "react";
import { Link } from "react-router-dom";

import { PackageIcon, RepoIcon } from "@primer/octicons-react";

const TitleBar: React.FC = () => {
  return (
    <div className="flex items-center px-8 py-4 bg-primary shadow">
      <PackageIcon className="text-white mr-4" size={20} />
      <h1 className="font-semibold text-lg text-white">Erlin Process Modeler</h1>
      <div className="ml-auto flex items-center">
        <p className="text-white font-semibold text-sm">alexthvest@gmail.com</p>
        <img
          className="rounded-full w-10 h-10 ml-4"
          src="https://sun1-97.userapi.com/s/v1/ig2/jG-bATmHltUB2codJkShU3nIDbrp0EeOo2rIr1bqBU84wLsMCWqIIbwvbG-u4sPHL9uZs4G-uxDNUkv9aMjImrgN.jpg?size=50x0&quality=96&crop=360,0,632,632&ava=1"
        />
      </div>
    </div>
  );
};

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <TitleBar />
      <main className="flex justify-center p-16">
        <div className="w-2/4 p-8 mr-4 bg-white shadow rounded">
          <div className="flex items-center mb-6">
            <h1 className="font-semibold text-lg">Список проектов</h1>
            <Link className="ml-auto button" to="/project">
              <RepoIcon className="mr-3" />
              Новый проект
            </Link>
          </div>
          <div className="grid grid-flow-row grid-cols-4 gap-4">
            <div className="flex items-center space-x-4 p-4 bg-secondary rounded hover:bg-primary hover:text-white transition clickable">
              <RepoIcon size={24} />
              <p className="text-xs font-semibold">Деятельность ООО "OneLab"</p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-secondary rounded">
              <RepoIcon size={24} />
              <p className="text-xs font-semibold">Деятельность ООО "OneLab"</p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-secondary rounded">
              <RepoIcon size={24} />
              <p className="text-xs font-semibold">Деятельность ООО "OneLab"</p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-secondary rounded">
              <RepoIcon size={24} />
              <p className="text-xs font-semibold">Деятельность ООО "OneLab"</p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-secondary rounded">
              <RepoIcon size={24} />
              <p className="text-xs font-semibold">Деятельность ООО "OneLab"</p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-secondary rounded">
              <RepoIcon size={24} />
              <p className="text-xs font-semibold">Деятельность ООО "OneLab"</p>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-secondary rounded">
              <RepoIcon size={24} />
              <p className="text-xs font-semibold">Деятельность ООО "OneLab"</p>
            </div>
          </div>
        </div>
        <div className="w-1/4 p-8 bg-white shadow rounded">
          <h1 className="font-semibold text-lg mb-6">Недавние проекты</h1>
          <div className="space-y-3">
            <div className="px-6 py-3 bg-secondary rounded-md space-y-1">
              <p className="font-semibold text-sm">Project #1</p>
              <p className="text-xs">6 минут назад</p>
            </div>
            <div className="px-6 py-3 bg-secondary rounded-md space-y-1">
              <p className="font-semibold text-sm">Project #1</p>
              <p className="text-xs">6 минут назад</p>
            </div>
            <div className="px-6 py-3 bg-secondary rounded-md space-y-1">
              <p className="font-semibold text-sm">Project #1</p>
              <p className="text-xs">6 минут назад</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
