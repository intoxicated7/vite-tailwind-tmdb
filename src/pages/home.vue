<template>
  <div class="text-center mt-36">
    <div class="text-white font-semibold">
      <h2 class="text-3xl dark:text-white text-blue-600">Добро пожаловать на КиноХуб</h2>
      <h2 class="text-2xl dark:text-white text-blue-600">выберите категорию</h2>
    </div>
    <div style="width: 500px" class="mx-auto mt-6">
      <div class="mt-5">
        <i class="fas fa-arrow-down text-2xl dark:text-gray-300 animate-bounce my-3"></i>
        <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4  text-center mx-auto mt-3">
          <router-link to="/tv" class="dark:text-white text-black outline outline-2 outline-indigo-600 hover:bg-indigo-600 rounded-2xl py-1 px-2 ">Популярные сериалы</router-link>
          <router-link to="/movie" class="dark:text-white text-black outline outline-2 outline-indigo-600 hover:bg-indigo-600 rounded-2xl py-1 px-2 ">Популярные фильмы</router-link>
          <router-link to="/tv/rated" class="dark:text-white text-black outline outline-2 outline-indigo-600 hover:bg-indigo-600 rounded-2xl py-1 px-2 ">Лучшие сериалы</router-link>
          <router-link to="/movie/rated" class="dark:text-white text-black outline outline-2 outline-indigo-600 hover:bg-indigo-600 rounded-2xl py-1 px-2 ">Лучшие фильмы</router-link>
          <router-link to="/tv/today" class="dark:text-white text-black outline outline-2 outline-indigo-600 hover:bg-indigo-600 rounded-2xl py-1 px-2 ">В эфире сегодня</router-link>
          <router-link to="/movie/upcoming" class="dark:text-white text-black outline outline-2 outline-indigo-600 hover:bg-indigo-600 rounded-2xl py-1 px-2 ">Ожидаемые фильмы</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
