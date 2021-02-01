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
          v-for="bus in business"
          :key="bus.index"
          color="cyan lighten-3"
        >
          {{ bus.title }}
          <v-spacer />
          <v-card-subtitle
            color="color"
            class="mt-2 mb-2"
          >
            {{ bus.description }}
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
            :src="bus.urlToImage"
            lazy-src="bus.urlToImage"
          />
          <v-btn
            v-ripple="{center: true}"
            :href="bus.url"
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
import Footer from '../components/Footer'

export default {
  name: 'PoliticsPage',
  components: {
    Navigation,
    Footer
  },
  data () {
    return {
      business: null,
      src: ''
    }
  },
  mounted () {
    this.$axios.$get('http://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=d24618ec857b475e8e3f2e60828b9c6b')
      .then((response) => {
        this.business = response.articles
      })
      .catch((error) => {
        alert(error)
      })
  }
}
</script>

<style scoped lang=scss>

</style>
