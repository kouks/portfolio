<template>
  <div :class="['modal', activeClass]">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-content">
      <form class="contact">
        <div class="control">
          <input
            type="text"
            placeholder="Your Email Address"
            :class="[ emailValid ? 'is-valid' : '' ]"
            v-model="form.email"
          >
        </div>

        <div class="control">
          <textarea
            placeholder="Your Question"
            :class="[ messageValid ? 'is-valid' : '' ]"
            v-model="form.message"
            spellcheck="false"
          ></textarea>
        </div>

        <div class="control">
          <button
            type="button"
            class="action is-filled is-fullwidth is-primary"
          >Send</button>
        </div>
      </form>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  props: ['active'],

  data () {
    return {
      form: {
        email: '',
        message: ''
      }
    }
  },

  computed: {
    activeClass () {
      return this.active ? 'is-active' : ''
    },

    emailValid () {
      return this.form.email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
    },

    messageValid () {
      return this.form.message.length > 10
    }
  }
}
</script>
