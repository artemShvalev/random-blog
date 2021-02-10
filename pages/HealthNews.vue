<template>
  <v-app>
    <Navigation />
    <v-main>
      </v-container>
      <v-spacer />
      <v-card
        class="mx-auto mt-8"
        max-width="1000"
        max-heigth="95%"
        elevation="5"
        rounded
        raised
        loading="true"
      >
        <v-card-title
          v-for="healthes in health"
          :key="healthes.index"
          color="cyan lighten-3"
        >
          {{ healthes.title }}
          <v-spacer />
          <v-card-subtitle
            color="color"
            class="mt-2 mb-2"
          >
            {{ healthes.description }}
          </v-card-subtitle>
          <v-spacer />
          <v-img
            class="rounded-b"
            max-width="100%"
            max-height="500"
            alt="Фото статьи"
            transition="true"
            position="center center"
            contain
            :src="healthes.urlToImage"
            lazy-src="bus.urlToImage"
          />
          <v-btn
            v-ripple="{center: true}"
            :href="healthes.url"
            class="mt-5"
          >
            Подробнее...
          </v-btn>
        </v-card-title>
      </v-card>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from '../components/Navigation'
import Footer from '~/components/Footer.vue'

export default {
  name: 'HealthNews',
  components: {
    Navigation,
    Footer
  },
  data () {
    return {
      health: null, // Появляется привязка this
      src: ''
    }
  },
  mounted () {
    this.$axios.$get('http://newsapi.org/v2/top-headlines?country=ru&category=health&apiKey=d24618ec857b475e8e3f2e60828b9c6b')
      .then((response) => {
        this.health = response.articles
      })
      .catch((error) => {
        alert(error)
      })
  },
  methods: {
    toggleThems () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style scoped lang=scss>

</style>
