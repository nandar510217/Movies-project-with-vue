<template>
    <nav class="navbar navbar-expand-lg bg-secondary">
      <div class="container">
        <a class="navbar-brand" href="#">Vue-Movie</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="About.vue">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header>
      <img src="/images/cover.jpg" alt="">
    </header>

    <div id="movies" class="container my-5">
      <h4>Movies</h4>
      <div class="row g-3">
        <div class="col-md-4">
          <div class="card card-body p-0 border border-danger overflow-hidden imgHeight">
            <img src="/images/Frozen 2.jpg" alt="">
            <div class="px-2 py-3 text-center">
              <p>2017</p>
              <h6>Movie name 1</h6>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-body p-0 border border-danger overflow-hidden imgHeight">
            <img src="/images/Harry Potter.jpg" alt="">
            <div class="px-2 py-3 text-center">
              <p>2017</p>
              <h6>Movie name 2</h6>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-body p-0 border border-danger overflow-hidden imgHeight">
            <img src="/images/After.jpg" alt="">
            <div class="px-2 py-3 text-center">
              <p>2017</p>
              <h6>Movie name 3</h6>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-body p-0 border border-danger overflow-hidden imgHeight">
            <img src="/images/Wonder.jpg" alt="">
            <div class="px-2 py-3 text-center">
              <p>2017</p>
              <h6>Movie name 4</h6>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
  header {
    height: 98vh;
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