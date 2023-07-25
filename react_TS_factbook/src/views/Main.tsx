import { ChangeEvent, useEffect, useState } from "react";
import { CountryResponse } from "../types/countryInfoTypes";
import CardsGrid from "../components/CardsGrid";
import { Container, Row } from "react-bootstrap";

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

  const [searchText, setsearchText] = useState("");

  const filteredCountries = countriesInfo.filter((country) => {
    return country.Government["Country name"]?.["conventional short form"]?.text
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  console.log("filteredCountries :>> ", filteredCountries);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setsearchText(e.target.value);
  };

  useEffect(() => {
    fetchAllUrls().catch((error) => {
      console.log("error :>> ", error);
    });
  }, []);

  return (
    <>
      <input type="text" onChange={handleInputChange} />

      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1>Countries</h1>
          <Container>
            <Row xs={1} sm={2} md={2} lg={4}>
              <CardsGrid countriesInfo={filteredCountries} />
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Main;
