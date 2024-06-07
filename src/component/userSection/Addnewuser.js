import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Projectcontext from '../context/Projectcontext';
function Addnewuser() {
    
    const context = useContext(Projectcontext);
    const { getNewUser, newuser, Cancel_new_user_handler } = context;
    const navigate = useNavigate();
  
    useEffect(() => {
      getNewUser();
    }, []);
  return (
    <>
    <div class="card mt-5">
      <div class="card-body addnewuser">
        <div className="row">
          <div className="col-lg-6">
            <h2> Add new user </h2>
          </div>

          <div className="col-lg-6 addnewuser_btn">
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/addnewuserForm");
              }}
            >
              Add new user
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-5 user_table">
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr. no</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          
            {newuser.map((value, index) => {
              return (
                <>
                  <tr>
                    <td scope="row">{index + 1}</td>
                    <td>{value.username}</td>
                    <td>{value.phonenumber}</td>
                    <td>
                      {" "}
                      <button
                        className="btn btn_edit"
                        onClick={() => {
                          localStorage.setItem("docId", value.id);
                          localStorage.setItem("username", value.username)
                          localStorage.setItem("phonenumber", value.phonenumber)
                          navigate("/updatedarrellssteward");
                        }}
                      >
                        Edit
                      </button>{" "}
                      <button
                        className="btn btn_delete"
                        onClick={(e) => {
                          e.preventDefault();
                          Cancel_new_user_handler(value.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>{" "}
      </div>
    </div>
  </>
  )
}

export default Addnewuser
