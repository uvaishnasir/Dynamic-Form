const apiResponses = {
  userInfo: {
    fields: [
      { name: "firstName", type: "text", label: "First Name", required: true },
      { name: "lastName", type: "text", label: "Last Name", required: true },
      { name: "age", type: "number", label: "Age", required: false },
    ],
  },
  addressInfo: {
    fields: [
      { name: "street", type: "text", label: "Street", required: true },
      { name: "city", type: "text", label: "City", required: true },
      {
        name: "state",
        type: "dropdown",
        label: "State",
        options: ["California", "Texas", "New York"],
        required: true,
      },
      { name: "zipCode", type: "text", label: "Zip Code", required: false },
    ],
  },
  paymentInfo: {
    fields: [
      {
        name: "cardNumber",
        type: "text",
        label: "Card Number",
        required: true,
      },
      {
        name: "expiryDate",
        type: "date",
        label: "Expiry Date",
        required: true,
      },
      { name: "cvv", type: "password", label: "CVV", required: true },
      {
        name: "cardholderName",
        type: "text",
        label: "Cardholder Name",
        required: true,
      },
    ],
  },
  employmentApplication: {
    fields: [
      { name: "fullName", type: "text", label: "Full Name", required: true },
      { name: "email", type: "email", label: "Email", required: true },
      { name: "phone", type: "text", label: "Phone Number", required: true },
      { name: "resume", type: "file", label: "Upload Resume", required: true },
      {
        name: "jobPosition",
        type: "dropdown",
        label: "Job Position",
        options: ["Software Engineer", "Product Manager", "Data Analyst"],
        required: true,
      },
    ],
  },
  surveyForm: {
    fields: [
      { name: "name", type: "text", label: "Your Name", required: true },
      {
        name: "satisfaction",
        type: "dropdown",
        label: "Satisfaction Level",
        options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"],
        required: true,
      },
      { name: "comments", type: "text", label: "Comments", required: false },
    ],
  },
  productFeedback: {
    fields: [
      {
        name: "productName",
        type: "text",
        label: "Product Name",
        required: true,
      },
      {
        name: "rating",
        type: "dropdown",
        label: "Rating",
        options: ["1", "2", "3", "4", "5"],
        required: true,
      },
      { name: "feedback", type: "text", label: "Feedback", required: false },
    ],
  },
};

export default apiResponses;
