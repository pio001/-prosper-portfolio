import React from 'react'
import "./about.css"

const AboutCard = () => {
  return (
    <div >
        <div className='container-fluid'>
            <div class="row ">
                <div class="col-sm-6">
                    <div class="card shadow">
                        <div class="card-body">
                            <img src="https://media.istockphoto.com/id/637053168/photo/emoji-head-woman-using-smart-phone.jpg?b=1&s=170667a&w=0&k=20&c=rENgpoJrLASArlbqKu-NQ4A505ux85wShl5HHBXi-Ng=" 
                                className="card-img-top rounded-circle" alt="passport"/>
                            <h5 class="card-title text-center text-danger">My Services</h5>
                            <p class="card-text">
                                 <div className=''>
                                    <ul className="list-group list-group-flush ">
                                        <li className="list-group-item">Full Stack Devloper</li>
                                        <li className="list-group-item">Software Tester</li>
                                        <li className="list-group-item">...............</li>
                                    </ul>
                                 </div>
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title text-center text-danger">About Me</h5>
                            <p class="card-text">       I am passionate and dedicated frontend devloper with a keen eye for detail
                                                    and a love for creating intutive user eexprience.With a strong foundation in HTML,CSS,and
                                                    JavaScript,I strive to build visually appealing and responsive websites
                                                    that deliver seamless functionality.Let's bring your ideas to life!</p>
                            <a href="#" class="btn shadow text-danger ">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                 </svg>
                                My CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='position'>
            <div className='container-fluid'>
                <div className='card-deck'>
                    <div className='card shadow'>
                        <div className=' my-skills'>
                            <ul className="list-group ">
                               <center> <li className="list-group-item text-center b text-danger">Skills</li> </center>
                                
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item b text-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                                </li>
                                <li className="list-group-item b">HTML/CSS</li>
                            </ul>
                            <ul className="list-group list-group-horizontal"> 
                                <li className="list-group-item b text-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </li>
                                <li className="list-group-item b">JavaScript</li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item b text-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </li>
                                <li className="list-group-item b">ReactJs/Redux</li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item b text-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </li>
                                <li className="list-group-item b">NodeJs</li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item b text-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </li>
                                <li className="list-group-item b">EmailJs</li>
                            </ul>
                        </div>
                    </div> 
                    <div className='card shadow'>
                        <div className=' my-skills'>
                            <ul className="list-group ">
                             <center><li className="list-group-item b text-danger">Most Used Tools</li></center>
                                
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item b text-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </li>
                                <li className="list-group-item b">VSCode</li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item b text-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </li>
                                <li className="list-group-item b">Git</li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item b text-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </li>
                                <li className="list-group-item b">GitHub</li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item b text-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </li>
                                <li className="list-group-item b">Chrome Browser</li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item b text-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg text-danger" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </li>
                                <li className="list-group-item b">NPM</li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item b text-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                    </svg>
                                </li>
                                <li className="list-group-item b">React Router Dom</li>
                            </ul>
                         </div>
                    </div>

                </div>
            </div>
           
        </div>
    </div>
     
  )
}

export default AboutCard