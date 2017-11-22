<template>
  <div>
    <header class="hero is-fullheight">
      <div class="hero-body">
        <headline>
          <headline-title>
            <h1 class="title is-2">{{ post.title }}</h1>
            <span class="subtitle is-4">
              {{ post.subtitle }}
            </span>
          </headline-title>

          <headline-links>
            <social-links></social-links>
          </headline-links>

          <headline-actions>
            <nav class="action-group">
              <button class="action is-disabled has-icon has-fixed-width" to="/">
                <i class="fa fa-angle-left" aria-hidden="true"></i> Previous
              </button>

              <router-link class="action is-default has-icon" to="/">
                <i class="fa fa-home" aria-hidden="true"></i>
              </router-link>

              <button class="action is-disabled has-icon has-fixed-width" to="/">
                Next <i class="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </nav>
          </headline-actions>
        </headline>
      </div>
    </header>

    <main class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-12-tablet is-6-desktop is-offset-3-desktop">
            <div class="content is-blog-post has-text-justified" v-html="post.content"></div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p class="has-text-grey-light">
            &copy; Pavel Koch
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Posts from '@/containers/Posts'
import Headline from '@/components/elements/Headline'
import SocialLinks from '@/components/partials/Social'
import HeadlineTitle from '@/components/elements/HeadlineTitle'
import HeadlineLinks from '@/components/elements/HeadlineLinks'
import HeadlineActions from '@/components/elements/HeadlineActions'

export default {
  components: {
    Headline,
    SocialLinks,
    HeadlineTitle,
    HeadlineLinks,
    HeadlineActions
  },

  computed: {
    post () {
      return Posts[this.$route.params.post]
    }
  },

  mounted () {
    if (!this.post) {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
