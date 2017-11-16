<template>
  <div :class="['column', featuredWidth]">
    <article :class="['project', featuredClass]" :style="{ backgroundColor: project.color }">
      <div class="description">
        <div class="description-text">
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
