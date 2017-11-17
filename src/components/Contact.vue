<template>
  <div>
    <section class="section is-large">
      <div class="container has-text-centered">
        <div class="headline">
          <div class="headline-title">
            <div class="columns">
              <div class="column is-12-tablet is-6-desktop is-offset-3-desktop">
                <h1 class="title is-2">Say Hello.</h1>
                <span class="subtitle is-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus illo voluptatem dolore a.
                </span>
              </div>
            </div>
          </div>

          <div class="headline-links mt-3">
            <social-links></social-links>
          </div>

          <div class="headline-actions mt-3">
            <router-link class="action is-secondary has-icon" to="/">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </router-link>
            <a href="mailto:kouks.koch@gmail.com" class="action is-primary">Email Me</a>
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
import SocialLinks from '@/components/partials/Social'

export default {
  components: { SocialLinks },

  computed: {
    emailValid () {
      return this.form.email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
    }
  }
}
</script>
