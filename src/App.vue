<template>
    <nav class="navbar navbar-expand-lg bg-transparent position-fixed w-100">
      <div class="container">
        <router-link :to="{name:'home'}" class="navbar-brand">Vueflix</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name:'movies' }" class="nav-link">Movies</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
    
</template>

<script setup>
  import { provide, ref } from 'vue';

  const movies = ref([
    {
      id:1,
      name: 'Frozen',
      imageSrc: '/images/Frozen 2.jpg',
      year:'2017',
      isTop: true
    },
    {
      id:2,
      name: 'Harry Potter',
      imageSrc: '/images/Harry Potter.jpg',
      year:'2020',
      isTop: true
    },
    {
      id:3,
      name: 'After',
      imageSrc: '/images/After.jpg',
      year:'2019',
      isTop: true
    },
    {
      id:4,
      name: 'Wonder',
      imageSrc: '/images/Wonder.jpg',
      year:'2018',
      isTop: true
    },
    {
      id:5,
      name: 'Avatar',
      imageSrc: '/images/Avatar.jpg',
      year:'2017',
      isTop: true
    },
    {
      id:6,
      name: 'Korea',
      imageSrc: '/images/drama.jpg',
      year:'2020',
      isTop: true
    },
    {
      id:7,
      name: 'Titanic',
      imageSrc: '/images/titanic.jpg',
      year:'2019',
      isTop: false
    },
    {
      id:8,
      name: 'Twilight',
      imageSrc: '/images/twilight.jpg',
      year:'2018',
      isTop: false
    },
    {
      id:9,
      name: 'Frozen',
      imageSrc: '/images/Frozen 2.jpg',
      year:'2017',
      isTop: false
    },
    {
      id:10,
      name: 'Harry Potter',
      imageSrc: '/images/Harry Potter.jpg',
      year:'2020',
      isTop: false
    },
    {
      id:11,
      name: 'After',
      imageSrc: '/images/After.jpg',
      year:'2019',
    },
    {
      id:12,
      name: 'Wonder',
      imageSrc: '/images/Wonder.jpg',
      year:'2018',
      isTop: false
    }
  ])

  provide('movies', movies)

</script>

<style scoped>

</style>