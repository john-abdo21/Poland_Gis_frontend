import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button, Row, Col, Divider, Spin, Spaces, Select } from "antd";
import '../../app/constants';

import JsonTable from '../../components/JsonTable';

import { fetchFilter } from "./FilterSlice";
import SearchForm from "./SearchForm";
import CustomQueryBuilder from './CustomQueryBuilder';

import "./filter.module.css";
import Feature from "ol/Feature";
import countriesJSON from '../../data/countriesData.json'

const GeoFilter = () => {
  console.log('GeoFilter rendered');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log(e)
    dispatch(fetchFilter(e));
  };

  const searchResult = useSelector((state) => state.filter.searchFilter, []);
  const loading = useSelector((state) => state.filter.loading, []);
  const [tableJson, setTableJson] = useState([{ name: "", feature: "" }]);

  // useEffect(() => {

  //   console.log('countriesJSON', countriesJSON)

  //   if (!searchResult) return;

  //   let jsonData = []
  //   const features = searchResult['features'];
  //   console.log(features)
  //   for (let i = 0; i < features.length; i++) {
  //     let temp = {
  //       name: features[i].name,
  //       feature: JSON.stringify(features[i])
  //     };

  //     jsonData.push(temp);
  //     setTableJson(jsonData)
  //   }

  // }, [searchResult]);


  // const loading = useSelector((state) => state.filter.loading);
  const handleSearch = (query) => {
    // Perform search query processing and get the result
    // const result = performSearch(query);
    // Update the UI with the search result
    // You can replace this console.log with your desired logic
    //console.log(result);
  };
  return (
    <div className={`overlay ${loading ? 'visible' : ''}`} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="content" disabled={loading}>
        <Form layout="vertical" onFinish={handleSubmit}>
          {/* <Row gutter={[6]} style={{margin: '10px 0px'}}>
        <Col xs={7}>
          <Form.Item label="Country Name" name="country" rules={[{required: true, message: 'Empty!',},]}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={countriesJSON} 
            />
          </Form.Item>
        </Col>
      </Row> */}
          <Divider orientation="left" plain> River </Divider>
          <Row gutter={[6]} style={{ margin: '-10px 0px' }}>
            <Col xs={7}>
              <Form.Item label="Length" name="R_Length" rules={[{ required: true, message: 'Empty!', },]}>
                <Input type='number' placeholder="0.0" suffix={'Km'} />
              </Form.Item>
            </Col>
            <Col xs={7}>
              <Form.Item label="Width" name="R_Width" rules={[{ required: false, message: 'Empty!', },]}>
                <Input type='number' placeholder="0.0" suffix={'m'} />
              </Form.Item>
            </Col>
            <Col xs={7}>
              <Form.Item label="Distance" name="R_Distance" rules={[{ required: false, message: 'Empty!', },]}>
                <Input type='number' placeholder="0.0" suffix={'m'} />
              </Form.Item>
            </Col>
          </Row>
          {/* <Divider style={{ marginTop: 3, marginBottom: 3 }} orientation="left" plain> Lake </Divider>

          <Row gutter={[6]}>
            <Col xs={7}>
              <Form.Item label="Square" name="L_Area" rules={[{ required: true, message: 'Empty!', },]}>
                <Input type='number' placeholder="0.0" suffix={'m^2'} />
              </Form.Item>
            </Col>
            <Col xs={7}>
              <Form.Item label="Distance" name="L_Distance" rules={[{ required: false, message: 'Empty!', },]}>
                <Input type='number' placeholder="0.0" suffix={'m'} />
              </Form.Item>
            </Col>
          </Row> */}
          <Form.Item style={{ marginRight: '15px' }}>
            <Row justify="end">
              <Col>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Divider />
        </Form>

        {loading && <Spin className="spinner" />}
        {/* <div style={{ height: 1 }}>
          <JsonTable jsonData={tableJson}
          />
        </div> */}
      </div>

    </div>
  );
};

export default GeoFilter;
// {/* <MyQueryBuilder /> */}
//       {/* {field && operator && value && (
//         <Form.Item>
//           <Row>
//             <Col>
//               <Tag color="blue">
//                 {field} {operator} {value}
//               </Tag>
//             </Col>
//           </Row>
//         </Form.Item>
//       )} */}