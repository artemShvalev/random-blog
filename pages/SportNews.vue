<template>
  <v-app>
    <Navigation />
    <v-main>
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
          v-for="sport in sports"
          :key="sport.index"
          color="cyan lighten-3"
        >
          {{ sport.title }}
          <v-spacer />
          <v-card-subtitle
            color="color"
            class="mt-2 mb-2"
            width="300"
          >
            {{ sport.description }}
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
            :src="sport.urlToImage"
            lazy-src="sport.urlToImage"
          />
          <v-btn
            v-ripple="{center: true}"
            :href="sport.url"
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
  name: 'SportNews',
  components: {
    Navigation,
    Footer
  },
  data () {
    return {
      sports: null
    }
  },
  mounted () {
    this.$axios.$get('http://newsapi.org/v2/top-headlines?country=ru&category=sport&apiKey=d24618ec857b475e8e3f2e60828b9c6b')
      .then((response) => {
        this.sports = response.articles
      })
      .catch((error) => {
        this.$router.push(error, '/error')
      })
  }
}
</script>

<style scoped lang=scss>

</style>
