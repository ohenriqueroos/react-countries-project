import React from "react";

import { Col, Row, Switch } from "antd";

import styles from "./Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { themesActions } from "../../store/themes-slice";
import { useAppDispatch } from "../../store";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const onChangeHandler = () => {
    dispatch(themesActions.setThemes());
  };

  return (
    <div className={styles.header}>
      <Row align="middle">
        <Col span={12}>
          <h1>Where in the world?</h1>
        </Col>
        <Col span={12}>
          <Row gutter={10} justify="end" align="middle">
            <Col>
              <FontAwesomeIcon icon={faSun} size={"xl"} />
            </Col>
            <Col>
              <Switch onChange={onChangeHandler} />
            </Col>
            <Col>
              <FontAwesomeIcon icon={faMoon} size={"xl"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
function dispatch() {
  throw new Error("Function not implemented.");
}
