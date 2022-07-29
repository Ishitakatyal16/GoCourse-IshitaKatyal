## GoCourse-Website-IshitaKatyal

# Overview
College life is the perfect time to explore different domains and develop your skills. One of the best way to learn something new is to enroll in an online course. Moreover, when the coronavirus pandemic forced colleges to close their doors and move classes in virtual mode, essentially all students were forced to become online learners. Since there are many sources available on the internet, most of us find it difficult to choose the right course. GoCourse is a website where college students can help each other to find the best online course for them.This project provides a platform to students where they can view the courses recommended by their college mates. Also students can give personal feedback about the courses and suggest the same to others. 

# Introduction
The system utilises a 3 tier architecture using MongoDB, ExpressJs, Html, Css, JavaScript and NodeJs.

# Features
## Application Features
* An easy to use single page web application.
* Fully functional MongoDB database with restrictions and validation.
* Sensitive data such as passwords is encrypted before adding to database.
* Uses GULP for minification of frontend files to boost performance.
* Only students having college domain can login. (eg. user1@thapar.edu) This can easily be configured for any specific domain name.
* Google Oauth Authentication service.
* Mailing notifications using Nodemailer.
* Dark theme frontend.

# User Features
* Can register an account.
* Can use Google SignIn/SignUp.
* Can log in.
* Can stay logged in using local storage.
* Can log out.
* Can update profile info and upload profile image.
* Can follow / unfollow other users.
* Can create a post.
* Can add description to a post.
* Can comment on posts.
* Can like posts.
* Can like comments.
* Can chat with other users.
* Can view other users profile.
* Can chat with other users.

# Technologies
![techused](https://user-images.githubusercontent.com/94470168/181748591-37db5c5e-0712-4237-b824-a883c94d7b99.jpeg)

## Below is a brief list of some of the technologies used.

## Languages:
* JavaScript
* HTML
* CSS
## Libraries:
* Bootstrap
* Mongoose
## Frameworks:
* Express
## Databases:
* MongoDB
## Environments:
* NodeJs
## Development Software
* Visual Studio Code
* Git

# Prerequisites
* MongoDB installed.
* Nodejs installed.
* Git or git bash to clone the project.
* Access to an internet browser.

# Deploy Project locally

## Download the Project
Clone this repository to your machine.
- Navigate to an empty directory
- In command prompt 
bash
	> git clone https://github.com/Ishitakatyal16/GoCourse-IshitaKatyal.git


## Download MongoDB
The project uses MongoDB. To follow instructions on how to install MongoDB click the link provided below.

[Download Mongodb](https://treehouse.github.io/installation-guides/windows/mongo-windows.html) 

## Install required libraries
After cloning the project some libraries and dependencies will be required. This can be achieved by installing and updating the node package manager.

Navigate to the downloaded repository and enter	:
bash
    > npm install
    > ng update
    > npm update 
	

## Run The Development Server
To deploy locally navigate to the project directory in cmd. 

Run the following command to build the project and launch the server:

bash
    > npm start


The server will now be running and connected to the MongoDB. Navigate to ``localhost:8000`` to view the application.

## Homepage

![homepage](https://user-images.githubusercontent.com/94470168/181747645-b0f49d99-fe52-446e-9894-01ea5bdceccf.jpg)
### Recommended Courses
![recomended1](https://user-images.githubusercontent.com/94470168/181753634-5cae8954-f601-41df-b394-6810a9885eb0.jpg)


### Reviews
![revies1](https://user-images.githubusercontent.com/94470168/181753664-6cedb5a7-a81a-4588-866b-682ed195b0ff.jpg)


## Profile Page


![userprofile](https://user-images.githubusercontent.com/94470168/181748980-346eb80b-099c-46e4-97b2-b0e648414c6a.jpg)

## Login Page

![signin](https://user-images.githubusercontent.com/94470168/181749055-41f3b636-0271-449f-aba4-f01d4dd1da06.jpg)

## Register Page
![signup](https://user-images.githubusercontent.com/94470168/181751228-520edfaa-75ff-4c2c-bd18-7e8f606fd078.jpg)

## Friends And Users

![friendlist](https://user-images.githubusercontent.com/94470168/181752097-face831d-ff94-4659-8d09-1fe1410e1941.jpg)
![userlist](https://user-images.githubusercontent.com/94470168/181752124-6310b08e-2e6e-40b4-96c8-bc86d9a23722.jpg)

## Forgot Password

![forgot password](https://user-images.githubusercontent.com/94470168/181754066-dff96819-2814-41b5-bfa7-b41a1ba44a02.jpg)

## Chats

![chats](https://user-images.githubusercontent.com/94470168/181755965-e94deec8-493e-48b6-bb09-0dc2ff76b558.jpg)
