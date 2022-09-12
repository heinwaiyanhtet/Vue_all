<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">My Vue</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">about</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row my-3">
      <div class="col-12">
        <router-view></router-view>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Nav",
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";

</style>