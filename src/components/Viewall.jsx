import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [isLoading, changeLoading] = useState(
        true
    )

    const [studentData, changeStudentData] = useState(
          [ ] 

    )
    const fetchData = () => {
        axios.get("http://localhost:4000/viewall").then(
            (response) => {
                changeLoading(false)

                changeStudentData(response.data)
            }
        ).catch(() => {
            alert("Something Went Wrong")

        })
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div>
            <Navbar />
            <h1 className='header'><center>View All Marks</center></h1>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {isLoading ? (<div class="text-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>):(<table class="table table-striped  ">

                            <thead>
                                <tr>
                                   
                                    <th scope="col">Name</th>
                                    <th scope="col">Admission No</th>
                                     <th scope="col">No of present</th>
                                    <th scope="col">Days of present</th>
                                    <th scope="col">SEM 1</th>
                                    <th scope="col">SEM 1 Total</th>

                                    <th scope="col">SEM 2</th>
                                    <th scope="col">SEM 2 Total</th>
                                    <th scope="col">Assignment 1</th>
                                    <th scope="col">Assignment 2</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {studentData.map(
                                    (value, index) => {
                                        return (
                                            <tr>
                                               
                                                <td>{value.name}</td>
                                                <td>{value.admno}</td>
                                                
                                                <td>{value.presents}</td>
                                                <td>{value.totalpresents}</td>
                                                <td>{value.sems1}</td>
                                                <td>{value.totalsems1}</td>
                                                <td>{value.sems2}</td>
                                                <td>{value.totalsems2}</td>
                                                <td>{value.assignments1}</td>
                                                <td>{value.assignments2}</td>
                                                

                                            </tr>

                                        )
                                    }
                                )}
                            </tbody>

                        </table>)}

                        



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Viewall