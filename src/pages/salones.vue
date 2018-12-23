<template>
  <q-page class="flex-center">
    <section>
      <q-tabs>
        <!-- Tabs - notice slot="title" -->
        <q-tab default class="tab" slot="title" label="Salones" name="tab-1"/>
        <q-tab class="tab" slot="title" name="tab-2" label="Maps" />
        <!-- Targets -->
        <q-tab-pane class="tab-pane" name="tab-1">
          <q-layout-footer v-model="footer">
            <q-tabs position="bottom">
              <q-tab-pane class="tab-pane" name="piso-1">
                <div class="grid-container">
                  <div class="grid-item">Salón 101</div>
                  <div class="grid-item">
                    <q-btn name="salon-2" label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 102</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 103</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 104</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 105</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 106</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                </div>
              </q-tab-pane>
              <q-tab-pane class="tab-pane" name="piso-2">
                <div class="grid-container">
                  <div class="grid-item">Salón 201</div>
                  <div class="grid-item">
                    <q-btn name="salon-2" label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 202</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 203</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 204</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 205</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 206</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                </div>
              </q-tab-pane>
              <q-tab-pane name="piso-3" class="tab-pane">
                <div class="grid-container">
                  <div class="grid-item">Salón 301</div>
                  <div class="grid-item">
                    <q-btn name="salon-2" label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 302</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 303</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 304</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 305</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="loading" @click="abrir"></q-btn>
                  </div>
                  <div class="grid-item">Salón 306</div>
                  <div class="grid-item">
                    <q-btn label="Abrir" :loading="result" @click="result" to="result"></q-btn>
                  </div>
                </div>
              </q-tab-pane>
              <q-tab default class="tab" slot="title" name="piso-1" label="Piso 1"/>
              <q-tab class="tab" slot="title" name="piso-2" label="Piso 2"/>
              <q-tab class="tab" slot="title" name="piso-3" label="Piso 3"/>
            </q-tabs>
          </q-layout-footer>
        </q-tab-pane>
        <q-tab-pane class="tab-pane" name="tab-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.9630122808508!2d-103.41044718471852!3d20.6303644066342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ac4c6738bb13%3A0xbbe036eb095f6aa0!2sAmerike+Instituto+de+Estudios+Universitarios!5e0!3m2!1ses!2smx!4v1542821985805" width=100% height=400px frameborder="0" style="border:0" allowfullscreen></iframe>
        </q-tab-pane>
      </q-tabs>
    </section>
  </q-page>
</template>
<style>
  body{
    background-color: #4A4944;
    color: #FFF;
  }
  section{
    background-color: aliceblue;
    top: -100px;
  }
  .nav-buttons{
    width: 100%;
  }
  .nav-buttons .nav-button{
    width: 100%;
    height: 50px;
  }
  .tab{
    background-color: #4A4944;
    color: whitesmoke;
  }
  .tab-pane{
    padding: 0;
    background-color: ghostwhite;
    color: dimgray;
  }
  .grid-container{
    display: grid;
    grid-template-columns: auto auto;
  }
  .grid-item{
    text-align: center;
    padding: 10px;
    vertical-align: middle;
    margin-top: auto;
    margin-bottom: auto;
  }
</style>
<script>
import axios from 'axios'
const querystring = require('querystring')
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    abrir: async function () {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      await axios.post('https://api.particle.io/v1/devices/23002b001147353136383631/abrirPuerta', querystring.stringify({access_token: '8dc11a1ba4ed41ef93a1aa9d761770eb78fffdb6'}), config)
    }
  }
}
</script>
