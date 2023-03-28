import { Card, Col } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Country.module.css";

interface ICountry {
  name: string;
  population: string;
  region: string;
  capital: string;
  flag: string;
}

const Country: React.FC<ICountry> = ({
  name,
  capital,
  flag,
  population,
  region,
}) => {
  const navigate = useNavigate();

  const onDetailPage = () => {
    navigate(`country/${name}`);
  };

  return (
    <Col lg={6} md={12} sm={24} className={styles.container}>
      <Card
        hoverable
        onClick={onDetailPage}
        style={{ width: "100%", height: "22rem" }}
        cover={
          <img
            alt="example"
            src={flag}
            height="200px"
            style={{ objectFit: "cover" }}
          />
        }
      >
        <h5>{name}</h5>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </Card>
    </Col>
  );
};

export default Country;
