import React from "react";
import MapView from "../features/mapView/MapView";
import GeoFilter from '../features/filter/Filter';
import CustomQueryBuilder from '../features/filter/CustomQueryBuilder';
import MyBuilder from '../features/filter/Filter_Complex';
import MyQueryBuilder from '../features/filter/QueryBuilder';

import { Col, Row } from "antd";
const Home = () => {
  console.log('home')
  return (
    <Row style={{ height: "100%" }}>
      <Col xs={8}>
        {/* <MyQueryBuilder /> */}
        <GeoFilter />
      </Col>
      <Col xs={16}>
        <MapView />
      </Col>
    </Row>
  );
};

export default Home;
