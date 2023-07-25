import CountryCard from "./CountryCard";
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
