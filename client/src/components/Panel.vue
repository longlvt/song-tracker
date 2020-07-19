<template>
    <div class="white elevation-2">
        <v-toolbar flat dense dark class="cyan">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <slot>
              No slot defined.
          </slot>
        </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'hello world' // The value of this variable will be used for the 'title' in this template.
    }
  }
}
</script>
<style scoped>

</style>
