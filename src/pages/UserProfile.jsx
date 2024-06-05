import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import { UserContext } from "../context/userContext";
import axios from "axios";
import blankprofile from "../Images/blank-profile1.jpg"
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const UserProfile = () => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const [isAvatarTouched, setIsAvatarTouched] = useState(false);

  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  // redirect to login page for any user who is not logged in

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const changeAvatarHandler = async () => {
    setIsAvatarTouched(false);
    try {
      const postData = new FormData();
      postData.set("avatar", avatar);
      console.log(postData);

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/change-avatar`,
        postData,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );

      console.log(response?.data.avatar);
      setAvatar(response?.data.avatar);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${currentUser.id}`,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      const { name, email, avatar } = response.data;
      setName(name);
      setEmail(email);
      setAvatar(avatar);
    };
    getUser();
  }, []);




  const updateUserDetails = async (e) => {
    e.preventDefault();


    try {
      const userData = new FormData();

      userData.set("name", name);
      userData.set("email", email);
      userData.set("currentPassword", currentPassword);
      userData.set("newPassword", newPassword);
      userData.set("newConfirmPassword", newConfirmPassword);
  



      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/users/edit-user`,{name, email, currentPassword, newPassword, newConfirmPassword }, { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
 
      console.log(response.status);
      if (response.status === 200) {
        navigate("/logout");
      }
    }
     catch (error) {
      setError(error.response.data.message);
    }
  }




  return (
    <section className="profile">
      <div className="container profile_container">
      <div>

        <div className="avatar_background">
    
          <div className="avatar_wrapper">
            <div className="profile_avatar">
            {!avatar &&   <img
                src={blankprofile}
                alt=""
              /> }
            { avatar &&   <img
                src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`}
                alt=""
              />}
            </div>
            <form action="" className="avatar_form">
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={(e) => setAvatar(e.target.files[0])}
                accept="png,jpg,heg"
              />
              <label htmlFor="avatar">
                <BiSolidMessageSquareEdit  onClick={() => setIsAvatarTouched(true)} />
              </label>
            </form>
            {isAvatarTouched && (
              <button
                className="profile_avatar-btn"
                onClick={changeAvatarHandler}
              >
                <FaCheck />
              </button>
            )}
          </div>
          </div>
          </div>
    
        <div className="profile_details">
        <Link to={`/myposts/${currentUser.id}`} className="btn sti">
          My posts
        </Link>

          <h1 style={{ marginBottom: "2rem", textDecorationLine: "underline" }}>
            {currentUser.name}
          </h1>

          <form
            className="form profile_form"
            onSubmit={updateUserDetails}
          >
            {error && <p className="form_error-message">{error}</p>}

            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm new Password"
              value={newConfirmPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />


            <button type="submit" className="btn primary">
              Update details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
