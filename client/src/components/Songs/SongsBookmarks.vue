<template>
    <panel title="Bookmark">
      FIX ME: THIS IS SUPPOSED TO SHOW BOOKMARK LIST
        <v-data-table
            :headers="headers"
            :items="bookmarks">
            <template slot="items" slot-scope="props">
                <td class="text-xs-right">
                    {{ props.item.title }}
                </td>
                <td class="text-xs-right">
                    {{ props.item.artist }}
                </td>
            </template>
        </v-data-table>
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      pagination: {
        sortBy: 'date', // Sort by the last time it was bookmarked
        descending: true
      },
      bookmarks: []
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn', // Grab isUserLoggedIn from store and put it under computed method
      'user'
    ])
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index()).data
    }
  }
}
</script>
<style scoped>

</style>
