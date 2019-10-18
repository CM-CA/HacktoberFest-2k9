<template>
  <div id="mountain">
    <div id="jumbotronic">
      <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
        <template v-slot:header>Motos de Montaña</template>

        <template v-slot:lead>
          En esta seccion, podras encontrar una gran variedad de motos para que puedas disfrutar
          de un fin de semana haciendo rutas por la montaña.
        </template>

        <hr class="my-4" />

        <p>A continuacion te mostramos nuestra mejor seleccion en grandes marcas.</p>
      </b-jumbotron>
    </div>
    <div id="mountain-body" class="container-fluid">
      <div class="card" style="width: 18rem;" v-for="b in bikes">
        <img :src="b.img" class="card-img-top" :alt="b.model" />
        <div class="card-body">
          <h5 class="card-title">{{b.model}}</h5>
          <p class="card-text">{{b.brand}}, tamaño de rueda: {{b.size}} pulgadas.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mountain-in-view",

  data() {
    return {
      //  fake API
      bikes: [
        {
          id: "1",
          brand: "Ibis",
          model: "Ripmo GX 2019",
          size: "29",
          img:
            "https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/17/62/297773_8160_M.jpg"
        },
        {
          id: "2",
          brand: "Yeti",
          model: "SB130 TURQ X01 2019",
          size: "29",
          img:
            "https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/18/54/306942_11028_M.jpg"
        },
        {
          id: "3",
          brand: "Ibis",
          model: "Ripley GX Eagle 2019",
          size: "29",
          img:
            "https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/19/77/319226_7308_M.jpg"
        },
        {
          id: "4",
          brand: "Santa Cruz",
          model: "Hightower CC X01",
          size: "29",
          img:
            "https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/20/42/325773_14076_M.jpg"
        },
        {
          id: "5",
          brand: "YT",
          model: "Jaffsy AL Base 2019",
          size: "29",
          img:
            "https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/19/30/314571_25718_M.jpg"
        }
      ]
    };
  }
};
</script>

<style>
#mountain-body{
display:flex;

}
.card {
  margin:0.2rem;
}
</style>>
