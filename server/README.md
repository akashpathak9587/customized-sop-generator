                                                                                            Server.js

1. **Dependencies**:

   - `express`: Express.js is used as the web application framework for handling HTTP requests and defining routes.
   - `body-parser`: This middleware is used to parse incoming request bodies in JSON format.
   - `nodemailer`: Nodemailer is a Node.js module for sending email. It's used to send email notifications.
   - `nodemailer-express-handlebars`: This package allows you to use Handlebars templates with Nodemailer to generate and send HTML emails.
   - `cors`: The CORS (Cross-Origin Resource Sharing) middleware is used to handle CORS policy enforcement, allowing cross-origin requests from the client.

2. **Express Server Configuration**:

   - An instance of the Express app is created with `const app = express();`.
   - Middlewares like `body-parser` and `cors` are used to parse request bodies and handle CORS.
   - The server listens on port 5001 with `app.listen(5001, ...)`.

3. **Nodemailer Configuration**:

   - A Nodemailer transporter is created with your Gmail credentials, allowing the server to send email notifications.

4. **Handlebars Configuration**:

   - Handlebars is configured to render email templates for sending emails. Templates are stored in the "views/email" directory.
   - The default layout file is "template.hbs," and partials are also defined.

5. **Express Routing**:

   - An Express route is defined at `/api/submitForm` to handle form submissions.
   - When a POST request is made to this route, the server sends an email based on the form data received.

6. **Listening to Port 5001**:
   - The server is set to listen on port 5001. You can access the server's API at `http://localhost:5001`.

**Configuration Files**:
There are a couple of configuration-related aspects in your server code:

- **Environment Variables**: While not explicitly shown in this code, it's a good practice to use environment variables for sensitive information such as email credentials. You can store these values in a `.env` file, which should be added to your `.gitignore` to keep sensitive data secure. Example `.env` content:

  ```plaintext
  EMAIL_USER=
  EMAIL_PASS=
  ```

  You can then access these variables in your code using `process.env.EMAIL_USER` and `process.env.EMAIL_PASS`.

- **Email Templates**: Email templates are configured using Handlebars. If you need to modify the email content, you can edit the Handlebars template files located in the "views/email" directory.

- **CORS Configuration**: The current CORS configuration allows all origins (`origin: true`) and includes credentials (`credentials: true`). If you want to restrict or modify CORS settings, you can adjust the `cors` middleware configuration.

Remember to replace sensitive information such as email credentials with environment variables and keep them secure. Additionally, ensure that you have the necessary dependencies installed using `npm install` or `yarn install` before running the server.
