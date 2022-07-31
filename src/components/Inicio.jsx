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
              <h2 className="section-heading text-uppercase">Nuestro Local</h2>
              <h3 className="section-subheading text-muted">Visitanos</h3>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./assets/img/about/frenteDia.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/img/about/foto exterior.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="./assets/img/about/interior.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
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
                             <div className="portfolio-caption-subheading text-muted">Reservorios de agua para radiadores</div> 
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
                              <img className="img-fluid" src="assets/img/team/felpas.jpg" alt="..." />
                          </a>
                          <div className="portfolio-caption">
                              <div className="portfolio-caption-heading">Felpas</div>
                              <div className="portfolio-caption-subheading text-muted">Felpas para pisos</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  
      <section className="page-section" id="about">
          <div className="container">
              
              <ul className="timeline">
                  <li>
                      <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/portfolio/productos/correasdentromotor.jpg" alt="..." /></div>
                      <div className="timeline-panel">
                          <div className="timeline-heading">
                              <h4>Correas Automotor</h4>
                              
                          </div>
                          <div className="timeline-body"><p className="text-muted">Trapezoidales, Poly-V, De distribución, Industriales</p></div>
                      </div>
                  </li>
                  <li className="timeline-inverted">
                      <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/portfolio/productos/aguaradiador.jpg" alt="..." /></div>
                      <div className="timeline-panel">
                          <div className="timeline-heading">
                              <h4>Mangueras de Automotor</h4>
                              
                          </div>
                          <div className="timeline-body"><p className="text-muted">Para todo tipo de vehículos</p></div>
                      </div>
                  </li>
                  <li>
                      <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/portfolio/productos/dondevamangueraagua.jpg" alt="..." /></div>
                      <div className="timeline-panel">
                          <div className="timeline-heading">
                              <h4>Asesoramiento a nuestros clientes</h4>
                              
                          </div>
                          <div className="timeline-body"><p className="text-muted">Todo lo necesario para el motor de tu vehículo no importa la marca o el modelo</p></div>
                      </div>
                  </li>
                  <li className="timeline-inverted">
                      <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/portfolio/productos/mangueras.jpg" alt="..." /></div>
                      <div className="timeline-panel">
                          <div className="timeline-heading">
                              <h4>Mangueras Industriales y Hogar</h4>
                              
                          </div>
                          <div className="timeline-body"><p className="text-muted">Mangueras para la industria y el hogar</p></div>
                      </div>
                  </li>
                  
              </ul>
          </div>
      </section>
      
      <section className="page-section bg-light" id="team">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">Mas Productos</h2>
                  
              </div>
              <div className="row">
                  <div className="col-lg-4">
                      <div className="team-member">
                          <img className="mx-auto rounded-circle" src="assets/img/team/pisoscolonial.jpg" alt="..." />
                          <h4>Pisos</h4>
                          
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="team-member">
                          <img className="mx-auto rounded-circle" src="assets/img/team/repuestosautomotor.jpg" alt="..." />
                          <h4>Repuestos Automotor</h4>
                          
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="team-member">
                          <img className="mx-auto rounded-circle" src="assets/img/team/termostato.jpg" alt="..." />
                          
                          <p className="text-muted">Termostatos</p>
                          
                      </div>
                  </div>
              </div>
              
          </div>
      </section> 
  
       
     
      <section className="page-section" id="contact">
          <div className="container">
              <div className="text-center">
                  <h2 className="section-heading text-uppercase">CONTACTO</h2>
                  <h3 className="section-subheading text-muted">Tu consulta no nos molesta</h3>
              </div>
              
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="row align-items-stretch mb-5">
                      <div className="col-md-6">
                          <div className="form-group">
                           
                              <input className="form-control" id="name" type="text" placeholder="Nombre*" data-sb-validations="required" />
                              <div className="invalid-feedback" data-sb-feedback="name:required">Nombre</div>
                          </div>
                          <div className="form-group">
                            
                              <input className="form-control" id="email" type="email" placeholder="Email *" data-sb-validations="required,email" />
                              <div className="invalid-feedback" data-sb-feedback="email:required">e-mail</div>
                              <div className="invalid-feedback" data-sb-feedback="email:email">Email invalido</div>
                          </div>
                          <div className="form-group mb-md-0">
                            
                              <input className="form-control" id="phone" type="tel" placeholder="Teléfono *" data-sb-validations="required" />
                              <div className="invalid-feedback" data-sb-feedback="phone:required">Teléfono</div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="form-group form-group-textarea mb-md-0">
                           
                              <textarea className="form-control" id="message" placeholder="Mensaje *" data-sb-validations="required"></textarea>
                              <div className="invalid-feedback" data-sb-feedback="message:required">Mensaje</div>
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
                  <div className="col-lg-4 text-lg-start">Copyright &copy; 2022</div>
                  <div className="col-lg-4 my-3 my-lg-0">
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <div className="col-lg-4 text-lg-end">
                      <a className="link-dark text-decoration-none me-3" href="#!">Política de privacidad</a>
                    
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
