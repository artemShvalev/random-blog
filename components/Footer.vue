<template>
  <div>
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
          {{ new Date().getFullYear() }}
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      links: [
        {
          label: 'Все Новости',
          url: '/'
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
  }

}
</script>

<style>

</style>
