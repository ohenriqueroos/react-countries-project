import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useAppSelector } from "../../../store";

import { Col, Row, Image, Button } from "antd";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./CountryDetail.module.css";

const CountryDetail: React.FC = () => {
  const navigate = useNavigate();

  const sendBackHandler = () => {
    navigate("/");
  };

  const params = useParams();

  const country = useAppSelector((state) => state.countries.countries).find(
    (country) => country.name === params.name
  );

  console.log("country" + country);

  return (
    <div className={styles.container} key={country?.name}>
      <Row gutter={30} align="bottom">
        <Col span={24}>
          <Button type="primary" size="large" onClick={sendBackHandler}>
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Back to home</span>
          </Button>
        </Col>
        <Col lg={8} md={24} sm={24} xs={24}>
          <div className={styles.flag}>
            <Image src={country?.flag} alt="Country flag" />
          </div>
        </Col>
        <Col lg={16} md={24} sm={24} xs={24}>
          <div className={styles.header}>
            <span>Country name:</span>
            <h2>{country?.name}</h2>
            <Row
              gutter={[0, 10]}
              justify="space-between"
              className={styles["country-infos"]}
            >
              <Col>
                <span>Acronym:</span>
                <p>{country?.alpha3Code}</p>
              </Col>
              <Col>
                <span>Native name:</span>
                <p>{country?.nativeName}</p>
              </Col>
              <Col>
                <span>Region:</span>
                <p>{country?.region}</p>
              </Col>
              <Col>
                <span>Name in portuguese:</span>
                <p>{country?.translations.pt}</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <hr />
      <Row gutter={[0, 10]} className={styles["country-infos"]}>
        <Col md={6} sm={12} xs={12}>
          <span>Nationality:</span>
          <p>{country?.demonym}</p>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <span>Subregion:</span>
          <p>{country?.subregion}</p>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <span>Numeric code:</span>
          <p>{country?.numericCode}</p>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <span>Population:</span>
          <p>{country?.population}</p>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <span>Capital:</span>
          <p>{country?.capital}</p>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <span>Language:</span>
          <p>{country?.languages[0].name}</p>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <span>Currency:</span>
          <p>{country?.currencies[0].name}</p>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <span>Calling code:</span>
          <p>{country?.callingCodes}</p>
        </Col>
      </Row>
    </div>
  );
};

export default CountryDetail;
