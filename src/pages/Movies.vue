<template>
    <div class="container pt-5">
        <h1 class="my-4">Explore Movies</h1>
        <div class="row g-3">
        <div v-for="movie in movies" :key="movie.id" class="col-md-4">
          <div class="card card-body p-0 border border-danger overflow-hidden object-fit-cover">
            <img :src="movie.imageSrc" alt="" class="w-100" style="height: 400px;">
            <div class="px-2 py-3 text-center">
              <p>{{movie.year}}</p>
              <h6>{{ movie.name }}</h6>
              <!-- <router-link :to="`/movies/${movie.id}`" class="btn btn-sm btn-primary">Detail</router-link> -->
              <button @click="goToDetail(movie.id)" class="btn btn-primary btn-sm">Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

    const movies = inject('movies')
    const router = useRouter();

    //router-link မသုံးပဲ programmatic navigation ကိုသုံးထား
    const goToDetail = (id) => {
      //literal string path
      // router.push(`/movies/${id}`);

      //object with path
      // router.push({path:`/movies/${id}`});

      //name route with params to let the router build the url
      // router.push({name:'movie', params:{id:id}});
      router.push({ name: 'movieOverview' , params: { id: id} })
    }

</script>

<style lang="scss" scoped>

</style>