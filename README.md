# SalesMate

## Introduction

SalesMate: a Customer Relationship Management tool. Users can track account information, notes and contacts in one place.

This repo is the front-end client, built in React. You can see the Live Demo at: [https://salesmate.vercel.app/](https://salesmate.vercel.app/).

The API can be found at [https://github.com/marfriaz/salesmate-server](https://github.com/marfriaz/salesmate-server).

To try out this app, you can create a new account from the Sign Up page or use the Demo Account listed below.

#### Demo Account Details

- Email: user@gmail.com
- Password: password

## Technology

#### Front End

- React
  - [Create React App](https://github.com/facebook/create-react-app)
  - React Router
- HTML5
- CSS3 (scratch - no frameworks)

#### Testing

- Jest (smoke tests)

#### Production

- Deployed via Vercel

## Features

- Responsive design
- Create, Update and Delete Accounts, Contacts and Notes
- Sort existing Accounts by Name, Stage, Industry and Territory
- Search Accounts with a Typeahead Search Bar
- "Sign Up" form
- "Login" form

## Motivation

My background is working in Operations for a Data Assurance team at Linkedin, where I crafted solutions to enhance CRM (SFDC, Dynamics, and a custom CRM) data accuracy for our Sales Org’s 4M+ accounts. I worked alongside Engineering to create several tools, for our team’s 80+ vendor analysts, providing requirements for the logic of several automations and conducting User Acceptance Testing. I wanted to get first-hand experience on how CRMs are built and how they could be improved. Hence, I created SalesMate: a custom made CRM.

## Getting Started

Run `npm install` to load dependencies

Run `npm test` to ensure a stable build

This is only the front end client, so develop locally you'll need the backend server as well.

To get the backend up and running see [https://github.com/marfriaz/salesmate-server](https://github.com/marfriaz/salesmate-server)

Deployments are handled through Vercel and can be run via `npm run deploy`
