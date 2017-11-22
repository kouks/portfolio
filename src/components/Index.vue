<template>
  <div>
    <header class="hero is-fullheight">
      <div class="hero-body">
        <headline>
          <headline-title>
            <h1 class="title is-2">Hi.</h1>
            <span class="subtitle is-4">
              Name's Pavel. I'm an enthusiastic programmer, amateur chess player and a gym freak.
            </span>
          </headline-title>

          <headline-links>
            <social-links></social-links>
          </headline-links>

          <headline-actions>
            <nav class="action-group">
              <router-link class="action is-primary" to="/resume">Résumé</router-link>
              <router-link class="action is-secondary" to="/contact">Contact</router-link>
            </nav>
          </headline-actions>
        </headline>
      </div>
    </header>

    <main class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-12-tablet is-8-desktop is-offset-2-desktop">
            <div class="columns is-gapless is-multiline">
              <project
                :project="project"
                :key="project.name"
                v-for="project in projects"
              />
            </div>
          </div>
        </div>
      </div>
    </main>

    <section id="blog" class="section is-large">
      <div class="container">
        <div class="columns">
          <div class="column is-12 has-text-centered">
            <h2 class="title is-2">My Writings</h2>
            <span class="subtitle is-4">
              AKA some desperate attemps to write a blog.
            </span>
          </div>
        </div>

        <div class="columns is-multiline">
          <post
            :key="slug"
            :post="post"
            :slug="slug"
            v-for="(post, slug) in posts"
          ></post>
        </div>
      </div>
    </section>

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
import Projects from '@/containers/Projects'
import Post from '@/components/elements/Post'
import Project from '@/components/elements/Project'
import Headline from '@/components/elements/Headline'
import SocialLinks from '@/components/partials/Social'
import HeadlineTitle from '@/components/elements/HeadlineTitle'
import HeadlineLinks from '@/components/elements/HeadlineLinks'
import HeadlineActions from '@/components/elements/HeadlineActions'

export default {
  components: {
    Post,
    Project,
    Headline,
    SocialLinks,
    HeadlineTitle,
    HeadlineLinks,
    HeadlineActions
  },

  data () {
    return {
      posts: Posts,
      projects: Projects
    }
  }
}
</script>
