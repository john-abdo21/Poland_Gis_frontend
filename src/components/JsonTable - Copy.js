import React, { useState } from 'react';
import { Table, Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

const JsonTable = ({ jsonData }) => {
  const [bookmarkedRows, setBookmarkedRows] = useState([]);
  const [bookmarkedAll, setBookmarkedAll] = useState(false);

  const handleBookmarkToggle = (record) => {
    const isBookmarked = bookmarkedRows.includes(record.key);
    if (isBookmarked) {
      setBookmarkedRows(bookmarkedRows.filter((key) => key !== record.key));
    } else {
      setBookmarkedRows([...bookmarkedRows, record.key]);
    }
  };  

  const handleBookmarkToggleAll = () =>{
    if (bookmarkedAll){
        setBookmarkedAll(false);
    } else {
        setBookmarkedAll(true);
    }
  };

  // Convert the JSON data to Ant Design table format
  const dataSource = jsonData.map((item, index) => ({ ...item, key: String(index + 1) }));

  // Get the column names from the first item in the JSON data
  const columns = [
    {
      title: ()=>(
        <Button
        icon={bookmarkedAll ?<StarFilled /> : <StarOutlined />}
        onClick={() => handleBookmarkToggleAll()}
      />
      ),
      dataIndex: 'key',
      key: 'key',
      fixed: 'left',
      width: 50,
      render: (_, record) => (
        <Button
          icon={bookmarkedRows.includes(record.key) ? <StarFilled /> : <StarOutlined />}
          onClick={() => handleBookmarkToggle(record)}
        />
      ),
    },
    ...Object.keys(jsonData[0]).map((key) => ({
      title: key,
      dataIndex: key,
      key: key,
    })),
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      scroll={{ x: 'max-content' }}
      pagination={{ pageSize: 10 }} // Set the page size to 10 items per page
    />
  );
};

export default JsonTable;



// import React from 'react';
// import { Table } from 'antd';

// const JsonTable = ({ jsonData }) => {
//   // Convert the JSON data to Ant Design table format
//   const dataSource = jsonData.map((item, index) => ({ ...item, key: index }));

//   // Get the column names from the first item in the JSON data
//   const columns = Object.keys(jsonData[0]).map((key) => ({
//     title: key,
//     dataIndex: key,
//     key: key,
//   }));

//   return <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 5}}/>;
// };

// export default JsonTable;