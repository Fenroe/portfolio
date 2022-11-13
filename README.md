# My Portfolio 

This is my personal portfolio. The website was built using NextJS and styled with Sass. It also utilises an API to send messages from visitors to my email address. You can check out the API [here](https://github.com/Fenroe/fenpi).

# Live Preview

https://davidslade.dev

# Tech Stack

* NextJS
* Sass
* Typescript

# Getting Started

If you'd like to run this application locally then follow these steps:

* Clone the repository to your computer.
* Install npm packages with `npm install`.
* If you want to use the contact form you will need to set up an .env file in the root of the project directory containing the following variables:
```
REACT_APP_API_ENDPOINT=myapiendpoint.com
```
* `REACT_APP_API_ENDPOINT` is the endpoint of your own mailer API. Depending on your APIs configuration you may need to make additional changes to the source code.
* Start the application using `npm run dev`.
* The application should now be live on http://localhost:3000.