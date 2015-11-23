'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();
    this.log(yosay(
      'Welcome to the awe-inspiring ' + chalk.red('generator-rabbitmq-plugin') + ' generator!'
    ));


    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'What would you like to name your rabbitmq plugin?',
      default: this.appname // Default to current folder name
    }, function(answers) {
      var sanitize = {
        name: answers.name.replace(/ /g, '_')
      }
      this.props = sanitize;
      done();
    }.bind(this));


  },

  writing: function() {
    var done = this.async();
    var umbrella = this.props.name;
    var repo = 'https://github.com/rabbitmq/rabbitmq-public-umbrella.git';



    var spawn = this.spawnCommand('git', ['clone', repo, umbrella]);
    spawn.on('close', function(code, signal) {
      console.log('\n\n' + chalk.green.bold('Git clone complete'));


      /**
       * Copy makefile
       */
      var makeFile = umbrella + '/' + this.props.name + '/Makefile';
      this.fs.copy(this.sourceRoot() + "/Makefile", makeFile, {
        process: function(content) {

          var regEx = new RegExp('PROJECTNAME', 'g');
          var newContent = content.toString().replace(regEx, this.props.name);
          return newContent;
        }.bind(this)
      });
      console.log('\n\n' + chalk.green.bold('Makefile cloned'));


      /**
       * Copy gitignore
       */
      var gitIgnore = umbrella + '/' + this.props.name + '/.gitignore';
      this.fs.copy(this.sourceRoot() + "/temp.gitignore", gitIgnore, {
        process: function(content) {
          var regEx = new RegExp('PROJECTNAME', 'g');
          var newContent = content.toString().replace(regEx, this.props.name);
          return newContent;
        }.bind(this)
      });
      console.log('\n\n' + chalk.green.bold('gitignore cloned'));


      /**
       * Copying file templates
       */
      var files = [
        'projectname.erl',
        'projectname_sup.erl',
        'projectname_worker.erl'
      ]
      files.forEach(function(file) {
        var regEx = new RegExp('projectname', 'g');
        var newFile = file.toString().replace(regEx, this.props.name);
        var newDest = umbrella + '/' + this.props.name + '/src/' + newFile;
        this.fs.copy(this.sourceRoot() + "/src/" + file, newDest, {
          process: function(file, content) {
            var regEx = new RegExp('PROJECTNAME', 'g');
            var regExFileName = new RegExp('FILENAME', 'g');
            var newContent = content.toString().replace(regEx, this.props.name).replace(regExFileName, file);
            return newContent;
          }.bind(this, newFile)
        });
      }.bind(this))
      console.log('\n\n' + chalk.red.bold('Do not forget to run MAKE co & MAKE'));
      done();
    }.bind(this))
  }
});