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
      <v-main class="d-flex justify-end mt-4 align-baseline">
            <v-btn
              color="orange lighten-1"
              text
              @click="genreRandom"
              class="mx-auto"
            >
              <v-icon>
              Нажми и узный случайный стиль
              </v-icon>
            </v-btn>
                <v-card-text
                  color="#2c1de"
                  rounded="true"
                >
                  {{ genre }}
                </v-card-text>
      </v-main>
      <v-footer
        color="primary dark-1"
        padless
      >
        <v-row
          justify="center"
          no-gutters
          align="center"
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
            {{ new Date().getFullYear() }} —> <strong>Blog</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    show1: false,
    genre: '',
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
    genreRandom () {
      this.$axios.$get('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
        .then((response) => {
          this.genre = response
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>
