<template>
  <div>
    <div class="container">
      <h1 class="is-size-4 has-text-centered has-text-black-bis">
        <strong>Tutorials</strong>
      </h1>
      <br />
      <div class="columns is-multiline">
        <div v-for="item in tutorials" :key="item.id" class="column is-3">
          <div class="card has-equal-height">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
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
                  <br />
                  <br />
                  <a href="#" class="has-text-primary">
                    <p class="title is-6 has-text-primary">{{ item.title }}</p>
                  </a>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                {{ item.description }}
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
</template>

<script>
import data from '~/static/data/tutorials.json' // Or wherever it is found

export default {
  data() {
    return {
      tutorials: data
    }
  },

  async asyncData({ $axios }) {},
  methods: {
    getModules: function() {
      return this.tutorials
    }
  }
}
</script>
