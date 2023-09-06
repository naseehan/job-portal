import './App.css';
import HomePage from './Pages/HomePage';
import {Routes, Route, useLocation} from 'react-router-dom'
import Jobs from './Pages/Jobs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './Pages/About';
import SingleBlog from './Pages/SingleBlog';
import JobDetails from './Pages/JobDetails';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProfileSection from './Pages/ProfileSection';
// import MyProfile from './components/Dashboard/MyProfile';
import { useEffect, useState } from 'react';
import CompanyDashboard from './Pages/CompanyDashboard';
import ChatBot from './components/ChatBot';
// import '../src/assets/scss/style.scss'


// import 'jquery';
// import 'popper.js';
// import 'bootstrap';
// // import 'slicknav';
// import 'owl.carousel';
// // import 'jquery.magnific-popup';
// import 'wow.js';
// import 'jquery.scrollup';
// // import 'jquery.nice-select';
// import 'jquery.sticky';
// // import 'jquery.form';
// // import 'jquery.validate';
// import 'jquery.ajaxchimp';

function App() {

const location = useLocation()
const [userType, setUserType] = useState(null)
const [userId, setUserId] = useState("")
const [appliedJob, setAppliedJob] = useState([])

useEffect(() => {
  const storedUserType = localStorage.getItem('userType');
  if (storedUserType) {
    setUserType(storedUserType === 'candidate');
  }
}, []);


const isLocation = location.pathname === '/login' || location.pathname === '/register'


  return (
    <div className="App">

     {isLocation ? null : <Navbar userType={userType}/>}
     <ChatBot />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/job' element={<Jobs />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<SingleBlog />} />
        <Route path='/jobDetails' element={<JobDetails setAppliedJob={setAppliedJob}/>} />
        <Route path='contact' element={<Contact />} />
        <Route path='/login' element={<Login userType={userType} setUserId={setUserId} setUserType={setUserType} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={userType? <ProfileSection userId={userId} appliedJob={appliedJob}/> : <CompanyDashboard />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
