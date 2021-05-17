"use strict";
(function (){

  window.addEventListener("load", init);
  window.addEventListener("close", quit);


  /**
   * Gets messages from firebase and sends
   */
  function init() {
    id("enter-message").addEventListener("submit", handleFormSubmit);
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


    qs("#enter-message textarea").value = "";
  }

  function quit() {
    // TODO: Handle quitting the page
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