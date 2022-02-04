<template>
  <b-container class="bv-example-row" mb-4>
    <b-row>
      <b-col cols="12" md="7" class="mb-2 mt-1">
          <img v-bind:src="require('../assets/info.svg')" alt="logo" class="imagen"/>

      </b-col>
      <b-col cols="12" md="5" class="mb-2 mt-2 text-initial">
        <h2 class="mt-3">Crea un software solo para empresas que quieran sobresalir</h2>
        <p class="mt-5 fs-5 ml-3">El software permite articular la gestión de activos, 
            monitoreo de variables, seguimiento y control de las actividades
            relacionadas a residuos y a la prestación de los servicios de 
            mantenimiento de equipos..</p>
      </b-col>
      <b-col cols="12" md="5" class="mb-2 mt-2 text-initial">
        <h2 class="mt-4 fs-2">Crea un software solo para empresas que quieran sobresalir</h2>
        <p class="mt-5 fs-5">El software permite articular la gestión de activos, 
            monitoreo de variables, seguimiento y control de las actividades
            relacionadas a residuos y a la prestación de los servicios de 
            mantenimiento de equipos.</p>
      </b-col>
      <b-col cols="12" md="7" class="mb-2 mt-2">
          <img v-bind:src="require('../assets/info2.svg')" alt="logo" class="imagen"/>

      </b-col>
      
    </b-row>
  </b-container>
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
    font-family: 'Monserrat';
}
.imagen{
    width: 100%;
    height: 100%;
}
</style>