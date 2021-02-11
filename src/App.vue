<template>
<v-app>
  <v-navigation-drawer v-model="drawer" app clipped>

  <v-container>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title grey--text">
          Navigation lists
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>

    <v-list dense nav>
    <v-list-group
    v-for="nav_list in nav_lists" 
    :key="nav_list.name"
    :prepend-icon="nav_list.icon"
    no-action
    :append-icon="nav_list.lists ? undefined : '' " 
    >

      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item v-for="list in nav_list.lists" :key="list">
        <v-list-item-content>
          <v-list-item-title>{{ list }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list-group>
    </v-list>
  </v-container>

  </v-navigation-drawer>


  <v-app-bar dark app clipped-left>
    <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Vuetify</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>
    <v-btn text outlined to="/editor"> Save </v-btn>
    <v-btn text outlined> New </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{on}">
      <v-btn v-on="on" text>menu<v-icon>mdi-menu-down</v-icon></v-btn>
      </template>
      <v-list>
        <v-list-item v-for="option in options" :key="option.name" :to="option.link">
          <v-list-item-icon>
          <v-icon>{{ option.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ option.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>

    </v-toolbar-items>
  </v-app-bar>

  <v-main>
    <router-view />
  </v-main>

  <v-footer dark app>
    Vuetify
  </v-footer>

  </v-app>
</template>



<script>
//import HelloWorld from './components/HelloWorld';
//import TextField from './components/TextField';
export default {
  name: 'App',
  components: {
  },
  data: () => ({
      drawer:false,
      options:[
        {
          name:"Setting",
          icon:"mdi-vuetify",
          link:"/editor"
        }
        ,{
          name:"Import",
          icon:"mdi-github",
          link:"/about"
        }
        ,{
          name:"Export",
          icon:"mdi-github",
          link:"/"
        }
      ],
      nav_lists:[
        {
          name:"Setting",
          icon:"mdi-vuetify",
          lists:['Quick Start','Pre-made layouts'],
        }
        ,{
          name:"Import",
          icon:"mdi-github",
        }
        ,{
          name:"Export",
          icon:"mdi-github",
        }
      ]
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
