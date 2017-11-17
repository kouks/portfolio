<template>
  <div>
    <section class="section is-large">
      <headline>
        <headline-title>
          <h1 class="title is-2">The Résumé.</h1>
          <span class="subtitle is-4">
            I'm always eager to learn new things and deal with challenges that are put in front of me.
          </span>
        </headline-title>

        <headline-links>
          <social-links></social-links>
        </headline-links>

        <headline-actions>
          <router-link class="action is-secondary has-icon" to="/">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </router-link>
          <button class="action is-primary is-disabled">Download</button>
        </headline-actions>
      </headline>
    </section>

    <main class="section">
      <div class="container">
        <div class="content has-text-justified">
          <div class="columns is-multiline">
            <div class="column is-12-tablet is-8-desktop is-offset-2-desktop">
              <div class="columns is-multiline">
                <div class="column is-12">
                  <h2 class="title is-3">Work Experience</h2>
                </div>

                <div class="column is-4">
                  <p>
                    <strong>Senior Web Developer</strong><br>
                    <em>WrongWare s.r.o.</em><br>
                    July 2016&mdash;March 2017
                  </p>
                </div>
                <div class="column is-7 is-offset-1">
                  <p>
                    Applied for a junior role but was soon promoted to a senior developer. My main concern was maintaining clients' websites, mostly written in&nbsp;WP. Was however contributing to multiple Laravel projects, too.
                  </p>
                </div>

                <div class="column is-4">
                  <p>
                    <strong>Junior Web Developer</strong><br>
                    <em>next CRE s.r.o.</em><br>
                    September 2015&mdash;December 2015
                  </p>
                </div>
                <div class="column is-7 is-offset-1">
                  <p>
                    First serious employment in the field. Was assigned to maintain a huge e-shop backend based on Zend Framework. Got really familiar with objects not only in PHP but in general.
                  </p>
                </div>
              </div>
            </div>

            <div class="column is-12-tablet is-8-desktop is-offset-2-desktop mt-3">
              <div class="columns is-multiline">
                <div class="column is-12">
                  <h2 class="title is-3">Education</h2>
                </div>

                <div class="column is-6">
                  <p>
                    <strong>Middlesex University London</strong><br>
                    <em>BSc Computer Science</em><br>
                    Expected Graduation in 2019
                  </p>
                </div>

                <div class="column is-6">
                  <p>
                    <strong>Gymnázium Josefa Božka, Český Těšín</strong><br>
                    <em>Graduation Subjects: Maths, IT, English</em><br>
                    2008&mdash;2016
                  </p>
                </div>
              </div>
            </div>

            <div class="column is-12-tablet is-8-desktop is-offset-2-desktop mt-3">
              <div class="columns is-multiline">
                <div class="column is-12">
                  <h2 class="title is-3">Leadership</h2>
                </div>

                <div class="column is-6">
                  <p>
                    <strong>Middlesex University London</strong><br>
                  </p>
                  <p>
                    <em>"Code First: Girls" Instructor</em><br>
                    <small>Autumn 2017</small><br>
                    Led a group of 20 girls through an 8-week web development course.<br>
                  </p>
                  <p>
                    <em>Student Voice Leader</em><br>
                    <small>September 2016&mdash;June 2017</small><br>
                    Became a Student Voice Leader for the first year of my studies at the university.<br>
                  </p>
                  <p>
                    <em>Web Development Society Lerader</em><br>
                    <small>September 2016&mdash;June 2017</small><br>
                    Founded and led this small group of web development enthusiasts.
                  </p>
                </div>

                <div class="column is-6">
                  <p>
                    <strong>Gymnázium Josefa Božka</strong><br>
                  </p>
                  <p>
                    <em>IT Club Leader</em><br>
                    <small>October 2015&mdash;March 2016</small><br>
                    Guided a group of young studens thourgh basic of robotics and programming.
                  </p>
                </div>
              </div>
            </div>

            <div class="column is-12-tablet is-8-desktop is-offset-2-desktop mt-3">
              <div class="columns is-multiline">
                <div class="column is-12">
                  <h2 class="title is-3">Skills &amp; Interests</h2>
                </div>

                <div class="column is-12">
                  <div class="columns">
                    <div class="column is-6">
                      <p>
                        <strong>Programming</strong><br>
                        JavaScript <em>Vue.js, React, node.js</em><br>
                        PHP <em>Laravel, Symfony, WordPress</em><br>
                        HTML &amp; CSS<br>
                        Java<br>
                        C<br>
                        Erlang
                      </p>
                    </div>

                    <div class="column is-6">
                      <p>
                        <strong>Software &amp; Technologies</strong><br>
                        Sublime Text, VIM, IntelliJ, Atom<br>Linux Shell<br>Git<br>Various CI Tools<br>DigitalOcean
                      </p>
                    </div>
                  </div>
                </div>

                <div class="column is-12">
                  <div class="columns">
                    <div class="column is-6">
                      <p>
                        <strong>Languages</strong><br>
                        English <em>fluent</em><br>
                        Czech <em>fluent</em><br>
                        French <em>communicative</em>
                      </p>
                    </div>

                    <div class="column is-6">
                      <p>
                        <strong>Interests</strong><br>
                        Fitness <em>200 kg deadlift!</em><br>
                        Chess<br>
                        Programming<br>
                        Pizza <em>whenever (not) on a diet.</em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
