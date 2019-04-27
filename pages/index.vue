<template>
  <section class="container">
    <header class="head">
      <slot name="header">
        <div class="container">
          <Hero class="has-padding-5 has-margin-5" />
        </div>
      </slot>
    </header>

    <div>
      <br />
      <div class="container">
        <h1 class="is-size-4 has-text-centered has-text-black-bis">
          <strong>Recommended Modules</strong>
        </h1>
        <br />
        <div class="columns is-multiline">
          <div v-for="item in recModules" :key="item.id" class="column is-4">
            <div class="card">
              <div class="card-image"></div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ item.label }}</p>
                    <p class="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>.
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
  layout: 'default',
  components: {
    Hero
  },
  data() {
    return {
      recModules: []
    }
  },

  async asyncData({ $axios }) {
    const data = await $axios.$get('data/recommended-modules.json')
    return { recModules: data }
  }
}
</script>

<style></style>
