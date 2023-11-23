<script setup lang="ts">

</script>

<template>
<section class="hero-section" id="section_1">
      <div class="section-overlay"></div>

      <div class="container d-flex justify-content-center align-items-center">
          <div class="row">

              <div class="col-12 mt-auto mb-5 text-center">
                  <small>Venta de Computadoras y Accesorios </small>

                  <h1 class="text-white mb-5">IT Pro</h1>

                  <a class="btn custom-btn smoothscroll" href="#section_2">Comprar Ahora</a>
              </div>

              <div class="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
                  <div class="date-wrap">
                      <h5 class="text-white">
                          <i class="custom-icon bi-clock me-2"></i>
                          09 - 18<sup>th</sup>, Lunes a Viernes
                      </h5>
                  </div>

                  <div class="location-wrap mx-auto py-3 py-lg-0">
                      <h5 class="text-white">
                          <i class="custom-icon bi-geo-alt me-2"></i>
                          I. Murguía # 392
                      </h5>
                  </div>

                  <div class="social-share">
                      <ul class="social-icon d-flex align-items-center justify-content-center">
                          <span class="text-white me-3">Nos encuentras en:</span>

                          <li class="social-icon-item">
                              <a href="#" class="social-icon-link">
                                  <span class="bi-facebook"></span>
                              </a>
                          </li>

                          <li class="social-icon-item">
                              <a href="#" class="social-icon-link">
                                  <span class="bi-twitter"></span>
                              </a>
                          </li>

                          <li class="social-icon-item">
                              <a href="#" class="social-icon-link">
                                  <span class="bi-instagram"></span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>

      <div class="video-wrap">
          <video autoplay="" loop="" muted="" class="custom-video" poster="">
              <source src="@/assets/video/AsusVideo.mp4" type="video/mp4">

              Your browser does not support the video tag.
          </video>
      </div>
  </section>


  <section class="about-section section-padding" id="section_2">
      <div class="container">
          <div class="row">

              <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                  <div class="services-info">
                      <h2 class="text-white mb-4">Acerca de IT Pro</h2>

                      <p class="text-white">Somos una empresa comercializadora de productos exclusivos para los amantes de los videojuegos y la tecnología.
                         Formada por profesionales emprendedores y amantes de la tecnología.</p>

                      <h6 class="text-white mt-4">IT Pro</h6>

                      <p class="text-white">Nuestro gran proyecto es brindarle a toda esa gran familia de videojugadores un punto de encuentro donde puedan ver los precios, fotos, 
                        disponibilidad de stock a cualquier sin que tengan que salir de su casa y desde donde sea..</p>

                      <h6 class="text-white mt-4">IT Pro</h6>

                      <p class="text-white">Esperamos convertirnos en la marca relacionada a videojuegos más importante de Bolivia y para ello esperamos contar con tu apoyo..</p>
                  </div>
              </div>

              <div class="col-lg-6 col-12">
                  <div class="about-text-wrap">
                      <img src="@/assets/images/tecnologia.jpg" class="about-image img-fluid">

                      <div class="about-text-info d-flex">
                          <div class="d-flex">
                              <i class="about-text-icon bi-person"></i>
                          </div>


                          <div class="ms-4">
                              <h3>Tecnología</h3>

                              <p class="mb-0">La tecnología que te hace la vida más fácil</p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </section>


  <section class="artists-section section-padding" id="section_3">
      <div class="container">
          <div class="row justify-content-center">

              <div class="col-12 text-center">
                  <h2 class="mb-4">Catálogo</h2>
              </div>

              <div class="col-lg-5 col-12">
                  <div class="artists-thumb">
                      <div class="artists-image-wrap">
                          <img src="@/assets/images/artists/asus.jpg"
                              class="artists-image img-fluid">
                      </div>

                      <div class="artists-hover">
                          <p>
                              <strong>Nombre:</strong>
                              Laptop
                          </p>

                          <p>
                              <strong>Marca:</strong>
                              Asus
                          </p>

                          <p>
                              <strong>Precio:</strong>
                              3500, Bs
                          </p>

                          <hr>

                          <p class="mb-0">
                              <strong>Canal de YouTube:</strong>
                              <a href="#">Asus Oficial</a>
                          </p>
                      </div>
                  </div>
              </div>

              <div class="col-lg-5 col-12">
                  <div class="artists-thumb">
                      <div class="artists-image-wrap">
                          <img src="@/assets/images/artists/silla.jpg"
                              class="artists-image img-fluid">
                      </div>

                      <div class="artists-hover">
                          <p>
                              <strong>Nombre:</strong>
                              Strix
                          </p>

                          <p>
                              <strong>Precio:</strong>
                              1700 Bs
                          </p>

                          <p>
                              <strong>Marca:</strong>
                              Asus
                          </p>

                          <hr>

                          <p class="mb-0">
                              <strong>Youtube Channel:</strong>
                              <a href="#">Asus Official</a>
                          </p>
                      </div>
                  </div>

                  <div class="artists-thumb">
                      <img src="@/assets/images/artists/teclado.jpg"
                          class="artists-image img-fluid">

                      <div class="artists-hover">
                          <p>
                              <strong>Name:</strong>
                              Teclado Redragon
                          </p>

                          <p>
                              <strong>Precio:</strong>
                              1500 Bs
                          </p>

                          <p>
                              <strong>Marca:</strong>
                              Redragon
                          </p>

                          <hr>

                          <p class="mb-0">
                              <strong>Youtube Channel:</strong>
                              <a href="#">Redragon Official</a>
                          </p>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </section>


  <section class="schedule-section section-padding" id="section_4">
      <div class="container">
          <div class="row">

              <div class="col-12 text-center">
                  <h2 class="text-white mb-4">Promociones</h2>

                      <div class="table-responsive">
                          <table class="schedule-table table table-dark">
                              <thead>
                                  <tr>
                                      <th scope="col">Día</th>

                                      <th scope="col">Lunes</th>

                                      <th scope="col">Miércoles</th>

                                      <th scope="col">Viernes</th>

                                  </tr>
                              </thead>

                              <tbody>
                                  <tr>
                                      <th scope="row">PC</th>

                                      <td class="table-background-image-wrap -background-image">
                                          <h3>ASUS</h3>

                                          <p class="mb-2">50% Off</p>

                                          <p>Aprovecha</p>

                                          <div class="section-overlay"></div>
                                      </td>

                                      <td style="background-color: #F3DCD4"></td>

                                      <td class="table-background-image-wrap -background-image">
                                          <h3>HP</h3>

                                          <p class="mb-2">50% Off</p>

                                          <p>Aprovecha</p>

                                          <div class="section-overlay"></div>
                                      </td>
                                  </tr>

                                  <tr>
                                      <th scope="row">PC</th>

                                      <td style="background-color: #ECC9C7"></td>

                                      <td>
                                          <h3>Dell</h3>

                                          <p class="mb-2">50% Off</p>

                                          <p>Aprovecha</p>
                                      </td>

                                      <td style="background-color: #D9E3DA"></td>
                                  </tr>

                                  <tr>
                                      <th scope="row">PC</th>

                                      <td class="table-background-image-wrap -background-image">
                                          <h3>MSI</h3>

                                          <p class="mb-2">50% Off</p>

                                          <p>Aprovecha</p>

                                          <div class="section-overlay"></div>
                                      </td>

                                      <td style="background-color: #D1CFC0"></td>

                                      <td>
                                          <h3>Legion</h3>

                                          <p class="mb-2">50% Off</p>

                                          <p>Aprovecha</p>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
              </div>
          </div>
      </div>
  </section>


  <section class="pricing-section section-padding section-bg" id="section_5">
      <div class="container">
          <div class="row">

              <div class="col-lg-8 col-12 mx-auto">
                  <h2 class="text-center mb-4">Black Friday</h2>
              </div>

              <div class="col-lg-6 col-12">
                  <div class="pricing-thumb">
                      <div class="d-flex">
                          <div>
                              <h3><small>Laptop ASUS</small> $1200</h3>

                              <p>Incluye:</p>
                          </div>

                          <p class="pricing-tag ms-auto">Aprovecha<span>50%</span></p>
                      </div>

                      <ul class="pricing-list mt-3">
                          <li class="pricing-list-item">Mouse</li>

                          <li class="pricing-list-item">Mochila</li>

                          <li class="pricing-list-item">Parlantes</li>

                          <li class="pricing-list-item">Cooler</li>
                      </ul>

                      <a class="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
                          <span>Comprar</span>
                          <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                  <circle cx="16" cy="16" r="15.5"></circle>
                                  <line x1="10" y1="18" x2="16" y2="12"></line>
                                  <line x1="16" y1="12" x2="22" y2="18"></line>
                              </g>
                          </svg>
                      </a>
                  </div>
              </div>

              <div class="col-lg-6 col-12 mt-4 mt-lg-0">
                  <div class="pricing-thumb">
                      <div class="d-flex">
                          <div>
                              <h3><small>Laptop MSI</small> $2400</h3>

                              <p>Incluye:</p>
                          </div>
                      </div>

                      <ul class="pricing-list mt-3">
                          <li class="pricing-list-item">Mouse</li>

                          <li class="pricing-list-item">Mochila</li>

                          <li class="pricing-list-item">Cooler</li>

                          <li class="pricing-list-item">Parlante</li>

                          <li class="pricing-list-item">Audífonos Gamer</li>
                      </ul>

                      <a class="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
                          <span>Comprar</span>
                          <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                  <circle cx="16" cy="16" r="15.5"></circle>
                                  <line x1="10" y1="18" x2="16" y2="12"></line>
                                  <line x1="16" y1="12" x2="22" y2="18"></line>
                              </g>
                          </svg>
                      </a>
                  </div>
              </div>

          </div>
      </div>
  </section>


  <section class="contact-section section-padding" id="section_6">
      <div class="container">
          <div class="row">

              <div class="col-lg-8 col-12 mx-auto">
                  <h2 class="text-center mb-4">Contáctanos</h2>

                  <nav class="d-flex justify-content-center">
                      <div class="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab"
                          role="tablist">
                          <button class="nav-link active" id="nav-ContactForm-tab" data-bs-toggle="tab"
                              data-bs-target="#nav-ContactForm" type="button" role="tab"
                              aria-controls="nav-ContactForm" aria-selected="false">
                              <h5>Formulario</h5>
                          </button>

                          <button class="nav-link" id="nav-ContactMap-tab" data-bs-toggle="tab"
                              data-bs-target="#nav-ContactMap" type="button" role="tab"
                              aria-controls="nav-ContactMap" aria-selected="false">
                              <h5>Google Maps</h5>
                          </button>
                      </div>
                  </nav>

                  <div class="tab-content shadow-lg mt-5" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="nav-ContactForm" role="tabpanel"
                          aria-labelledby="nav-ContactForm-tab">
                          <form class="custom-form contact-form mb-5 mb-lg-0" action="#" method="post"
                              role="form">
                              <div class="contact-form-body">
                                  <div class="row">
                                      <div class="col-lg-6 col-md-6 col-12">
                                          <input type="text" name="contact-name" id="contact-name"
                                              class="form-control" placeholder="Nombre y Apellido" required>
                                      </div>

                                      <div class="col-lg-6 col-md-6 col-12">
                                          <input type="email" name="contact-email" id="contact-email"
                                              pattern="[^ @]*@[^ @]*" class="form-control"
                                              placeholder="Correo Electrónico" required>
                                      </div>
                                  </div>

                                  <input type="text" name="contact-company" id="contact-company"
                                      class="form-control" placeholder="Número de Celular" required>

                                  <textarea name="contact-message" rows="3" class="form-control"
                                      id="contact-message" placeholder="Mensaje"></textarea>

                                  <div class="col-lg-4 col-md-10 col-8 mx-auto">
                                      <button type="submit" class="form-control">Enviar Mensaje</button>
                                  </div>
                              </div>
                          </form>
                      </div>

                      <div class="tab-pane fade" id="nav-ContactMap" role="tabpanel"
                          aria-labelledby="nav-ContactMap-tab">
                          <iframe class="google-map"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy"
                              width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"></iframe>
                          <!-- You can easily copy the embed code from Google Maps -> Share -> Embed a map // -->
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </section>
</template>
