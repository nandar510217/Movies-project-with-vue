<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-6">
                <img :src="movie.imageSrc" alt="" class="w-100">
            </div>
            <div class="col-md-6">
                <h5>{{ movie.name }}</h5>
                <h5>{{ movie.year }}</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et rem eos omnis! Rem culpa suscipit quia expedita magnam cupiditate repellendus, quo ducimus ratione nulla minima voluptate doloribus perspiciatis temporibus repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi sequi quos nihil, nam iure sed. Incidunt officiis asperiores culpa odio, provident ea, perferendis, ex eaque quo voluptatum deleniti aut?</p>
                <router-link to="/" class="btn btn-sm btn-primary">Back</router-link>
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