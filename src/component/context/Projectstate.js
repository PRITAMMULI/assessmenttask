import React, { useState } from "react";
import Projectcontext from "./Projectcontext";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import {db} from "../Firebasecredentials"
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";

function ProjectState(props) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    username: false,
    phoneumber: false,
  });

  const [newuser, setNewuser] = useState([]);
  const onSubmituser = (username, phoneumber) => {
    const usernameError = username.trim() === "";
    const phoneumberError = phoneumber.trim() === "";
    setErrors({ username: usernameError, phoneumber: phoneumberError });

     if (!usernameError && !phoneumberError) {
      UserCollection(username, phoneumber);
    }
  };

  const newUserCollection = collection(db, "new_user");

  const new_user_collection = (neworder) => {
    return addDoc(newUserCollection, neworder);
  };

  const UserCollection = async (username, phonenumber) => {
     const user = {
      username,
      phonenumber,
    };

     try {
      await new_user_collection(user);
      toast.success(`User Added`, {
        position: "top-center",
        theme: "colored",
      });
    } catch (error) {
     }
  };

  const getAllNewUser = () => {
    return getDocs(newUserCollection);
  };

  const getNewUser = async () => {
    const data = await getAllNewUser();
    setNewuser(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const deleteNewUser = (id) => {
     const userDoc = doc(db, "new_user", id);
    return deleteDoc(userDoc);
  };

  const Cancel_new_user_handler = async (id) => {
     await deleteNewUser(id);
    getNewUser();
  };

  const update_user = async (docID, username, phonenumber) => {
     try {
      // Reference to the specific document
      const newuserDocRef = doc(newUserCollection, docID);

      // Update the status field of the specific document
      await updateDoc(newuserDocRef, {
        username: username,
        phonenumber: phonenumber,
      });
      toast.success(`Your data is updated successfully`, {
        position: "top-center",
        theme: "colored",
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const discard_changes = () => {
    const confirmation = prompt("please type 'yes' if you want to discard changes")

    if(confirmation == "yes")
    {
      toast.success(`Changes discarded`, {
        position: "top-center",
        theme: "colored",
      });
      navigate("/")
    }
    else
    {
      toast.error(`Enter correct input`, {
        position: "top-center",
        theme: "colored",
      });
    }
  } 
  return (
    <>
      <Projectcontext.Provider
        value={{
          onSubmituser,
          UserCollection,
          update_user,
          getNewUser,
          discard_changes,
          newuser,
          Cancel_new_user_handler,
          errors, setErrors
        }}
      >
        {props.children}
      </Projectcontext.Provider>
      <ToastContainer />
    </>
  );
}

export default ProjectState;
