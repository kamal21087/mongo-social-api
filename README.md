# **Mongo Social API**

A RESTful API for a social media application built using **Node.js**, **Express**, **MongoDB**, and **Mongoose**. This API enables users to manage profiles, share thoughts, react to friends' thoughts, and maintain a friends list.

---

## **Table of Contents**
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Thought Routes](#thought-routes)
  - [Reaction Routes](#reaction-routes)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

---

## **Description**
This Social Media API provides the backend functionality for managing users, thoughts, reactions, and friendships. It demonstrates the use of a NoSQL database to handle large amounts of unstructured data effectively.

---

## **Installation**

1. Clone the repository:
```
git clone https://github.com/your-username/mongo-social-api.git
cd mongo-social-api
```
2. Install dependencies:
```
npm install
```
3. Set up the environment:
- Create a .env file in the root directory.
- Add the following content:
```
MONGODB_URI=mongodb://localhost:27017/socialnetworkdb
PORT=3001
```
4. Start the server:
```
npm run dev
```
--- 
## **Usage**
- Use **Insomnia**, **Postman**, or any *REST API* client to interact with the endpoints.
- Test various CRUD operations for users, thoughts, reactions, and friends.
---

## **API Endpoints**
### **User Routes**
| Method | Endpoint                               | Description                    |
|--------|---------------------------------------|--------------------------------|
| GET    | `/api/users`                          | Get all users                 |
| GET    | `/api/users/:id`                      | Get a user by ID              |
| POST   | `/api/users`                          | Create a new user             |
| PUT    | `/api/users/:id`                      | Update a user by ID           |
| DELETE | `/api/users/:id`                      | Delete a user by ID           |

### **Thought Routes**
| Method | Endpoint                  | Description             |
|--------|---------------------------|-------------------------|
| GET    | /api/thoughts             | Get all thoughts        |
| GET    | /api/thoughts/:id         | Get a thought by ID     |
| POST   | /api/thoughts             | Create a new thought    |
| PUT    | /api/thoughts/:id         | Update a thought by ID  |
| DELETE | /api/thoughts/:id         | Delete a thought by ID  |

### **Reaction Routes**
| Method | Endpoint                                  | Description                   |
|--------|-------------------------------------------|-------------------------------|
| POST   | /api/thoughts/:thoughtId/reactions        | Add a reaction to a thought   |
| DELETE | /api/thoughts/:thoughtId/reactions/:reactionId | Remove a reaction            | 

## **Walkthrough Video**
Here is the walkthrough video demonstrating the Social Media API functionality: https://app.screencastify.com/v2/manage/videos/qxoagsV2HmxAXPioDejz 

## **License**
This project is licensed under the MIT License.
