import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const arrayReponse = urlsArray.map(async (url) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
      } catch (error) {
        console.error("Failed to fetch data", error);
        return null;
      }
    });
    const allResults = Promise.all(arrayReponse).then((results) => {
      console.log("THIS BE THE RESULTS ", results);
      setcountryInfo(results);
      return results;
    });
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default FetchApi;
