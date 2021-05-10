import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function bothInputHandler(event) {
    // Even this works
    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    // This event is a Synthetic one not real so never use it in the below callback function
    setFullName((prevValue) => {
      if (name == "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name == "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={bothInputHandler}
          name="fName"
          value={fullName.fName}
          placeholder="First Name"
        />
        <input
          onChange={bothInputHandler}
          name="lName"
          value={fullName.lName}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
