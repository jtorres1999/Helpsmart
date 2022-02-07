<template>
  <!-- Footer -->
  <footer color="stylish-color" class="page-footer font-small pt-4 mt-4">
    <b-container class="text-initial">
      <b-row>
        <b-col md="2" class="text-center">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold title">SIMHI</h5>
          <div class="text-initial ml-4">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item"><a href=""><b-icon icon="facebook" animation="fade" font-scale="1.8"></b-icon></a></li>
              <li class="list-inline-item"><a href=""> <b-icon icon="youtube" animation="fade" font-scale="1.8" ></b-icon></a></li>
              <li class="list-inline-item"><a href=""><b-icon icon="instagram" animation="fade" font-scale="1.8" ></b-icon></a></li>
            </ul> 
          </div>
        </b-col>
        <hr class="clearfix w-100 d-md-none" />
        <b-col md="9" c>
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold subtitle">INFORMACIÓN DE CONTACTO</h5>
          <div class="flex">
            <b-col md="3" >
              <h6 class="text-uppercase mb-4 mt-3 font-weight-bold subtitle">Direccion</h6>
              <p class="fw-light">Carrera 28-No. 30A, Torre 6 - 301 Alcibia. Cartagena - Colombia</p>
            </b-col>
            <b-col md="2" >
              <h6 class="text-uppercase mb-4 mt-3 font-weight-bold subtitle">Telefono</h6>
              <p class="fw-light">674-7077 315-7791432</p>
            </b-col>
            <b-col md="4" >
              <h6 class="text-uppercase mb-4 mt-3 font-weight-bold subtitle">Correo</h6>
              <p class="fw-light">ventas@helpmedica.com</p>
            </b-col>
            <b-col md="3" >
              <h6 class="text-uppercase mb-4 mt-3 font-weight-bold subtitle">Horario</h6>
              <p>Lunes a Viernes de 8:00 Am - 6:00 Pm</p>
            </b-col>
          </div>
        </b-col>
        <hr class="clearfix w-100 d-md-none" />
        
        <hr class="clearfix w-100 d-md-none" />
        <b-col md="1">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold subtitle">ENLACES</h5>
          <img v-bind:src="require('../assets/ByHelpmedica.png')" alt="logo" class="inicio"/>
        </b-col>
      </b-row>
    </b-container>
    <hr />
    <hr />
    <div class="footer-copyright text-center py-3">
      <b-container fluid>
        &copy; 2020 Copyright: <a href="https://www.helpmedica.com"> Helpmedica </a>
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Raleway:ital,wght@1,600&display=swap');

* {
  margin: 0;
  padding: 0;
  color: white;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  background-color: #23272a;
}
.title{
  color: #5865f2;
  font-weight: bold;
  font-size: 30px;

}
.flex{
  display: flex;
}
.inicio{
  width: 250%;
  height: auto;
}
.subtitle{
  color: #5865f2;
}
@media only screen and (min-width: 992px) and (max-width: 1280px) {
  
}
@media only screen and (min-width: 768px) and (max-width: 899px) {
  
 

}
@media only screen and (max-width: 767px) { 
 .inicio{
  width: 100%;
  height: auto;
}
.flex{
  display: grid;
}
}
@media only screen and (max-width: 340px) {
 .inicio{
  width: 100%;
  height: auto;
}
}

</style>
