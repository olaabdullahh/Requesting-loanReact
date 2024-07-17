import { useState } from "react";
import Modal from "./Modal";
export default function FormInput() {
    let [errorMes , setErrorMes] = useState(null)
  let [showModal, setShowModal] = useState(false);
  let [formInputs, setFormInput] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    isEmployee: false,
    salary: "",
  });
  let isCompleted =
    formInputs.name === "" ||
    formInputs.age === "" ||
    formInputs.phoneNumber === "";
  function handelOnclickBtn(e) {
    e.preventDefault();
    setErrorMes(null);
    const {age, phoneNumber} = formInputs
    if(age > 100 || age <18){
        setErrorMes("The age is not allowed")
    }else if(phoneNumber.length < 10 || phoneNumber.length >12){
        setErrorMes("Phone Number format Is incorrect ")
    }
    setShowModal(true);
  }
  function handelDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  return (
    <>
      <div
        onClick={handelDivClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "gray",
            width: "500px",
            borderRadius: "10px",
            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <h1>Requesting a Loan</h1>
          <hr style={{ width: "100%" }} />
          <label>Name</label>
          <input
            type="text"
            value={formInputs.name}
            onChange={(e) => {
              setFormInput({ ...formInputs, name: e.target.value });
            }}
          />
          <br />
          <label>Phone Number</label>
          <input
            type="number"
            value={formInputs.phoneNumber}
            onChange={(e) => {
              setFormInput({ ...formInputs, phoneNumber: e.target.value });
            }}
          />
          <br />
          <label>Age</label>
          <input
            type="number"
            value={formInputs.age}
            onChange={(e) => {
              setFormInput({ ...formInputs, age: e.target.value });
            }}
          />
          <br />
          <label>Are you an employee</label>
          <input
            type="checkbox"
            checked={formInputs.isEmployee}
            onChange={(e) => {
              setFormInput({ ...formInputs, isEmployee: e.target.checked });
            }}
          />
          <br />
          <label>Salary</label>
          <select
            value={formInputs.salary}
            onChange={(e) => {
              setFormInput({ ...formInputs, salary: e.target.value });
            }}
          >
            <option></option>
            <option>between 5000 to 10000</option>
            <option>between 10000 to 15000</option>
            <option>between 15000 to 20000</option>
          </select>
          <br />
          <button
            disabled={isCompleted}
            style={{
              backgroundColor: "pink",
              width: "70px",
              height: "40px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
            onClick={handelOnclickBtn}
          >
            Submit
          </button>
        </form>
        <Modal errorMessage={errorMes} isVisible={showModal} />
      </div>
    </>
  );
}
