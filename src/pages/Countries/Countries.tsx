import React from "react";

import { Row } from "antd";

import Country from "../../components/Country/Country";
import Filter from "../../components/Filter/Filter";
import { useAppSelector } from "../../store";

const Countries: React.FC = () => {
  const countries = useAppSelector((state) => state.countries.filterCountries);

  return (
    <>
      <Filter />
      <Row gutter={50}>
        {countries.map((country) => (
          <Country
            key={country.name}
            flag={country.flag}
            name={country.name}
            population={country.population}
            capital={country.capital}
            region={country.region}
          />
        ))}
      </Row>
    </>
  );
};

export default Countries;
