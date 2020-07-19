<template>
  <div id="app">
    <page-header />
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-text-field__slot.v-label.theme--light {
  left: auto;
  right: auto;
  position: absolute;
}

.v-toolbar__title {
  color: white;
}

/* .v-btn__content {
  color: white;
} */
</style>
