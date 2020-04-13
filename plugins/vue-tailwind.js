import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

Vue.use(VueTailwind, {
  // optional theme (according to the docs)
  theme: {
    TCard: {
      baseClass: 'bg-white rounded-lg shadow',
      headerClass: 'px-12 pt-8 pb-0 text-xl',
      bodyClass: 'p-12'
    }
  }
})
