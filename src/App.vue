<template>
<v-app>
  <v-navigation-drawer v-model="drawer" app clipped>
  </v-navigation-drawer>
  <v-app-bar dark app clipped-left>
    <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Vuetify</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
    <v-btn text outlined> Save </v-btn>
    <v-btn text outlined> New </v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{on}">
      <v-btn v-on="on" text>menu<v-icon>mdi-menu-down</v-icon></v-btn>
      </template>
      <v-list>
        <v-list-item v-for="option in options" :key="option">
          <v-list-item-icon>
          <v-icon>{{ option.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ option.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-toolbar-items>
  </v-app-bar>
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
        {title:"Setting",icon:"mdi-vuetify"}
        ,{title:"Import",icon:"mdi-github"}
        ,{title:"Export",icon:"mdi-github"}
      ]
  }),
};
</script>
