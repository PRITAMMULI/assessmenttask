import React, { useContext, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router";
import PhoneIcon from "@mui/icons-material/Phone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";import Projectcontext from '../context/Projectcontext';

function Updateuser() {
    const context = useContext(Projectcontext);
    const { update_user, discard_changes } = context;
  
    const [credentials, setCredentials] = useState({
      username: localStorage.getItem("username"),
      phonenumber: localStorage.getItem("phonenumber"),
    });
  
    const { username, phonenumber } = credentials;
  
    const onChange = (e) => {
       setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
  return (
    <>
    <div class="card mt-5">
      <div class="card-body addnewuser">
        <div className="row">
          <div className="col-lg-6">
            <h3>
              <ArrowBackIosIcon
                onClick={() => {
                  navigate("/");
                }}
                className="go_to_user_list"
              />{" "}
              Update darrell Steward
            </h3>
          </div>
        </div>
      </div>
    </div>

    <form id="form">
      <div class="mb-3">
        <PermIdentityIcon className="icon" />{" "}
        <input
          type="text"
          id="username"
          value={username}
          name="username"
          onChange={onChange}
          placeholder="User Name"
          aria-describedby="emailHelp"
        />{" "}
        <hr />
      </div>
      <div class="mb-3">
        <PhoneIcon className="icon" />{" "}
        <input
          type="text"
          id="phonenumber"
          onChange={onChange}
          value={phonenumber}
          name="phonenumber"
          placeholder="Phone Number"
          aria-describedby="emailHelp"
        />{" "}
        <hr />
      </div>
    </form>
    <div className="button">
      <button
        type="submit"
        class="btn btn-outline-secondary mt-3 discard_changes"
        onClick={(e) => {
          discard_changes();
        }}
      >
        Discard Changes
      </button>

      <button
        type="submit"
        class="btn btn-primary mt-3"
        onClick={(e) => {
          e.preventDefault();
          update_user(
            localStorage.getItem("docId"),
            credentials.username,
            credentials.phonenumber
          );
        }}
      >
        Submit
      </button>
    </div>
  </>
  )
}

export default Updateuser
