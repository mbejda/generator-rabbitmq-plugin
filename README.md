![](https://www.mbejda.com/content/images/2015/11/yeomen.png#cover#cover)<br>
# Yeomen Generator for RabbitMQ Plugins
> Generates RabbitMQ umbrella for plugins.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-rabbitmq-plugin using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-rabbitmq-plugin
```

Then generate your new project:

```bash
yo generator-rabbitmq-plugin
```
# Getting Started
Yeomen will ask for the name of your RabbitMQ plugin. Then it will perform a `Git Clone` of the the RabbitMQ umbrella project. Then run `make co` and then `make` in the umbrella project.

Yeomen rabbitmq-plugin will generate the following files within your project directory in the umbrella project directory :

-  Makefile
-  .gitignore
-  src/*.erl
-  src/*_sup.erl
-  src/*_worker.erl

<br>
![](https://www.mbejda.com/content/images/2015/11/Screen-Shot-2015-11-23-at-7-44-34-AM.png)


Blog : [www.mbejda.com/creating-rabbitmq-plugins-with-yeomen/](https://www.mbejda.com/creating-rabbitmq-plugins-with-yeomen/)<br>
Twitter : [@notmilobejda](https://twitter.com/notmilobejda)<br>
Github: [https://github.com/mbejda/generator-rabbitmq-plugin](https://github.com/mbejda/generator-rabbitmq-plugin)
<br>
<hr>


## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

Apache-2.0 © [Milos Bejda](https://www.mbejda.com)

