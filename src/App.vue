<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible}">
		<Header title="Projeto Final" :hideToogle="false" :hideUserDropdown="false"/>
    <Menu/>
    <Content/>
    <Footer/>
	</div>
</template>

<script>

import {mapState} from 'vuex'

import Header from './components/template/Header.vue'
import Content from './components/template/Content.vue'
import Menu from './components/template/Menu.vue'
import Footer from './components/template/Footer.vue'

export default {
	name: "App",
  components: {
    Header,
    Content,
    Menu,
    Footer
  },
  computed: mapState(['isMenuVisible'])
}
</script>
<style>
  * {
    font-family: 'Lato', sans-serif;

    padding: 0;
    margin: 0;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;

    display: grid;
    grid-template-rows: 60px 1fr 50px;
    grid-template-columns: 300px 1fr ;
    grid-template-areas: 
      "header header"
      "menu content"
      "menu footer";
  }
  /* refaz o grid quando o menu é ocultado */
  #app.hide-menu{
    grid-template-areas: 
      "header header"
      "content content"
      "footer footer";
  }
</style>