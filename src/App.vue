<template>
  <div id="app">
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
.navbar-exact-active {
  color: rgb(0, 0, 0) !important;
}
</style>
