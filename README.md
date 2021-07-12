# React-App

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Screenshot](#screenshot)

## General info
This prject perform following operations: 
* In First screen
  1. It contain's 'User Name' and 'Password' fields with 'login' button.
  3. After successfully login, the system navigate the 'user-list' pag and store userName and password in redux store.
  4. If a user already Login then screen skipped and user navigate to the 'user-list' page.
* Second Screen
  1. It contain list of users and user list data get from the redux-store.
  2. Each list item contains the fields: name, age, gender, email and phoneNo.
## Technologies

Project is created with:
* react version: 17.0.2,
* Node >= 10,
* react-router-dom": "5.2.0",
* redux": "4.1.0"
	
## Setup
To run this project, install it locally using npm:
  * cd react-app
  * npm install
  * npm install --save redux react-redux
  * npm install --save react-router-dom

## Screenshot
![Screen 1](/public/screen1.png)
![Screen 2](/public/screen2.png)

