My Personal Website
==========================
Check it out at http://aclr.co

## Local development

### Jekyll

This site uses [Jekyll](http://jekyllrb.com) as it's site generator. So if you want to see how the site works on your local device, you're required to install Jekyll.

1. Make sure you have Ruby(v2.0.0 at least) installed.
2. Install Jekyll with `gem install jekyll`
3. To run Jekyll, type `jekyll serve` and hit enter.
4. Head over to [127.0.0.1:4000](http://127.0.0.1:4000).
5. To stop Jekyll from watching the files and running the server, just hit `control + c`

### Stylesheets

This site uses [Sass](http://sass-lang.com) as the pre-processor of the stylesheets. It also uses [Susy](http://susy.oddbird.net) for setting the grids in the website.

All the Sass files are watch by [Grunt](http://gruntjs.com) and auto prefixed with [grunt-autoprefixer](https://www.npmjs.com/package/grunt-autoprefixer).

#### Susy

I recommend installing Susy first to make sure the Sass compilation process runs properly. The site uses [Bower](http://bower.io) to include Susy into the site directory.

1. Make sure you have [NPM](https://npmjs.com) installed.
2. Install Bower with `npm install -g bower`(sometimes `sudo npm install -g bower` is required.)
3. Go to the root directory of the project.
4. Type `bower install` and hit enter.
5. Now you have Susy installed inside `bower_components`.

#### Grunt

Now we have Susy installed, we need Grunt to watch and compile the Sass files for us.

1. Go to the root directory of the project.
2. Type `npm install`.
3. Now Grunt and all other dependencies will be installed inside `node_modules`.
4. Go ahead and run `grunt`.
5. Everytime you save `css/dev/main.scss`, Grunt will run and compile it into auto-prefixed css. The compiled css file will be placed at `css/main.css`.