import React, { useEffect } from "react";
import "./Auth.css";

const Main = () => {
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
  }, []);

  return <div className="container">{/* Your HTML content goes here */}</div>;
};

export default Main;
