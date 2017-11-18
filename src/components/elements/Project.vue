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
        <p v-show="project.git">
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
