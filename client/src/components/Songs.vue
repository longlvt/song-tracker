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
              :key="song.id">
                {{song.title}} -
                {{song.artist}} -
                {{song.album}}
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
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>
<style scoped>

</style>
