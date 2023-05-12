<script>
export default {};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="">Commands Vue Laravel</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">All Commands</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/create-command" class="nav-link"
              >Create Command</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
