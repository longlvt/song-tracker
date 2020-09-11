<template>
   <div>
    <v-toolbar
      light
      prominent
      src="https://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/da-nang/top10/best-da-nang-beach/pagePropertiesImage/da-nang-beach.jpg.jpg"
    >
        <v-toolbar-title>
          <!-- router-link is a component of vue-router -->
            <router-link
                class="home"
                tag="span"
                :to="{name: 'songs'}">
                Track-Tracker
            </router-link>
            </v-toolbar-title>
        <v-toolbar-items>
            <v-btn
                flat
                :to=" {name: 'songs'}">
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <!-- When you use v-btn with to attribute by passing the path object,
          it internally uses the vue-router's router-link component's api -->
            <v-btn
                v-if="!$store.state.isUserLoggedIn"
                flat
                :to="{name: 'login'}">
                LogIn
            </v-btn>
            <v-btn
                v-if="!$store.state.isUserLoggedIn"
                flat
                :to="{name: 'register'}">
                Sign Up
            </v-btn>
            <v-btn
                v-if="$store.state.isUserLoggedIn"
                flat
                @click="logout">
                Log Out
            </v-btn>
        </v-toolbar-items>

    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null) // Call 'setToken' mutation in store
      this.$store.dispatch('setUser', null) // Call 'setUser' mutation in store

      // Redirect to homepage
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scoped>
.home {
    cursor: pointer;
}

.home:hover {
    color: #999999;
}
</style>
