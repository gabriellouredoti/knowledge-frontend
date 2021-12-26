<template>
  <div class="page-title">
    <h1><i v-if="icon" :class="icon"/> {{main}}</h1>
    <h2>{{sub}}</h2>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    main: String,
    sub: String,
    icon: String
  }
}
</script>

<style scoped>
  .page-title h1{
    margin: 0;
  }

  .page-title h2 {
    color: #777;
    margin-top: 5px;
    font-size: 1.3rem;
  }
</style>