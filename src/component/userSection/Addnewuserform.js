import React, { useContext, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router";
import PhoneIcon from "@mui/icons-material/Phone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Projectcontext from "../context/Projectcontext";
import "../global.css"

function Addnewuserform() {

    const context = useContext(Projectcontext);
  const { UserCollection, errors, setErrors, onSubmituser } = context;
  const [credentials, setCredentials] = useState({
    username: "",
    phonenumber: "",
  });

  const { username, phonenumber } = credentials;

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (e.target.name === "phonenumber") {
      setErrors({
        ...errors,
        [e.target.name]:
          e.target.value.trim() === "" || e.target.value.length !== 10,
      });
    } else {
      setErrors({ ...errors, [e.target.name]: e.target.value.trim() === "" });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      username: username.trim() === "",
      phonenumber: phonenumber.trim() === "" || phonenumber.length !== 10,
    };
    setErrors(newErrors);

    if (!newErrors.username && !newErrors.phonenumber) {
      onSubmituser(credentials.username, credentials.phonenumber);
    }
  };

  return (
    <>
    <div className="card mt-5">
      <div className="card-body addnewuser">
        <div className="row">
          <div className="col-lg-6">
            <h3>
              <ArrowBackIosIcon
                onClick={() => {
                  navigate("/");
                }}
                className="go_to_user_list"
              />{" "}
              Add new user{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <form id="form" onSubmit={handleSubmit}>
      {/* <div id="form">

      </div> */}
      <div
        className={`input-group form_input ${
          errors.username ? "has-error" : ""
        }`}
      >
        <PermIdentityIcon className="icon" />{" "}
        <input
          type="text"
          id="username"
          name="username"
          placeholder="User Name"
          onChange={onChange}
          value={username}
          aria-describedby="emailHelp"
        />{" "}
      </div>
      {errors.username && (
        <small className="text-danger">Username is required</small>
      )}
      <hr />

      <div
        className={`input-group form_input ${
          errors.phonenumber ? "has-error" : ""
        }`}
      >
        <PhoneIcon className="icon" />{" "}
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          onChange={onChange}
          value={phonenumber}
          placeholder="Phone Number"
          aria-describedby="emailHelp"
        />{" "}
      </div>
      {errors.phonenumber && (
        <small className="text-danger">
          Phone number is required and must be 10 digits
        </small>
      )}

      <hr />
      <div className="button">

      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
      </div>
    </form>
  </>
  )
}

export default Addnewuserform
