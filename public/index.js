"use strict";
(function (){

  window.addEventListener("load", init);
  window.addEventListener("close", quit);

  // TODO: Update this to the correct database reference
  const DB = null;

  /**
   * Gets messages from firebase and sends
   */
  function init() {
    firebaseSetup();
    id("enter-message").addEventListener("submit", handleFormSubmit);
  }

  /**
   * Will get data from database, listen for new messages
   * and sign in anonymously.
   */
  function firebaseSetup() {
    // TODO: Get messages from server and listen for new messages

    // TODO: Set up indexing in Realtime Database rules

    // TODO: Sign in anonymously
  }

  /**
   * Creates a message element that can be displayed in chat
   * @param {string} name The name of the sender
   * @param {string} message The message sent by the sender
   * @param {number} time The time that the message was sent
   *                      (milliseconds since epoch)
   * @returns {HTMLElement} A complete message element
   */
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

  /**
   * Formats a date object into a string. Changes depending
   * on whether its the same day or a different day in local time.
   * @param {Date} date The date that will be formated
   * @returns The date as a string
   */
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

    qs("#enter-message textarea").value = "";
  }

  /**
   * Handles cleanup once the page has closed
   */
  function quit() {
    // TODO: Stop listening for database changes
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