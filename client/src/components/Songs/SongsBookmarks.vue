<template>
    <panel title="Bookmark">
        <v-data-table
            :headers="headers"
            :pagination.sync="pagination"
            :items="bookmarks">
            <!-- FIX ME: Using slot-scope -->
            <template slot-scope="items">
                <td class="text-xs-right">
                    {{props.item.title}}
                </td>
                <td class="text-xs-right">
                    {{props.item.artist}}
                </td>
            </template>
        </v-data-table>
    </panel>
</template>

<script>
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
      bookmarks: [
        {
          title: 'My Bookmarks',
          artist: 'Test Bookmarks'
        },
        {
          title: 'My Bookmarks 2',
          artist: 'Test Bookmarks 2'
        }

      ]
    }
  },
  async mounted () {

  }
}
</script>
<style scoped>

</style>
