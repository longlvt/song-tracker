<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            reverse
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password">
          </v-text-field>
        </form>
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn
          class="cyan"
          @click="register">
          Register
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '', // Bind with the "email v-model" above
      password: '', // Bind with the "password v-model" above
      error: null // Bind with the "error v-html" above
    }
  },
  methods: {
    async register () { // Bind with the "register @click" above
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })

        // Call setToken method in src/store/store.js
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.error {
 color: red;
}

</style>
