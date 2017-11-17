<template>
  <div :class="['column', featuredWidth]">
    <article :class="['project', featuredClass]" :style="{ backgroundColor: project.color }">
      <div class="project-thumbnail">
        <div class="img">
          <img :src="project.picture" :alt="project.name">
        </div>
      </div>

      <div class="project-description has-text-centered has-text-light">
        <span class="is-uppercase has-text-weight-bold">{{ project.name }}</span>
        <p>
          <a class="has-text-light" target="_blank" :href="project.git">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        </p>
        <p>{{ project.description }}</p>
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
 *   .project-thumbnail
 *   .project-description
 *     .project-description-text
 */

article.project {
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  position: relative;
  transition: .5s all ease;

  @media screen and (min-width: $tablet) {
    &.is-featured {
      padding-bottom: 0;
      height: auto;

      .project-description {
        position: relative;
      }
    }
  }

  .project-thumbnail {
    padding: 10% 10% 0;

    .img {
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
      line-height: 0;
    }
  }

  &:hover {
    box-shadow: 0px 0px 40px 0px rgba(0,0,0,0.5);
    z-index: 100;
  }

  .project-description {
    width: 100%;
    bottom: 0;
    padding: 35px;
    position: absolute;
  }
}
</style>
