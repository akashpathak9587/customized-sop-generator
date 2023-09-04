                                                                                                Form Component

`Form` component is responsible for rendering a form that collects various details from users, such as email, education, work experience, English language scores, and financial information related to tuition fees and the Guaranteed Investment Certificate (GIC) program. It's a crucial part of your "Customized SOP Generator" project.

Now, let's discuss how this component works and how you can customize it further:

1. **State Management:**

   - The component uses the `useState` hook to manage form data. It initializes `formData` as an object with properties corresponding to various form fields.
   - When a user interacts with the form fields, the `handleInputChange` function updates the `formData` state based on the field's `name` and `value`.

2. **Form Submission:**

   - The `handleSubmit` function is triggered when the form is submitted. It makes an Axios POST request to a specific endpoint (`http://localhost:5001/api/submitForm`) with the form data.
   - Upon a successful response, it logs the data and shows an alert indicating that the email was sent successfully.
   - If there's an error, it logs the error and displays an alert indicating that sending the email failed.

3. **Radio Button Handling:**

   - The component includes two sets of radio buttons: one for the tuition fee payment (`fee`) and another for the GIC program (`gic`).
   - The `handleFeeRadioChange` and `handleGicRadioChange` functions update the respective state variables when a user selects a radio button.

4. **Form Rendering:**

   - The component renders an HTML form with various input fields, labels, and radio buttons. Each input field is associated with a corresponding property in the `formData` state.
   - Required fields are indicated with a red asterisk (`*`), and appropriate form controls are used for different types of data (text, email, number, select, radio).

5. **Buttons:**

   - Two buttons are provided at the bottom of the form: one for submitting the form data and another for clearing the form.

6. **Event Handlers:**

   - Event handlers like `onChange` are used on input elements to capture user input and update the `formData` state accordingly.

7. **Form Styling:**
   - The component applies Bootstrap classes and custom styles to create a visually appealing and responsive form.

**Customization:**

If you want to customize this `Form` component further, you can consider the following:

- Add more form fields or modify existing ones to collect additional information.
- Customize the form styling by updating the Bootstrap classes and styles.
- Modify the Axios POST request in the `handleSubmit` function to send data to a different API endpoint if needed.
- Enhance error handling and validation to provide more user-friendly feedback.

Remember that this component is just one part of your React project, and you can integrate it with other components and functionality to create a complete SOP generator application.
'
