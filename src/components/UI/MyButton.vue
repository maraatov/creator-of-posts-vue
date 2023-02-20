<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.button {
  height: 50px;
  margin-top: 15px;
  font-weight: bold;
  color: green;
  background-color: white;
  padding: 10px;
}
.button:hover {
  cursor: pointer;
}
</style>