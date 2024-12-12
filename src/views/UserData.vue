<template>
  <div class="bg-warning w-100 py-3">
    <ActiveUser 
      v-for="(user, index) in users"
      :key="index"
      :fullName="user.fullName"
      :age="user.age"/>
    <h3 class="my-3 d-flex flex-column align-items-center">Formulaire d'édition</h3>
    <form @submit.prevent="addUser">
      <div class="mb-3 d-flex flex-column align-items-center">
        <label for="exampleInputName1" class="form-label">Nom</label>
        <input v-model="nameString" type="text" class="form-control w-50" id="exampleInputName1">
      </div>
      <div class="mb-3 d-flex flex-column align-items-center">
        <label for="exampleInputAge1" class="form-label">Age</label>
        <input v-model="ageString" type="number" class="form-control w-50" id="exampleInputAge1">
      </div>
      <button type="submit" class="btn btn-warning border border-black">MAJ des données</button>
    </form>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'
import ActiveUser from '../components/ActiveUser.vue';
const nameString = ref('');
const ageString = ref('');
const users = ref([]);

function addUser() {
  if (nameString.value && ageString.value) {
    users.value.push({
      fullName: nameString.value,
      age: ageString.value
    });

    console.log(users.value);
    nameString.value = '';
    ageString.value = null;
  }
}

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

</script>

<style scoped lang="css">
</style>