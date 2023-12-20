<template>
    <nav class="navbar navbar-expand-lg bg-secondary">
      <div class="container">
        <router-link to="/" class="navbar-brand" href="#">Movie App</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/about" class="nav-link active" aria-current="page" href="About.vue">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header>
      <img src="/images/cover.jpg" alt="">
    </header>

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
    },
    {
      id:2,
      name: 'Harry Potter',
      imageSrc: '/images/Harry Potter.jpg',
      year:'2020',
    },
    {
      id:3,
      name: 'After',
      imageSrc: '/images/After.jpg',
      year:'2019',
    },
    {
      id:4,
      name: 'Wonder',
      imageSrc: '/images/Wonder.jpg',
      year:'2018',
    }
  ])

  provide('movies', movies)
  
</script>

<style scoped>
  header {
    height: 88vh;
  }

  header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* .imgHeight {
    height: 400px;
  } */

</style>