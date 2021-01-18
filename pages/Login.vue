<template>
  <div>
    <v-app>
      <v-app-bar app color="primary">
        <v-toolbar-title>Blog</v-toolbar-title>
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
      </v-app-bar>
      <v-main>
        <v-card width="400" class="mx-auto mt-5">
          <v-card-title class="pb-0">
            <h1>Login</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="UserName"
                prepend-icon="mdi-action-circle"
              />
              <v-text-field
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              />
            </v-form>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn color="success">
              Register
            </v-btn>
            <v-spacer />
            <v-btn color="info">
              Login
            </v-btn>
          </v-card-actions>
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
            :key="link"
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
            {{ new Date().getFullYear() }} — <strong>Blog</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => {
    return {
      showPassword: false,
      links: [
        {
          label: 'Home',
          url: '/'
        },
        {
          label: 'Blog',
          url: '/Blog'
        },
        {
          label: 'Sign Up',
          url: '/SignUp'
        },
        {
          label: 'Login',
          url: '/Login'
        }
      ]
    }
  }
}
</script>

<style scoped lang=scss>

</style>
