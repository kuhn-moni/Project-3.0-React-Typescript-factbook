import { ChangeEvent, useEffect, useState } from "react";
import { CountryResponse, FlagsJSON } from "../types/countryInfoTypes";
import CardsGrid from "../components/CardsGrid";
import { Container, Row } from "react-bootstrap";
import flagImgData from "../json/flagImgData.json";

const Main = () => {
  const [countriesInfo, setcountriesInfo] = useState<CountryResponse[]>([]);
  const { flags } = flagImgData as FlagsJSON;

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
      const results = await Promise.all(responses.map((res) => res.json()));

      console.log("results :>> ", countriesInfo);
      getImagesForFlags(results as CountryResponse[]);
      // getImagesForFlags(countriesInfo);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  /* 
  - Loop over all the countries response, then inside THAT loop, loop over the FlagImgJSON Data for the flag location. 
  - Find the name that matches the same name in the FlagImgJSON
  - If they match, replace the optional img property in Introduction with the Img Property in our FlagImgJSON Data
  */
  const getImagesForFlags = (countriesInfo: CountryResponse[]) => {
    countriesInfo.forEach((countryAPI) => {
      flags.forEach((flagJSON) => {
        if (
          countryAPI.Government["Country name"]?.["conventional short form"]
            ?.text === flagJSON.name
        ) {
          return (countryAPI.Introduction.Img = flagJSON.img);
        }
      });
    });
    setcountriesInfo(countriesInfo);
  };

  const [searchText, setsearchText] = useState("");

  const filteredCountries = countriesInfo.filter((country) => {
    return country.Government["Country name"]?.["conventional short form"]?.text
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  // console.log("filteredCountries :>> ", filteredCountries);

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
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1>Countries</h1>
          <input
            style={{ padding: "10px" }}
            type="text"
            onChange={handleInputChange}
            placeholder="Search here"
          />
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
