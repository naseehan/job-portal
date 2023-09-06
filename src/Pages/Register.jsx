import React, { useState } from 'react'
import '../stylePages/Register/App.css'
import '../stylePages/Login/App.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'

const Register = () => {


const [candidate, setCandidate] = useState(true)
const [company, setCompany] = useState(false)
const [button, setButton] = useState(true)
const [candidateName, setCandidateName] = useState("")
const [candidateEmail, setCandidateEmail] = useState("")
const [candidatePassword, setCandidatePassword] = useState("")
const [success, setSuccess] = useState(false)
const [userNameError, setUserNameError] = useState('')
const [validation, setValidation] = useState('')

// company states
const [name, setName] = useState("")
const [companyEmail, setCompanyEmail] = useState("")
const [companyName, setCompanyName] = useState("")
const [companyType, setCompanyType] = useState("")
const [companyPassword, setCompanyPassword] = useState("")

const navigate = useNavigate()


const handleCandidate = (e) => {
    e.preventDefault()
    setCompany(false)
    setCandidate(true)
    setButton(true)
}
const handleCompany = (e) => {
    e.preventDefault()
    setCandidate(false)
    setCompany(true)
    setButton(false)
}

const validationSchema = Yup.object().shape({
  candidateName: Yup.string().required('Name is required'),
  candidateEmail: Yup.string().email('Invalid email').required('Email is required'),
  candidatePassword: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
});

const companyValidation = Yup.object().shape({
  name: Yup.string().required('User Name is required'),
  companyEmail: Yup.string().email('Invalid email').required('Email is required'),
  companyPassword: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  companyType: Yup.string().required('Please Select One'),
  companyName: Yup.string().required('Company Name is required'),
});

// handle user details
const handleSubmit = async (e) =>{
  e.preventDefault()
  
  try{      
    await validationSchema.validate({ candidateName, candidateEmail, candidatePassword }, { abortEarly: false });

    await axios.post(`${process.env.REACT_APP_BASE_URL}/candidate/register`, {candidateName, candidateEmail, candidatePassword})
    
    setSuccess(true)

    setTimeout(() => {
      navigate("/login")
    }, 2000)
  } catch (error) {
    if(error.name === 'ValidationError') {
      const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
    })
    setValidation(validationErrors)
  }else if(error.response.status === 300) {
      setUserNameError('Username already exists')
    }
    setTimeout(() =>{
      setUserNameError(null)
    }, 2000)
  }
}
// handle company details
const handleCompanySubmit = async(e) => {
  e.preventDefault()

  try {   

    await companyValidation.validate({ name, companyEmail, companyPassword, companyType, companyName }, { abortEarly: false });

    await axios.post(`${process.env.REACT_APP_BASE_URL}/company/register`, {name, companyEmail, companyName, companyType, companyPassword})

    navigate('/login')

  } catch (error) {
    console.log(error);
    if(error.name === 'ValidationError') {
      const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
    })
    setValidation(validationErrors)
  }
  // else if(error.response.status === 300) {
  //     setUserNameError('Username already exists')
  //   }
    // setTimeout(() =>{
    //   setUserNameError(null)
    // }, 2000)
  }
}


  return (
    <section className="register-section login-section">
        <div className="register-form">
            <h3>Register Account</h3>
            {userNameError && <p className='name-exist'>{userNameError}</p>}
            <p className={`success ${success ? 'success-true' : ""}`}>Successfully Registered User</p>
            <div className="register-type">
                <button 
                    onClick={handleCandidate}
                    className={`candidate-button ${button ? "active" : ""}`}>
                    Candidate
                </button>
                <button 
                    onClick={handleCompany}
                    className={`company-button ${button ? "" : "active"}`}>
                    Company
                </button>
            </div>
        </div>
        {/* candidate form */}
        <div className={`candidate-form login-form ${candidate ? "" : "hidden-candidate"}`} id='candidate'>
            <form action="" onSubmit={handleSubmit}>
          <label htmlFor="candidateName">Full Name*</label>
          <input type="text" name="candidateName" id="candidateName" placeholder='Mr. Robert' value={candidateName} onChange={(e) => setCandidateName(e.target.value)}/>
          {validation.candidateName && <span className="name-exist">{validation.candidateName}</span>}
          
          <label htmlFor="candidateEmail">Email*</label>
          <input type="email" name="candidateEmail" id="candidateEmail" placeholder='info@example.com' value={candidateEmail} onChange={(e) => setCandidateEmail(e.target.value)}/>
          {validation.candidateEmail && <span className="name-exist">{validation.candidateEmail}</span>}
          
          <label htmlFor="candidatePassword">Password*</label>
          <input type="password" name="candidatePassword" id="candidatePassword" placeholder='Password' value={candidatePassword} onChange={(e) => setCandidatePassword(e.target.value)}/>          {validation.name && <span className="name-exist">{validation.name}</span>}
          {validation.candidatePassword && <span className="name-exist">{validation.candidatePassword}</span>}
          
          <button type='submit'>Sign Up</button>
           <div className="to-signup">
                <p>Already have an account? </p>
                <Link to="/login">Login</Link>
            </div>
          </form>
        </div>


        {/* company form */}
        <div className={`company-form login-form ${company ? "" : "hidden-company"}`} id='company'>
            <form action="" onSubmit={handleCompanySubmit}>
          <label htmlFor="name">Full Name*</label>
          <input type="text" name="name" id="name" placeholder='Mr. Robert' value={name} onChange={(e) => setName(e.target.value)}/>
          {validation.name && <span className="name-exist">{validation.name}</span>}


          <label htmlFor="companyEmail">Email*</label>
          <input type="email" name="companyEmail" id="companyEmail" placeholder='info@example.com' value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)}/>
          {validation.companyEmail && <span className="name-exist">{validation.companyEmail}</span>}


          <label htmlFor="companyName">Company Name*</label>
          <input type="text" name="companyName" id="companyName" placeholder='Apple Co.' value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
          {validation.companyName && <span className="name-exist">{validation.companyName}</span>}


          <label htmlFor="companyType">Company Type*</label>
          <select name="companyType" id="companyType" value={companyType} onChange={(e) => setCompanyType(e.target.value)} >
            <option value="">Select One</option>
            <option value="Digital Agency">Digital Agency</option>
            <option value="Digital Marketing Agency">Digital Marketing Agency</option>
            <option value="Software Company">Software Company</option>
          </select>
          {validation.companyType && <span className="name-exist">{validation.companyType}</span>}


          <label htmlFor="companyPassword">Password*</label>
          <input type="password" name="companyPassword" id="companyPassword" placeholder='Password' value={companyPassword} onChange={(e) => setCompanyPassword(e.target.value)}/>
          {validation.companyPassword && <span className="name-exist">{validation.companyPassword}</span>}


          <button type='submit'>Sign Up</button>
          <div className="to-signup">
                <p>Already have an account? </p>
                <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Register