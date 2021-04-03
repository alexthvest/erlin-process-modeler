import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-16">
      <div className="flex w-1/2 bg-white shadow rounded-md">
        <div className="flex flex-col w-8/12 p-8">
          <h1 className="font-semibold">Список проектов</h1>
          <hr className="my-6" />
          <ul className="flex flex-col space-y-2">
            <li className="flex flex-col justify-center px-4 py-4 rounded-md bg-secondary space-y-1 hover:text-white hover:bg-primary transition">
              <p className="text-sm font-semibold">Деятельность ООО "PremierPC"</p>
              <p className="text-xs">Автор: Даниил Вест</p>
            </li>
            <li className="flex flex-col justify-center px-4 py-4 rounded-md bg-secondary space-y-1 hover:text-white hover:bg-primary transition">
              <p className="text-sm font-semibold">Деятельность ООО "PremierPC"</p>
              <p className="text-xs">Автор: Даниил Вест</p>
            </li>
            <li className="flex flex-col justify-center px-4 py-4 rounded-md bg-secondary space-y-1 hover:text-white hover:bg-primary transition">
              <p className="text-sm font-semibold">Деятельность ООО "PremierPC"</p>
              <p className="text-xs">Автор: Даниил Вест</p>
            </li>
          </ul>
          {/*<div className="grid grid-flow-row grid-cols-3 gap-4">*/}
          {/*  <div className="flex flex-col justify-center items-center p-4 rounded-md bg-secondary hover:text-white hover:bg-primary transition">*/}
          {/*    <PackageIcon className="mb-2" size="medium" />*/}
          {/*    <p className="font-semibold text-lg">Title</p>*/}
          {/*  </div>*/}
          {/*  <div className="flex flex-col justify-center items-center p-4 rounded-md bg-secondary hover:text-white hover:bg-primary transition">*/}
          {/*    <PackageIcon className="mb-2" size="medium" />*/}
          {/*    <p className="font-semibold text-lg">Title</p>*/}
          {/*  </div>*/}
          {/*  <div className="flex flex-col justify-center items-center p-4 rounded-md bg-secondary hover:text-white hover:bg-primary transition">*/}
          {/*    <PackageIcon className="mb-2" size="medium" />*/}
          {/*    <p className="font-semibold text-lg">Title</p>*/}
          {/*  </div>*/}
          {/*  <div className="flex flex-col justify-center items-center p-4 rounded-md bg-secondary hover:text-white hover:bg-primary transition">*/}
          {/*    <PackageIcon className="mb-2" size="medium" />*/}
          {/*    <p className="font-semibold text-lg">Title</p>*/}
          {/*  </div>*/}
          {/*  <div className="flex flex-col justify-center items-center p-4 rounded-md bg-secondary hover:text-white hover:bg-primary transition">*/}
          {/*    <PackageIcon className="mb-2" size="medium" />*/}
          {/*    <p className="font-semibold text-lg">Title</p>*/}
          {/*  </div>*/}
          {/*  <div className="flex flex-col justify-center items-center p-4 rounded-md bg-secondary hover:text-white hover:bg-primary transition">*/}
          {/*    <PackageIcon className="mb-2" size="medium" />*/}
          {/*    <p className="font-semibold text-lg">Title</p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className="flex flex-col w-4/12 p-8 items-start">
          <div className="flex items-center justify-center mb-8">
            <img
              className="rounded-full mr-4"
              src="https://sun1-97.userapi.com/s/v1/ig2/jG-bATmHltUB2codJkShU3nIDbrp0EeOo2rIr1bqBU84wLsMCWqIIbwvbG-u4sPHL9uZs4G-uxDNUkv9aMjImrgN.jpg?size=50x0&quality=96&crop=360,0,632,632&ava=1"
            />
            <div className="flex flex-col">
              <p className="text-md font-semibold">Даниил Вест</p>
              <p className="text-sm text-gray-500">alexthvest@gmail.com</p>
            </div>
          </div>
          <h1 className="font-semibold mb-2">Недавние</h1>
          <div className="w-full space-y-2">
            <div className="border px-6 py-2 rounded-md bg-secondary">
              <p>Title</p>
              <p>6 минут назад</p>
            </div>
            <div className="border px-6 py-2 rounded-md bg-secondary">
              <p>Title</p>
              <p>6 минут назад</p>
            </div>
            <div className="border px-6 py-2 rounded-md bg-secondary">
              <p>Title</p>
              <p>6 минут назад</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
