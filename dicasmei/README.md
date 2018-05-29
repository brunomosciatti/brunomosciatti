Teste DICASMEI

Este repositório usa um "starter kit" de desenvolvedores de front-end com gulp para compilar alguns arquivos de scss/js e outras tasks.

### Gulp
Use a pasta `bootstrap-scss-gulp` 

### bootstrap (nao estou usando)
* `assets/css/bootstrap.min.css`
* `assets/js/jquery.1.11.3.min.js`
* `assets/js/bootstrap.min.js`
* `index.html`

### bootstrap-scss-gulp
* `gulp/gulpfile.js`
* `gulp/package.json`
* `assets/css/bootstrap.min.css`
* `assets/scss/main.scss`
* `assets/js/vendors/jquery.1.11.3.min.js`
* `assets/js/vendors/bootstrap.min.js`
* `index.html`

Gulp configurado com as seguintes tasks:
* BrowserSync (automatically refresh working files in browser on save)
* SASS/SCSS compiler (automatically compiles SCSS to CSS on save)
* Plumber (prevents gulp crash on SASS/SCSS error)
* Notify (SASS/SCSS compile error tray notification)
* CSS minifier (minifies main.min.css)

### Como rodar o gulp

##### 1. Navegue até o diretório 'gulp' da pasta que contém o arquivo `gulpfile.js`
##### 2. Instale as dependencias
```
npm install --save-dev
```

##### 3. Rode o gulp para compilar e assistir aos arquivos
```
gulp
```

---

### For gulp beginners:

##### 1. Terminal
**Notice: If you have trouble installing custom terminal, I wrote more in-detailed guide [here](https://github.com/dmxt/beginner-gulp-tutorial-on-windows#step-1---terminal-windows).**

You need terminal to use npm and gulp. Terminal is available out of the box on Linux and OS X.

Windows has it as well but cmd and PowerShell is not sustainable for development work (I've met some people who prefer it, well, to each their own). I recommend you to install [cmder](http://cmder.net/) as a replacement for Windows terminal and use their custom cmd.exe (`cmd /k "%ConEmuDir%\..\init.bat"` instead of default PowerShell). If you have runtime error when starting cmder, you'll probably need to install VS 2015, see [the issue here](https://github.com/cmderdev/cmder/issues/501). 

Learn terminal basics [here](https://learnpythonthehardway.org/book/appendixa.html), this guide is short and will help you in long run. _Seriously. What are you going to do if you can't even change directory in terminal without looking up?_

##### 2. npm
Install [npm](https://nodejs.org/en/download/). This is available for all operating system. During the installation for Windows, be sure 'add to PATH' is included ([image](http://i.imgur.com/lHiNR7p.png)). When installed, restart cmder and enter `npm` in terminal to see if it's working properly, as in it should tell you the usage information. If it does, proceed to the next step.

##### 3. gulp
Install gulp globally with this terminal command: `npm install --global gulp`

On completion, download this repo and extract bootstrap-scss-gulp to any folder. Follow the instruction in bootstrap-scss-gulp section on this readme by running `npm install --save-dev`, then run `gulp`. Default browser should open the index.html and will refresh on file save when you edit files.
