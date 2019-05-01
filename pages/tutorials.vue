<template>
  <div>
    <div class="container">
      <br />

      <b-field label="Find tutorial">
        <b-input
          v-model="name"
          placeholder="e.g. build blog with nuxtjs,  use #keyword for find by tags"
          type="search"
          icon="magnify"
        ></b-input>
      </b-field>
      <div class="columns is-multiline">
        <div
          v-for="item in filteredDataArray"
          :key="item.id"
          class="column is-3"
        >
          <div class="card has-equal-height">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="subtitle is-7 has-text-grey-lighter">
                    <strong>April 26, 2019</strong>
                  </p>

                  <a
                    :href="item.url"
                    class="has-text-primary"
                    target="
                  _blank"
                  >
                    <p class="title is-6">{{ item.title }}</p>
                  </a>
                  <br />
                </div>
              </div>

              <div class="content">
                {{ item.description }}
                <div class="tags">
                  <span
                    v-for="(value, index) in item.tags"
                    :key="index"
                    class="tag"
                    >{{ value }}</span
                  >
                </div>

                <div class="tags has-addons">
                  <span class="tag is-dark">nuxt version</span>
                  <span class="tag is-success">v.1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '~/static/data/tutorials.json'
export default {
  data() {
    return {
      tutorials: data,
      splittedTags: [],
      name: '',
      selected: null
    }
  },
  computed: {
    splitTags: function() {
      const newArr = [...this.tutorials]
      newArr.map(el => {
        return (el.tags = el.tags.toString().split(','))
      })

      return newArr
    },

    filteredDataArray: function() {
      const newArr = [...this.tutorials]
      newArr.map(el => {
        return (el.tags = el.tags.toString().split(','))
      })

      let newData = this.tutorials.filter(item => {
        return item.title.toLowerCase().indexOf(this.name.toLowerCase()) > -1
      })

      if (this.name.length > 0 && this.name.toString().charAt(0) === '#') {
        newData = this.tutorials.filter(item => {
          return item.tags.join(',').indexOf(this.name.toLowerCase()) > -1
        })
      }
      return newData
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
