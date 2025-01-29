<template>
  <!-- Spinner Start -->
  <!-- <div
    id="spinner"
    class="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div class="spinner-grow text-primary" role="status"></div>
  </div> -->
  <!-- Spinner End -->

  <!-- Navbar start -->
  <div
    class="container-fluid border-bottom bg-light wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div
      class="container topbar bg-primary d-none d-lg-block py-2"
      style="border-radius: 0 40px"
    >
      <div class="d-flex justify-content-between">
        <div class="top-info ps-2">
          <small class="me-3"
            ><i class="fas fa-map-marker-alt me-2 text-secondary"></i>
            <a href="#" class="text-white"
              >Indonesia</a
            ></small
          >
          <small class="me-3"
            ><i class="fas fa-envelope me-2 text-secondary"></i
            ><a href="#" class="text-white">asosiasiorigamiindonesia@gmail.com</a></small
          >
        </div>
        <div class="top-link pe-2">
          <a href="https://web.facebook.com/asosiasi.origami.indonesia/" class="btn btn-light btn-sm-square rounded-circle"
            ><i class="bi bi-facebook text-secondary"></i
          ></a>
          <a href="https://www.instagram.com/asosiasiorigamiindonesia/" class="btn btn-light btn-sm-square rounded-circle"
            ><i class="bi bi-instagram text-secondary"></i
          ></a>
          <a href="https://www.youtube.com/@asosiasiorigamiindonesia1251" class="btn btn-light btn-sm-square rounded-circle me-0"
            ><i class="bi bi-youtube text-secondary"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="container px-0">
      <nav class="navbar navbar-light navbar-expand-xl py-3">
        <a href="index.html" class="navbar-brand"
          >
          <img 
    src="/assets/img/asosiasi-origami-indonesia.png"
    width="100" 
    class="img-fluid" 
    alt="Asosiasi Origami Indonesia">
          <!-- <h1 class="text-primary display-6">
            Ori<span class="text-secondary">gami</span>
          </h1> -->
          </a
        >
        <button
          class="navbar-toggler py-2 px-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="fa fa-bars text-primary"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav mx-auto">
            <a href="index.html" class="nav-item nav-link active">Home</a>
            <a href="about.html" class="nav-item nav-link">About</a>
            <a href="service.html" class="nav-item nav-link">Services</a>
            <a href="program.html" class="nav-item nav-link">Programs</a>
            <a href="event.html" class="nav-item nav-link">Events</a>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Pages</a
              >
              <div class="dropdown-menu m-0 bg-secondary rounded-0">
                <a href="#" class="dropdown-item">Our Blog</a>
                <a href="#" class="dropdown-item">Our Team</a>
                <a href="#" class="dropdown-item">Testimonial</a>
                <a href="#" class="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="#" class="nav-item nav-link">Contact</a>
          </div>
          <div class="d-flex me-4">
            <div
              id="phone-tada"
              class="d-flex align-items-center justify-content-center"
            >
              <a
                href=""
                class="position-relative wow tada"
                data-wow-delay=".9s"
              >
                <i class="fa fa-phone-alt text-primary fa-2x me-4"></i>
                <div class="position-absolute" style="top: -7px; left: 20px">
                  <span><i class="bi bi-whatshapp text-secondary"></i></span>
                </div>
              </a>
            </div>
            <div class="d-flex flex-column pe-3 border-end border-primary">
              <span class="text-primary">Have any questions?</span>
              <a href="#"
                ><span class="text-secondary">Free: + 0123 456 7890</span></a
              >
            </div>
          </div>
          <button
            class="btn-search btn btn-primary btn-md-square rounded-circle"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i class="fas fa-search text-white"></i>
          </button>
        </div>
      </nav>
    </div>
  </div>
  <!-- Navbar End -->
</template>
