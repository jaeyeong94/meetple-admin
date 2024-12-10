<script setup lang="ts">
const submit = async () => {
  const response = await $fetch('/api/create-plus-user', {
    method: 'POST',
    body: {
    }
  })

  console.log(response);
}
</script>

<template>
  <div>
    Page: randiplusaasadasda
    <span>안녕</span>
    <button @click="submit">asdad</button>
  </div>
</template>

<style scoped lang="scss">
  div {
    color: red;

    span {
      color: blue;
    }
  }
</style>
