<template>
    <header>
      <img src="/images/cover.jpg" alt="">
    </header>
    <div id="movies" class="container my-5">
      <h4>Movies</h4>
      <div class="row g-3">
        <template v-for="movie in movies" :key="movie.id">
          <div v-if="movie.isTop" class="col-md-4">
            <div class="card card-body p-0 border overflow-hidden imgHeight">
            <img :src="movie.imageSrc" alt="" style="width: 450px; height: 500px; object-fit: cover;">
            <div class="px-2 py-3 text-center">
              <p>{{movie.year}}</p>
              <h6>{{ movie.name }}</h6>
              <router-link :to="{name: 'movieOverview', params: {id:movie.id}}" class="btn btn-sm btn-primary">Detail</router-link>
            </div>
          </div>
          </div>
        </template>
      </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';

  const movies = inject('movies')

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