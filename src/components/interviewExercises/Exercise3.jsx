import React, { useState, useEffect } from "react";

const Exercise3 = () => {
  const [locations, setLocations] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState({
    path: "country",
    order: "asc",
  });

  const raiseSort = (path) => {
    if (!path) return;
    let sortedColumn = sortOrder;
    if (sortOrder.path === path && sortOrder.order === "asc") {
      sortedColumn = { path, order: "desc" };
    } else {
      sortedColumn = { path, order: "asc" };
    }
    setSortOrder(sortedColumn);
  };

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
    return headers.map((header) => (
      <th
        key={header}
        style={{ cursor: "pointer" }}
        onClick={() => raiseSort(header)}
      >
        {header}
      </th>
    ));
  };

  const renderCell = (location) => {
    const tableDatas = loopNestedObj(location);
    const tableSubdata = tableDatas.map((tableData) => (
      <td key={Math.random().toString(36).substr(2, 9)}>{tableData}</td>
    ));
    return tableSubdata;
  };

  const TableBody = (locations) => {
    return locations.map((location, indx) => (
      <tr key={indx}>{renderCell(location)}</tr>
    ));
  };

  const sortFunction = (items, sortType) => {
    items.sort((a, b) => {
      const isReversed = sortType.order === "asc" ? 1 : -1;
      const path = sortType.path;
      return isReversed * a[path].localeCompare(b[path]);
    });
  };

  sortFunction(locations, sortOrder);

  const inputHandler = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };
  console.log(searchText);

  const handleSearch = (locations, text) => {};
  return (
    <div>
      <h1>Exercise 3</h1>
      <input
        type="text"
        placeholder="Search here"
        onInput={inputHandler}
      ></input>

      <table>
        <thead>
          <tr>{displayHeader(headers)}</tr>
        </thead>
        <tbody>{TableBody(locations)}</tbody>
      </table>
    </div>
  );
};

export default Exercise3;
