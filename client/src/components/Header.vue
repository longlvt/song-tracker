<template>
   <div>
    <v-toolbar
      light
      prominent
      src="https://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/da-nang/top10/best-da-nang-beach/pagePropertiesImage/da-nang-beach.jpg.jpg"
    >
        <v-toolbar-title>
            <span
                class="home"
                @click="navigateTo({name: 'root'})">
                Track-Tracker
            </span>
            </v-toolbar-title>
        <v-toolbar-items>
            <v-btn
                flat
                @click="navigateTo({name: 'songs'})">
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
                v-if="!$store.state.isUserLoggedIn"
                flat
                @click="navigateTo({name: 'login'})">
                LogIn
            </v-btn>
            <v-btn
                v-if="!$store.state.isUserLoggedIn"
                flat
                @click="navigateTo({name: 'register'})">
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
    <!-- <h1>THIS IS TITLE</h1> -->
    <!-- <div>
        <v-toolbar class="cyan">
            <v-toolbar-title class="mr-4">Track-Tracker</v-toolbar-title>
            <v-toolbar-items>
                <v-btn flat>
                    Browser
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div> -->
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route) // Use 'router' object
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)

      // Redirect to homepage
      this.$router.push({
        name: 'root'
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
