import React, { useState } from "react";
import axios from "axios";

const EditResume = (active) => {
  // states
  const [name, setName] = useState("");
  const [image, setImage] = useState(null)
  const [jobPlace, setJobPlace] = useState("");
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [qualification, setQualification] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [link, setLink] = useState("");
  const [language, setLanguage] = useState("");
  const [objective, setObjective] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [skills, setSkills] = useState("");
  const [level, setLevel] = useState("");
  const [major, setMajor] = useState("");
  const [institute, setInstitute] = useState("");
  const [gpa, setGpa] = useState("");
  const [startingPeriod, setStartingPeriod] = useState("");
  const [endingPeriod, setEndingPeriod] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/editResume`, {
        name,
        image,
        jobPlace,
        designation,
        experience,
        qualification,
        email,
        number,
        link,
        language,
        objective,
        father,
        mother,
        birth,
        address,
        status,
        gender,
        religion,
        height,
        weight,
        skills,
        level,
        major,
        institute,
        gpa,
        startingPeriod,
        endingPeriod,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(image.name);
  return (
    <>
      {active.className === 3 ? (
        <section className="edit-resume">
          <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
            <h6>Basic Information</h6>
            <div className="edit-form">
              <div>
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Mr. Robert"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="image">Profile picture:</label>
                <input type="file" name="image" id="image" accept=".img, .jpg, .webp, .png" onChange={(e) => setImage(e.target.files[0])}/>
            </div>
              <div>
                <label htmlFor="jobPlace">Current Job Place*</label>
                <input
                  type="text"
                  name="jobPlace"
                  id="jobPlace"
                  placeholder="Company Name"
                  onChange={(e) => setJobPlace(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="designation">Designation*</label>
                <input
                  type="text"
                  name="designation"
                  id="designation"
                  placeholder="UI/UX Engineer"
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="experience">Year of Experiences*</label>
                <input
                  type="text"
                  name="experience"
                  id="experience"
                  placeholder="3.5 Years"
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="qualification">Qualification*</label>
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
                  placeholder="BSC"
                  onChange={(e) => setQualification(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email*</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="info@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="number">Phone Number*</label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="+91 7034******"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="link">Website Link*</label>
                <input
                  type="text"
                  name="link"
                  id="link"
                  placeholder="https://example.com"
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="objective">Career Objective*</label>
                <textarea
                  name="objective"
                  id="objective"
                  cols="30"
                  rows="10"
                  placeholder="Write Something"
                  onChange={(e) => setObjective(e.target.value)}
                ></textarea>
              </div>
            </div>

            <h6>Profile</h6>
            <div className="profile-edit">
              <div>
                <label htmlFor="father">Father’s Name*</label>
                <input
                  type="text"
                  name="father"
                  id="father"
                  placeholder="Mr. Norman"
                  onChange={(e) => setFather(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="mother">Mother's Name*</label>
                <input
                  type="text"
                  name="mother"
                  id="mother"
                  placeholder="Mrs. Marcoline"
                  onChange={(e) => setMother(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="birth">Date of Birth*</label>
                <input
                  type="date"
                  name="birth"
                  id="birth"
                  onChange={(e) => setBirth(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="address">Present Address*</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your Address Here"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="status">Marital Status*</label>
                <select
                  name="status"
                  id="status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
              <div>
                <label htmlFor="gender">Gender*</label>
                <select
                  name="gender"
                  id="gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </div>
              <div>
                <label htmlFor="religion">Religion*</label>
                <select
                  name="religion"
                  id="religion"
                  onChange={(e) => setReligion(e.target.value)}
                >
                  <option value="Christianity">Christianity</option>
                  <option value="Islam">Islam</option>
                  <option value="Buddhism">Buddhism</option>
                  <option value="Sikhism">Sikhism</option>
                </select>
              </div>
              <div>
                <label htmlFor="height">Height*</label>
                <input
                  type="text"
                  name="height"
                  id="height"
                  placeholder="5.8'"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="weight">Weight*</label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="66"
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="language">Language*</label>
                <input
                  type="text"
                  name="language"
                  id="language"
                  placeholder="English"
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="skills">Your Skills:</label>
                <textarea
                  name="skills"
                  id="skills"
                  cols="30"
                  rows="10"
                  placeholder="Special Skills"
                  onChange={(e) => setSkills(e.target.value)}
                ></textarea>
              </div>
            </div>

            <h6>Education</h6>
            <div className="education">
              <div>
                <label htmlFor="level">Education Level**</label>
                <input
                  type="text"
                  name="level"
                  id="level"
                  placeholder="Bachelor Degree in CSE"
                  onChange={(e) => setLevel(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="major">My Major*</label>
                <input
                  type="text"
                  name="major"
                  id="major"
                  placeholder="Science"
                  onChange={(e) => setMajor(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="institute">Institute/University*</label>
                <input
                  type="text"
                  name="institute"
                  id="institute"
                  placeholder="Type your Institute Name..."
                  onChange={(e) => setInstitute(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="gpa">Result/GPA**</label>
                <input
                  type="text"
                  name="gpa"
                  id="gpa"
                  placeholder="4.75/5"
                  onChange={(e) => setGpa(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="startingPeriod">Starting Period*</label>
                <input
                  type="date"
                  name="startingPeriod"
                  id="startingPeriod"
                  onChange={(e) => setStartingPeriod(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="endingPeriod">Ending Period*</label>
                <input
                  type="date"
                  name="endingPeriod"
                  id="endingPeriod"
                  onChange={(e) => setEndingPeriod(e.target.value)}
                />
              </div>
            </div>
            <button type="submit">Update Changes</button>
          </form>
        </section>
      ) : null}
    </>
  );
};

export default EditResume;
