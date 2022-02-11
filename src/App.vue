<template>
  <div >
    <Navbar />
    <Whatsapp />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Whatsapp from "./components/Whatsapp.vue";
export default {
  components: {
    Navbar,
    Whatsapp,
    Footer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Raleway:ital,wght@1,600&display=swap');
.navbar-exact-active {
  color: rgb(0, 0, 0) !important;
}
.navbar a.nav-link{
  color: rgb(0, 0, 0) !important;
}
</style>
