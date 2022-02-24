import React from "react";

const Form = (props) => {
  return (
    <div>
      <h1>What a cool form!</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
          />
        </label>
        <label>
          Email:
          <input 
            type="text" 
            name="email" 
            value={email} 
            onChange={onChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </label>
        <label>
          Terms ofService:
          <input
            type="checkbox"
            name="tos"
            checked={checked}
            onChange={onChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Form;