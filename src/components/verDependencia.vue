<template>
  <table id="t_archivos">
    <tr>
      <td>ID DEPENDENCIA</td>
      <td>NOMBRE DEPENDENCIA</td>
    </tr>
    <tr v-for="archivo in documentos" v-bind:key="archivo.id">
      <td>{{ archivo.id_dependencia }}</td>
      <td>{{ archivo.nombre_dep }}</td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "verDependencia",
  data: function() {
    return {
      documentos: []
    };
  },
  beforeCreate: function() {
    axios
      .get("https://backendfinal5.herokuapp.com/dependencias/")
      .then(respuesta => {
        this.documentos = respuesta.data;       
        
      })
      .catch(error => {
        console.log(error);
        alert("Error en la peticion con codigo " + error.response.status);
      });
  }
};
</script>

<style >
#t_archivos {
  border: black 1px solid;
}
</style>