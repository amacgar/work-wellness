# WorkWellnessBack

## Description

This project will create several endpoints through which to perform CRUD operations on a MongoDB database.

## โ Prerequisites

To run this project, you will need to have the following installed:

* NodeJS
* MongoDB

### ๐๏ธ MongoDB

In the case that you don't have MongoDB, you will have to do the following steps:

* `sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 656408E390CFB1F5` to install the public key to verify the signature
* `echo "deb [arch=amd64] http://repo.mongodb.org/apt/ubuntu $(lsb_release -sc)/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org.list` to add the new repository
* `sudo apt update && sudo apt install mongodb-org` to install MongoDB
* `systemctl enable mongod.service && systemctl start mongod.service` to enable and start MongoDB

## ๐ฅ๏ธ Development server

Run `npm run start` for a dev server or `npm run start:debug` for a debug server. This will be deployed in `http://localhost:8080`.

## ๐งช Test

To test this library you can launch the command `npm run test`, which it will test all the endpoints.
