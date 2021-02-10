import Vuetify from 'vuetify/lib'
import { preset } from 'vue-cli-plugin-vuetify-preset-crane/preset'

export default new Vuetify({
  preset,
  rtl: true,
  theme: {
    light: {
      primary: '#673AB7',
      secondary: '#6200EA',
      accent: '#00897B',
      error: '#BF360C'
    },
    dark: {
      primary: '#4174d0',
      secondary: '#11212c',
      accent: '#051024',
      error: '#c10606'
    }
  },
  options: {
    customProperties: true,
    variations: false,
    themeCache: {
      get: key => localStorage.getItem(key),
      set: (key, value) => localStorage.setItem(key, value)
    }
  },
  breakpoint: {
    mobileBreakpoint: 'sm'
  }
})
