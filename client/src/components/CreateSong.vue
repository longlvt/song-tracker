<template>
    <v-layout>
        <v-flex xs7>
            <panel title="Song Detail">
                <v-text-field
                    label="Title"
                    required
                    :rules="[required]"
                    v-model="song.title">
                </v-text-field>
                <v-text-field
                    label="Artist"
                    required
                    :rules="[required]"
                    v-model="song.artist">
                </v-text-field>
                <v-text-field
                    label="Genre"
                    required
                    :rules="[required]"
                    v-model="song.genre">
                </v-text-field>
                <v-text-field
                    label="Album Name"
                    required
                    :rules="[required]"
                    v-model="song.album">
                </v-text-field>
                <v-text-field
                    label="Album Image URL"
                    required
                    :rules="[required]"
                    v-model="song.albumImage">
                </v-text-field>
                <v-text-field
                    label="Youtube ID"
                    required
                    :rules="[required]"
                    v-model="song.youtubeId">
                </v-text-field>
            </panel>
        </v-flex>
        <v-flex xs8>
            <panel title="Song Structure" class="ml-2">
                <v-textarea
                    label="Lyrics"
                    required
                    :rules="[required]"
                    v-model="song.lyrics">
                </v-textarea>
                <v-textarea
                    label="Tab"
                    required
                    :rules="[required]"
                    v-model="song.tab">
                </v-textarea>
            </panel>
            <v-btn
            class="cyan"
            @click="create">
            Create Song
        </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>
.ml-2 {
    padding-left: 5px;
}

</style>
