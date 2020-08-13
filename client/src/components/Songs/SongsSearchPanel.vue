<template>
    <panel title='Search'>
        <v-text-field
        label="Search by song title, artist, album name, or genre"
        v-model="search"
        ></v-text-field>
    </panel>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        // append the content of Search into the query of URL
        route.query = {
          search: this.search
        }
      } // At this point, the value in the search box will be appended in the URL, under search query.
      // However, when you refresh the page, the search query in the URL still there,
      // but the search box is empty.
      this.$router.push(route)
    }, 700), // Debounce 700ms to do the request to server
    '$route.query.search': {
      // Immediatly change the value in search box to be equal to search query in URL.
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }

}
</script>
<style scoped>

</style>
