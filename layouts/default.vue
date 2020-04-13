<template>
  <div>
    <sidebar-component />
    <div class="flex flex-col relative md:ml-64 bg-gray-200 min-h-screen">
      <navbar-component />
      <div class="relative bg-pink-500 md:pt-32 pb-64 -mb-64 pt-10" />
      <nuxt class="relative px-4 md:px-10 mx-auto w-full flex-grow" />
      <footer class="block py-4">
        <div class="container mx-auto px-4">
          <hr class="mb-4 border-b-1 border-gray-300" />
          <div
            class="flex flex-wrap items-center md:justify-between justify-center"
          >
            <div class="w-full md:w-4/12 px-4">
              <div class="text-sm text-gray-600 font-semibold py-1">
                Copyright © {{ date }}
                <a
                  href="https://www.creative-tim.com"
                  class="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1"
                >
                  Creative Tim
                </a>
              </div>
            </div>
            <div class="w-full md:w-8/12 px-4">
              <ul
                class="flex flex-wrap list-none md:justify-end  justify-center"
              >
                <li>
                  <a
                    href="https://www.creative-tim.com"
                    class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                  >
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation"
                    class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com"
                    class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/master/LICENSE.md"
                    class="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '~/components/tailWindStarterKit/Sidebar.vue'
import NavbarComponent from '~/components/tailWindStarterKit/Navbar.vue'
// import Header from '~/layouts/Header.vue'
// import Footer from '~/layouts/Footer.vue'
export default {
  components: {
    SidebarComponent,
    NavbarComponent
  },
  data() {
    return {
      // date: new Date().getFullYear()
      date: 2020
    }
  },
  head() {
    return {
      title: 'Nuxt.js Admin Starter',
      bodyAttrs: {
        class: 'bg-gray-100 font-sans leading-normal tracking-normal'
      }
    }
  }
}
</script>
