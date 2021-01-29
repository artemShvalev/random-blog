<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Новости</v-toolbar-title>
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
      <v-btn
        color="orange"
        text
        rounded
        class="my-2"
        @click="toggleThems"
      >
        Сменить тему
      </v-btn>
    </v-app-bar>
    <v-spacer />
    <!-- content -->
    <v-spacer></v-spacer>
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
            <v-spacer></v-spacer>
            <v-card-subtitle
              color="color"
              class="mt-2 mb-2"
            >
              {{article.description}}
            </v-card-subtitle>
              <v-spacer></v-spacer>
              <v-img
                max-width="100%"
                max-height="500"
                alt="Фото статьи"
                transition="true"
                contain
                :src="article.urlToImage"
                lazy-src="article.urlToImage"
              >
              </v-img>
              <v-btn
                :href="article.url"
                class="mt-5"
                v-ripple="{center: true}"
              >
                Подробнее...
              </v-btn>
          </v-card-title>
        </v-card>
          <v-spacer/>
    </v-main>
    <!-- footer-->
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
          :key="link.i"
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
          {{ new Date().getFullYear() }} —
          <strong
            v-for="source in sources"
            :key="source.index"
          >
            {{source.name}}
          </strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'Blog',
  data: () => ({
    politics: null,
    sources: null,
    name: null,
    urlToImage: '',
    articles: null,
    color: '#E3F2FD',
    links: [
      {
        label: 'Все Новости',
        url: '/Index'
      },
      {
        label: 'Бизнес',
        url: '/BusinessNews'
      },
      {
        label: 'Спорт',
        url: '/SportNews'
      },
      {
        label: 'Технологии',
        url: '/TechnologyNews'
      }
    ]
  }),
  mounted () {
    this.$axios.$get('http://newsapi.org/v2/top-headlines?country=ru&apiKey=d24618ec857b475e8e3f2e60828b9c6b')
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
  },
  methods: {
    toggleThems () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style scoped lang=scss>
  .id{
    color: forestgreen;
  }

</style>
