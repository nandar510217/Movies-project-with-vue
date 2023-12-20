<template>
    <div id="movies" class="container my-5">
      <h4>Movies</h4>
      <div class="row g-3">
        <div v-for="movie in movies" :key="movie.id" class="col-md-4">
          <div class="card card-body p-0 border border-danger overflow-hidden imgHeight">
            <img :src="movie.imageSrc" alt="">
            <div class="px-2 py-3 text-center">
              <p>{{movie.year}}</p>
              <router-link :to="`/movies/${movie.id}`" class="btn btn-sm btn-primary">Detail</router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';

  const movies = inject('movies')

</script>

<style scoped>

</style>