<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
        <panel title="Songs"> <!-- This value of 'title' will become an element of 'props' in the Panel component -->
            <router-link
                slot="action"
                :to="{name: 'song-create'}"> <!-- Use <router-link to navigate to song-create page. The name MUST be same as one of the 'routes' in router/indes.js -->
                <v-btn
                    class="cyan accent-2"
                    light
                    medium
                    absolute
                    right
                    middle
                    fab>
                    <v-icon>add</v-icon>
                </v-btn> <!-- Use slot="action" to insert to 'action' slot of Panel.vue  -->
            </router-link>
            <div
              v-for="song in songs"
              class="song"
              :key="song.id">
              <v-layout>
                <v-flex xs6>
                  <div class="song-title">
                    {{song.title}}
                  </div>
                  <div class="song-artist">
                    {{song.artist}}
                  </div>
                  <div class="song-genre">
                    {{song.genre}}
                  </div>
                  <v-btn
                  class="cyan"
                  @click="navigateTo({
                    name: 'song',
                    params: {
                      songId: song.id
                      }
                    })"> <!-- Redirect to song/:songId page -->
                  View
                  </v-btn>
                </v-flex>

                <v-flex xs6>
                  <img class="album-image" :src="song.albumImage"/>
                </v-flex>
              </v-layout>
            </div>
        </panel>
    </v-flex>
  </v-layout>

</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel // This component import here will be used under '<panel'
  },
  data () {
    return {
      songs: []
    }
  },
  async mounted () { // Use 'mounted' when we want to get something from back-end
    this.songs = (await SongsService.index()).data // Get all songs.
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
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
