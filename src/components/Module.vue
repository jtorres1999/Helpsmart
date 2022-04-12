<template>
<div>
  <div class="fondo">
    <b-row class="margen2">
      <b-col cols="12" md="7" class="mb-2 mt-5">
          <img v-bind:src="require('../assets/junior.jpg')" alt="logo" class="imagen"/>
      </b-col>
      <b-col cols="12" md="4" class="mb-2 title">
        <h2 class="mt fs-2  title2">Todo lo que se ha logrado</h2>
        <p class="mt-4 fs-5   parrafo">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
      </b-col>
    </b-row >
  </div>
    <b-row class="margen">
      <b-col cols="12" md="5" class="mb-5 mt-4 ">
        <h2 class="gps fs-2 title2">BENEFICIOS DE Suscribirte</h2>
        <p class="mt-4 fs-5  parrafo">Disminuir costos por tiempos muertos, paradas de equipos y adquisición de repuestos. <br>
        . <br>
        Optimizar la labor del recurso humano involucrado en la gestión del mantenimiento.</p>
      </b-col>
      <b-col cols="12" md="7" class="mb-5 mt-5">
          <img v-bind:src="require('../assets/camiseta.jpg')" alt="logo" class="imagen2"/>
      </b-col>
    </b-row>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');

@font-face {
  font-family: 'Captura';
  src: url('../assets/Captura-BlackDemo.otf') format('truetype');
  font-style: normal;
  font-weight: normal;
}

.parrafo{
  font-size: 20px!important;
  margin-left: 5%;
}
.title2{
  margin-left: 5%;
  font-size: 42px!important;
  font-family: 'Captura';
  font-weight: bold;
}
.gps{
  margin-top: 80px;
  margin-left: 5%;
}
.imagen{
    width: 90%;
    height: 100%;
    margin-left: 5px;
}
.imagen2{ 
  width: 97%;
  height: 90%;}
.margen{
  margin-top: 90px;
  margin-bottom: 50px;
  
}
.margen2{
  margin-top: 90px;
  margin-bottom: 50px;
}
.fondo{
  background-color: rgb(235, 233, 233);
}
.title{
  margin-top: 10%;
}
@media only screen and (min-width: 768px) and (max-width: 992px) {

}
@media only screen and (max-width: 767px) { 
  .imagen{
    width: 85%;
    margin-left: 10px;
  }
}
@media only screen and (max-width: 340px) {

}
</style>