<template>
  <div>
    <client-only>
      <v-app-bar app color="primary">
        <v-toolbar-title>Новости</v-toolbar-title>
        <v-app-bar-nav-icon
          :rounded="true"
          color="light-blue lighten-5"
          @click="drawer = true"
        >
          <v-icon
          class="pl-5"
          >
            mdi-order-bool-ascending
          </v-icon>
          <v-spacer />
          <v-navigation-drawer
            v-model="drawer"
            :permanent="false"
            hide-overlay
            fixed
            :mobile-breakpoint="width.xs"
            height="350"
            width="387"
          >
            <v-btn
              color="orange"
              class="my-2"
              text
              rounded
              @click="toggleThems"
            >
              Сменить тему
            </v-btn>
            <v-list
              nav
              dense
            >
              <v-list-item
                v-for="link in links"
                :key="`${link.label}-header-link`"
                v-model="group"
                active-class="deep-purple--text text--accent-4"
                text
                rounded
                :to="link.url"
              >
                <v-list-item>
                  <v-list-item-title>{{ link.label }}</v-list-item-title>
                </v-list-item>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-app-bar-nav-icon>
      </v-app-bar>
    </client-only>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      group: null,
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
      ],
      items: [
        {
          icon: 'mdi-inbox',
          text: 'Inbox'
        },
        {
          icon: 'mdi-star',
          text: 'Star'
        },
        {
          icon: 'mdi-send',
          text: 'Send'
        },
        {
          icon: 'mdi-email-open',
          text: 'Drafts'
        }
      ],
      model: 1
    }
  },
  computed: {
    width () {
      // Use in computed property
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '320px'
        case 'xs2': return '425px'
        case 'sm': return '768px'
        case 'md': return '1024px'
        case 'lg': return '1920px'
        case 'xl': return '2560px'
      }
      return this.width
    }
  },
  methods: {
    toggleThems () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
