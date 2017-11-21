<template>
  <div>
    <header class="hero is-medium">
      <div class="hero-body">
        <headline>
          <headline-title>
            <h1 class="title is-2">Say Hello.</h1>
            <span class="subtitle is-4">
              Feel free to ask me anything you want. Be it a new project proposal or a friendly chit-chat.
            </span>
          </headline-title>

          <headline-links>
            <social-links></social-links>
          </headline-links>

          <headline-actions>
            <nav class="action-group">
              <router-link class="action is-default has-icon" to="/">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </router-link>

              <a href="mailto:kouks.koch@gmail.com" class="action is-secondary">Email Me</a>
            </nav>
          </headline-actions>
        </headline>
      </div>
    </header>

    <main class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-5">
            <form class="form" @submit.prevent="submitted = true; sendMessage()">
              <div class="form-field">
                <div class="form-field has-addons">
                  <span class="form-addon">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </span>

                  <input
                    :class="[ emailValid ? '' : 'has-errors']"
                    placeholder="Email"
                    type="text"
                    v-model="form.email"
                    disabled
                  >
                </div>

                <span v-show="!emailValid" class="form-message has-text-danger">
                  <i class="fa fa-warning" aria-hidden="true"></i> Your email seems to be invalid
                </span>
              </div>

              <div class="form-field">
                <textarea
                  :class="[ messageValid ? '' : 'has-errors']"
                  placeholder="Message"
                  v-model="form.message"
                  disabled
                ></textarea>

                <span v-show="!messageValid" class="form-message has-text-danger">
                  <i class="fa fa-warning" aria-hidden="true"></i> The message needs to be at least 10 characters long
                </span>
              </div>

              <div class="form-field">
                <button type="button" class="action is-fullwidth is-disabled">
                  Send
                </button>

                <span v-show="sent" class="form-message has-text-success">
                  <i class="fa fa-check" aria-hidden="true"></i> The message has been sent.
                </span>
              </div>
            </form>
          </div>

          <div class="column is-5 is-offset-1">
            <div class="content">
              <dl class="data-list">
                  <dt>Phone</dt>
                  <dd>+44&nbsp;7543&nbsp;554&nbsp;198&nbsp;<em>UK</em></dd>
                  <dd>+420&nbsp;720&nbsp;468&nbsp;227&nbsp;<em>CZ</em></dd>
                  <dt>Email</dt>
                  <dd><a href="mailto:kouks.koch@gmail.com">kouks.koch@gmail.com</a></dd>
              </dl>
            </div>
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
import config from 'config'
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

  data () {
    return {
      form: {
        email: '',
        message: ''
      },
      submitted: false,
      sent: false
    }
  },

  computed: {
    emailValid () {
      return !this.submitted || this.form.email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
    },

    messageValid () {
      return !this.submitted || this.form.message.length > 10
    }
  },

  methods: {
    sendMessage () {
      if (!this.messageValid || !this.emailValid) {
        return
      }

      this.$http.post(`${config.apiUrl}/messages`, this.form)
        .then((response) => {
          this.sent = true
          this.submitted = false
        })
        .catch((response) => {
          console.log(response)
        })
    }
  }
}
</script>
