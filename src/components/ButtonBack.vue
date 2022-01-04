<template>
  <div class="dark:bg-zinc-800 bg-white">
    <div class="container mx-auto px-4 py-2 flex">
      <span @click="$router.go(-1)" class="dark:text-gray-300 font-semibold cursor-pointer">
        <i class="fas fa-arrow-left"></i>
        Назад на главную
      </span>
    </div>
  </div>
</template>