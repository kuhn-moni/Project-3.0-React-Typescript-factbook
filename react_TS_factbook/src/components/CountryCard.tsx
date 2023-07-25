import { CountryResponse } from "../types/countryInfoTypes";
import { Card } from "react-bootstrap";

interface CountryCardProps {
  country: CountryResponse;
}

function CountryCard({ country }: CountryCardProps) {
  //   const [show, setshow] = useState(false);

  //   const handleClose = () => setshow(false);
  //   const handleShow = () => setshow(true);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {
              country.Government?.["Country name"]?.["conventional short form"]
                .text
            }
          </Card.Title>
          <Card.Text>
            <p>
              Nationality -{" "}
              {country?.["People and Society"]?.Nationality.adjective.text}
            </p>
            <p>
              Population - {country?.["People and Society"]?.Population.text}{" "}
            </p>
            <p>Location - {country.Geography.Location.text}</p>
            <p>
              Economic overview - {country?.Economy["Economic overview"]?.text}
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
              Export - {country?.Economy.Exports["Exports 2021"]?.text} Export
              Commodities -{country?.Economy["Exports - commodities"]?.text}{" "}
              Export Partners - {country?.Economy["Exports - partners"]?.text}
            </p>
            <p>
              Imports - {country?.Economy.Imports["Imports 2021"]?.text}
              <br />
              Import Commodities -
              {country?.Economy["Imports - commodities"]?.text}
              <br />
              Import Partners - {country?.Economy["Imports - partners"]?.text}
            </p>
            <p>
              Military expenditure -{" "}
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
            </p>
            <p>
              Military inventories and acqusition -
              {
                country?.["Military and Security"]?.[
                  "Military equipment inventories and acquisitions"
                ]?.text
              }
            </p>
            <p>
              Transnational disputes -
              {
                country?.["Transnational Issues"]?.["Disputes - international"]
                  ?.text
              }
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CountryCard;
