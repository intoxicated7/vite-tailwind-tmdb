<template>
  <ButtonBack />
  <!-- <div class="bg-cover" :style="{'background-image': `url('https://image.tmdb.org/t/p/original/${item.backdrop_path}')`}"> -->
  <div class="bg-zinc-700">
    <div class="container mx-auto px-4 py-16 flex">
      <img class="w-80" :src="'https://image.tmdb.org/t/p/original/' + item.poster_path">
      <div class="ml-24">
        <h2 class="text-3xl text-gray-50 font-semibold">
          {{ item.title }}
          <span class="text-gray-400">({{ item.release_date }})</span>
        </h2>
        <div class="flex items-center text-gray-100 mt-2 mb-4">
          <span class="border rounded-full py-0.5 px-2 text-sm mr-1.5" v-for="genre in item.genres" :key="genre">
            {{ genre.name }}
          </span>
          <span class="ml-3">{{ item.runtime }} минут</span>
        </div>
        <div class="flex items-center">
          <div v-if="item.vote_average >= 7" class="bg-green-900 border-green-600 border-2 text-green-600 text-2xl rounded-full p-2 font-semibold mr-3">
            {{ item.vote_average }}
          </div>
          <div v-else-if="item.vote_average >= 5" class="bg-yellow-900 border-yellow-600 border-2 text-yellow-600 text-2xl rounded-full p-2 font-semibold mr-3">
            {{ item.vote_average }}
          </div>
          <div v-else-if="item.vote_average < 5" class="bg-red-900 border-red-600 border-2 text-red-600 text-2xl rounded-full p-2 font-semibold mr-3">
            {{ item.vote_average }}
          </div>
          <span class="text-gray-50 mr-12">Пользовательский счет</span>
          <span class="text-gray-50 flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Воспроизвести трейлер
          </span>
        </div>
        <div class="text-gray-50 mt-6">
          <h2 class="text-xl font-medium">Обзор</h2>
          <p class="mt-1">{{ item.overview }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- people -->
  <div class="bg-white">
    <div class="container mx-auto px-4 py-10">
    <h2 class="text-xl font-semibold">В главных ролях</h2>
    <div v-if="people.cast" class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-5">
      <div class="mt-3" v-for="cast in people.cast.slice(0,8)" :key="cast">
        <div>
          <img class="rounded-md" :src="'https://image.tmdb.org/t/p/original/' + cast.profile_path">
        </div>
        <div>
          <h2 class="font-semibold">{{ cast.name }}</h2>
          <span>{{ cast.character }}</span>
        </div>
      </div>
    </div>
    <span class="border-b-4 border-gray-900"></span>
    <router-link v-if="item.id" :to="{ name: 'movie-cast', params: { itemId: item.id } }">
      <h2 class="text-lg mt-5 font-semibold">Показать полный актёрский и съёмочный состав</h2>
    </router-link>
  </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ButtonBack from '@/components/ButtonBack.vue'

export default {
  components: { ButtonBack },
  computed: {
    ...mapGetters({
      item: 'movie',
      people: 'moviePeople',
      video: 'movieVideo'
    })
  },
  mounted() {
    this.$store.dispatch('getMovie', ([this.$route.params.itemId]))
    this.$store.dispatch('getMoviePeople', ([this.$route.params.itemId]))
    this.$store.dispatch('getMovieVideo', ([this.$route.params.itemId]))
  }
}
</script>