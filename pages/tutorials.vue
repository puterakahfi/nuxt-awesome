<template>
  <div>
    <div class="container">
      <h1 class="is-size-4 has-text-centered has-text-black-bis">
        <strong>Tutorials</strong>
      </h1>
      <br />
      <div class="columns is-multiline">
        <div v-for="item in splitTags" :key="item.id" class="column is-3">
          <div class="card has-equal-height">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <a
                    v-for="link in item.links"
                    :key="link.label"
                    :href="link.url"
                    class="button is-small has-margin-right-5 disabled"
                  >
                    <fa :icon="[link.faIcon.type, link.faIcon.name]" />
                    &nbsp;{{ link.label }}
                  </a>
                  <br />
                  <br />
                  <p class="subtitle is-7">
                    <strong>April 26, 2019</strong>
                  </p>

                  <a
                    :href="item.url"
                    class="has-text-primary"
                    target="
                  _blank"
                  >
                    <p class="title is-6 has-text-success">{{ item.title }}</p>
                  </a>
                  <br />
                </div>
              </div>

              <div class="content">
                {{ item.description }}
                <a
                  v-for="(value, index) in item.tags"
                  :key="index"
                  class="has-margin-right-5 has-text-link is-size-6"
                  >{{ value }}</a
                >
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
      tutorials: data,
      splittedTags: []
    }
  },
  computed: {
    splitTags: function() {
      const newArr = [...this.tutorials]
      newArr.map(el => {
        return (el.tags = el.tags.split(' '))
      })

      return newArr
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
