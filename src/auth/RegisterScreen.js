import "./Auth.css";
import React, { useEffect } from "react";

function RegisterScreen() {
  useEffect(() => {
    let switchCtn = document.querySelector("#switch-cnt");
    let switchC1 = document.querySelector("#switch-c1");
    let switchC2 = document.querySelector("#switch-c2");
    let switchCircle = document.querySelectorAll(".switch__circle");
    let switchBtn = document.querySelectorAll(".switch-btn");
    let aContainer = document.querySelector("#a-container");
    let bContainer = document.querySelector("#b-container");
    let allButtons = document.querySelectorAll(".submit");

    const getButtons = (e) => e.preventDefault();

    const changeForm = (e) => {
      switchCtn.classList.add("is-gx");
      setTimeout(function () {
        switchCtn.classList.remove("is-gx");
      }, 1500);

      switchCtn.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");

      switchC1.classList.toggle("is-hidden");
      switchC2.classList.toggle("is-hidden");
      aContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-z200");
    };

    const mainF = (e) => {
      for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons);
      for (var j = 0; j < switchBtn.length; j++)
        switchBtn[j].addEventListener("click", changeForm);
    };

    mainF(); // Call the main function

    // Cleanup function (remove event listeners if needed)
    return () => {
      for (var i = 0; i < allButtons.length; i++)
        allButtons[i].removeEventListener("click", getButtons);
      for (var j = 0; j < switchBtn.length; j++)
        switchBtn[j].removeEventListener("click", changeForm);
    };
  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <div className="body">
      <div className="main">
        <div className="container a-container" id="a-container">
          <form className="form" id="a-form" method="" action="">
            <h2 className="form_title title">Create Account</h2>
            <span className="form__span">Use email for registration</span>
            <input className="form__input" type="text" placeholder="Name" />
            <input className="form__input" type="text" placeholder="Email" />
            <input
              className="form__input"
              type="password"
              placeholder="Password"
            />
            <button className="form__button button submit">SIGN UP</button>
          </form>
        </div>
        <div class="switch" id="switch-cnt">
          <div class="switch__circle"></div>
          <div class="switch__circle switch__circle--t"></div>
          <div class="switch__container" id="switch-c1">
            <h2 class="switch__title title">Welcome Back !</h2>
            <p class="switch__description description">
              To keep connected with us please login with your personal info
            </p>
            <button class="switch__button button switch-btn">SIGN IN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterScreen;
