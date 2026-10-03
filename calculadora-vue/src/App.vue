<template>
  <div class="container">
    <h1>Calculadora</h1>

    <input type="number" v-model.number="num1" placeholder="Número 1" />

    <select v-model="operacao">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>

    <input type="number" v-model.number="num2" placeholder="Número 2" />

    <h2>Resultado: {{ resultado }}</h2>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const num1 = ref(0);
const num2 = ref(0);
const operacao = ref("+");

const resultado = computed(() => {
  switch (operacao.value) {
    case "+":
      return num1.value + num2.value;
    case "-":
      return num1.value - num2.value;
    case "*":
      return num1.value * num2.value;
    case "/":
      return num2.value !== 0
        ? (num1.value / num2.value).toFixed(2)
        : "Erro (divisão por 0)";
    default:
      return 0;
  }
});
</script>

<style>
.container {
  max-width: 300px;
  margin: auto;
  text-align: center;
}

input, select {
  margin: 10px;
  padding: 8px;
}
</style>