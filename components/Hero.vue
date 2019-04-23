<template>
  <div class="columns">
    <div class="column is-3">
      <img
        src="https://images.opencollective.com/proxy/images?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F63047830-23b9-11e9-8073-c73f9d8c047d.png&height=640"
        alt=""
        class="img-responsive"
      />
    </div>
    <div class="column is-9">
      <section class="hero">
        <div class="hero-body">
          <h1 class="title colorscheme vue primary mb-4 has-text-white	">
            Nuxt Awesome
          </h1>
          <h2 class="subtitle mt-2 pt-4 has-text-white	">
            A curated list of awesome things related to Nuxt.js.
            <br />Nuxt.js is a framework for creating Universal Vue.js
            Applications.
          </h2>

          <a
            href="https://www.vuemastery.com/pdf/Nuxtjs-Cheat-Sheet.pdf"
            class="button is-success"
            target="_blank"
          >
            <fa :icon="['fas', 'download']" /> &nbsp;Download Nuxt Cheatsheet
            From Vue Mastery
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  .title {
    font-size: 4.5rem;
  }

  .button {
  }
}
</style>
