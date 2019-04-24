<template>
  <div>
    <nav class="container">
      <slot name="nav">
        <Navbar class="mb-3" />
      </slot>
    </nav>

    <header class="head">
      <slot name="header">
        <div class="container">
          <Hero class="has-padding-5 has-margin-5" />
        </div>
      </slot>
    </header>

    <slot name="content">
      <nuxt />
    </slot>

    <footer class="footer">
      <slot name="footer">
        <div class="content has-text-centered ">
          <p>
            <strong>Bulma</strong> by
            <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >CC BY NC SA 4.0</a
            >.
          </p>
        </div>
      </slot>
    </footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Hero from '~/components/Hero.vue'
export default {
  components: {
    Navbar,
    Hero
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
