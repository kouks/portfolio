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

          <ul class="headline-links mt-3">
            <li><a target="_blank" href="https://www.linkedin.com/in/pavel-koch-25518b129/">
              <i class="fa fa-linkedin fa-fw" aria-hidden="true"></i>
            </a></li>
            <li><a target="_blank" href="http://github.com/kouks">
              <i class="fa fa-github fa-fw" aria-hidden="true"></i>
            </a></li>
            <li><a target="_blank" href="https://www.facebook.com/pavel.k.koch">
              <i class="fa fa-facebook-f fa-fw" aria-hidden="true"></i>
            </a></li>
            <li><a target="_blank" href="https://www.instagram.com/kouks.koch/">
              <i class="fa fa-instagram fa-fw" aria-hidden="true"></i>
            </a></li>
          </ul>

          <div class="headline-actions mt-3">
            <router-link class="action is-primary" to="/resume">Résumé</router-link>
            <button class="action is-secondary" @click="modalActive = true">Contact</button>
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

    <contact-modal
      :active="modalActive"
      @close="modalActive = false"
    />
  </div>
</template>

<script>
import Project from './Project'
import ContactModal from './Contact'
import Projects from '@/containers/Projects'

export default {
  components: { ContactModal, Project },

  data () {
    return {
      modalActive: false,
      projects: Projects
    }
  }
}
</script>
