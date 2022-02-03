<template>
<b-container class="bv-example-row">
    <b-row>
      <!-- <b-col cols="11" md="8" class="mb-2 card">
        <div class="text-center">
        <img v-bind:src="require('../assets/logogrande.png')" alt="logo" class="inicio"/></div>
      </b-col> -->
      <b-col>
     </b-col>
    </b-row>
    <ModalPassword />
  </b-container>
</template>
<script>

import ModalPassword from '../components/ModalPassword.vue'
export default {
  components: { ModalPassword },
  data() {
    return {  
    };
  },
};
</script>
