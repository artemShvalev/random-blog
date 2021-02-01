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
          v-for="article in articles"
          :key="article.index"
          color="cyan lighten-3"
        >
          {{ article.title }}
          <v-spacer />
          <v-card-subtitle
            color="color"
            class="mt-2 mb-2"
          >
            {{ article.description }}
          </v-card-subtitle>
          <v-spacer />
          <v-img
            max-width="100%"
            max-height="500"
            alt="Фото статьи"
            transition="true"
            contain
            :src="article.urlToImage"
            lazy-src="article.urlToImage"
          />
          <v-btn
            v-ripple="{center: true}"
            :href="article.url"
            class="mt-5"
          >
            Подробнее...
          </v-btn>
        </v-card-title>
      </v-card>
      <v-spacer />
    </v-main>
    <!-- footer-->
    <Footer />
  </v-app>
</template>

<script>
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default {
  name: 'Index',
  components: {
    Navigation,
    Footer
  },
  data: () => ({
    politics: null,
    sources: null,
    name: null,
    urlToImage: '',
    articles: null,
    color: '#E3F2FD'
  }),
  mounted () {
    this.$axios.$get('http://newsapi.org/v2/top-headlines?country=ru&category=general&apiKey=d24618ec857b475e8e3f2e60828b9c6b')
      .then((response) => {
        this.articles = response.articles
      })
      .catch((error) => {
        alert(error)
      })
  },
  created () {
    this.$axios.$get('http://newsapi.org/v2/sources?country=ru&apiKey=d24618ec857b475e8e3f2e60828b9c6b')
      .then((response) => {
        this.sources = response.sources
      })
      .catch((error) => {
        alert(error)
      })
  }
}
</script>

<style scoped lang=scss>
  .id{
    color: forestgreen;
  }

</style>
