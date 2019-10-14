<template>
  <div id="footer">
    <<<<<<< HEAD
    =======
    <!-- as a footer -->
    >>>>>>> AlexandreInsua-master
    <b-navbar
      fixed="bottom"
      variant="danger"
      type="light"
      class="d-flex justify-content-around azul"
    >
      <div class="d-flex flex-column">
        <h1 class="mb-0">
          MC
          <sup>&copy;</sup>
        </h1>
        <p>Haciendo motos desde 1945</p>
      </div>
      <div id="carousel">
        <a href="#">
          <img src="https://img.icons8.com/metro/104/000000/twitter.png" alt="Twitter" />
        </a>
        <a href="#">
          <img src="https://img.icons8.com/metro/104/000000/instagram-new.png" alt="Instagram" />
        </a>
        <a href="#">
          <img src="https://img.icons8.com/metro/104/000000/facebook.png" alt="Facebook" />
        </a>
        <a href="#">
          <img src="https://img.icons8.com/metro/104/000000/youtube.png" alt="Youtube" />
        </a>
      </div>
      <div>
        <p>
          <span class="font-weight-bold">Correo:</span> motos@motos.es
        </p>
        <p>
          <span class="font-weight-bold">Tlfn.</span> 123456789
        </p>
        <p>
          <span class="font-weight-bold">Dirección:</span> 21 Street |
          <a href="#">Google Maps</a>
        </p>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "footer-c"
};
</script>

<style>
#carousel a img {
  width: 2em;
  margin: 0em 0.5em;
}
.azul {
  background-color: lightgrey !important;
}
</style>
