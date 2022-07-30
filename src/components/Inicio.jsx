import React from "react";

const Inicio = () => {

return (

    <div id="page-top">
  
      <header className="masthead">
          <div className="container">
              <div className="masthead-subheading"></div>
             
          </div>
      </header>

      <section className="page-section" id="services">
          <div className="container">
              <div className="text-center">
    
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./assets/img/about/frenteDia.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./assets/img/about/foto exterior.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./assets/img/about/interior.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section> 
   
      <section className="page-section bg-light" id="portfolio">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">Nuestros Productos</h2>
                  <h3 className="section-subheading text-muted">La mejor calidad y precio.</h3>
              </div>
              <div className="row">
                  <div className="col-lg-4 col-sm-6 mb-4">
                   
                      <div className="portfolio-item">
                          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                              <div className="portfolio-hover">
                                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                              </div>
                              <img className="img-fluid" src="assets/img/portfolio/productos/correasdentromotor.jpg" alt="..." />
                          </a>
                          <div className="portfolio-caption">
                              <div className="portfolio-caption-heading">Correas de Automotor</div>
                              <div className="portfolio-caption-subheading text-muted">Todo tipo de correas para el automotor</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
              
                    <div className="portfolio-item">
                          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                              <div className="portfolio-hover">
                                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                              </div>
                              <img className="img-fluid" src="assets/img/portfolio/productos/aguaradiador.jpg" alt="..." />
                          </a>
                          <div className="portfolio-caption">
                              <div className="portfolio-caption-heading">Radiador</div>
                              <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4">
                  
                      <div className="portfolio-item">
                          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                              <div className="portfolio-hover">
                                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                              </div>
                              <img className="img-fluid" src="assets/img/portfolio/productos/dondevamangueraagua.jpg" alt="..." />
                          </a>
                          <div className="portfolio-caption">
                              <div className="portfolio-caption-heading">Mangueras de agua para el automotor</div>
                              <div className="portfolio-caption-subheading text-muted">Mangueras de agua</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            
                      <div className="portfolio-item">
                          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                              <div className="portfolio-hover">
                                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                              </div>
                              <img className="img-fluid" src="assets/img/portfolio/productos/diagnosticodemanguera.jpg" alt="..." />
                          </a>
                          <div className="portfolio-caption">
                              <div className="portfolio-caption-heading">Mangueras</div>
                              <div className="portfolio-caption-subheading text-muted">Diagnóstico de mangueras</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                  
                      <div className="portfolio-item">
                          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                              <div className="portfolio-hover">
                                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                              </div>
                              <img className="img-fluid" src="assets/img/portfolio/productos/mangueras.jpg" alt="..." />
                          </a>
                          <div className="portfolio-caption">
                              <div className="portfolio-caption-heading">Mangueras</div>
                              <div className="portfolio-caption-subheading text-muted">Mangueras para la Industria y el Hogar</div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                   
                      <div className="portfolio-item">
                          <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                              <div className="portfolio-hover">
                                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                              </div>
                              <img className="img-fluid" src="assets/img/portfolio/productos/abrazaderas.jpg" alt="..." />
                          </a>
                          <div className="portfolio-caption">
                              <div className="portfolio-caption-heading">Abrazaderas</div>
                              <div className="portfolio-caption-subheading text-muted">Todo tipo de abrazaderas</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  
      <section className="page-section" id="about">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">About</h2>
                 
              </div>
              <ul className="timeline">
                  <li>
                      <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/portfolio/productos/correasdentromotor.jpg" alt="..." /></div>
                      <div className="timeline-panel">
                          <div className="timeline-heading">
                              <h4>2009-2011</h4>
                              <h4 className="subheading">Our Humble Beginnings</h4>
                          </div>
                          <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                      </div>
                  </li>
                  <li className="timeline-inverted">
                      <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/portfolio/productos/aguaradiador.jpg" alt="..." /></div>
                      <div className="timeline-panel">
                          <div className="timeline-heading">
                              <h4>March 2011</h4>
                              <h4 className="subheading">An Agency is Born</h4>
                          </div>
                          <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                      </div>
                  </li>
                  <li>
                      <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/portfolio/productos/dondevamangueraagua.jpg" alt="..." /></div>
                      <div className="timeline-panel">
                          <div className="timeline-heading">
                              <h4>December 2015</h4>
                              <h4 className="subheading">Transition to Full Service</h4>
                          </div>
                          <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                      </div>
                  </li>
                  <li className="timeline-inverted">
                      <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/portfolio/productos/mangueras.jpg" alt="..." /></div>
                      <div className="timeline-panel">
                          <div className="timeline-heading">
                              <h4>July 2020</h4>
                              <h4 className="subheading">Phase Two Expansion</h4>
                          </div>
                          <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                      </div>
                  </li>
                  <li className="timeline-inverted">
                      <div className="timeline-image">
                          <h4>
                              Be Part
                              <br />
                              Of Our
                              <br />
                              Story!
                          </h4>
                      </div>
                  </li>
              </ul>
          </div>
      </section>
      
      <section className="page-section bg-light" id="team">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
              <div className="row">
                  <div className="col-lg-4">
                      <div className="team-member">
                          <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                          <h4>Parveen Anand</h4>
                          <p className="text-muted">Lead Designer</p>
                          <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                          <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                          <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="team-member">
                          <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                          <h4>Diana Petersen</h4>
                          <p className="text-muted">Lead Marketer</p>
                          <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                          <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                          <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="team-member">
                          <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                          <h4>Larry Parker</h4>
                          <p className="text-muted">Lead Developer</p>
                          <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                          <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                          <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
              </div>
          </div>
      </section>
  
      <div className="py-5">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-3 col-sm-6 my-3">
                      <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." /></a>
                  </div>
                  <div className="col-md-3 col-sm-6 my-3">
                      <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." /></a>
                  </div>
                  <div className="col-md-3 col-sm-6 my-3">
                      <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." /></a>
                  </div>
                  <div className="col-md-3 col-sm-6 my-3">
                      <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." /></a>
                  </div>
              </div>
          </div>
      </div>
     
      <section className="page-section" id="contact">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">Contact Us</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
              
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="row align-items-stretch mb-5">
                      <div className="col-md-6">
                          <div className="form-group">
                           
                              <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                              <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                          </div>
                          <div className="form-group">
                            
                              <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                              <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                              <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                          </div>
                          <div className="form-group mb-md-0">
                            
                              <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                              <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="form-group form-group-textarea mb-md-0">
                           
                              <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                              <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                          </div>
                      </div>
                  </div>
                 
                  <div className="d-none" id="submitSuccessMessage">
                      <div className="text-center text-white mb-3">
                          <div className="fw-bolder">Form submission successful!</div>
                          To activate this form, sign up at
                          <br />
                          <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                      </div>
                  </div>
                  
                  <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
              </form>
          </div>
      </section>
     
      <footer className="footer py-4">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2021</div>
                  <div className="col-lg-4 my-3 my-lg-0">
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="col-lg-4 text-lg-end">
                      <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                      <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                  </div>
              </div>
          </div>
      </footer>
    
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-8">
                              <div className="modal-body">
                                 
                                  <h2 className="text-uppercase">Project Name</h2>
                                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <ul className="list-inline">
                                      <li>
                                          <strong>Client:</strong>
                                          Threads
                                      </li>
                                      <li>
                                          <strong>Category:</strong>
                                          Illustration
                                      </li>
                                  </ul>
                                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                      <i className="fas fa-times me-1"></i>
                                      Close Project
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-8">
                              <div className="modal-body">
                                
                                  <h2 className="text-uppercase">Project Name</h2>
                                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <ul className="list-inline">
                                      <li>
                                          <strong>Client:</strong>
                                          Explore
                                      </li>
                                      <li>
                                          <strong>Category:</strong>
                                          Graphic Design
                                      </li>
                                  </ul>
                                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                      <i className="fas fa-times me-1"></i>
                                      Close Project
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-8">
                              <div className="modal-body">
                             
                                  <h2 className="text-uppercase">Project Name</h2>
                                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <ul className="list-inline">
                                      <li>
                                          <strong>Client:</strong>
                                          Finish
                                      </li>
                                      <li>
                                          <strong>Category:</strong>
                                          Identity
                                      </li>
                                  </ul>
                                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                      <i className="fas fa-times me-1"></i>
                                      Close Project
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-8">
                              <div className="modal-body">
                               
                                  <h2 className="text-uppercase">Project Name</h2>
                                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <ul className="list-inline">
                                      <li>
                                          <strong>Client:</strong>
                                          Lines
                                      </li>
                                      <li>
                                          <strong>Category:</strong>
                                          Branding
                                      </li>
                                  </ul>
                                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                      <i className="fas fa-times me-1"></i>
                                      Close Project
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
     
      <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-8">
                              <div className="modal-body">
                              
                                  <h2 className="text-uppercase">Project Name</h2>
                                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <ul className="list-inline">
                                      <li>
                                          <strong>Client:</strong>
                                          Southwest
                                      </li>
                                      <li>
                                          <strong>Category:</strong>
                                          Website Design
                                      </li>
                                  </ul>
                                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                      <i className="fas fa-times me-1"></i>
                                      Close Project
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-lg-8">
                              <div className="modal-body">
                             
                                  <h2 className="text-uppercase">Project Name</h2>
                                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                  <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <ul className="list-inline">
                                      <li>
                                          <strong>Client:</strong>
                                          Window
                                      </li>
                                      <li>
                                          <strong>Category:</strong>
                                          Photography
                                      </li>
                                  </ul>
                                   {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.7450971705857!2d-67.69184708552721!3d-34.98804908036176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9678173e6393f92b%3A0xadf8a3c24531aa1!2sAtuel%20goma!5e0!3m2!1ses!2sar!4v1659185562782!5m2!1ses!2sar" 
                                    width="800" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>" */} 
                                  
                                  <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                      <i className="fas fa-times me-1"></i>
                                      Close Project
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
     
      
  </div>
  )};

  export default Inicio;
