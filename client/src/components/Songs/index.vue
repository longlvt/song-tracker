<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <recent-view class="mt-2" />
    </v-flex>
    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" class="ml-2" >
      <songs-search-panel />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>

</template>

<script>
import SongsService from '@/services/SongsService'
import SongsBookmarks from './SongsBookmarks'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import RecentView from './RecentView'
import {mapState} from 'vuex'
export default {
  components: {
    SongsPanel, // This component import here will be used under '<songs-panel'
    SongsSearchPanel,
    SongsBookmarks,
    RecentView
  },
  data () {
    return {
      songs: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn' // Grab isUserLoggedIn from store and put it under computed method
    ])
  },
  async mounted () { // Use 'mounted' when we want to get something from back-end
    this.songs = (await SongsService.index()).data // Get all songs.
  }
}
</script>
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
