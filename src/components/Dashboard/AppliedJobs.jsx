import React from 'react'
import { useSelector } from 'react-redux';


const AppliedJobs = ({className,appliedJob}) => {


    // const appliedJob = useSelector((state) => state.appliedJob);
console.log(appliedJob);

  return (
    <>
    {className === 2 ?

    <section className="applied-jobs">
        <div className="table-date">
            <h5>Applied Jobs:</h5>
            <table>
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Apply Date</th>
                        <th>Company</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appliedJob.map((job, index) => (
                    <tr >
                        <td>
                            <div className="company-details">
                                <div className="top">
                                        <h6>{job.jobTitle}</h6>
                                        <p>1 Days ago</p>
                                </div>
                                <div className="bottom">
                                        <p> {job.jobPlace}</p>
                                        <p> {job.budget}</p>
                                </div>
                            </div>
                        </td>
                        <td aria-label='Date'>
                            <p>03/07/2022</p>
                        </td>
                        <td className='company-name'>
                            <p>Tech.Bath Com...</p>
                        </td>
                        <td className='status-button'>
                            <button>Viewed</button>
                        </td>
                    </tr>
                     ))} 
                </tbody>
            </table>
        </div>
    </section>

    : null
    }
    </>
  )
}

export default AppliedJobs