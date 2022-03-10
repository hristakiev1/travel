import React, { useState, useEffect } from "react";

const Exercise2 = () => {
  //   const [string, setString] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [users, setUsers] = useState([]);

  const displayUser = (userInfo) => {
    console.log(userInfo);
    const {
      name: { first, last },
      picture: { medium, large },
    } = userInfo;
    return (
      <div>
        <img src={large} alt="pic" />
        <h1>
          {first} {last}
        </h1>

        <h1>{userInfo.gender}</h1>
        {/* <p>{name.last}</p> */}
      </div>
    );
  };

  const handleAddUser = async () => {
    const database = await fetch("https://randomuser.me/api");
    const data = await database.json();
    // const stringData = JSON.stringify(data, null, 2);
    // const nextPageNumber = await data.info.page;

    const userArray = [...users, ...data.results];
    //   const users = await JSON.parse(data);

    // setString(stringData);

    setUsers(userArray);
    // setNextPage(nextPageNumber);
  };

  useEffect(() => {
    handleAddUser();
  }, [nextPage]);

  return (
    <div>
      <h1>Exercise 2</h1>

      {/* <pre>{string.toString()}</pre> */}
      <button onClick={() => handleAddUser()}>Add User</button>

      <div>
        {users.map((userInfo, indx) => (
          <div key={indx}>{displayUser(userInfo)}</div>
        ))}
      </div>
    </div>
  );
};

export default Exercise2;
