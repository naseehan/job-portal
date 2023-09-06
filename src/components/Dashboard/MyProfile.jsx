import React from 'react'

const MyProfile = ( active ) => {

  return (
    <>
    {active.className === 1  ?
    <section className="main-profile">
        <h5>My Profile</h5>
        <div className="profile-form">
            <form action="">
                <div>
                    <label htmlFor="fullName">Full Name*</label>
                    <input type="text" name="fullName" id="fullName" placeholder='Mr. Robert'/>
                </div>
                <div>
                    <label htmlFor="age">Your Age*</label>
                    <input type="text" name="age" id="age" placeholder='21 Years'/>
                </div>
                <div>
                    <label htmlFor="location">Current Location*</label>
                    <input type="text" name="location" id="location" placeholder='India, Kerala'/>
                </div>
                <div>
                    <label htmlFor="number">Phone Number*</label>
                    <input type="text" name="number" id="number" placeholder='+91 7034******'/>
                </div>
                <div>
                    <label htmlFor="email">Email*</label>
                    <input type="text" name="email" id="email" placeholder='info@example.com'/>
                </div>
                <div>
                    <label htmlFor="link">Website Link*</label>
                    <input type="text" name="link" id="link" placeholder='https://example.com'/>
                </div>
                <div>
                    <label htmlFor="place">Current Job Place</label>
                    <input type="text" name="place" id="place" placeholder='Company Name'/>
                </div>
                <div>
                    <label htmlFor="designation">Designation*</label>
                    <input type="text" name="designation" id="designation" placeholder='UI/UX Engineer'/>
                </div>
                <div>
                    <label htmlFor="qualification">Qualification*</label>
                    <input type="text" name="qualification" id="qualification" placeholder='BSC'/>
                </div>
                <div>
                    <label htmlFor="language">Language*</label>
                    <input type="text" name="language" id="language" placeholder='English'/>
                </div>
                <div>
                    <label htmlFor="description">Description*</label>
                    <input type="text" name="description" id="description" placeholder='Write Something...'/>
                </div>
                <button type='submit'>Update Profile</button>
            </form>
        </div>
    </section>
    : null}
    </>
  )
}

export default MyProfile