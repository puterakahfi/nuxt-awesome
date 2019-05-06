<template>
  <div>
    <div class="container">
      <h1 class="is-size-4 has-text-centered has-text-black-bis">
        <strong>Modules</strong>
      </h1>
      <br />
      <div class="columns is-multiline">
        <div v-for="item in getModules" :key="item.id" class="column is-4">
          <div class="card has-equal-height">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="item.image" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">
                    <a :href="item.url" target="_blank">{{ item.title }}</a>
                  </p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                {{ item.description }}
                <br />

                <br />
                <div class="tags">
                  <span
                    v-for="(value, index) in item.tags"
                    :key="index"
                    class="tag"
                    >{{ value }}</span
                  >
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
import data from '~/static/data/modules.json' // Or wherever it is found

export default {
  data() {
    return {
      modules: data,
      name: ''
    }
  },
  computed: {
    getModules: function() {
      const newArr = [...this.modules]
      newArr.map(el => {
        return (el.tags = el.tags.toString().split(','))
      })

      const newData = this.modules.filter(item => {
        return item.title.toLowerCase().indexOf(this.name.toLowerCase()) > -1
      })

      return newData
    }
  },

  async asyncData({ $axios }) {}
}
</script>
