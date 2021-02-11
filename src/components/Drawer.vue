<template>
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
</template>