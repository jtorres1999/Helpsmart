<template>
<div>
  <div class="fondo">
    <b-row class="margen2">
      <b-col cols="12" md="7" class="mb-2 mt-5">
          <img v-bind:src="require('../assets/mesa.png')" alt="logo" class="imagen"/>
      </b-col>
      <b-col cols="12" md="4" class="mb-2 title">
        <h2 class="mt fs-2 fw-bolder parrafo">Crea un software solo para empresas que quieran sobresalir</h2>
        <p class="mt-5 fs-5  w-75 parrafo">El software permite articular la gestión de activos, 
            monitoreo de variables, seguimiento y control de las actividades
            relacionadas a residuos y a la prestación de los servicios de 
            mantenimiento de equipos..</p>
      </b-col>
    </b-row >
  </div>
    <b-row class="margen">
      <b-col cols="12" md="5" class="mb-5 mt-4 ">
        <h2 class="gps fs-2  fw-bolder">Software solo para empresas que quieran sobresalir</h2>
        <p class="mt-5 fs-5 parrafo">El software permite articular la gestión de activos, 
            monitoreo de variables, seguimiento y control de las actividades
            relacionadas a residuos y a la prestación de los servicios de 
            mantenimiento de equipos.</p>
      </b-col>
      <b-col cols="12" md="7" class="mb-5 mt-5">
          <img v-bind:src="require('../assets/modulo.png')" alt="logo" class="imagen2"/>
      </b-col>
    </b-row>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.parrafo{
  margin-left: 5%;
}
.gps{
  margin-top: 80px;
  margin-left: 5%;
}
.imagen{
    width: 97%;
    height: 100%;
}
.imagen2{ 
  width: 97%;
  height: 90%;}
.margen{
  margin-top: 90px;
  margin-bottom: 50px;
  font-family: 'Monserrat';
}
.margen2{
  margin-top: 90px;
  margin-bottom: 50px;
  
  font-family: 'Monserrat';
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