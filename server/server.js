const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const nodemailerExpressHandlebars = require("nodemailer-express-handlebars");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aakapa95@gmail.com",
    pass: "znozzqajxelcjywz",
  },
});

const handlebarsOption = {
  viewEngine: {
    extName: ".hbs",
    partialsDir: "./views/email",
    layoutDir: "views/email",
    defaultLayout: "template.hbs",
  },
  viewPath: "views/email",
  extName: ".hbs",
};

transporter.use("compile", nodemailerExpressHandlebars(handlebarsOption));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", "views/email");

app.post("/api/submitForm", (req, res) => {
  const formData = req.body;
  const mailOptions = {
    from: "aakapa95@gmail.com",
    to: formData.email,
    subject:
      "Confirmation of Successful Submission for Customized SOP Generator",
    template: "emailTemplate",
    context: formData,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "email could not be sent" });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ message: "email sent successfully!" });
    }
  });
});

app.listen(5001, () => {
  console.log("server is running on port 5001");
});
