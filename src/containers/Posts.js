export default {
  'deploying-laravel-application': {
    title: 'Deploying Laravel Application',
    subtitle: 'How to deploy a Laravel application onto your production server using Git and Travis.',
    content: `
<h2>Prerequisites</h2>
<ul>
  <li><strong>Laravel</strong> version 5.5</li>
  <li>Production server running on <strong>Ubuntu 16.04</strong> with <strong>Nginx</strong></li>
  <li>You do have <strong>SSH</strong> access to your server</li>
  <li>GitHub repository is enabled with <strong>Travis</strong></li>
</ul>

<h2>Configuring Travis</h2>
<p>Travis is a handy <abbr title="Continuous Integration">CI</abbr> tool that is able to build your entire project in a specified environment. It can also run your unit tests or &ndash; this is what we are interested in &ndash; deploy your application.</p>
<h3>Travis Environment File</h3>
<p>Before we jump into configuring Travis itself, let's configure our application to run in a testing environment. We can do so simply by creating <code>.env.travis</code> file, with the following contents. Notice the <code>DB_DATABASE</code> variable. This is a way to tell Laravel to store the database in memory &ndash; it is much faster, thus perfect for testing purposes.</p>
<pre>APP_ENV=testing
APP_KEY=
APP_DEBUG=true
APP_LOG_LEVEL=debug

DB_CONNECTION=sqlite
DB_DATABASE=:memory:

BROADCAST_DRIVER=log
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_DRIVER=sync
MAIL_DRIVER=log</pre>
<h3>Travis Configuration File</h3>
<p>We configure Travis by adding contents to a <code>.travis.yml</code> file, which should be in your project root. Very basic configuration for a Laravel application could look like the following example. It builds the application and runs tests.</p>
<pre>language: php

php:
- 7.0

sudo: false

install:
- travis_retry composer install
- travis_retry npm install

before_script:
- mkdir -p storage/framework/{cache,views,sessions}
- cp .env.travis .env
- php artisan key:generate
- php artisan cache:clear
- php artisan config:clear
- php artisan view:clear
- php artisan clear-compiled

script:
- ./vendor/bin/phpunit
- npm run prod</pre>
<h2>Deploying the Application</h2>
<p>Now let's move on to the fun part. In summary, we will need to go through four simple steps.</p>
<ol>
  <li>Create an SSH key for travis to be able to access our server</li>
  <li>Write a simple deploy script</li>
  <li>Install some stuff on our production server</li>
  <li>Set up the site on Nginx</li>
</ol>
<h3>Creating the SSH Key</h3>
<p>To achieve this, we will leverage the Travis CLI tool. To install the tool run the following commands.</p>
<pre>sudo apt-get install ruby-full
sudo gem install travis</pre>
<blockquote>
  You can test if the tool was properly installed by typing <code>travis -v</code> in the console
</blockquote>
<p>From now on, creating the SSH key for travis is the easiest thing in the world. Simply run these commands from your project root:</p>
<pre>ssh-keygen -t rsa -b 4096 -C 'build@travis-ci.org' -f ./deploy_rsa
travis encrypt-file deploy_rsa --add

# this line adds the ssh key to your server
# make sure to replace the ssh user & host with the correct data
ssh-copy-id -i deploy_rsa.pub user@host

# it is important to remove the unencrypted keys from the repository!
rm -f deploy_rsa deploy_rsa.pub</pre>
<p>The <code>--add</code> option automatically adds commans to decrypt the keys to the <code>.travis.yml</code> file, while messing up the formatting a bit. After a bit of reformatting, the configuration should look similar to this:</p>
<pre>language: php

php:
- 7.0

sudo: false

before_install:
- openssl aes-256-cbc -K $your_key_variable -iv $your_iv_variable -in deploy_rsa.enc -out deploy_rsa -d
<strong>- chmod 700 deploy_rsa</strong>

install:
- travis_retry composer install
- travis_retry npm install

before_script:
- mkdir -p storage/framework/{cache,views,sessions}
- cp .env.travis .env
- php artisan key:generate
- php artisan cache:clear
- php artisan config:clear
- php artisan view:clear
- php artisan clear-compiled

script:
- ./vendor/bin/phpunit
- npm run prod</pre>

<blockquote>
  We also <strong>have to</strong> add the <code>chmod 700 deploy_rsa</code> command to change access rights to the key, for the build would fail otherwise.
</blockquote>
<h3>Deploy Script</h3>
<p>To tell Travis we want to use a deploy script we need to amend our configration file one last time. Add following lines to the end of your <code>.travis.yml</code>:</p>
<pre>deploy:
- provider: script
  script: <strong>/bin/bash deploy.sh</strong>
  on:
    branch: master</pre>
<blockquote>
  The highlighted part works differently for everyone, depending on what Travis environment you use. If it fails, try replacing it with <code>bash deploy.sh</code>, <code>./deploy.sh</code> or simply <code>deploy.sh</code>.
</blockquote>
<p>As you might have assumed, the next step is to write the actual script. I will provide a default example. This part is however highly customisable, based on what actions you want to perform after deploying. Create a <code>deploy.sh</code> file in your project root.</p>
<pre>rsync --exclude vendor --exclude .env --exclude node_modules -r -e "ssh -i deploy_rsa -o 'StrictHostKeyChecking no'" $TRAVIS_BUILD_DIR/. user@host:/var/www/html
ssh -i deploy_rsa -o 'StrictHostKeyChecking no' user@host "cd /var/www/html && composer install && npm install && npm run prod"</pre>
<blockquote>
  The <code>-o 'StrictHostKeyChecking no'</code> part is important, for Travis would get stuck checking the host while building, awaiting user input. I also use <code>/var/www/hmtl</code> as a root of the project, might be diffrerent for you. Don't forget to replace <code>user@host</code> with the correct data either.
</blockquote>
<h3>Server Configuration</h3>
<p>In this guide, we will use the notorious <code>example.com</code> to demonstrate the process on. First of all we need to SSH into our server.</p>
<p>I assume that you have <abbr title="Linux, Nginx, Mysql, PHP">LEMP</abbr> installed on your server and will not cover that part in this article. You might however be missing some Laravel specific packages and php extensions. To fix this, run the following command:</p>
<pre>apt-get install php-xml php-zip php-mbstring unzip</pre>
<blockquote>
  Note that, in all examples, I assume you are logged in as root. If not, make sure to either prepend <code>sudo</code> to each command or perform a <code>sudo su</code>.
</blockquote>
<p>Now we need to create a Laravel <code>.env</code> file for our production server. Although it differs from site to site, the head could look similar to this:</p>
<pre>APP_ENV=production
APP_KEY=base64:your-production-key
APP_DEBUG=false
APP_URL=http://example.com

DB_CONNECTION=mysql
...</pre>
<blockquote>
  Don't forget to run <code>php artisan key:generate</code> to generate a fresh key when setting up the application for the first time.
</blockquote>
<h3>Setting up Nginx Site</h3>
<p>One last thing to do before we are done is to add a virtual host to our webserver. We do so by creating a file in Nginx's <code>sites-available</code> folder.</p>
<pre>cd /etc/nginx/sites-available
vim example.com</pre>
<h4>Adding Virtual Host Contents</h4>
<p>The file that we've created is the place where we specify the virtual host. For <code>example.com</code>, we add following contents:</p>
<pre>server {
    listen 80;
    listen [::]:80;

    # It is important the the /public directory here matches
    # your Laravel applicatinon's public dir.
    root /var/www/html/public;
    index index.php index.html index.htm;
    server_name example.com;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \\.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php7.0-fpm.sock;
    }
}</pre>
<blockquote>
  The last part can differ based on what PHP version you have installed. You also need to have installed PHP <abbr title="FastCGI Process Manager">FPM</abbr>. A quick <code>apt-get install php-fpm</code> should however fix it.
</blockquote>
<h4>Linking the Site</h4>
<p>All that is left to do before reloading Nginx is to link the file we've created to Nginx's <code>sites-enabled</code> folder to, you guessed it, enable the site.</p>
<pre>ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
nginx -t # to check if the syntax is ok
systemctl reload nginx</pre>
<h2>Done!</h2>
<p>Now go ahead &ndash; commit and push your application to the master branch (pull requests work as well) and watch your site being deployed! After successful deployment, visit your site's url and see if it worked.</p>
    `,
    tags: [
      '#laravel', '#travis', '#git', '#deployment'
    ]
  }
}
