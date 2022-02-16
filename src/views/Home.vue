<template>
    <b-row>
      <b-col cols="12" md="7" class=" mt-5">
        <div class="text-center">
        <img v-bind:src="require('../assets/simhi2.gif')" alt="logo" class="inicio"/></div>
      </b-col>
      <b-col cols="11" md="5" class="card gps">
        <div class="title text-center mt-4">
          <img v-bind:src="require('../assets/letrasSIM-HI.png')" alt="logo">
        </div>
        <p class="pretitle mt-2">Software para Gestion de Mantenimiento <br> Hospitalario e  Industrial</p>
        <div class="sesion mt-3">
        <span >Inicio de Sesión</span></div>
        <form role="form" action="https://hmsline.helpmedica.com/login" method="POST" id="login-form" autocomplete="off" novalidate="novalidate">
          <input type="hidden" value="qsRwazdUnasqWDIG6PZJfuLbpr2y46hMl2qELjOs" name="_token">
          <div class="form-group input-icon mt-3 mb-3">
              <!-- <i class="fa fa-user"></i> -->
              <input type="email" name="username" id="username " class="form-control" placeholder="  Usuario" autofocus="autofocus">
          </div>
          <div class="form-group password-field input-icon mt-3">
            <!-- <i class="fa fa-lock"></i> -->
            <input type="password" name="password" id="password" class="form-control" placeholder="  Contraseña">  
          </div>
          <div class="forgot mt-3 text-end">
            <a v-b-modal.modal-1 >¿Olvidastes tu Contraseña?</a>
          </div><br>
          <div class="form-group text-center mt-1">
              <b-button class="btn ">Ingresar</b-button>
          </div> 
        </form>
      </b-col>
      <module />
    <conocenos />  
    <ModalPassword />
    </b-row>
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
  width: 66%;
  height:auto;
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
.form-group{
  text-align: -webkit-center;
}
.form-control{
  border-radius: 10px;
  margin-top: 15px;
  font-family: 'Raleway', sans-serif;
  width: 80%;
}
.btn{
  width: 50%;
  color: rgb(255, 255, 255);
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  font-size:15px;
  background-color: #28c76f;
}
.btn:hover{
  background-color: #23d160;
}
.forgot{
  border-style: none;
}
.card{
  margin-top: 45px;
  border:solid 5px #ccc;
  border-radius:15px;
  box-shadow: 0px 3px 3px 5px #afebc4;
  text-align: center;
  width: 30%;
  height: auto;
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
  .card{
    width: 90%;
    margin-left: 19px;
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
  .card{
    width: 89%;
    margin-left: 20px;
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
  .card{
    width: 85%;
    margin-left: 20px;
  }
}
/* ESTO ES PARA EL LOGIN
 */
</style>