import React, { useState } from "react";

function App() {
  const [fullName, getFullName] = useState({ fName: "", lName: "" }); //use state er moddhe duita obj nisi
  //const [lastName, getlastName] = useState(""); //eta ekta newom silo
  function afteronInput(event) {
    //const{value:sadman, name:jkonoName}= event.target;  ei line ta rakhsi j destructuting er somou eivabe ami value r name er nam change korte pari issa moto
    const { value, name } = event.target; // destructuring kore event r target er value nisi. issa korle nicher dui line er moto koreo nea jeto

    //const getValue = event.target.value;
    //const getName = event.target.name;

    getFullName((previousValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lname: previousValue.lname
        };
      } else if (name === "lName") {
        return {
          fName: previousValue.fName,
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
        <input onInput={afteronInput} name="fName" placeholder="First Name" />
        <input onInput={afteronInput} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
