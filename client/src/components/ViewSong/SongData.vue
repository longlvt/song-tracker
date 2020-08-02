<template>
    <panel title="Your Song">
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
              name: 'song-edit', // this name must be equal to one of the property's name in router/index.js
              params: {
                songId: song.id
                }
              })"> <!-- Redirect to song/:songId page -->
            Edit
            </v-btn>
            </v-flex>

            <v-flex xs6>
            <img class="album-image" :src="song.albumImage"/>
            <br>
                {{song.album}}
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
import Panel from '@/components/panel'
export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route) // Use 'router' object
    }
  },
  components: {
    Panel
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
.ml-2 {
    padding-left: 5px;
}

</style>
