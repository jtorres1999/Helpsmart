<template>
  <div>
    <a
      href="https://api.whatsapp.com/send?phone=573157791432&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20."
      class="float"
      target="_blank"
    >
      <b-icon icon="telephone" class="my-float"></b-icon>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}
.float:hover {
  text-decoration: none;
  color: #25d366;
  background-color: rgb(86, 134, 223);
}
.my-float {
  margin-top: 16px;
}
</style>
