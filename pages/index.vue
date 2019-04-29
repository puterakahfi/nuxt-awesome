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
            <div class="card has-equal-height">
              <div class="card-image"></div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ item.label }}</p>
                  </div>
                </div>

                <div class="content">
                  <p>{{ item.description }}</p>
                  <b class="has-margin-top-5">{{ item.tags }}</b>
                </div>
                <a
                  v-for="link in item.links"
                  :key="link.label"
                  :href="link.url"
                  class="button is-small is-success has-margin-right-5"
                  target="_blank"
                >
                  <fa :icon="[link.faIcon.type, link.faIcon.name]" />
                  &nbsp;{{ link.label }}
                </a>
                &nbsp;&nbsp;
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
import data from '~/static/data/recommended-modules.json' // Or wherever it is found

export default {
  layout: 'default',
  components: {
    Hero
  },
  data() {
    return {
      recModules: data
    }
  },

  async asyncData({ $axios }) {
    // const data = await $axios.$get('data/recommended-modules.json')
    //  return { recModules: data }
  }
}
</script>

<style></style>
