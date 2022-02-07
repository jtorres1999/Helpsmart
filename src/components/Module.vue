<template>
<div>
    <b-row class="margen2">
      <b-col cols="12" md="7" class="mb-2 mt-5">
          <img v-bind:src="require('../assets/info.svg')" alt="logo" class="imagen"/>
      </b-col>
      <b-col cols="12" md="5" class="mb-2 mt-4 text-initial">
        <h2 class="mt-3 fs-2 fw-bolder">Crea un software solo para empresas que quieran sobresalir</h2>
        <p class="mt-5 fs-5 ml-3">El software permite articular la gestión de activos, 
            monitoreo de variables, seguimiento y control de las actividades
            relacionadas a residuos y a la prestación de los servicios de 
            mantenimiento de equipos..</p>
      </b-col>
    </b-row >
    <b-row class="margen">
      <b-col cols="12" md="5" class="mb-5 mt-4 text-initial">
        <h2 class="mt-4 fs-1 fw-bolder">Crea un software solo para empresas que quieran sobresalir</h2>
        <p class="mt-5 fs-5">El software permite articular la gestión de activos, 
            monitoreo de variables, seguimiento y control de las actividades
            relacionadas a residuos y a la prestación de los servicios de 
            mantenimiento de equipos.</p>
      </b-col>
      <b-col cols="12" md="7" class="mb-5 mt-5">
          <img v-bind:src="require('../assets/info2.svg')" alt="logo" class="imagen"/>
      </b-col>
    </b-row>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.inicio{
    
  width: 75%;
  height: 50%;
  margin-left: -80px;
  margin-top: 10px;

}
.bv-example-row{
    
    
}
.imagen{
    width: 100%;
    height: 100%;
}
.margen{
  margin-top: 90px;
  margin-bottom: 50px;
  font-family: 'Monserrat';
}
.margen2{
  margin-top: 90px;
  margin-bottom: 50px;
  background-color: #f3f0f0;
  font-family: 'Monserrat';
}
</style>