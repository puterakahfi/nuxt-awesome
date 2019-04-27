<template>
  <div>
    <div class="container">
      <h1 class="is-size-4 has-text-centered has-text-black-bis">
        <strong>Modules</strong>
      </h1>
      <br />
      <div class="columns is-multiline">
        <div v-for="item in modules" :key="item.id" class="column is-4">
          <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="item.image" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ item.label }}</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                {{ item.description }}
                <br />

                <a>@bulmaio</a>
                .
                <a href="#">{{ item.tags }}</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modules: []
    }
  },

  async asyncData({ $axios }) {
    const data = await $axios.get('data/modules.json')
    return { modules: data.data }
  },
  methods: {
    getModules: function() {
      return this.modules
    }
  }
}
</script>
