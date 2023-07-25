import { useEffect, useState } from "react";
import { CountryResponse } from "../types/countryInfoTypes";

const Main = () => {
  const [countriesInfo, setcountriesInfo] = useState<CountryResponse[]>([]);
  const urlsArray = [
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ja.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/kn.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ks.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/tw.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/ch.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/cb.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/bx.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/vm.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/rp.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/id.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/sn.json",
    "https://raw.githubusercontent.com/factbook/factbook.json/master/east-n-southeast-asia/my.json",
  ];

  const fetchAllUrls = async () => {
    try {
      const responses = await Promise.all(urlsArray.map((url) => fetch(url)));
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
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1>Countries</h1>
          {countriesInfo &&
            countriesInfo.map((country, index) => {
              return (
                <div
                  className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                  key={index}
                >
                  <h2>
                    {
                      country.Government?.["Country name"]?.[
                        "conventional short form"
                      ].text
                    }
                  </h2>
                  <div className="card-img-top text-center">
                    {" "}
                    //*FLAG IMAGE GOES HERE
                    <img src={""} alt={""} className="photo w-75" />
                  </div>
                  <div className="card-body">
                    Nationality -{" "}
                    {
                      country?.["People and Society"]?.Nationality.adjective
                        .text
                    }
                    <p>
                      Population -{" "}
                      {country?.["People and Society"]?.Population.text}{" "}
                    </p>
                    <p>Location - {country.Geography.Location.text}</p>
                    <p>
                      Economic overview -{" "}
                      {country?.Economy["Economic overview"]?.text}
                    </p>
                    <p>
                      Real GDP Growth Rate -
                      {
                        country?.Economy["Real GDP growth rate"]?.[
                          "Real GDP growth rate 2019"
                        ]?.text
                      }
                      {
                        country?.Economy["Real GDP growth rate"]?.[
                          "Real GDP growth rate 2020"
                        ]?.text
                      }
                      {
                        country?.Economy["Real GDP growth rate"]?.[
                          "Real GDP growth rate 2021"
                        ]?.text
                      }
                    </p>
                    <p>
                      Real GDP per capita -
                      {
                        country?.Economy["Real GDP per capita"]?.[
                          "Real GDP per capita 2021"
                        ]?.text
                      }
                    </p>
                    <p>Industries - {country?.Economy.Industries.text}</p>
                    <p>
                      Export - {country?.Economy.Exports["Exports 2021"]?.text}
                      <br />
                      Export Commodities -{" "}
                      {country?.Economy["Exports - commodities"]?.text}
                      <br />
                      Export Partners -{" "}
                      {country?.Economy["Exports - partners"]?.text}
                    </p>
                    <p>
                      Imports - {country?.Economy.Imports["Imports 2021"]?.text}
                      <br />
                      Import Commodities -{" "}
                      {country?.Economy["Imports - commodities"]?.text}
                      <br />
                      Import Partners -{" "}
                      {country?.Economy["Imports - partners"]?.text}
                    </p>
                    <p>
                      Military expenditure -{" "}
                      {
                        country?.["Military and Security"]?.[
                          "Military expenditures"
                        ]?.["Military Expenditures 2018"]?.text
                      }
                      {
                        country?.["Military and Security"]?.[
                          "Military expenditures"
                        ]?.["Military Expenditures 2019"]?.text
                      }
                      {
                        country?.["Military and Security"]?.[
                          "Military expenditures"
                        ]?.["Military Expenditures 2020"]?.text
                      }
                      {
                        country?.["Military and Security"]?.[
                          "Military expenditures"
                        ]?.["Military Expenditures 2021"]?.text
                      }
                      {
                        country?.["Military and Security"]?.[
                          "Military expenditures"
                        ]?.["Military Expenditures 2022"]?.text
                      }
                    </p>
                    <p>
                      Military inventories and acqusition -{" "}
                      {
                        country?.["Military and Security"]?.[
                          "Military equipment inventories and acquisitions"
                        ]?.text
                      }
                    </p>
                    <p>
                      Transnational disputes -{" "}
                      {
                        country?.["Transnational Issues"]?.[
                          "Disputes - international"
                        ]?.text
                      }
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Main;
