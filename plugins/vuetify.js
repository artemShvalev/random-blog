import Vuetify from 'vuetify/lib'
import { preset } from 'vue-cli-plugin-vuetify-preset-crane/preset'
import colors from 'vuetify/es5/util/colors'

export default new Vuetify({
  preset,
  rtl: true,
  theme: {
    light: {
      primary: colors.purple,
      secondary: colors.grey.darken1,
      accent: colors.shades.black,
      error: colors.red.accent3
    },
    dark: {
      primary: colors.blue.lighten3
    }
  },
  options: {
    customProperties: true,
    variations: false,
    themeCache: {
      get: key => localStorage.getItem(key),
      set: (key, value) => localStorage.setItem(key, value)
    }
  }
})
