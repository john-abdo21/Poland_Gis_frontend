import React, { useState } from 'react';
import { Table, Button, Checkbox } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

const JsonTable = ({ jsonData }) => {
  const [bookmarkedRows, setBookmarkedRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const handleBookmarkToggle = (record) => {
    const isBookmarked = bookmarkedRows.includes(record.key);
    if (isBookmarked) {
      setBookmarkedRows(bookmarkedRows.filter((key) => key !== record.key));
    } else {
      setBookmarkedRows([...bookmarkedRows, record.key]);
    }
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    const allKeys = jsonData.map((item, index) => String(index + 1));
    setSelectedRows(isChecked ? allKeys : []);
  };

  const handleRowSelection = (selectedRowKeys) => {
    setSelectedRows(selectedRowKeys);
  };

  // Convert the JSON data to Ant Design table format
  const dataSource = jsonData.map((item, index) => ({ ...item, key: index + 1 }));

  // Get the column names from the first item in the JSON data
  const columns = [
    {
        title: () => (
            <Checkbox
              checked={selectedRows.length === dataSource.length}
              indeterminate={selectedRows.length > 0 && selectedRows.length < dataSource.length}
              onChange={handleSelectAll}
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

  // Calculate the total count of bookmarks
  const totalBookmarks = bookmarkedRows.length;

  // Add the summary row to the bottom of the table
  const summaryRow = {
    key: 'summary',
    '#': 'Total Bookmarks:',
    [Object.keys(jsonData[0])[0]]: totalBookmarks,
  };

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      scroll={{ x: 'max-content' }}
      pagination={{ pageSize: 5 }} // Set the page size to 10 items per page
      footer={() => `Total Bookmarks: ${totalBookmarks}`}
       rowSelection={{
        selectedRowKeys: selectedRows,
        onChange: handleRowSelection,
      }}
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