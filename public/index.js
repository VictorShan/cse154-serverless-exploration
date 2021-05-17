"use strict";
(function (){

  window.addEventListener("load", init);
  window.addEventListener("close", quit);

  const DB = firebase.database().ref('chat');

  /**
   * Gets messages from firebase and sends
   */
  function init() {
    firebaseSetup();
    id("enter-message").addEventListener("submit", handleFormSubmit);
  }

  function firebaseSetup() {
    DB.orderByChild("time").limitToLast(20).on("child_added", (snapshot) => {
      let data = snapshot.toJSON();
      const messages = id("messages");
      messages.appendChild(genMessage(data.name, data.message, data.time));
      messages.scrollTop = messages.scrollHeight;
    });
    return firebase
      .auth()
      .signInAnonymously();
  }

  function genMessage(name, message, time) {
    const messageContainer = gen("div");
    messageContainer.classList.add("message");

    const userName = gen("p");
    userName.classList.add("name");
    userName.textContent = name + ":";
    messageContainer.appendChild(userName);

    const mainMessage = gen("p");
    mainMessage.textContent = message;
    messageContainer.appendChild(mainMessage);

    const date = gen("p");
    date.classList.add("date");
    date.textContent = formatDate(new Date(time));
    messageContainer.appendChild(date);

    return messageContainer
  }

  function formatDate(date) {
    if ((new Date()).toLocaleDateString() !== date.toLocaleDateString()) {
      const dateOptions = {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
      };
      const timeOptions = {
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
      };
      return (
        date.toLocaleTimeString(undefined, timeOptions) +
        ", " +
        date.toLocaleDateString(undefined, dateOptions)
      );
    }
    return date.toLocaleTimeString();
  }

  /**
   * Handles sending a message in the chat and
   * clearing message from messagebox afterwards
   * @param {SubmitEvent} e Event of form submission
   */
  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = formData.get("message");

    // TODO: Send message to server
    if (message) {
      DB.push({
        name: id("username").value || "Anonymous",
        message,
        time: Date.now(),
      })
    }

    qs("#enter-message textarea").value = "";
  }

  function quit() {
    // TODO: Handle quitting the page
    DB.off();
  }

  function id(elementId) {
    return document.getElementById(elementId);
  }

  function qs(query) {
    return document.querySelector(query);
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }

  function gen(tag) {
    return document.createElement(tag);
  }

})();