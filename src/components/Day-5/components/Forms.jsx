import React, { useState } from "react";

const Forms = () => {
  const initialData = {
    name: "",
    email: "",
    country: "India",
    marital_status: ""
  };
  const [formsData, setformsData] = useState(initialData);

  const handleOnChange = (e) => {
    const { value, name, type, checked } = e.target;

    const updateValue = type === "checkbox" ? checked : value;

    setformsData({
      ...formsData,
      [name]: updateValue
    });
  };
  return (
    <div>
      <h1>Forms</h1>
      <form>
        <input
          name="name"
          type="text"
          placeholder="Enter name"
          onChange={handleOnChange}
        />
        <br />
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={handleOnChange}
        />
        {/* select  */}
        <br />
        <select
          name="country"
          defaultValue={formsData.country}
          value={formsData.country}
          onChange={handleOnChange}
        >
          <option value="USA">USA</option>
          <option value="India">India</option>
        </select>
        <br />
        {/* checkbox */}
        <input
          name="marital_status"
          type="checkbox"
          placeholder="marital status"
          onChange={handleOnChange}
        />
        <label>Marital Status</label>

        <h5>Name : {formsData.name}</h5>
        <h5>Email : {formsData.email}</h5>
        <h5>Country :{formsData.country}</h5>
        {formsData.marital_status ? <h5> Married </h5> : <h5>Not Married</h5>}
      </form>
    </div>
  );
};

export default Forms;
