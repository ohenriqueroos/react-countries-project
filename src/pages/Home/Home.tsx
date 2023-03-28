import React from "react";
import { Outlet } from "react-router-dom";

import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Home;
