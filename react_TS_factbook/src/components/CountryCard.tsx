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
            {
              country.Government?.["Country name"]?.["conventional short form"]
                .text
            }
          </Card.Title>
          <Card.Text>
            <span>
              Nationality -{" "}
              {country?.["People and Society"]?.Nationality.adjective.text}
            </span>
            <span>
              Population - {country?.["People and Society"]?.Population.text}{" "}
            </span>
            <span>Location - {country.Geography.Location.text}</span>
            <span>
              Economic overview - {country?.Economy["Economic overview"]?.text}
            </span>
            <span>
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
            </span>
            <span>
              Real GDP per capita -
              {
                country?.Economy["Real GDP per capita"]?.[
                  "Real GDP per capita 2021"
                ]?.text
              }
            </span>
            <span>Industries - {country?.Economy.Industries.text}</span>
            <span>
              Export - {country?.Economy.Exports["Exports 2021"]?.text} Export
              Commodities -{country?.Economy["Exports - commodities"]?.text}{" "}
              Export Partners - {country?.Economy["Exports - partners"]?.text}
            </span>
            <span>
              Imports - {country?.Economy.Imports["Imports 2021"]?.text}
              <br />
              Import Commodities -
              {country?.Economy["Imports - commodities"]?.text}
              <br />
              Import Partners - {country?.Economy["Imports - partners"]?.text}
            </span>
            <span>
              Military expenditure -
              {
                country?.["Military and Security"]?.["Military expenditures"]?.[
                  "Military Expenditures 2018"
                ]?.text
              }
              {
                country?.["Military and Security"]?.["Military expenditures"]?.[
                  "Military Expenditures 2019"
                ]?.text
              }
              {
                country?.["Military and Security"]?.["Military expenditures"]?.[
                  "Military Expenditures 2020"
                ]?.text
              }
              {
                country?.["Military and Security"]?.["Military expenditures"]?.[
                  "Military Expenditures 2021"
                ]?.text
              }
              {
                country?.["Military and Security"]?.["Military expenditures"]?.[
                  "Military Expenditures 2022"
                ]?.text
              }
            </span>
            <span>
              Military inventories and acqusition -
              {
                country?.["Military and Security"]?.[
                  "Military equipment inventories and acquisitions"
                ]?.text
              }
            </span>
            <span>
              Transnational disputes -
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
