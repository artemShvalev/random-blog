<template>
  <v-app>
    <v-app-bar-title
    v-for="bus in business"
    :key="bus.index"
    >
      <h1>{{bus.description}}</h1>
    </v-app-bar-title>
    </v-app>
</template>

<script>
export default {
  name: 'PoliticsPage',
  data () {
    return {
      business: null
    }
  },
  mounted () {
    this.$axios.$get('http://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=d24618ec857b475e8e3f2e60828b9c6b')
      .then((response) => {
        this.business = response.business
      })
      .catch((error) => {
        alert(error)
      })
  }
}
</script>

<style scoped lang=scss>

</style>
