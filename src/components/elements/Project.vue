<template>
  <div :class="['column', featuredWidth]">
    <article :class="['project', featuredClass]" :style="{ backgroundColor: project.color }">
      <div class="project-description">
        <div class="project-description-text">
          <h3 class="title is-4">{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ['project'],

  computed: {
    featuredWidth () {
      return this.project.featured ? 'is-12' : 'is-6'
    },

    featuredClass () {
      return this.project.featured ? 'is-featured' : ''
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/app';

/**
 * Project box styles.
 *
 * Available for: <article>
 *
 * .project
 * .project.is-featured
 *  .project-description
 *    .project-description-text
 */

article.project {
  cursor: pointer;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  transition: .5s all ease;

  @media screen and (min-width: $tablet) {
    &.is-featured {
      padding-bottom: 50%;
    }
  }

  &:hover > .project-description {
    opacity: 1;
  }

  .project-description {
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.5);
    height: 100%;
    opacity: 0;
    padding: 35px;
    position: absolute;
    transition: .5s all ease;
    width: 100%;
    z-index: 100;

    &-text {
      position: relative;
      top: 60%;

      * {
        color: $grey-lighter;
      }
    }
  }
}
</style>
