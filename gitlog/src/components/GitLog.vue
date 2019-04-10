<template>
  <div id="main">

    <input type="text" ref="ghusername" name="ghusername" id="ghusername" placeholder="Procurar um usuário no GitHub..." v-model="username" v-on:keydown.13="search" :class="{ 'has-error': error }">

    <span class="loading" v-if="loading">Procurando perfil para "{{ username }}"...</span>

    <div class="box" v-if="results && !loading || error && !loading">

        <div v-if="results">
            <img v-if="results.avatar_url" :src="results.avatar_url" :alt="'GitHub Avatar for ' + username ">
            <h4 v-if="results.name">{{ results.name }}</h4>
            <i v-if="results.bio">{{ results.bio }}</i>
            <p v-if="results.location">{{ results.location }}</p>
            <button id="btnSearchRepos" v-on:click="searchRepos">Carregar repositórios</button>


        </div>

        <span v-if="error">Desculpe, nenhum usuário encontrado com o nome: "<i>{{ username }}</i>"!</span>

    </div>
    <div class="repoBox" v-for="resultsRepo in resultsRepos">
        <h2>{{ resultsRepo.name }}</h2>
        <h3>{{ resultsRepo.language }}</h3>
        <h3><svg aria-label="forks" class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg> {{ resultsRepo.forks_count }}</h3>
        <h3><svg aria-label="stars" class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg> {{ resultsRepo.stargazers_count }}</h3>
        <a class="lnkRepos" v-bind:href="resultsRepo.url" target="_blank">Acessar repositório</a>

    </div>

  </div>
</template>

<script>
    export default {
        data () {
            return {
                username: '',
                results: '',
                error: '',
                loading: false,
            }
        },
        watch: {
            username: function (val) {
                this.error = '';
            }
        },
        methods:  {
            search: function() {

                if( this.username ){

                    this.loading = true;

                    console.log("Procurando por... " + this.username );

                    axios.get('https://api.github.com/users/' + this.username)
                        .then(response => {

                            console.log( response.data );

                            this.results = response.data;

                            this.error = '';

                            this.loading = false;


                        }).catch(error => {

                            this.results = '';
                            this.error = error;

                            this.loading = false;

                        });

                } else {
                    this.results = '';
                    this.error = '';

                    this.loading = false;
                }

            },
            searchRepos: function() {
              axios.get('https://api.github.com/users/' + this.username + '/repos')
                  .then(response => {

                      this.loading = true;

                      console.log( response.data );

                      this.resultsRepos = response.data;
                      this.error = '';

                      this.loading = false;

                  }).catch(error => {

                      this.resultsRepos = '';
                      this.error = error;

                      this.loading = false;

                  });

          }
        }
    }
</script>

<style>
* {
   font-family: 'Montserrat', sans-serif;
   font-weight: 400;
   font-size: 16px;
   line-height: 1.4;
   transition: all .5s;
   -webkit-transition: all .5s;
   transition-delay: 0s;
   -webkit-transition-delay: 0s;
}

html {
  height: 100%;
  min-height:100%;
}
body {
  height: 100%;
  min-height:100%;
  margin:0!important;
  background: #4c2863;
  background: -moz-linear-gradient(-45deg, #4c2863 0%, #30193d 100%);
  background: -webkit-linear-gradient(-45deg, #4c2863 0%,#30193d 100%);
  background: linear-gradient(135deg, #4c2863 0%,#30193d 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c2863', endColorstr='#30193d',GradientType=1 );
  overflow-y: hidden;

}
#main {
  padding-right: 15px;
  padding-left: 15px;
  margin:0 auto;
}

@media (min-width: 1200px) {
  #main {
      width: 1170px;
  }
}
@media (min-width: 992px) {
  #main {
      width: 970px;
  }
}
@media (min-width: 768px) {
  .container {
      width: 750px;
  }
}
input {
    display: block;
    width: 350px;
    max-width: 74%;
    padding: 15px 25px;
    margin: 45px auto;
    border:none;
    border-radius:6px;
    outline:0;
}
.has-error {
    border: 1px solid #96281B;
    outline: none;
}
.box {
    display: block;
    width: 350px;
    max-width: 74%;
    padding: 25px;
    margin: 15px auto;
    color:#fff;
    text-align: center;
}
.box img {
    display: block;
    width: 100px;
    height: auto;
    margin: 0 auto 15px;
}
.loading {
    display: block;
    text-align: center;
    color: #fff;
}

#btnSearchRepos {
  border-radius: 0 0 5px 5px;
  background: #e250d7;
  box-shadow:0 6px #b941b0;
  border: none;
  color:#fff;
  cursor: pointer;
  padding: 15px 40px;
  display: inline-block;
  margin: 15px 30px;
  font-weight: 500;
  outline: none;
  position: relative;
}

#btnSearchRepos:hover {
  box-shadow:0 2px #b941b0;
  top:2px;
}
.repoBox {
  float:left;
  border-radius:4px;
  padding:15px;
  margin:0.65em;
  width: 28%;
  background: #ffffff; /* Old browsers */
  background: -moz-linear-gradient(top, #ffffff 0%, #e5e5e5 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, #ffffff 0%,#e5e5e5 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e5e5e5',GradientType=0 ); /* IE6-9 */
  -webkit-box-shadow: 0px 6px 13px -1px rgba(0,0,0,0.36);
  -moz-box-shadow: 0px 6px 13px -1px rgba(0,0,0,0.36);
  box-shadow: 0px 6px 13px -1px rgba(0,0,0,0.36);
}

@media screen and (min-width: 768px) {
  .repoBox {width:94%;}
}
.repoBox h2 {
  font-weight: 700;
  margin-top:0;
  margin-bottom:5px;
}

.repoBox h3 {
  margin-bottom:5px;
  margin-top:5px;
}
.repoBox .lnkRepos {
  text-decoration: none;
  color:#000;
  font-weight: 500;
  margin-top:5px;
  float:left;
}
.repoBox .lnkRepos:hover {
  text-decoration: underline
}


</style>
