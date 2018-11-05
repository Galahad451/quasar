<template>
  <q-page class="flex flex-center">
    <h1>{{etiqueta}}  {{rangeValues.min*rangeValues.max}}</h1>
    <q-range
      v-model="rangeValues"
      :min="0"
      :max="10"
      :step="1"
      label
      snap
    />
    <q-field label="Mínimo">
      <q-input v-model="rangeValues.min" />
    </q-field>
    <q-field :label="etiqueta">
      <q-input v-model="rangeValues.max" />
    </q-field>
    <q-field label="Calcula">
      <q-input :value="divide"/>
    </q-field>
    <q-btn style="display: block; width: 100%;" @click="alerta">Dividir</q-btn>
  </q-page>
</template>

<style>
    p {
        color: red;
    }
</style>

<script>
export default {
  name: 'Salones',
  data () {
    return {
      // our model here
      rangeValues: {
        min: 2,
        max: 4
      },
      numerodeSalones: 7,
      etiqueta: 'Cadena'
    }
  },
  methods: {
    alerta () {
      this.$q.notify('Alerta')
    }
  },
  computed: {
    divide () {
      let resultado = this.rangeValues.min / this.rangeValues.max
      return resultado
    }
  },
  mounted () {
    this.$q.notify('Alerta')
  }
}
</script>
