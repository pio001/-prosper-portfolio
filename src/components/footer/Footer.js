import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='container-fluid'>
          <div className="row footer-shadow">
            <div className="col-6 col-sm-6 footer">
              <div className="card footer">
                <div className="card-body ">
                  <h5 className="card-title">About The Company</h5>
                  <p className="card-text">
                          This is me Prosper Oforah. CEO &
                          Founder of POP-CEE. I enjoy discussing
                          new projects and design challenges..
                    </p>  
                    <div className=" ">
                      <Link to='/Contact' className="btn text-danger">
                        <span className="spinner-grow spinner-grow-sm"></span>
                          Contact Me
                       <span className="spinner-grow spinner-grow-sm"></span>
                      </Link>
                    </div> 
                 
                </div>
              </div>
            </div> 
            <div className="col-6 col-sm-6 ">
              <div className="card footer">
                <div className="card-body">
                  <h5 class="card-title "></h5>
                  <p className="card-text"><i>copy rights@2023</i>.</p>
                  <div className=" ">
                      <Link to='/' className="btn text-danger">
                        <span className="spinner-grow spinner-grow-sm"></span>
                          Go To Top
                       <span className="spinner-grow spinner-grow-sm"></span>
                      </Link>
                    </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer