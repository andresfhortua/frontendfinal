<template>
<div>
    <h1>Listar documentos por id dependencia</h1>
    <label for="id_dep">Id dependencia</label>
    <input v-model="id_dep" id="id_dep"/>
    <button v-on:click="buscarDocs">Buscar documentos</button>
    <table id="t_archivos">
    <tr>
      <td>ID</td>
      <td>NOMBRE</td>
      <td>ID DEPENDENCIA</td>
      <td>PRIORIDAD</td>
      <td>FECHA DE VENCIMIENTO</td>
    </tr>
    <tr v-for="archivo in documentos" v-bind:key="archivo.id">
      <td>{{ archivo.id_documento }}</td>
      <td>{{ archivo.nombre_doc }}</td>
      <td>{{ archivo.id_dependencia }}</td>
      <td>{{ archivo.prioridad }}</td>
      <td>{{ archivo.fecha_venc }}</td>
    </tr>
  </table>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "buscarDoc",
  data: function () {
    return {
      id_dep: "",
      documentos: [],
    };
  },
  methods: {
    buscarDocs: function () {
      axios
        .get("https://backendfinal5.herokuapp.com/dependencias/documentos/"+this.id_dep)
        .then((respuesta) => {
            this.documentos=respuesta.data;
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