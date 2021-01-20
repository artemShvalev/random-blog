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
        <v-card
          elevation="2"
          class="mx-auto float-left ml-4"
          max-width="344"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>
          <v-card-title>
            Top western road trips
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
            >
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, est, facere. Ducimus eligendi, eos
                  est fuga molestias optio quasi similique voluptas? Assumenda doloremque, error magnam obcaecati qui ratione
                  saepe veritatis!
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card-actions>
        </v-card>
        <v-card
          elevation="2"
          class="mx-auto float-left ml-6"
          max-width="344"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>
          <v-card-title>
            Top western road trips
          </v-card-title>
          <v-card-subtitle>
            1,000 miles of wonder
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
              @click="genreRandom"

            >
              Genre
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show1 = !show1"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
            <v-expand-transition>
              <div v-show="show1">
                <v-divider></v-divider>

                <v-card-text>
                  {{ genre }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card-actions>
        </v-card>
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
