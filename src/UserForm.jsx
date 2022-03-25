import React from "react";
import axios from "axios";

export default function UserForm(props) {
  const addAuthor = (e) => {
    e.preventDefault();
    const userObj = {
      id: parseInt(e.target.id.value),
      email: e.target.email.value,
      password: e.target.password.value,
      dob: e.target.dob.value,
      userInfo: e.target.userInfo.value,
    };
    axios
      .post("/usersmysql", userObj)
      .then((res) => {
        if (res.data.error !== null) {
          console.log(res.data.error);
          alert("Error while adding User");
        } else {
          props.loadusers();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form className='form-container bg-light clearfix' onSubmit={addAuthor}>
      <h1 className='text-center mb-4'> Author Form</h1>
      <div className='forum-group text-center'>
        <input
          type='number'
          name='id'
          className='form-control'
          placeholder='ID'
        />
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='Email'
        />
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='Password'
        />
        <input
          type='text'
          name='userInfo'
          className='form-control'
          placeholder='User Info'
        />
        <input type='date' name='dob' className='form-control' />
        <input type='submit' className='btn btn-success m-1' />
      </div>
    </form>
  );
}
