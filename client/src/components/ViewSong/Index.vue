<template>
    <div>
        <v-layout>
            <v-flex xs6>
                <!-- Bind 'song' of this template to 'song' of 'SongData' template-->
                <song-data :song="song" />
            </v-flex>

            <v-flex xs6 class="ml-2">
                <!-- Bind 'song.youtubeId' of this template to 'youtubeId' of 'YoutubeView' template-->
                <youtube-view :youtubeId="song.youtubeId" />
            </v-flex>
        </v-layout>

        <v-layout>
            <v-flex xs6 class="ml-2">
                <!-- Bind 'song' of this template to 'song' of 'Tab' template-->
                <lyrics :song="song"/>
            </v-flex>

            <v-flex xs6 class="ml-2">
                <!-- Bind 'song' of this template to 'song' of 'Lyrics' template-->
                <lyrics :song="song"/>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
import SongsService from '@/services/SongsService'
import SongHistoryServie from '@/services/SongHistoryService'
import SongData from '@/components/ViewSong/SongData'
import YoutubeView from '@/components/ViewSong/YoutubeView'
import Lyrics from '@/components/ViewSong/Lyrics'
import Tab from '@/components/ViewSong/Tab'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn', // Grab isUserLoggedIn from store and put it under computed method
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    // this value is return inside the vuex's state due to library 'vuex-router-sync'

    this.song = (await SongsService.show(songId)).data
    console.log(`SONG DETAIL:`, this.song)

    // Save the view to Back-end (only if user is logged-in)
    if (this.isUserLoggedIn) {
      console.log(`SAVE VIEW HISTORY FOR USER: ${this.user.id}, and SONG: ${songId}`)
      SongHistoryServie.post({
        songId: songId,
        userId: this.user.id
      })
    }
  },
  components: {
    SongData,
    YoutubeView,
    Lyrics,
    Tab
  }
}
</script>
<style scoped>
.ml-2 {
  padding-left: 5px;
}
</style>
