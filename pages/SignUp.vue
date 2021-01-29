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
        <v-container>
          <v-row>
            <v-col cols="12">
              <h1>Sign Up</h1>
              <v-form ref="signUpForm" v-model="formValidaty">
                <v-text-field v-model="email" :rules="emailRules" required label="Email" type="email" />
                <v-text-field v-model="password" :rules="passwordRules" required label="Password" type="password" />
                <v-file-input label="Touch profile picture" truncate-length="15" />
                <v-text-field v-model="birthday" label="U BirthDay" readonly />
                <v-date-picker v-model="birthday" color="green lighten-1" header-color="primary" />
                <v-checkbox v-model="agreeToTerms" :rules="agreeToTermsRules" requird label="Agree & Conditional private rules" />
                <nuxt-link to="/Login">
                <v-btn type="submit" class="mr-4" color="primary" :disabled="!formValidaty" @click.prevent="onsubmit">
                  Submit!
                </v-btn>
                </nuxt-link>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
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
            :key="`${link.label}-footer-link`"
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

  data: () => ({
    email: '',
    password: '',
    formValidaty: false,
    emailRules: [
      value => !!value || 'Email is required',
      value => value.indexOf('@') !== 0 || 'Email should have  a username',
      value => value.includes('@') || 'Email should be "@" symbol',
      value => value.indexOf('@') || 'Email should include "@" symbol',
      value => value.indexOf('.') - value.indexOf('@') > 1 || 'Email should contain valid domain',
      value => value.indexOf('.') <= value.length - 3 || 'Email should contain valid domain extension'
    ],
    passwordRules: [
      value => !!value || 'Password is required',
      value => !!value.length < 6 || 'Password must be contain min 6 symbols',
      value => !!value.indexOf('A-z') || 'Password must be contain symbols "A-z"'
    ],
    agreeToTermsRules: [
      value => !!value || 'You must agree us terms conditional'
    ],
    agreeToTerms: false,
    birthday: '',
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
  }),
  methods: {
    onsubmit () {
      if (this.formValidaty) {
        this.$axios.$post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          process.env.API_KEY, {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }
        ).then((result) => {
          // eslint-disable-next-line no-console
          console.log(result)
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
