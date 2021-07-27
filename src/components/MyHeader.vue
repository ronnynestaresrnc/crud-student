<template>
  <div class="container">
    <header>
      <ul class="nav justify-content-end text-muted">
        <li class="nav-item nav-item-left">
          <a class="nav-link text-muted" aria-current="page" href="#"
            >Bienvenido estas viendo Crud-student</a
          >
        </li>
        <li class="nav-item text-muted">
          <a class="nav-link text-muted" href="#">Usd</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-muted" href="#">Eng</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-muted" href="#"
            ><i class="bi bi-geo-alt"></i> Contact</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-muted" href="#"
            ><i class="bi bi-info-circle"></i> Necesita ayuda</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-muted" href="#"
            ><i class="bi bi-person"></i> Inicia sesion / Registro</a
          >
        </li>
      </ul>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"
          ><img src="../assets/logo-isil.png" alt="" height="70" width="150"
        /></a>
        <div class="header__search">
          <form class="borde">
            <div class="input-group input-group-lg border">
              <input
                type="text"
                class="form-control text-secondary header__search--bg border-0"
                aria-label="Text input with dropdown button"
                placeholder="search"
              />
              <span
                class="
                  input-group-text
                  text-secondary
                  border-0
                  header__search--bg
                "
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  ></path></svg
              ></span>
            </div>
          </form>
        </div>
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  ><i class="bi bi-telephone" style="font-size: 2rem"></i>

                  <span class="text-center"> 0(800) 123-456</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="bi bi-heart" style="font-size: 2rem"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Carrito <i class="bi bi-bag" style="font-size: 2rem"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Create Student</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Crud</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Paginas
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Elements
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.nav-item-left {
  margin-right: auto !important;
  padding-left: 0;
  margin: 0;
}
.header__search {
  border: rgb(110, 211, 28) solid 2px;
  min-width: 500px;
  margin-left: 2.5rem;
  margin-right: 4rem;
  border-radius: 4px;
}
.header__search > input {
  border-radius: 4rem red;
  border: 0;
}
</style>