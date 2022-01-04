<template>
  <div class="text-center mt-32">
    <h2 class="text-2xl text-white font-semibold">Авторизация</h2>
    <div style="width: 350px" class="mt-10 mx-auto">
      <div>
        <input class="dark:bg-zinc-900 bg-zinc-500 border-b-zinc-900 border-b-2 dark:border-b-zinc-500 focus:border-b-indigo-600 focus:caret-indigo-600 outline-none drop-shadow-lg text-xl rounded-md px-2 py-1.5 w-full" type="text" placeholder="Email" />
      </div>
      <div class="mt-2">
        <input class="dark:bg-zinc-900 bg-zinc-500 border-b-zinc-900 border-b-2 dark:border-b-zinc-500 focus:border-b-indigo-600 focus:caret-indigo-600 outline-none drop-shadow-lg text-xl rounded-md px-2 py-1.5 w-full" type="text" placeholder="Пароль" />
      </div>
      <div class="flex justify-between text-zinc-300 mt-1">
        <small class="text-xs">Не помню пароль</small>
        <small class="text-xs">Создать аккаунт</small>
      </div>

      <div class="mt-9">
        <button class="bg-indigo-600 hover:bg-indigo-500 py-3 w-full rounded-2xl uppercase text-white font-semibold">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>