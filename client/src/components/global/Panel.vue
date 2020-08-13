<template>
    <div class="white elevation-2">
        <v-toolbar flat dense dark class="cyan">
          <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="action" />
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
  props: [ // These are values that will be input from parent template (Songs, ...)
    'title' // The value of this variable will be used for the 'title' in this template.
  ]
}
</script>
<style scoped>

</style>
