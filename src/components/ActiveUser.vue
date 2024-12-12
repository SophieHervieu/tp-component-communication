<template>
  <div class="bg-primary mx-3 py-3 rounded-3 border border-1 border-secondary d-flex flex-column align-items-center">
    <p class="text-white border border-1 border-dark rounded-3 w-25 p-2">Nom: {{ fullName }}</p>
    <p class="text-white">Age: {{ age }} ans</p>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const props = defineProps({
  // v-model
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

</script>

<style scoped lang="css">
</style>