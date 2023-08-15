import React from "react";
import AllDataMapView from "../features/mapView/AllDataMapView";
import AllDataReq from '../features/filter/AllDataReq';

import { Col, Row } from "antd";
const Datas = () => {
  console.log('alldatas')
  return (
    <Row style={{ height: "100%" }}>
      <Col xs={8}>
        <AllDataReq />
      </Col>
      <Col xs={16}>
        <AllDataMapView />
      </Col>
    </Row>
  );
};
export default Datas;
