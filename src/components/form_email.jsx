
import React, { useState } from "react";
import "../styles/components_style/form_email.css";

const Email = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(inputEmail));
  };

  return (
    <div className="form_mail">
      <form>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={isValid ? "valid" : "invalid"}
        />
        {!isValid && <p className="error">Пожалуйста, введите корректный адрес</p>}
      </form>
    </div>
  );
};

export default Email;

