import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  NavLink,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";

function FetchApi() {
  type Country = {
    Government: {
      ["Country name"]: {
        ["conventional short form"]: {
          text: string;
        };
      };
    };
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  const [countryInfo, setcountryInfo] = useState([]);
  const urlsArray = [
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/kn.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ks.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/sp.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/tw.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ch.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/cb.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/th.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/vm.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/pl.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/id.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/sn.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/my.json",
  ];

  const fetchAllUrls = async () => {
    try {
      const responses = await Promise.all(urlsArray.map((url) => fetch(url)));
      console.log("responses :>> ", responses);
      // const results = await Promise.all(responses.map((res) => res.json()))

      const results = await Promise.all(responses.map((res) => res.json()));
      setcountryInfo(results);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <>
      <RouterProvider router={router} />
      <h1>Countries</h1>
      {countryInfo &&
        countryInfo.map((result, index) => {
          console.log("result to JSX :>> ", result);
          return (
            <p key={index}>
              {
                result?.Government?.["Country name"]?.[
                  "conventional short form"
                ].text
              }
            </p>
          );
        })}
    </>
  );
}

const Root = () => {
  return (
    <>
      <div>This is gonna be present in all our App</div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default FetchApi;
