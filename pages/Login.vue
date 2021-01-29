<template>
  <div>
    <v-app>
      <v-app-bar app color="primary">
        <v-toolbar-title>Blog</v-toolbar-title>
        <v-spacer />
        <v-btn
          v-for="link in links"
          :key="`${link.label}-header-link`"
          text
          rounded
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
      </v-app-bar>
      <v-main>
        <v-card width="400" class="mx-auto mt-10">
          <v-card-title class="pb-5 d-flex align-center justify-center">
            <h1>Login</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="login.userEmail"
                label="UserName"
                prepend-icon="mdi-action-circle"
              />
              <v-text-field
                v-model="login.pass"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <nuxt-link to="/SignUp">
            <v-btn color="success" to="/SignUp">
              Register
            </v-btn>
            </nuxt-link>
            <v-spacer />
            <nuxt-link to="/Home">
            <v-btn color="info" @click.prevent="onEntry" v-model="login">
              Login
            </v-btn>
            </nuxt-link>
          </v-card-actions>
        </v-card>
      </v-main>
      <v-footer
        color="primary lighten-1"
        padless
      >
        <v-row
          justify="center"
          no-gutters
        >
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
            :to="link.url"
          >
            {{ link.label }}
          </v-btn>
          <v-col
            class="primary lighten-2 py-4 text-center white--text"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>Blog</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'Login',
  // eslint-disable-next-line no-undef,vue/require-prop-types
  props: {
    submit: Promise
  },
  data: () => {
    return {
      login: {
        userEmail: '',
        pass: ''
      },
      showPassword: false,
      links: [
        {
          label: 'Home',
          url: '/'
        },
        {
          label: 'Blog',
          url: '/Blog'
        },
        {
          label: 'Sign Up',
          url: '/SignUp'
        },
        {
          label: 'Login',
          url: '/Login'
        }
      ]
    }
  },
  methods: {
    onEntry () {
      if (this.login) {
        this.$axios.$post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          process.env.API_KEY, {
          email: this.login.userEmail,
          password: this.login.pass,
          returnSecureToken: true
        }
        ).then((result) => {
          this.login = result
          this.$router.push('/Home')
        })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
      }
    }
  }
}
</script>

<style scoped lang=scss>

</style>
