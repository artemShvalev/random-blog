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
                <v-autocomplete label="Which browser do u use?" :items="states" />
                <v-file-input label="Touch profile picture" truncate-length="15" />
                <v-text-field v-model="birthday" label="U BirthDay" readonly />
                <v-date-picker v-model="birthday" color="green lighten-1" header-color="primary" />
                <v-checkbox v-model="agreeToTerms" :rules="agreeToTermsRules" requird label="Agree & Conditional private rules" />
                <v-btn type="submit" class="mr-4" color="primary" :disabled="!formValidaty">
                  Submit!
                </v-btn>
                <v-btn class="mr-4" color="success" @click="validateForm">
                  Validate Form
                </v-btn>
                <v-btn color="warning" class="mr-4" @click="resetValidation">
                  Reset Validation
                </v-btn>
                <v-btn color="error" @click="resetForm">
                  Reset
                </v-btn>
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
    formValidaty: false,
    email: '',
    emailRules: [
      value => !!value || 'Email is required',
      value => value.indexOf('@') !== 0 || 'Email should have  a username',
      value => value.includes('@') || 'Email should be "@" symbol',
      value => value.indexOf('@') || 'Email should include "@" symbol',
      value => value.indexOf('.') - value.indexOf('@') > 1 || 'Email should contain valid domain',
      value => value.indexOf('.') <= value.length - 3 || 'Email should contain valid domain extension'
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
    ],
    states: [
      'Alabama', 'Alaska', 'American Samoa', 'Arizona',
      'Arkansas', 'California', 'Colorado', 'Connecticut',
      'Delaware', 'District of Columbia', 'Federated States of Micronesia',
      'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
      'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
      'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
      'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
      'Missouri', 'Montana', 'Nebraska', 'Nevada',
      'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
      'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
      'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
      'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
      'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
      'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ]
  }),
  methods: {
    resetValidation () {
      this.$refs.signUpForm.resetValidation()
    },
    resetForm () {
      this.$refs.signUpForm.reset()
    },
    validateForm () {
      this.$refs.signUpForm.validate()
    }
  }
}
</script>
<style scoped lang=scss>

</style>
