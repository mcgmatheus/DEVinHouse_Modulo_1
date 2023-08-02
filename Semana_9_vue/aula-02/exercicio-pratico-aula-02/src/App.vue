<template>
  <div>
    <h1>Calculadora IMC</h1>
    <input type="number" placeholder="Informe um numero" v-model="numero" />
    <button @click="calculaResultado()">Calcular</button>
    <span>{{ resultado }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numero: "",
      resultado: "",
    };
  },
  methods: {
    calculaResultado() {
      if (this.numero % 2 == 0) {
        this.resultado = "Numero par";
      } else {
        this.resultado = "Numero impar";
      }
    },
  },
};
</script>

<style></style>
