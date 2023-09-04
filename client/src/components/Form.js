import React, { useState } from "react";
import Axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    age: "",
    education: "",
    institute: "",
    studyStream: "",
    experience: "",
    canadaInstitute: "",
    studyProg: "",
    originCountry: "",
    goals: "",
    listeningScore: "",
    readingScore: "",
    speakingScore: "",
    writingScore: "",
    fee: "",
    amount: "",
    gic: "",
    gicAmount: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "http://localhost:5001/api/submitForm",
        formData
      );
      console.log(response.data);
      alert("Email sent successfully!");
    } catch (error) {
      console.error(error);
      alert("failed to send email.");
    }
  };
  const handleFeeRadioChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      fee: value,
    });
  };

  const handleGicRadioChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      gic: value,
    });
  };
  return (
    <div className="w-50 m-auto mb-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="w-100 mb-5">
            Email <span className="text-danger">*</span>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
              onChange={handleInputChange}
            />
          </label>
          <label className="w-100 mb-5">
            Full Name <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
              onChange={handleInputChange}
            />
          </label>
          <label className="w-100 mb-5">
            Age <span className="text-danger">*</span>
            <input
              required
              type="number"
              name="age"
              value={formData.age}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
              onChange={handleInputChange}
            />
          </label>
          <label className="w-100 mb-5">
            Highest Level of Education <span className="text-danger">*</span>
            <select
              className="form-select shadow-none"
              name="education"
              value={formData.education}
              required
              onChange={handleInputChange}
            >
              <option value=""></option>
              <option value="grade 12">Grade 12</option>
              <option value="diploma">Diploma</option>
              <option value="bachelors degree">Bachelors Degree</option>
              <option value="masters degree">Masters Degree</option>
              <option value="phd">PhD</option>
            </select>
          </label>
          <label className="w-100 mb-5">
            Institute where you completed your highest level of education
            <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="institute"
              value={formData.institute}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
          <label className="w-100 mb-5">
            What did you study <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="studyStream"
              value={formData.studyStream}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
          <label className="w-100 mb-5">
            Do you have any relevant work experience?
            <span className="text-danger">*</span> <br />
            <span>
              Write None if no work experience. Provide the following details if
              yes:
              <ol className="mt-2 mb-2">
                <li>Job Title </li>
                <li>Company Name</li>
                <li>Job duties</li>
              </ol>
              Sample Answer: I worked as a Sales Manager at Effizient
              Immigration Inc from Jan 2022 till Feb 2023. In this role, I
              managed sales operations, reaching out to leads, lead the outreach
              program, ensured meeting monthly targets.
            </span>
            <input
              required
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
          <label className="w-100 mb-5">
            What institute did you get admitted to in Canada?
            <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="canadaInstitute"
              value={formData.canadaInstitute}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
          <label className="w-100 mb-5">
            What is your program of study in Canada?
            <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="studyProg"
              value={formData.studyProg}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
          <label className="w-100 mb-5">
            Which country are you applying from?
            <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="originCountry"
              value={formData.originCountry}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
          <label className="w-100 mb-5">
            What are your future goals? <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="goals"
              value={formData.goals}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
          <label className="w-100 mb-5">
            English Scores - Listening <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="listeningScore"
              value={formData.listeningScore}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
          <label className="w-100 mb-5">
            English Scores - Reading <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="readingScore"
              value={formData.readingScore}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
          <label className="w-100 mb-5">
            English Scores - Speaking <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="speakingScore"
              value={formData.speakingScore}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
          <label className="w-100 mb-5">
            English Scores - Writing <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="writingScore"
              value={formData.writingScore}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
          <label className="w-100 mb-5">
            Did you pay your first year tuition?
            <span className="text-danger">*</span> <br />
            <div className="mt-3">
              <input
                required
                type="radio"
                className="form-check-input me-2 border border-dark"
                name="fee"
                value="yes"
                checked={formData.fee === "yes"}
                onChange={handleFeeRadioChange}
                id="yes"
              />
              <label for="yes">yes</label>
              <input
                required
                type="radio"
                className="form-check-input ms-5 me-2 border border-dark"
                name="fee"
                value="no"
                checked={formData.fee === "no"}
                onChange={handleFeeRadioChange}
                id="no"
              />
              <label for="no">No</label>
            </div>
          </label>
          <label className="w-100 mb-5">
            How much tuition fee did you pay?
            <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
          <label className="w-100 mb-5">
            Did you do a GIC? <span className="text-danger">*</span>
            <div className="mt-3">
              <input
                required
                type="radio"
                className="form-check-input me-2 border border-dark"
                value="yes"
                checked={formData.gic === "yes"}
                onChange={handleGicRadioChange}
                name="gic"
                id="yes"
              />
              <label for="yes">yes</label>
              <input
                required
                type="radio"
                className="form-check-input ms-5 me-2 border border-dark"
                value="no"
                checked={formData.gic === "no"}
                onChange={handleGicRadioChange}
                name="gic"
                id="no"
              />
              <label for="no">No</label>
            </div>
          </label>
          <label className="w-100 mb-5">
            How much did you pay towards GIC?
            <span className="text-danger">*</span>
            <input
              required
              type="text"
              name="gicAmount"
              value={formData.gicAmount}
              onChange={handleInputChange}
              className="form-control w-100 border-0 border-bottom border-dark shadow-none"
            />
          </label>
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="reset" className="btn text-primary">
            clear form
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
