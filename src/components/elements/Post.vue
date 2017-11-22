<template>
  <div class="column is-6 is-offset-3 mt-3">
    <article class="post">
      <h3 class="title is-4 post-title" @click="redirectToPost()">{{ post.title }}</h3>
      <span class="subtitle is-5 post-subtitle">{{ post.subtitle }}</span>
      <p class="post-tags mt-1">
        <span v-for="tag in post.tags" class="post-tag">{{ tag }}</span>
      </p>
    </article>
  </div>
</template>

<script>
export default {
  props: ['post', 'slug'],

  methods: {
    redirectToPost () {
      this.$router.push({ path: `/blog/${this.slug}` })
    }
  }
}
</script>
