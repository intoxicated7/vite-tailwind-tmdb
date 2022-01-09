<template>
  <nav class="dark:bg-zinc-900 bg-blue-600">
    <div class="max-w-6xl mx-auto px-4">
     <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <div>
            <a href="#" class="flex items-center py-5 px-2 text-gray-50 hover:text-indigo-600">
              <svg class="h-6 w-6 mr-1" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
              <router-link to="/" class="font-bold">KinoHub</router-link>
            </a>
          </div>
          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <router-link class="py-5 px-3 text-white" to="/tv">Сериалы</router-link>
            <router-link class="py-5 px-3 text-white" to="/movie">Фильмы</router-link>
            <router-link class="py-5 px-3 text-white" to="/person">Актеры</router-link>
          </div>
        </div>
        <!-- secondary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <div v-if="user" class="text-white">
            {{ user.email }}
          </div>
          <router-link v-else class="py-5 px-3 text-gray-50" to="/login">Авторизация</router-link>
        </div>

        <div class="md:hidden flex items-center">
        <button @click="menu = !menu" class="mobile-menu-button text-gray-50">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
     </div>

      <!-- mobile menu -->
      <div :class="{ 'hidden' : menu }" class="mobile-menu md:hidden">
        <router-link class="block py-1 px-3 text-gray-50" to="/tv">Сериалы</router-link>
        <router-link class="block py-1 px-3 text-gray-50" to="/movie">Фильмы</router-link>
        <router-link class="block py-1 px-3 text-gray-50" to="/person">Актеры</router-link>
        <router-link class="block pt-1 pb-3 px-3 text-gray-50" to="/login">Авторизация</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: true
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  }
}
</script>