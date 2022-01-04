<template>
  <div class="container mx-auto px-4 pt-16">
    <h2 class="text-lg dark:text-white font-semibold">Популярные актёры</h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
    >
      <div class="mt-8" v-for="person in people" :key="person">
        <router-link :to="{ name: 'person', params: { itemId: person.id } }">
          <div>
            <img
              class="rounded-md"
              :src="'https://image.tmdb.org/t/p/original/' + person.profile_path"
            />
          </div>
          <div class="flex justify-between items-center">
            <div class="dark:text-white">{{ person.name }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    people () {
      return this.$store.getters.popularPeople
    }
  },
  mounted () {
    this.$store.dispatch('getPopularPeople')
  }
}
</script>
