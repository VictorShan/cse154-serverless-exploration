# CSE 154 Spring 2021 Serverless Exploration Session

## Overview
In this project, you will create a public chat that will allow users to send messages to a public chatroom that anyone can see.

[Preview of the finished project](https://cse154-exploration-session-dev.web.app/)

We will only be using the free tier for firebase so it shouldn't cost any money.

## Prerequisites
- Basic HTML/CSS/JavaScript experience
- NodeJS installed
- Access to a Google Account
- Basic GitHub cloning and checking out branches

## Setup your local repository
Clone the starter-code branch to get started. The step by step guid to this mini-project will be explained there.

Although a basic HTML and CSS template have is given, feel free to change it to whatever you desire before hosting it on Firebase.

## Creating the Firebase Project and Setup
1. Please go the [Firebase Console](https://firebase.google.com/) to create a new Firebase project.
2. Create a new project, name it anything you want
3. Click on the `</>` icon to create a web app
4. Check the `Firebase Hosting` option and follow the setup process. Don't use firebase init or deploy just yet.
5. Go to the left hand side navigation bar and click on the Authentication icon with two people. It should be the third icon after the yellow/orange Firebase logo. Get started by clicking the button and going to the `Sign-in method` tab and enabling anonymous sign in.
6. Click the server icon two icons below the authentication icon and create a Reatime Database in test mode with any location (preferably near your geographical location)
7. Run firebase init and setup `Hosting`, `Realtime Database` and `Emulators` instead of just `Hosting`. Follow the message prompts and go with the defaults if unsure.
8. For emulator setup, please enable `Authentication`, `Realtime Database`, and `Hosting`
9. Use default ports and download emulators

Well done! Next let's move on to linking this together!

## Writing the frontend JavaScript

1. Install the Firebase SDK [Instructions](https://firebase.google.com/docs/web/setup)
    - In our case, simply run `npm install`
2. Import additonal SDKs [Documentation](https://firebase.google.com/docs/web/setup#from-hosting-urls_1)
    - Place this in your HTML
    ```html
        <!-- Place these after importing firebase app-->
        <script src="/__/firebase/8.6.1/firebase-auth.js"></script>
        <script src="/__/firebase/8.6.1/firebase-database.js"></script>
    ```
3. Complete the TODOs. Remember that you can test it out using `firebase emulators:start`. Below is an example of what the data model looks like:
    ```js
    {
        "chat": {
            "randomlyGeneratedId1": {
                "name": "username",
                "message": "some message",
                "time": number
            },
            "randomlyGeneratedId2": {
                "name": "username3",
                "message": "some message",
                "time": number
            }
            // more messages...
        }
    }
    ```
    1. Start with the one one line 7. We want to get the database's chat object ref
    reference so that and get messages from it.
        - `firebase.database().ref('chat');`
    2. `firebaseSetup` function
        - Listen for new changes and add them to the `#messages` box! (limit to last 20 messages for bonus points!) [Documentation](https://firebase.google.com/docs/database/web/lists-of-data#listen_for_child_events)
        - Create an index in database rules for easy querying [Documentation](https://firebase.google.com/docs/database/security/indexing-data)
        - Sign in anonymously [Documentation](https://firebase.google.com/docs/auth/web/anonymous-auth#authenticate-with-firebase-anonymously)
    3. `handleFormSubmit` function
        - Push messages to the server [Documentation](https://firebase.google.com/docs/database/web/read-and-write#update_specific_fields)
        - Get the username from the `#username` input tag
        - To get the time number user `Date.now()`
        - Remember to have a default value for the username!
        - Don't send a message if the message is empty!
    4. `quit` function
        - Stop listening to database changes once the page has closed [Documentation](https://firebase.google.com/docs/database/web/read-and-write#detach_listeners)
4. Deploy to firebase using `firebase deploy`

## Finished
You should be able view this on your own site. Please submit an issue if it does not work.
