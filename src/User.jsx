import React from "react";

export default function User(props) {
  return (
    <div className='author-item'>
      <h5>{props.user.email}</h5>
      <h5>{props.user.password}</h5>
      <p className='muted-text'>{props.user.dob}</p>
      <p className='muted-text'>{props.user.userInfo}</p>
      <p className='muted-text'>ID:{props.user.id}</p>
      <button
        className='btn btn-danger'
        onClick={() => {
          props.delete(props.user.id);
        }}>
        Remove
      </button>
    </div>
  );
}
