import React, { useState, useEffect } from "react";

const Exercise3 = () => {
  const [locations, setLocations] = useState([]);
  const [headers, setHeaders] = useState([]);

  const fetchData = async () => {
    const apiCall = await (
      await fetch("https://randomuser.me/api/?results=20")
    ).json();

    const usersLocations = await apiCall.results.map(
      (user, indx) => user.location
    );

    const getHeaders = (location) => {
      if (location === undefined) return;
      return Object.keys(location[0]);
    };
    setLocations(usersLocations);
    setHeaders(getHeaders(usersLocations));
  };

  useEffect(async () => {
    await fetchData();
  }, []);

  const displayHeader = (headers) => {
    return headers.map((header) => <th key={header}>{header}</th>);
  };

  const renderCell = (location, header) => {
    if (typeof location[header] === "object") {
      const subHeads = Object.keys(location[header]);
      const tableSubdata = subHeads.map((subHead) => location[header][subHead]);
      return <td key={tableSubdata}>{tableSubdata}</td>;
    }

    return <td key={header}>{location[header]}</td>;
  };

  const TableBody = (locations, headers) => {
    if (locations === undefined) return;
    return (
      <tbody>
        {locations.map((location, indx) => (
          <tr key={indx}>
            {headers.map((header) => renderCell(location, header))}
          </tr>
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
        {TableBody(locations, headers)}
      </table>
    </div>
  );
};

export default Exercise3;
