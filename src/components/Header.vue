<template>
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

</template>