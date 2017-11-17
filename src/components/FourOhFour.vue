<template>
  <div>
    <main class="hero is-fullheight">
      <div class="hero-body">
        <headline>
          <headline-title>
            <h1 class="title is-2">
              Four Oh Four
              <i class="fa fa-frown-o fa-rotate-270" aria-hidden="true"></i>
            </h1>
            <span class="subtitle is-4">
              Unfortunately, you got lost when navigating my huge website. You might want to use one of the following links.
            </span>
          </headline-title>

          <headline-links>
            <social-links></social-links>
          </headline-links>

          <headline-actions>
            <router-link class="action is-tertiary" to="/">Home</router-link>
            <router-link class="action is-primary" to="/resume">Résumé</router-link>
            <router-link class="action is-secondary" to="/contact">Contact</router-link>
          </headline-actions>
        </headline>
      </div>
    </main>
  </div>
</template>

<script>
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
  }
}
</script>
