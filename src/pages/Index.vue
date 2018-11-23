<template>
  <q-page class="flex flex-center">
    <h1>AMERIKE</h1>
    <p>plataforma tecnológica</p>
    <form>
      <label>Matrícula</label>
      <q-input class="input-box" type="text" placeholder="Matrícula"/>
      <label>Contraseña</label>
      <q-input class="input-box" type="password" placeholder="Contraseña"/>
      <q-checkbox v-model="check1" color="white" label="Recordar cuenta"/>
      <q-btn class="full-width inputBtn" label="Entrar" to="salones" color="secondary"/>
      <a href="#/recuperar"><p>¿Olvidaste la contraseña?</p></a>
      <p class="usuario-nuevo">¿Eres usuario nuevo? <a href="#/registro">Regístrate aquí</a></p>
    </form>
  </q-page>
</template>

<style>
  body {
    background-color: #4a4944;
    color: #FFFFFF;
  }
  h1, p{
    display: block;
    width: 100%;
    text-align: center;
  }
  form {
    width: 80%;
  }
  input {
    width: 100%;
    padding: 10px 10px;
    margin: 8px 0;
    box-sizing: border-box;
  }
  .input-box {
    color: black;
    background-color: white;
    padding: 10px 10px;
    margin: 8px 0;
  }
  q-input .q-icon {
    color: white;
  }
  form .inputBtn {
    margin-top: 30px;
  }
  a:link {
    color: white;
  }
  a:visited {
    color: white;
  }
  a p{
    font-size: 0.7em;
    text-align: right;
  }
  .usuario-nuevo {
    font-size: 0.7em;
    margin-top: 30px;
  }
</style>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      check1: false,
      check2: true,
      password: 'password'
    }
  }
}
</script>
