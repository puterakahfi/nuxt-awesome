<template>
  <div class="columns">
    <div class="column is-3">
      <figure class="image is-1by1">
        <img
          src="https://images.opencollective.com/proxy/images?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F63047830-23b9-11e9-8073-c73f9d8c047d.png"
        />
      </figure>
    </div>
    <div class="column is-9">
      <section class="hero pt-5 bt-5">
        <div class="hero-body">
          <h1 class="title has-text-black is-size-1">Nuxt Awesome</h1>
          <h2 class="subtitle has-text-black">
            A curated list of awesome things related to Nuxt.js.
            <br />Nuxt.js is a framework for creating Universal Vue.js
            Applications.
          </h2>

          <a
            href="https://www.vuemastery.com/pdf/Nuxtjs-Cheat-Sheet.pdf"
            class="button is-success"
            target="_blank"
          >
            <fa :icon="['fas', 'download']" />&nbsp;Download Nuxt Cheatsheet
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
