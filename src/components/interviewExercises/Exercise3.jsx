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
      return Object.keys(location).map((thead) => thead);
    };
    setLocations(usersLocations);
    setHeaders(getHeaders(usersLocations));
  };

  useEffect(async () => {
    await fetchData();
  }, []);

  const displayHeader = (location) => {
    if (location === undefined) return;
    const theads = Object.keys(location).map((thead, indx) => {
      if (typeof location[thead] === "object")
        // return console.log(Object.keys(location[thead]));
        // return location[thead].map((headTitle, indx) => console.log(headTitle));

        return <th key={indx}>{thead}</th>;
    });

    return theads;
  };

  const renderCell = (location) => {
    const tdata = Object.keys(location);

    return tdata.map((data, indx) => {
      if (typeof location[data] === "object") return;
      return <td key={indx}>{location[data]}</td>;
    });
  };

  const displayBody = (data) => {
    if (data === undefined) return;
    return data.map((location, indx) => (
      <tr key={indx}>{renderCell(location)}</tr>
    ));
  };

  console.log(headers);
  return (
    <div>
      <h1>Exercise 3</h1>

      <table>
        <thead>
          <tr>{displayHeader(locations[0])}</tr>
        </thead>
        <tbody>{displayBody(locations)}</tbody>
      </table>
    </div>
  );
};

export default Exercise3;
