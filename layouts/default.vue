<template>
  <div>
    <nav class="container">
      <slot name="nav">
        <Navbar class="mb-3" />
      </slot>
    </nav>

    <slot name="content">
      <nuxt />
    </slot>

    <footer class="footer">
      <slot name="footer">
        <Footer></Footer>
      </slot>
    </footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
.head {
}

.colorcheme {
  .vue {
    &.primary {
      color: #50b882 !important;
    }
    &.second {
      color: #50b882 !important;
    }
  }
}

footer {
  margin-top: 50px;
}
</style>
