<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col cols="12" md="7" class="mb-2 ">
        <div class="text-center">
        <img v-bind:src="require('../assets/logogrande.png')" alt="logo" class="inicio"/></div>
      </b-col>
      <b-col cols="11" md="5" class="card gps">
        <div class="title text-center mt-2">
          <img v-bind:src="require('../assets/letrasSIM-HI.png')" alt="logo">
        </div>
        <p class="pretitle mt-1">Software para Gestion de Ma ntenimiento Hospitalario e Industrial</p>
        <div class="sesion mt-1">
        <span >Inicio de Sesión</span></div>
        <form role="form" action="https://hmsline.helpmedica.com/login" method="POST" id="login-form" autocomplete="off" novalidate="novalidate">
          <input type="hidden" value="qsRwazdUnasqWDIG6PZJfuLbpr2y46hMl2qELjOs" name="_token">
          <div class="form-group input-icon mt-3 mb-3">
              <!-- <i class="fa fa-user"></i> -->
              <input type="email" name="username" id="username " class="form-control" placeholder="  Usuario" autofocus="autofocus">
          </div>
          <div class="form-group password-field input-icon mt-2">
            <!-- <i class="fa fa-lock"></i> -->
            <input type="password" name="password" id="password" class="form-control" placeholder="  Contraseña">  
          </div>
          <div class="forgot mt-2 text-end">
            <a v-b-modal.modal-1 >¿Olvidastes tu Contraseña?</a>
          </div><br>
          <div class="form-group text-center mt-2">
              <b-button class="btn btn-success">Ingresar</b-button>
          </div> 
        </form>
      </b-col>
    </b-row>
    <br>
    <module />
    <conocenos />
    
    <ModalPassword />
  </b-container>
</template>
<script>
import Conocenos from '../components/Conocenos.vue';

import ModalPassword from '../components/ModalPassword.vue'
import Module from '../components/Module.vue';

export default {
  components: { Conocenos, ModalPassword, Module },
  data() {
    return {  
    };
  },
};
</script>
<style scoped>
/**imagen */
.inicio{
  width: 75%;
  height: 50%;
  margin-left: -80px;
  margin-top: 10px;
}

.title IMG{
  width: 200px;
}
.pretitle{
  font-family: "Montserrat", sans-serif;
  font-size:0.8rem;
  color: black;
  
}
.gps{
  border: 1px black !important;
}
.sesion{
  color: #000;
  font-size:   1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  text-align: center;
}
.form-control{
  border-radius: 10px;
  margin-top: 13px;
  font-family: 'Raleway', sans-serif;
}
.btn{
  width: 50%;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  font-size:15px;
}
.btn:hover{
  background-color: rgb(120, 173, 40) ;
}
.forgot{
  border-style: none;

}
.card{
  margin-top: 8px;
  border:solid 5px #ccc;
  border-radius:15px;
  box-shadow: 4px 4px 3px 5px #e0e0e0;
  text-align: center;
}
.index {
  position: relative;
}

.bv-example-row {
  position: relative;
}

@media only screen and (min-width: 992px) and (max-width: 1280px) {
  
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .btn{
    font-size: 19px;
    margin-bottom: 10px;
    margin-top: -15px;
    margin-top: 5px;
  }
  .title{
    font-size: 40px;
  }
  .sesion{
    font-size: 20px;
  }
  .inicio{
    margin-left: 0px;
    margin-top: 0px;
    width: 100%;
  }
}
@media only screen and (max-width: 767px) { 
  .btn{
    
    margin-bottom: 10px;
  }
  .inicio{
    margin-left: 0px;
    margin-top: 0px;
    width: 86%;
    height: 86%;
  }
}
@media only screen and (max-width: 340px) {
  .btn{
    font-size: 15px;
    margin-bottom: 10px;
  }
  .title{
    margin-top: 5px;
    font-size: 40px;
  }
  .inicio{
    margin-left: 0px;
    margin-top: 0px;
    width: 90%;
    height: 80%;
  }
}
/* ESTO ES PARA EL LOGIN
 */
</style>