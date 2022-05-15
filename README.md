# Shopify FE Intern Challenge

## Where will your next adventure take you?

##### Created by:

Jordan Skomal | [GitHub](https://github.com/jskomal)

### Deploy Link

Check out the deployed site [here](https://jskomal-shopify.herokuapp.com/).

## Overview

This app was built in React using `create-react-app`. Let your creativity shine, and spark new ideas for stories by prompting the app with a custom story setting or idea and let the OpenAi present a foundation for your idea!

Styled using colors from Shopify's front page, with design inspiration drawn from the same source.

Focused on Error Handling and managed the four possible app states:

```
1. empty state (page load)
2. loading state 
3. data state (all populated)
4. error state (any possible error)
```

Stretch goals included:

1. Improved design, UX
2. Implemented local storage to store previous responses
3. Implemented deletion to allow the user to remove unwanted prompts

## Technologies

- Javascript
- React
- HTML
- CSS

## Project Goals

This project is part of an application for Shopify's Frontend Developer Internship. It's goal is to show basic understanding of Web Development and the possible pathways to creating a functional web app.

## Site Examples

![image](https://user-images.githubusercontent.com/90876852/168488938-5ba956bb-0945-49fb-910f-47960e31d1db.png)

![shopify](https://user-images.githubusercontent.com/90876852/168489175-4c2bc10f-51a8-4274-9450-f154e36316a6.gif)

## Install and Setup

To run this app locally:

1. Run `git clone git@github.com:jskomal/shopify-fe.git` in your command line
2. Run `cd shopify-fe` to navigate into the repository
3. Run `npm install`
4. Run `npm start`
5. Get an API Key from OpenAI following these instructions:

```
OpenAI sign up instructions

Go to https://beta.openai.com/signup
Enter your email address and password
Verify your email address
Verify your phone number by entering the code that is sent to you via SMS
Once logged in, go to https://beta.openai.com/account/api-keys to get your secret API key
```

6. Place your API key in a `.env` file inside the root of the application in the following format:
`REACT_APP_APIKEY = '[YOUR API KEY HERE]'` 

Alternatively, visit the deployment link above!
