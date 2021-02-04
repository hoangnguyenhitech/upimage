<template>
  <div>
    <h2>page home</h2>
    <button type="button" @click="$router.replace('login')">
      back to login
    </button>
  </div>
</template>
<script>
export default {
  name: "home",
};
</script>
<style lang="scss" scoped>
button {
  display: block;
  margin: 20px 0 20px 40%;
  padding: 10px;
  width: 20%;
  cursor: pointer;
}
</style>
