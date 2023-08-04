import { CountryResponse } from "../types/countryInfoTypes";
import { Card } from "react-bootstrap";

interface CountryCardProps {
  country: CountryResponse;
}

function CountryCard({ country }: CountryCardProps) {
  return (
    <>
      <Card style={{ width: "30vw", margin: "10px" }}>
        <Card.Body>
          <img
            // variant="top"
            src={country.Introduction.Img}
            style={{
              height: "200px",
              border: "black solid 1px",
              width: "300px",
            }}
          />
          <Card.Title>
            <h2>
              {
                country.Government?.["Country name"]?.[
                  "conventional short form"
                ].text
              }
            </h2>
          </Card.Title>
          <Card.Text>
            <span>
              <h5>Nationality</h5>
              {country?.["People and Society"]?.Nationality.adjective.text}
            </span>
            <span>
              <h5>Population</h5>
              {country?.["People and Society"]?.Population.text}{" "}
            </span>
            <span>
              <h5>Location</h5> {country.Geography.Location.text}
            </span>
            <span>
              <h5>Economic overview </h5>
              {country?.Economy["Economic overview"]?.text}
            </span>
            <span>
              <h5>Real GDP Growth Rate</h5>
              <li>
                {
                  country?.Economy["Real GDP growth rate"]?.[
                    "Real GDP growth rate 2019"
                  ]?.text
                }
              </li>{" "}
              <li>
                {
                  country?.Economy["Real GDP growth rate"]?.[
                    "Real GDP growth rate 2020"
                  ]?.text
                }
              </li>{" "}
              <li>
                {
                  country?.Economy["Real GDP growth rate"]?.[
                    "Real GDP growth rate 2021"
                  ]?.text
                }
              </li>
            </span>
            <span>
              <h5>Real GDP per capita</h5>
              {
                country?.Economy["Real GDP per capita"]?.[
                  "Real GDP per capita 2021"
                ]?.text
              }
            </span>
            <span>
              <h5>Industries</h5>
              {country?.Economy.Industries.text}
            </span>
            <span>
              <h5>Export</h5> {country?.Economy.Exports["Exports 2021"]?.text}{" "}
              <h5>Export Commodities</h5>
              {country?.Economy["Exports - commodities"]?.text}{" "}
              <h5>Export Partners</h5>
              {country?.Economy["Exports - partners"]?.text}
            </span>
            <span>
              <h5>Imports</h5> {country?.Economy.Imports["Imports 2021"]?.text}
              <h5>Import Commodities</h5>
              {country?.Economy["Imports - commodities"]?.text}
              <br />
              <h5>Import Partners</h5>{" "}
              {country?.Economy["Imports - partners"]?.text}
            </span>
            <span>
              <h5>Military expenditure</h5>
              <li>
                {
                  country?.["Military and Security"]?.[
                    "Military expenditures"
                  ]?.["Military Expenditures 2018"]?.text
                }
              </li>
              <li>
                {
                  country?.["Military and Security"]?.[
                    "Military expenditures"
                  ]?.["Military Expenditures 2019"]?.text
                }
              </li>
              <li>
                {
                  country?.["Military and Security"]?.[
                    "Military expenditures"
                  ]?.["Military Expenditures 2020"]?.text
                }
              </li>
              <li>
                {
                  country?.["Military and Security"]?.[
                    "Military expenditures"
                  ]?.["Military Expenditures 2021"]?.text
                }
              </li>
              <li>
                {
                  country?.["Military and Security"]?.[
                    "Military expenditures"
                  ]?.["Military Expenditures 2022"]?.text
                }
              </li>
            </span>
            <span>
              <h5>Military inventories and acqusition</h5>
              {
                country?.["Military and Security"]?.[
                  "Military equipment inventories and acquisitions"
                ]?.text
              }
            </span>
            <span>
              <h5>Transnational disputes</h5>
              {
                country?.["Transnational Issues"]?.["Disputes - international"]
                  ?.text
              }
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CountryCard;
