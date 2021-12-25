<template>
  <header class="header">
    <a class="toogle" @click.prevent="toogleMenu" v-if="!hideToogle">
      <i class="fa fa-lg" :class="icon"></i> 
    </a>
    <h1 class="title">{{title}}</h1>
  </header>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    hideToogle: Boolean 
  },
  computed: {
    ...mapState(['isMenuVisible']),
    icon(){
      return this.isMenuVisible ? "fa-angle-left" : "fa-angle-down" 
    },
  },
  methods: {
    toogleMenu(){
      this.$store.commit('toogleMenu')
    }
  }
}
</script>

<style scoped>
  .header{
    grid-area: header;
    background: linear-gradient(to right, #1e469A, #49a7c1);

    display: flex;
    justify-content: center;
    align-items: center;

  }

  .title {
    font-size: 1.2rem;
    color: #fff;
    font-weight: 100;
    flex-grow: 1;
    text-align: center;
  }

  .header a {
    color: #fff;
    text-decoration: none;
  }

  header.header > a.toogle{
    width: 60px;
    height: 100%;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  header.header > a.toogle:hover{
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);

  }


</style>