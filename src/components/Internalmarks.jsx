import axios from 'axios'
import React, { useState } from 'react'

const Internalmarks = () => {
    const[output,changeOutput]=useState({
        name:"",admno:"",batch:"",internalmark:"",attendance:"",exam:"",assignment:""
    })
    const[input,changeInput]=useState({
        name:"",admno:"",batch:"",presents:"",totalpresents:"",sems1:"",totalsems1:"",sems2:"",totalsems2:"",assignments1:"",assignments2:""
    })
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }


    const readInput = () => {
        console.log(input)
        axios.post("http://localhost:4000/intadd", input).then(
            (response) => {
                changeOutput(response.data)
            }
        ).catch()
    }
  return (
    <div>
        <h1 style={{ backgroundColor: 'black', color: 'white', padding: '10px', textAlign: 'center' }}>
  INTERNAL SCORE CALCULATOR
</h1>
<br></br>

        <div className="container"style={{ backgroundColor: "#f2f2f2", padding: "20px", borderRadius: "10px" }}>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Admission Number</label>
                            <input type="text" className="form-control" name='admno' value={input.admno} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Batch</label>
                            <input type="text" className="form-control" name='batch' value={input.batch} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">No.of days present</label>
                            <input type="text" className="form-control" name='presents' value={input.presents} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Total number of present</label>
                            <input type="text" className="form-control"name='totalpresents' value={input.totalpresents} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">First Sem mark</label>
                            <input type="text" className="form-control"name='sems1' value={input.sems1} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">First sem Total </label>
                            <input type="text" className="form-control" name='totalsems1' value={input.totalsems1} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Second sem mark</label>
                            <input type="text" className="form-control" name='sems2' value={input.sems2} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">second sem total</label>
                            <input type="text" className="form-control"name='totalsems2' value={input.totalsems2} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Assignment 1</label>
                            <input type="text" className="form-control" name='assignments1' value={input.assignments1} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className="form-label">Assignment 2</label>
                            <input type="text" className="form-control" name='assignments2' value={input.assignments2} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                              <button className="btn btn-info"onClick={readInput}>Calculate</button>
                        </div>
                       <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card" style={{ backgroundColor: "#dedbdbff", color: "#000" }}>
                                    <div class="card-body">
                                        <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Score</h3>
                                        <br></br>
                                        <h5 class="card-title">Name: {output.name} </h5>
                                        <h5 class="card-title">Admission Number: {output.admno} </h5>
                                        <h5 class="card-title">Batch: {output.batch} </h5>
                                        <h5 class="card-title">Internal Mark: {output.internalmark} </h5>
                                        <h5 class="card-title">Attandance Mark: {output.attendance} </h5>
                                        <h5 class="card-title">Assignment Mark: {output.assignment} </h5>
                                        <h5 class="card-title">Exam Mark: {output.exam} </h5>
                                    </div>
                                </div>
                            </div>
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Internalmarks