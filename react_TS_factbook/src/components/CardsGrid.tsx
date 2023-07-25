import React from "react";

import CountryCard from "./CountryCard";
import { Col } from "react-bootstrap";
import { CountryResponse } from "../types/countryInfoTypes";

interface CardsGridProps {
  countriesInfo: CountryResponse[];
}

function CardsGrid({ countriesInfo }: CardsGridProps) {
  return (
    <>
      {countriesInfo &&
        countriesInfo.map((country, idx) => {
          return <CountryCard country={country} key={idx} />;
        })}
    </>
  );
}

export default CardsGrid;
