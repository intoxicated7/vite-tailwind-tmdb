<template>
  <div class="bg-zinc-800">
    <div class="container mx-auto px-4 py-2 flex">
      <span
        @click="$router.go(-1)"
        class="text-gray-300 font-semibold cursor-pointer"
      >
        <i class="fas fa-arrow-left"></i>
        Назад на главную
      </span>
    </div>
  </div>
  <div class="bg-zinc-200">
    <div class="container mx-auto px-4 py-16 flex">
      <img
        class="w-80"
        :src="'https://image.tmdb.org/t/p/original/' + person.profile_path"
      />
      <div class="ml-24">
        <h2 class="text-3xl text-gray-900 font-semibold">
          {{ person.name }}
        </h2>
        <div class="flex items-center">
        <div class="text-gray-900 mt-6">
          <h2 class="text-lg font-medium">Биография</h2>
          <p class="mt-1 w-9/12">{{ person.biography }}</p>
        </div>
      </div>
      <div class="mt-10">
        <h2 class="text-lg font-medium">Известность за</h2>
        <div class="flex">
          <div v-for="cast in credits.cast" :key="cast">
            <img class=" rounded-md" :src="'https://image.tmdb.org/t/p/original/' + cast.poster_path">
            <div>
              <h2 class="text-center text-sm">{{ cast.title }}</h2>
            </div>
          </div>
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
      person: 'person',
      credits: 'personMovies'
    })
  },
  mounted () {
    this.$store.dispatch('getPerson', [this.$route.params.itemId]),
    this.$store.dispatch('getPersonMovies', [this.$route.params.itemId])
  }
}
</script>
