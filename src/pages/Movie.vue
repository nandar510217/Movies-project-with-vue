<template>
    <div class="container pt-5">
        <div class="row">
            <div class="col-md-6">
                <img :src="movie.imageSrc" alt="" class="w-100">
            </div>
            <div class="col-md-6">
                <div class="d-flex justify-content-between">
                    <h5>{{ movie.name }}</h5>
                    <router-link to="/" class="btn btn-sm btn-primary">Back</router-link>
                </div>
                <h5>{{ movie.year }}</h5>

                <div class="my-3">
                    <router-link :to="`/movies/${movie.id}`" class="px-3 py-1 border border-primary mx-2 rounded btn">Overview</router-link>
                    <router-link :to="`/movies/${movie.id}/trailer`" class="px-3 py-1 border border-primary mx-2 rounded btn">Trailer</router-link>
                    <router-link :to="`/movies/${movie.id}/artist`" class="px-3 py-1 border border-primary mx-2 rounded btn">Aritst</router-link>
                </div>

                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';

    const route = useRoute();
    // const movieId = route.params.id
    const movieId = parseInt(route.params.id)
    const movies = inject('movies')

    const movie = computed(() => {
        return movies.value.find(movie => {
            return movie.id === movieId
        })
    })

</script>

<style scoped>

</style>