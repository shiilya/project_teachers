import React, { useState } from "react";
import "../styles/components_style/form_email.css";


const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handlePhoneChange = (e) => {
    const inputPhone = e.target.value;
    setPhoneNumber(inputPhone);

    
    const phonePattern = /^\+7\d{10}$/;
    setIsValid(phonePattern.test(inputPhone));
  };

  return (
    <div className="form_input">
      <form>
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneChange}
          className={isValid ? "valid" : "invalid"}
        />
        {!isValid && (
          <p className="error">
            Пожалуйста, введите корректный номер
          </p>
        )}
      </form>
    </div>
  );
};

export default Phone;


