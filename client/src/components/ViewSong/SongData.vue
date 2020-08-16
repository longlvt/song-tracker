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
            :to="{
              name: 'song-edit', // this name must be equal to one of the property's name in router/index.js
              params () { // params as a method so that the songId can be dynamicaly updated.
                return {
                  songId: song.id
                }
              }
            }"> <!-- Redirect to song/:songId page -->
            Edit
            </v-btn>

            <v-btn
            v-if="isUserLoggedIn && !bookmark"
            class="cyan"
            @click="setAsBookmark">
            Set As Bookmark
            </v-btn>

            <v-btn
            v-if="isUserLoggedIn && bookmark"
            class="cyan"
            @click="unSetAsBookmark">
            Unset Bookmark
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
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn', // Grab isUserLoggedIn from store and put it under computed method
      'user'
    ])
  },
  watch: {
    async song () {
    // Get bookmark status for particular User and Song.
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.user.id
        })).data // When the DB association is completed, the bookmark creation will create an id for a bookmarked.
        if (bookmarks.length) this.bookmark = bookmarks[0]
        console.log('BOOKMARK:', this.bookmark)
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
  },
  methods: {
    async setAsBookmark () {
      try {
        console.log(`SONG ID to Bookmark:`, this.song.id)
        console.log(`USER ID to Bookmark:`, this.$store.state.user.id)
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
        // FIX ME: Need to delete this hard-code after finish DB association
        this.bookmark = true
      } catch (err) {
        console.log(err)
      }
    },
    async unSetAsBookmark () {
      try {
        console.log(`SONG ID to UnBookmark:`, this.song.id)
        console.log(`USER ID to UnBookmark:`, this.$store.state.user.id)
        // FIX ME: When the DB association is completed, the bookmark creation will create an id for a bookmarked.
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
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
.ml-2 {
    padding-left: 5px;
}

</style>
