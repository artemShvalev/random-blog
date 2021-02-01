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
          v-for="tech in technology"
          :key="tech.index"
          color="cyan lighten-3"
        >
          {{ tech.title }}
          <v-spacer />
          <v-card-subtitle
            color="color"
            class="mt-2 mb-2"
            width="300"
          >
            {{ tech.description }}
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
            :src="tech.urlToImage"
            lazy-src="tech.urlToImage"
          />
          <v-btn
            v-ripple="{center: true}"
            :href="tech.url"
            class="mt-5"
          >
            Подробнее...
          </v-btn>
        </v-card-title>
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
            v-for="tech in technology"
            :key="tech.index"
          >
            {{ tech.author }}
          </strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'TechnologyNews',
  data () {
    return {
      technology: null,
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
        },
        {
          label: 'Здоровье',
          url: '/HealthNews'
        },
        {
          label: 'Наука',
          url: '/ScienceNews'
        }
      ]
    }
  },
  mounted () {
    this.$axios.$get('http://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=d24618ec857b475e8e3f2e60828b9c6b')
      .then((response) => {
        this.technology = response.articles
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
