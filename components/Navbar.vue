<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item colorcheme vue second" href="https://bulma.io">
        Nuxtjs.
        <b class="colorcheme vue primary">Awesome</b>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">Modules</a>
        <a class="navbar-item">Starter Template</a>
        <a class="navbar-item">Tutorials</a>
        <a class="navbar-item">Series</a>
        <a class="navbar-item">Tools</a>
        <a class="navbar-item">Showcase</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">More</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">Community</a>
            <a class="navbar-item">Books</a>
            <a class="navbar-item">About</a>
            <a class="navbar-item">Jobs</a>
            <a class="navbar-item">Contact</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Report an issue</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              class="button is-primary"
            >
              <strong>Official</strong>
            </a>
            <a
              href="https://github.com/puterakahfi/nuxt-awesome"
              target="_blank"
              class="button is-light"
            >
              <fa :icon="['fab', 'github']" />&nbsp;Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
<style scoped>
.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
}

.navbar .navbar-brand {
  color: #6c757d;
  text-transform: inherit;
  font-weight: 700;
}

.navbar {
  left: 0;
  right: 0;
  background: white;
  height: auto;
}
</style>
