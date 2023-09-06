import axios from "axios";
import React, { useState } from "react";

const PostJob = ({ active }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [budget, setBudget] = useState("");
  const [type, setType] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [jobPlace, setJobPlace] = useState("");
  const [deadline, setDeadLine] = useState("");
  const [description, setDescription] = useState("");
  const [knowledge, setKnowledge] = useState("")
  const [link, setLink] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/postJob`, {
        jobTitle,
        vacancy,
        budget,
        type,
        experienceLevel,
        jobPlace,
        deadline,
        description,
        knowledge,
        link,
        email,
        company
      });
      setJobTitle("")
      setJobPlace("")
      setVacancy("")
      setBudget("")
      setType("")
      setExperienceLevel("")
      setJobPlace("")
      setDeadLine("")
      setDescription("")
      setKnowledge("")
      setLink("")
      setEmail("")
      setCompany("")
    } catch (error) {
        console.log(error);
    }
  };




  return (
    <>
      {active === 2 ? (
        <section className="post-job">
          <h5>Post a Job</h5>
          <div className="profile-form">
            <form action="" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="jobTitle">Job Title*</label>
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  placeholder="Senior UI/UX Engineer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="company">Company Name*</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Colorlib"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="link">Website link*</label>
                <input
                  type="text"
                  name="link"
                  id="link"
                  placeholder="www.colorlib.com"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email*</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="carrier.colorlib@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div>
                    <label htmlFor="category">Job Category*</label>
                    <select name="category" id="category" value="">UI</select>
                </div> */}
              <div>
                <label htmlFor="vacancies">Vacancies*</label>
                <input
                  type="text"
                  name="vacancies"
                  id="vacancies"
                  placeholder="07 Person"
                  value={vacancy}
                  onChange={(e) => setVacancy(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="budget">Budget/Salary*</label>
                <input
                  type="text"
                  name="budget"
                  id="budget"
                  placeholder="Salary"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="type">Job Type*</label>
                <select
                  name="type"
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                    <option value=""></option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                </select>
              </div>
              <div>
                <label htmlFor="level">Experience Level*</label>
                <input
                  type="text"
                  name="level"
                  id="level"
                  placeholder="Experiences"
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="place">Place*</label>
                <input
                  type="text"
                  name="place"
                  id="place"
                  placeholder="Place"
                  value={jobPlace}
                  onChange={(e) => setJobPlace(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="deadline">Deadline*</label>
                <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  value={deadline}
                  onChange={(e) => setDeadLine(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description">Job Description*</label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  style={{ height: "73px" }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label htmlFor="knowledge">Required Knowledge*</label>
                <textarea
                  name="knowledge"
                  id="knowledge"
                  cols="30"
                  rows="10"
                  style={{ height: "73px" }}
                  value={knowledge}
                  onChange={(e) => setKnowledge(e.target.value)}
                ></textarea>
              </div>

              <button type="submit">Post Now</button>
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default PostJob;
