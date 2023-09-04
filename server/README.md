**Server Dependencies:**

1. **body-parser (^1.20.2)**:

   - **Purpose**: Body Parser is middleware for parsing the request body in Express.js. It's used to parse incoming request data, including JSON and form data.
   - **Why**: Necessary for extracting and handling data sent from the client to the server.

2. **cors (^2.8.5)**:

   - **Purpose**: CORS (Cross-Origin Resource Sharing) middleware allows or restricts cross-origin HTTP requests from the client. It's used to handle CORS policy enforcement.
   - **Why**: Essential for enabling cross-origin requests from the React frontend to the Node.js backend.

3. **express (^4.18.2)**:

   - **Purpose**: Express.js is a web application framework for Node.js. It simplifies routing, middleware handling, and other web-related tasks.
   - **Why**: The core framework for building the Node.js backend and handling HTTP requests.

4. **nodemailer (^6.9.4)**:

   - **Purpose**: Nodemailer is a Node.js module for sending email. It's used for sending email notifications or alerts from the server.
   - **Why**: Necessary for sending emails related to the SOP generation process or other notifications.

5. **nodemailer-express-handlebars (^6.1.0)**:
   - **Purpose**: This package allows you to use Handlebars templates with Nodemailer to generate and send HTML emails.
   - **Why**: Useful for creating nicely formatted email templates when sending notifications or reports via email from the server.
