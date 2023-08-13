import { useState } from 'react';
import { Form, Select, Input, Button, Tag, Space, Collapse } from 'antd';

const { Option } = Select;
const { Panel } = Collapse;

function MyBuilder() {
  const [queryFields, setQueryFields] = useState([]);
  const [queries, setQueries] = useState([]);

  const handleAddQuery = () => {
    setQueryFields([...queryFields, { field: '', operator: '', value: '' }]);
  };

  const handleRemoveQuery = (index) => {
    const updatedFields = [...queryFields];
    updatedFields.splice(index, 1);
    setQueryFields(updatedFields);
  };

  const handleFieldChange = (index, field) => {
    const updatedFields = [...queryFields];
    updatedFields[index].field = field;
    setQueryFields(updatedFields);
  };

  const handleOperatorChange = (index, operator) => {
    const updatedFields = [...queryFields];
    updatedFields[index].operator = operator;
    setQueryFields(updatedFields);
  };

  const handleValueChange = (index, value) => {
    const updatedFields = [...queryFields];
    updatedFields[index].value = value;
    setQueryFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedQueries = queryFields.filter(
      (field) => field.field && field.operator && field.value
    );
    setQueries(submittedQueries);
    // Perform query submission logic here
    console.log('Submitted queries:', submittedQueries);
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Collapse accordion>
        {queryFields.map((query, index) => (
          <Panel header={`Query ${index + 1}`} key={index}>
            <Space align="baseline">
              <Form.Item label="Field">
                <Select
                  placeholder="Select field"
                  onChange={(value) => handleFieldChange(index, value)}
                >
                  <Option value="name">Name</Option>
                  <Option value="age">Age</Option>
                  <Option value="city">City</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Operator">
                <Select
                  placeholder="Select operator"
                  onChange={(value) => handleOperatorChange(index, value)}
                >
                  <Option value="equals">Equals</Option>
                  <Option value="contains">Contains</Option>
                  <Option value="greaterThan">Greater Than</Option>
                  <Option value="lessThan">Less Than</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Value">
                <Input
                  placeholder="Enter value"
                  onChange={(e) => handleValueChange(index, e.target.value)}
                />
              </Form.Item>
              <Button
                type="danger"
                onClick={() => handleRemoveQuery(index)}
              >
                Remove
              </Button>
            </Space>
          </Panel>
        ))}
      </Collapse>
      <Form.Item>
        <Button type="primary" onClick={handleAddQuery}>
          Add Query
        </Button>
        <Button type="primary" htmlType="submit" style={{ marginLeft: 10 }}>
          Submit
        </Button>
      </Form.Item>
      {queries.length > 0 && (
        <Form.Item>
          <Space>
            <Tag color="blue">Queries:</Tag>
            {queries.map((query, index) => (
              <Tag key={index}>{`${query.field} ${query.operator} ${query.value}`}</Tag>
            ))}
          </Space>
        </Form.Item>
      )}
    </Form>
  );
}

export default MyBuilder;
