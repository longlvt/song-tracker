<template>
    <panel title="Youtube Video">
        <youtube
            :video-id="youtubeId"
            :player-width="800"
            :player-height="250">
        </youtube>
    </panel>
</template>

<script>
import Panel from '@/components/panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>
<style scoped>

</style>
