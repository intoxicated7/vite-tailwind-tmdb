<template>
  <div class="text-center mt-32">
    <h2 class="text-2xl text-white font-semibold">Регистрация</h2>
      <div style="width: 350px" class="mx-auto mt-10
">
        <div
          v-if="this.error"
          class="w-full bg-red-500 text-black rounded-md mb-3 py-1"
        >
          {{ error }}
        </div>
        <div class="space-y-3">
          <div>
            <input
              v-model="email"
              class="dark:bg-zinc-900 text-white bg-zinc-500 border-b-zinc-900 border-b-2 dark:border-b-zinc-500 focusborder-b-indigo-600 focus:caret-indigo-600 outline-none drop-shadow-lg text-xl rounded-md px-2 py-1.5 w-full"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              v-model="password"
              class="dark:bg-zinc-900 text-white bg-zinc-500 border-b-zinc-900 border-b-2 dark:border-b-zinc-500 focus:border-b-indigo-600 focus:caret-indigo-600 outline-none drop-shadow-lg text-xl rounded-md px-2 py-1.5 w-full"
              type="password"
              placeholder="Пароль"
            />
          </div>
          <div>
            <input
              v-model="password2"
              class="dark:bg-zinc-900 text-white bg-zinc-500 border-b-zinc-900 border-b-2 dark:border-b-zinc-500 focus:border-b-indigo-600 focus:caret-indigo-600 outline-none drop-shadow-lg text-xl rounded-md px-2 py-1.5 w-full"
              type="password"
              placeholder="Повторите пароль"
            />
          </div>
        </div>
        <div class="flex justify-between text-zinc-300 mt-1">
          <router-link to="/login" class="text-xs"
            >У меня уже есть аккаунт</router-link
          >
        </div>
        <div class="mt-6">
          <button
            @click="handleSubmit"
            class="bg-indigo-600 hover:bg-indigo-500 py-3 w-full rounded-xl uppercase text-white font-semibold"
          >
            Регистрация
          </button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      password2: '',
      error: null
    }
  },
  methods: {
    async handleSubmit () {
      if (this.password == this.password2) {
        try {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password
          })
          this.$router.push('/')
          console.log(this.$store.state.user)
        } catch (err) {
          this.error = err.message
        }
      } else {
        console.log('klirs ker')
      }
    }
  }
}
</script>
