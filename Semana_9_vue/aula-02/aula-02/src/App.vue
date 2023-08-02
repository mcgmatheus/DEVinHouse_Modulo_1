<template>
  <div>
    <h1>Calculadora IMC</h1>
    <input type="number" placeholder="peso" v-model="peso" />
    {{ peso }}
    <input type="number" placeholder="altura" v-model="altura" />
    {{ altura }}
    <button @click="calcular()">Calcular</button>
    <span>{{ resultado }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      peso: 0,
      altura: 0,
      resultado: "",
    };
  },
  methods: {
    calcular() {
      if (this.peso == 0 || this.altura == 0) {
        alert("Os dados precisam ser maiores que 0");
        return;
      }

      this.resultado = (this.peso / this.altura ** 2).toFixed(2);
    },
  },
};
</script>

<style></style>
