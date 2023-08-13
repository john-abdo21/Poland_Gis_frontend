import React, { useState, useEffect } from 'react';
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
        setBookmarkedRows([]);
    } else {
        setBookmarkedAll(true);
        setBookmarkedRows(dataSource.map(row => row.key));
    }

  };

  useEffect(() => {
    saveBookmarkedRowsToDatabase();
  }, [bookmarkedRows]);

  const saveBookmarkedRowsToDatabase = () => {
    // Perform your API call to save the bookmarkedRows to the database
    // using your backend framework (e.g., Django)

    // Example code for making a POST request using fetch
    
  };
  // Convert the JSON data to Ant Design table format
  const dataSource = jsonData.map((item, index) => ({ ...item, key: String(index + 1) }));

  // Get the column names from the first item in the JSON data
  const columns = [
    {
      title: ()=>(
        <Button
        icon={bookmarkedAll? <StarFilled /> : <StarOutlined />}
        onClick={() => handleBookmarkToggleAll()}
      />    
      ),
      dataIndex: 'key',
      key: 'key',
      fixed: 'left',
      width: 50,
      render: (_, record) => (
        <Button
          icon={bookmarkedAll || bookmarkedRows.includes(record.key) ? <StarFilled /> : <StarOutlined />}
          onClick={(e) => {
            // e.preventDefault();            
            handleBookmarkToggle(record)}
        }
        />
      ),
    },
    ...Object.keys(jsonData[0]).map((key) => ({
      title: key,
      dataIndex: key,
      key: key,
    })),
  ];

  const handleRowClick = (record) => {

    // Perform your desired action when a row is clicked
    console.log('Row clicked:', record);
  };

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      scroll={{ x: 'max-content' }}
      pagination={{ pageSize: 10 }} // Set the page size to 10 items per page
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
      })}
    />
  );
};

export default JsonTable;


