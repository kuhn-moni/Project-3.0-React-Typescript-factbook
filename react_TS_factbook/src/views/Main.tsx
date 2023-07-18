import React, { useEffect, useState } from "react";

export interface CountryInfoType {
  Communications: {
    ["Broadband - fixed subscriptions"]: {
      ["subscriptions per 100 inhabitants"]: {
        text: string;
      };
    };
  };
}
type Country = {
  Government: {
    ["Country name"]: {
      ["conventional short form"]: {
        text: string;
      };
    };
  };
};

const Main = () => {
  const [countriesInfo, setcountriesInfo] = useState<CountryInfoType[]>([]);
  const urlsArray = [
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ja.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/kn.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ks.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/tw.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ch.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/cb.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/th.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/vm.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/rp.json",
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
      console.log("results :>> ", results);
      setcountriesInfo(results);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    fetchAllUrls().catch((error) => {
      console.log("error :>> ", error);
    });
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      {countriesInfo &&
        countriesInfo.map((result, index) => {
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
    </div>
  );
};

export default Main;
