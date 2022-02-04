<template>
  <b-container class="bv-example-row mt-4">
    <b-row> 
      <b-col cols="11" md="5">
        <h2>Contactenos</h2>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <br />
          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Nombre Completo"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder=" Email"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-form-group id="input-group-1" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.asunto"
              placeholder="Asunto"
              required
            ></b-form-input>
          </b-form-group>
          <br />
          <b-form-group id="input-group-1" label-for="input-2">
            <b-form-textarea
              id="textarea-rows"
              v-model="form.mensaje"
              placeholder="Mensaje"
              rows="3"
            ></b-form-textarea>
          </b-form-group>
          <br />
          <b-button type="submit" class="btn ">Enviar</b-button>
        </b-form>
      </b-col>
      <b-col cols="11" md="7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1523107611906!2d-75.51752258571537!3d10.409475268707075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625901e085323%3A0x39fdd17ca4c870d!2sHELPMEDICA%20SAS!5e0!3m2!1ses-419!2sco!4v1632582680946!5m2!1ses-419!2sco"
          width="600px"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
        >
        </iframe>
      </b-col>
    </b-row>
    <br /><br />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        asunto: "",
        mensaje: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
      this.form.email = "";
      this.form.name = "";
      this.form.asunto = "";
      this.form.mensaje = "";
    },
    onReset(event) {
      event.preventDefault();

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
.bv-example-row {
  margin-left: 20px;
  max-width: 96%;
}
iframe {
  width: 100%;
  height: 90%;
}
h2 {
  margin-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  text-align: center;
}
button {
  margin-left: 30px;
}
.btn2 {
  background-color: rgb(118, 118, 119);
}
.btn {
  background-color: #6ab23c;
  margin-left: 180px;
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .btn {
    margin-left: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .btn {
    margin-left: 100px;
  }
}
@media only screen and (max-width: 340px) {
  .btn {
    margin-left: 100px;
  }
}
</style>
