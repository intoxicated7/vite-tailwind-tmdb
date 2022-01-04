<template>
  <div v-if="movie" class="dark:bg-zinc-700 bg-white">
      <div class="flex items-center container mx-auto px-24 py-3">
        <img class="w-16" :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path">
        <div class="ml-4">
          <div class="flex">
            <h2 @click="$router.go(-1)" class="text-3xl font-bold dark:text-gray-50 dark:hover:text-zinc-300 hover:text-gray-300 cursor-pointer">
            {{ movie.title }}
            </h2>
            <span class="text-3xl text-gray-400 ml-1">{{ '(' + movie.release_date + ')' }}</span>
          </div>
          <span @click="$router.go(-1)" class="dark:text-gray-300 hover:text-gray-500 font-semibold cursor-pointer">
            <i class="fas fa-arrow-left"></i>
            Вернуться назад к фильму
          </span>
        </div>
      </div>
  </div>
  <div class="container mx-auto px-24 pt-8">
    <div class="md:flex sm:block justify-between w-8/12">
      <div>
        <h2 class="text-xl font-semibold mb-5 dark:text-white">
          Актёрский состав
          <span v-if="item.cast" class="text-gray-400">{{ item.cast.length }}</span>
        </h2>
        <div 
          class="flex justify-between items-center pb-3"
          v-for="cast in item.cast"
          :key="cast.id">
          <img v-if="cast.profile_path" class="w-20 h-20 rounded-md" :src="'https://image.tmdb.org/t/p/original/' + cast.profile_path">
          <div v-else class="w-20 h-20 bg-gray-300 rounded-md text-center">
              <i class="fas fa-user text-gray-500 text-5xl pt-4"></i>
          </div>
          <div>
            <span class="text-md dark:text-white font-semibold">{{ cast.name }}</span>
            <p class="text-sm dark:text-white">{{ cast.character }}</p>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-5 dark:text-white">
          Съёмочный состав
          <span v-if="item.crew" class="text-gray-400">{{ item.crew.length }}</span>
        </h2>
        <div 
          class="flex  justify-between items-center pb-3"
          v-for="crew in item.crew"
          :key="crew.id">
          <img v-if="crew.profile_path" class="w-20 h-20 rounded-md" :src="'https://image.tmdb.org/t/p/original/' + crew.profile_path">
          <div v-else class="w-20 h-20 bg-gray-300 rounded-md text-center">
            <i class="fas fa-user text-gray-500 text-5xl pt-4"></i>
          </div>
          <div>
            <span class="text-md dark:text-white font-semibold">{{ crew.name }}</span>
            <p class="text-sm dark:text-white">{{ crew.department }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      item: 'moviePeople',
      movie: 'movie'
    })
  },
  mounted() {
    this.$store.dispatch('getMovie', ([this.$route.params.itemId]))
    this.$store.dispatch('getMoviePeople', ([this.$route.params.itemId]))
  }
}
</script>