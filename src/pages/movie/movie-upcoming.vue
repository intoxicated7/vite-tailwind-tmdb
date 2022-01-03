<template>
  <div class="container mx-auto px-4 pt-16">
    <h2 class="text-lg text-white font-semibold">Ожидаемые фильмы</h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
    >
      <div class="mt-8" v-for="item in items" :key="item">
        <router-link :to="{ name: 'movieItem', params: { itemId: item.id } }">
          <div>
            <img
              class="rounded-md"
              :src="'https://image.tmdb.org/t/p/original/' + item.poster_path"
            />
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="text-white">{{ item.title }}</div>
            <div>
              <div
                v-if="item.vote_average >= 7"
                class="bg-green-900 border-green-600 border-2 text-green-600 text-lg rounded-full p-1 font-semibold ml-2"
              >
                {{ item.vote_average }}
              </div>
              <div
                v-else-if="item.vote_average >= 5"
                class="bg-yellow-900 border-yellow-600 border-2 text-yellow-600 text-lg rounded-full p-1 font-semibold ml-2"
              >
                {{ item.vote_average }}
              </div>
              <div
                v-else-if="item.vote_average < 5"
                class="bg-red-900 border-red-600 border-2 text-red-600 text-lg rounded-full p-1 font-semibold ml-2"
              >
                {{ item.vote_average }}
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items () {
      return this.$store.getters.upcomingMovies
    }
  },
  mounted () {
    this.$store.dispatch('getUpcomingMovies')
  }
}
</script>
