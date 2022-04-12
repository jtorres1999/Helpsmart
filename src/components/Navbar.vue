<template>
  <b-navbar toggleable="lg" type="dark">
    <router-link to="/" class="navbar-brand" >
      <img v-bind:src="require('../assets/JUNIORLOGO.jpg')" alt="logo" style="width: 140px; height:90px;"/>
    </router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav class=" justify-content-end">
      <b-navbar-nav class="navbar-nav ">
        <b-nav-item>
          <router-link to="/" class="nav-link">INICIO</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/module" class="nav-link">
          CONOCENOS</router-link> 
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Conocenos" class="nav-link"
            >CONTACTENOS</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Raleway:ital,wght@1,600&display=swap');
header {
  position: relative;
  z-index: 99999;
  width: 100%;
  height: 70px;
  position: fixed;
  /*COLOR DEL NAVBAR*/
  background-color: #f3f3f3;
  
}
.navbar{
  border-bottom: solid 2px #f05353;
}
.navbar-toggler {
  margin: 20px 20px;
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: #6ab23c;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
}
.navbar .navbar-toggler {
  color: #6ab23c;
  border-color: #6ab23c;
}
.navbar-brand img {
  width: 180px;
  height: auto;
  padding-left: 15px;
}
.nav-item {
  margin: 11px 15px;
  margin-top: -10px;
}
.nav-link {
  text-decoration-style: none;
}
.navbar a.nav-link {
  text-transform: capitalize;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: rgb(0, 0, 0);
  transition: all 0.55s;
  margin-top: 10px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
}
.navbar a.nav-link:hover {
  color: #000000;
}
/* font-family: 'Raleway', sans-serif; */
/*lo que voy a utilizar*/
.navbar .nav-link:hover {
  padding-bottom: 0.5px;
  border-bottom: 2px solid #6ab23c;
}
@media only screen and (min-width: 993px) and (max-width: 1200px) {
  
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
  
}
@media only screen and (max-width: 767px) {
  b-navbar {
    width: 100%;
  }
  
}
@media only screen and (max-width: 340px) {
  .navbar-brand img {
    width: 90px;
    height: 58px;
  }
  
}
</style>
