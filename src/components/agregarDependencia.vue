<template>
  <div>
    <h1>Agregar dependencia</h1>
    <label for="id_dep">Id Dependencia</label>
    <input v-model="id_dep" id="id_dep" />
    <label for="nombre_dep">Nombre dependencia</label>
    <input v-model="nombre_dep" id="nombre_dep" />
    <button v-on:click="agregarDependencia">Agregar dependencia</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "agregarDependencia",
  data: function () {
    return {
      id_dep: "",
      nombre_dep: "",
      dependencias: [],
    };
  },
  methods: {
    agregarDependencia: function () {
      var datosJSON = {
        id_dependencia: this.id_dep,
        nombre_dep: this.nombre_dep,
      };
      axios
        .post("https://backendfinal5.herokuapp.com/dependencias/nuevo/", datosJSON)
        .then((respuesta) => {
          alert(respuesta.data.mensaje);
        })
        .catch((error) => {
          alert("error en el servidor con codigo " + error.response.status);
        });
    },
  },
};
</script>

<style scoped>
</style>