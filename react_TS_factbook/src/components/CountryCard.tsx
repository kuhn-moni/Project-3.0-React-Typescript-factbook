import { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { CountryResponse } from "../types/countryInfoTypes";

interface CountryCardProps {
  country: CountryResponse;
}

function CountryCard({ country }: CountryCardProps) {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Card style={{ width: "30vw", margin: "10px" }}>
        <Card.Body>
          <img
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
            <h5>Nationality</h5>
            {country?.["People and Society"]?.Nationality.adjective.text}
            <h5>Population</h5>
            {country?.["People and Society"]?.Population.text}{" "}
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
              <Button variant="primary" onClick={handleModal}>
                Show Disputes
              </Button>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Transnational Disputes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            country?.["Transnational Issues"]?.["Disputes - international"]
              ?.text
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CountryCard;
