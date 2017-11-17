<template>
  <header class="container has-text-centered headline">
    <slot />
  </header>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss">
@import '../../assets/scss/app';

/**
 * Headline style definitions.
 *
 * Available for: <header>
 *
 * .headline
 *   .headline-title
 *   .headline-links
 *   .headline-actions
 */

header.headline {
  .headline-title {
    .title {
      font-weight: $weight-bold;
    }

    .subtitle {
      font-weight: $weight-light;
    }
  }

  .headline-links {
    li {
      display: inline-block;
      font-size: $size-4;
      padding: 0 15px;

      a {
        color: $primary;
        transition: .2s all ease;

        &:hover {
          color: $secondary;
        }
      }
    }
  }
}
</style>
