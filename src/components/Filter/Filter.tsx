import React, { ChangeEvent } from "react";

import { Button, Col, Input, Row, Select } from "antd";

import styles from "./Filter.module.css";
import { useAppDispatch, useAppSelector } from "../../store";
import { countriesActions } from "../../store/countries-slice";

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const nameValue = useAppSelector((state) => state.countries.filter.name);
  const regionValue = useAppSelector((state) => state.countries.filter.region);

  const filterRegion = (value: string) => {
    dispatch(countriesActions.setFilterRegion(value));
  };

  const filterCountries = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(countriesActions.setFilterName(event.target.value));
  };

  const filterClean = () => {
    dispatch(countriesActions.setFilterClean());
  };

  return (
    <div className={styles.filter}>
      <Row gutter={[0, 12]} justify="space-between">
        <Col lg={6} md={24} sm={24} xs={24}>
          <Input
            placeholder="Search for a country..."
            style={{ width: "100%" }}
            size="large"
            value={nameValue}
            onChange={filterCountries}
          />
        </Col>
        <Col lg={12} md={24} sm={24} xs={24}>
          <Row gutter={[2, 10]} justify="end">
            <Col lg={8} md={20} sm={18} xs={24}>
              <Select
                placeholder="Filtered by Region"
                size="large"
                value={regionValue}
                style={{ width: "100%" }}
                onChange={filterRegion}
                options={[
                  { value: "Africa", label: "Africa" },
                  { value: "Americas", label: "America" },
                  { value: "Asia", label: "Asia" },
                  { value: "Europe", label: "Europe" },
                  { value: "Oceania", label: "Oceania" },
                ]}
              />
            </Col>
            <Col lg={4} md={4} sm={6} xs={24}>
              <Button type="primary" size="large" danger onClick={filterClean}>
                Clean Filter
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Filter;
