<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
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
  methods: {
    toggleThems () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
