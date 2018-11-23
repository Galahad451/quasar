<template>
  <q-page class="register-page flex-center">
    <h1>AMERIKE</h1>
    <div class="register-form">
      <q-input v-model="text" placeholder="Ej. María Mercado Rueda" color="white" dark stack-label="Nombre Completo"/>
      <q-input v-model="text" placeholder="Ej. zpdv18200090@amerike.edu.mx" color="white" dark stack-label="Matrícula"/>
      <q-input v-model="text" type="password" color="white" dark stack-label="Contraseña"/>
      <q-btn label="Registrarse" color="secondary" to="/" class="full-width register-button"/>
    </div>
  </q-page>
</template>
<style>
  body{
    background-color: #4A4944;
    color: #FFF;
  }
  h1{
    display: block;
    width: 100%;
    text-align: center;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
  }
  .register-page{
    padding: 50px;
  }
  .register-button{
    margin-top: 20px;
  }
</style>
<script>
</script>
