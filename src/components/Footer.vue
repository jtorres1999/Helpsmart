<template>
  <div>
    <footer>
      <div class="main-content">
        <div class="left box">
          <h2>HIMSI</h2>
          <div class="social-3RuOPP">
              <a href="">
                  <svg width="24" height="24" viewBox="0 0 24 24"
                   class="socialIcon-38NB2e"></svg>
              </a>
          </div>
        </div>
        <div class="center box">
          <h2>Información de Contacto</h2>
          <div class="content">
              <br />
              <div class="phone">
              <span class="text">Dirección:</span>
              <p class="descrip">Carrera 28-No. 30A, Torre 6 - 301 Alcibia. Cartagena - Colombia</p>
            </div>  
            <div class="phone">        
              <span class="text">Telefono:</span>
              <p class="descrip">674-7077 <br> 315-7791432</p>
            </div>
            <div class="atencion">
              <span class="text">Correo: </span>
              <p class="descrip">ventas@helpmedica.com</p>
            </div>
            <div class="horario">
              <span class="text">Horarios: </span>
              <p class="descrip">Lunes a Viernes de 8:00 Am - 6:00 Pm</p>
            </div>
          </div>
        </div>

        <div class="right box">
          <h2>Enlaces </h2>
          <div class="content ">
            
          </div>
          <a href="https://www.helpmedica.com/">
            <div  class="helpmedica">
              <img v-bind:src="require('../assets/ByHelpmedica.png')" alt="logo" width="50%" height="45px"/>
            </div></a>
        </div>
      </div>
      <!-- <div class="bottom ">
        <span class="credit mr-3"
          >Copyright © 2022 
          <a target="_blank" href="https://www.helpmedica.com">Helpmedica</a>          
        </span>
      </div> -->
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Raleway:ital,wght@1,600&display=swap');

* {
  margin: 0;
  padding: 0;
  color: #fafafa;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
.content1 {
  position: relative;
  margin: 130px auto;
  text-align: center;
}
/**LETRAS BOX-CENTER*/
.text{
  color: #0fda41;
  padding: 10px ;
  margin-top: 5px;
  font-size: 18px;
}
.descrip{
   padding: 6px ;
   margin-left: 5px;
   font-size: 14px;
}
.display{
  display: inline-block;
}
.helpmedica{
  text-align: initial;
  margin-left: 10px;
}
/**COLOR DEL FOOTER */
footer {
  bottom: 0px;
  width: 100%;
  background: #333333;
  padding: 0 2px;
}
.main-content {
  display: flex;
}
.main-content .right {
  flex-basis: 40%;
  padding: 0px 20px;
}
.box h2 {
  font-size: 1.23rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 30px 0px;
  margin-left: 12px;
}
.box .content {
  margin: 0px 0px 0px 0px;
  position: relative;
  display: flex;
  font-family: 'Montserrat', sans-serif;
}
.box .content:before {
  position: absolute;
  content: "";
  top: -10px;
  left: 10px;
  height: 2px;
  width: 90%;
  background: #1a1a1a;
}

/* .left .content p {
  text-align: justify;
} */

/**COLOR DEBAJO DEL DESARROLLADO */
.bottom span {
  color: #fffdfd;
}
.bottom a {
  color: #6ab23c;
  text-decoration: none;
}
.bottom a:hover {
  text-decoration: underline;
  color: #2463a7;
  text-decoration: none;
}
@media only screen and (min-width: 992px) and (max-width: 1280px) {
  
}
@media only screen and (min-width: 768px) and (max-width: 899px) {
  
  .left .box{
    text-align: center;
  }
  .content {
  display: flex;
}
.atencion{
  opacity: 0;
}

}
@media only screen and (max-width: 767px) { 
  .image{
  width: 290px;
  height: 300px;
}
.content {
  display: inline-block;
}
.atencion{
  display: none;
}

}
@media only screen and (max-width: 340px) {
 
.content {
  display: inline-block;
}
.box .content{
  width: 50%;
}
.horario{
  display: none;
}
}
@media screen and (max-width: 900px) {
  footer {
    position: relative;
    bottom: 0px;
  }
  .main-content {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .main-content .box {
    margin: 5px 0;
  }
}
/**BUTTON */
button {
  background: #2463a7;
  width: 100px;
  border: none;
  height: 40px;
  transition: 1s all ease;
}
button:hover {
  background: #6ab23c;
}
/*****Eliminar border por defecto de un botton */
input {
  border: none;
  outline: none;
}
textarea {
  outline: none;
}
</style>
