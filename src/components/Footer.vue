<template>
  <!-- Footer -->
  <footer color="stylish-color" class="page-footer font-small pt-4 mt-4">
    <b-container class="text-initial">
      <b-row>
        <b-col md="3" class="text-initial">
          <img v-bind:src="require('../assets/letrasSIM-HI.png')" alt="logo" class="logo">
          <div class="text-initial ml-4">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item"><a href=""><b-icon icon="facebook" animation="fade" font-scale="1.5"></b-icon></a></li>
              <li class="list-inline-item"><a href=""> <b-icon icon="youtube" animation="fade" font-scale="1.5" ></b-icon></a></li>
              <li class="list-inline-item"><a href=""><b-icon icon="instagram" animation="fade" font-scale="1.5" ></b-icon></a></li>
            </ul> 
          </div>
        </b-col>
        <hr class="clearfix w-100 d-md-none" />
        <b-col md="8" c>
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold subtitle">INFORMACIÓN DE CONTACTO</h5>
          <div class="flex">
            <b-col md="3" >
              <h6 class="text-uppercase mb-4 mt-3 font-weight-bold subtitle">Direccion</h6>
              <p class="descripc">Carrera 28-No. 30A, Torre 6 - 301 Alcibia. Cartagena - Colombia</p>
            </b-col>
            <b-col md="2" >
              <h6 class="text-uppercase mb-4 mt-3 font-weight-bold subtitle">Telefono</h6>
              <p class="descrip">674-7077 <br> 315-7791432</p>
            </b-col>
            <b-col md="3" >
              <h6 class="text-uppercase mb-4 mt-3 font-weight-bold subtitle">Correo</h6>
              <p class="descrip">ventas@helpmedica.com</p>
            </b-col>
            <b-col md="3" >
              <h6 class="text-uppercase mb-4 mt-3 font-weight-bold subtitle">Horario</h6>
              <p class="descrip">Lunes a Viernes de 8:00 Am - 6:00 Pm</p>
            </b-col>
          </div>
        </b-col>
        <hr class="clearfix w-100 d-md-none" />
        
        <hr class="clearfix w-100 d-md-none" />
        <b-col md="1">
          <!-- <h5 class="text-uppercase mb-4 mt-3 font-weight-bold subtitle">ENLACES</h5> -->
          <img v-bind:src="require('../assets/ByHelpmedica.png')" alt="logo" class="inicio"/>
        </b-col>
      </b-row>
    </b-container>
    <br>
    <hr class="hr"/>
    
    <div class="footer-copyright text-center py-3">
      <b-container fluid>
        &copy; 2022 Copyright: <a href="https://www.helpmedica.com"> Helpmedica </a>
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Raleway:ital,wght@1,600&display=swap');

* {
  margin: 0;
  padding: 0;
  color: white;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  background-color: #23272a;
}
.title{
  color: #23d160;
  font-weight: bold;
  font-size: 30px;

}
.flex{
  display: flex;
}
.inicio{
  width: 200%;
  height: auto;
  text-align: center;
  margin-top: 100%;
  
}
.subtitle{
  color: #28c76f;
}

.logo{
  width: 80%;
  margin-left: 15px;
}
.list-unstyled{
  margin-top: 18px;
  margin-left: 15px;
}
.list-inline-item{
  margin-left: 21px;
}
.descrip{
  font-weight: light;
  font-size: 12px;
}
.descripc{
  width: 70%;
  font-size: 12px;
}
.hr{
  border: solid 1px #23d160;
}
@media only screen and (min-width: 992px) and (max-width: 1280px) {
  .descrip{
  text-align: center;
}
.subtitle{
  text-align: center;
}
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .subtitle{
  text-align: center;
  margin-top: 8px;
}
 .descrip{
  text-align: center;
}
.descripc{
  text-align: center;
}
}
@media only screen and (max-width: 767px) { 
 .inicio{
  width: 95%;
  height: auto;
}
.flex{
  display: grid;
}
.subtitle{
  text-align: center;
  margin-top: 5px;
}
.descrip{
  text-align: center;
}
.descripc{
  text-align: center;
  width: 100%;
}
.list-inline-item{
  margin-bottom: 10px;
}
}
@media only screen and (max-width: 340px) {
 .inicio{
  width: 95%;
  height: auto;
}
.subtitle{
  text-align: center;
  margin-top: 5px;
}
.descrip{
  text-align: center;
}
.descripc{
  text-align: center;
  width: 100%;
}
.list-inline-item{
  margin-bottom: 10px;
}
}

</style>
