<template>
  <div>
    <section class="section is-large">
      <div class="container has-text-centered">
        <div class="headline">
          <div class="headline-title">
            <div class="columns">
              <div class="column is-12-tablet is-6-desktop is-offset-3-desktop">
                <h1 class="title is-2">Hi.</h1>
                <span class="subtitle is-4">
                  Name's Pavel. I'm an enthusiastic programmer, amateur chess player and a gym freak.
                </span>
              </div>
            </div>
          </div>

          <div class="headline-links mt-3">
            <social-links></social-links>
          </div>

          <div class="headline-actions mt-3">
            <router-link class="action is-primary" to="/resume">Résumé</router-link>
            <router-link class="action is-secondary" to="/contact">Contact</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
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
import Project from './Project'
import Projects from '@/containers/Projects'
import SocialLinks from '@/components/partials/Social'

export default {
  components: { Project, SocialLinks },

  data () {
    return {
      projects: Projects
    }
  }
}
</script>
