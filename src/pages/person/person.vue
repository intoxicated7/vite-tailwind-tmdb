<template>
  <ButtonBack />
  <div class="bg-zinc-600 dark:bg-zinc-700">
    <div class="container mx-auto px-4 py-16 flex">
      <img
        class="w-80"
        :src="'https://image.tmdb.org/t/p/original/' + person.profile_path"
      />
      <div class="ml-24">
        <h2 class="text-3xl text-white font-semibold">
          {{ person.name }}
        </h2>
        <div class="flex items-center">
        <div class="text-white mt-6">
          <h2 class="text-lg font-medium">Биография</h2>
          <p class="mt-1 w-9/12">{{ person.biography }}</p>
        </div>
      </div>
      <div class="mt-10">
        <h2 class="text-lg text-white font-medium">Известность за</h2>
        <div class="flex">
          <div class="" v-for="cast in credits.cast" :key="cast">
            <img class="rounded-md" :src="'https://image.tmdb.org/t/p/original/' + cast.poster_path">
            <div>
              <h2 class="text-center text-white text-sm">{{ cast.title }}</h2>
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
import ButtonBack from '@/components/ButtonBack.vue'

export default {
  components: { ButtonBack },
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
