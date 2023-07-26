import CountryCard from "./CountryCard";
import { CountryResponse } from "../types/countryInfoTypes";

interface CardsGridProps {
  countriesInfo: CountryResponse[];
}

function CardsGrid({ countriesInfo }: CardsGridProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100vw",
      }}
    >
      {countriesInfo &&
        countriesInfo.map((country, idx) => {
          return <CountryCard country={country} key={idx} />;
        })}
    </div>
  );
}

export default CardsGrid;
