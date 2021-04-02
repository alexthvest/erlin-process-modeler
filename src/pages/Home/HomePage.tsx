import React from "react";
import { Link } from "react-router-dom";

import { RepoIcon } from "@primer/octicons-react";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-16 space-y-2">
      <h2 className="text-xl font-semibold">Добро пожаловать!</h2>
      <p>Чтобы создать новый проект - ждите новых обновлений</p>
      <br />
      <button>
        <RepoIcon className="mr-2" />
        Новый проект
      </button>
    </div>
  );
};
