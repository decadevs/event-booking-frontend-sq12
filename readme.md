## Overview

This repo hold the code base for the Decogaon Mananaged Internship project; Event Booking app. Frontend

## Requirements

Your local machine should have the following installed;

* NodeJS

## Frontend Stack

* React
* Typescript
* MUI
* Context API

## Local Development Setup

* Clone the repo
* Run `yarn` to install packages
* Start the required services, run `yarn dev` This will start the application for you in development
* To stop the services, run `ctrl+C`

## Running the app

```bash
# development
$ yarn run dev

# watch mode
$ yarn run 

# Preview mode
$ yarn run preview

# production mode
$ yarn run 
```

### Code Structure

The Repo follow a pattern in the structure

```
./src
├── main.tsx
├── App.tsx
├── components
│   ├── dashboard
│   ├── home
│   ├── controllers
├── pages
    ├── dashboard
    ├── demo
├── utils
    ├── context
    ├── theme
```

### Context
i. create a .env file
ii. Add all that is in sample.env to it


1. When using location.setItem or location.getItem, use 'auth' as the variable name
e.g    localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });
2. Write this before your return 
const [auth, setAuth] =useAuth();
import useAuth from context/auth

3. When consuming API, you don't need to prefix it with http://localhost:3000 again
