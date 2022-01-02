<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento"/>
    <div class="stats">
      <Stat title="Categorias" icon="fa fa-folder" color="#d54d50" :value="stat.categories"/>
      <Stat title="Artigos" icon="fa fa-file" color="#3bc480" :value="stat.articles"/>
      <Stat title="Usuários" icon="fa fa-user" color="#3282cd" :value="stat.users"/>
    </div>
  </div>
</template>

<script>

import PageTitle from '../template/PageTitle.vue'
import Stat from './Stat.vue'

import axios from 'axios'
import {baseApiUrl} from '../../global'

export default {
  name: 'Home',
  components: {
    PageTitle,
    Stat
  },
  data: function() {
    return {
      stat: {
        categories: 0,
        articles: 0,
        users: 0
      }
    }
  },
  methods: {
    getStats() {
      axios.get(`${baseApiUrl}/stats`)
        .then(response => this.stat = response.data)
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.getStats()
  }
}
</script>

<style scoped>


  .stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
 

</style>