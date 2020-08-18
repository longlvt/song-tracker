<template>
    <panel title="Recent View">
      FIX ME: THIS IS SUPPOSED TO SHOW LIST RECENT VIEW
        <v-data-table
            :headers="headers"
            :items="histories">
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
import SongHistoryService from '@/services/SongHistoryService'
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
        sortBy: 'createdAt',
        descending: true
      },
      histories: []
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
      console.log(`RETRIEVING RECENT VIEW FOR USERID:`, this.user.id)
      this.histories = (await SongHistoryService.index()).data
    }
  }
}
</script>
<style scoped>

</style>
