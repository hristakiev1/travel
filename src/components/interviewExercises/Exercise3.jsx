import React, { useState, useEffect } from "react";

const Exercise3 = () => {
  const [locations, setLocations] = useState([]);
  const [headers, setHeaders] = useState([]);

  const loopNestedObj = (obj, head) => {
    let mutateObject = [];

    for (const [key, value] of Object.entries(obj)) {
      if (typeof value !== "object" && value !== null) {
        mutateObject.push(head ? key : value);
      } else {
        mutateObject = [...mutateObject, ...loopNestedObj(value, head)];
      }
    }
    return mutateObject;
  };

  const fetchData = async () => {
    const apiCall = await (
      await fetch("https://randomuser.me/api/?results=20")
    ).json();

    const usersLocations = await apiCall.results.map((user) => user.location);

    const getHeaders = (location) => {
      if (location === undefined) return;
      const obj = location[0];
      let headersArray = loopNestedObj(obj, "head");
      return headersArray;
    };

    const columnHeaders = getHeaders(usersLocations);
    setHeaders(columnHeaders);
    setLocations(usersLocations);
  };

  useEffect(async () => {
    await fetchData();
  }, []);

  const displayHeader = (headers) => {
    return headers.map((header) => <th key={header}>{header}</th>);
  };

  const renderCell = (location) => {
    const tableDatas = loopNestedObj(location);
    const tableSubdata = tableDatas.map((tableData) => (
      <td key={Math.random().toString(36).substr(2, 9)}>{tableData}</td>
    ));
    return tableSubdata;
  };

  const TableBody = (locations) => {
    return (
      <tbody>
        {locations.map((location, indx) => (
          <tr key={indx}>{renderCell(location)}</tr>
        ))}
      </tbody>
    );
  };

  return (
    <div>
      <h1>Exercise 3</h1>

      <table>
        <thead>
          <tr>{displayHeader(headers)}</tr>
        </thead>
        {TableBody(locations)}
      </table>
    </div>
  );
};

export default Exercise3;
