<template>
        <v-navigation-drawer
        v-model="drawer"
        :color="'primary'"
        :expand-on-hover="true"
        :mini-variant="false"
        :right="false"
        absolute
        dark
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="true && 'px-0'">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Wall</v-list-item-title>
              <v-list-item-subtitle>{{this.$parent.$parent.user.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
            <!-- <h4 v-if="user"> User: {{ this.user.email }}</h4> -->
          <v-divider></v-divider>

          <v-list-item
            link
            to="/customers"
          >
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Inicio</v-list-item-title>  
            </v-list-item-content>
          </v-list-item>
              <!-- <router-link to="/about">About</router-link> -->

          <v-list-item
            link
            to="/dashboard"
          >
            <v-list-item-icon>
              <v-icon>mdi-credit-card-plus-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Creditos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           
          <v-list-item
            link
            @click="logout()"
          >
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Clientes</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           
          <v-list-item
            link
            @click="logout()"
          >
            <v-list-item-icon>
              <v-icon>mdi-hanger</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Productos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
           
          <v-list-item
            link
            @click="logout()"
          >
            <v-list-item-icon>
              <v-icon>mdi-cash-multiple</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Abonos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
           
          <v-list-item
            link
            @click="logout()"
          >
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Salir</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

</template>

<script>
import firebase from 'firebase'

    export default {
        name: 'sideBar',
        data: () => ({
            items: [
                // { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                // { title: 'Photos', icon: 'mdi-image' },
                // { title: 'About', icon: 'mdi-help-box' },
                { title: 'Salir', icon: 'mdi-sign-out', click:'logout' },
            ],
            drawer: true,
            user: ''
        }),
        methods: {
            logout(){
                firebase.auth().signOut()
                .then( () => this.$router.replace('/'))
            },
            credit(){
                this.$router.push({name: 'About'})
            }
        }
    }
</script>

<style scoped>

</style>