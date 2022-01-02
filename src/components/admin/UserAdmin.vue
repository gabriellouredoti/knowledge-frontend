<template>
  <div class="user-admin">
    <b-table hover striped :items="users" :fields="fields">

    </b-table>
  </div>
</template>

<script>

import axios from 'axios'
import {baseApiUrl} from '../../global'

export default {
  name: "UserAdmin",
  data: function() {
    return {
      mode: 'save',
      user: {},
      users: [],
      fields: [
        {key: 'id', label: 'Código', sortable: true},
        {key: 'name', label: 'Nome', sortable: true},
        {key: 'email', label: 'E-mail', sortable: true},
        {key: 'admin', label: 'Administrador', sortable: true,
          formatter: value => value ? 'Sim' : 'Não'},
        {key: 'actions', label: 'Ações', sortable: true},
      ]
    }
  },
  methods: {
    loadUsers() {
      axios.get(`${baseApiUrl}/users`)
        .then((response) => {
          this.users = response.data
          console.log(this.users)
        })
        .catch(err => console.log(err))
    }
  },
  mounted() {
    this.loadUsers()
  }
}
</script>

<style scoped>

</style>