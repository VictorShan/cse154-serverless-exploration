# CSE 154 Spring 2021 Serverless Exploration Session
Created by Victor Shan

## Overview
In this project, you will create a public chat that will allow users to send messages to a public chatroom that anyone can see.

[Preview of the finished project](cse154-exploration-session-dev.web.app)

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
4. Check the `Firebase Hosting` option and follow the setup process
5. Go to the left hand side navigation bar and click on the Authentication icon with two people. It should be the third icon after the yellow/orange Firebase logo. Get started by clicking the button and going to the `Sign-in method` tab and enabling anonymous sign in.
6. Click the server icon two icons below the authentication icon and create a Reatime Database in test mode with any location (preferably near your geographical location)
7. Run firebase init again but setup `Realtime Database` and `Emulators` instead of just `Hosting`. Follow the message prompts and go with the defaults if unsure.
8. For emulator setup, please enable `Authentication`, `Realtime Database`, and `Hosting`
9. Use default ports and download emulators

Well done! Next let's move on to linking this together!

## Writing the frontend JavaScript
https://firebase.google.com/docs/database/web/read-and-write