<template>
  <q-page class="flex-center recover-page">
    <h1>AMERIKE</h1>
    <u><h4><i class="fas fa-key"></i>   Recuperar Contraseña</h4></u>
    <p>Ingresa tu matrícula y te enviaremos un enlace para que recuperes tu contraseña</p>
    <div class="recover-form">
      <q-input v-model="text" dark placeholder="Ej. zpdv18200090@amerike.edu.mx" stack-label="Matrícula" color="white"/>
      <q-btn color="secondary" label="Enviar" class="full-width" to="/"/>
  </div>
  </q-page>
</template>
<style>
  body{
    background-color: #4A4944;
    color: #FFF;
  }
  .recover-page h1 {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
  }
  .recover-page h4 {
    display: block;
    width: 100%;
    text-align: center;
  }
  .recover-page p{
    display: block;
    width: 100%;
    padding: 0 50px;
  }
  .recover-form{
    margin: 20px 50px;
  }
  .recover-page .q-btn{
    margin-top: 50px;
  }
</style>
<script></script>
