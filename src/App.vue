<template>
  <v-app>
    <nav>
    <jf-side-bar v-if="user" />
    </nav>
      
     <!-- <div id="nav">
      <router-link v-if="!user"  to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <button v-if="user" @click="logout()">sal</button> |
    </div> -->
    <v-container>
      <!-- <v-row justify="center"> -->
        <!-- <v-col md="4"> -->
          <router-view/>
          
        <!-- </v-col> -->
      <!-- </v-row>             -->
    </v-container>
  </v-app>
</template>

<script>
import JfSideBar from '@/components/layouts/JfSideBar';
import firebase from 'firebase'
console.log(4);
// var Cuser = firebase.auth().currentUser

export default {
  name: 'App',
   components: {
    JfSideBar,
    // firebase
  },
  props:['myPresident'],
  data : () => ({
    user: false,
    itemsTable:[]

  }),
        created(){
            firebase.auth().onAuthStateChanged( user => {
                if (user) {
                    console.log('userX'+user);
                    this.user = user
                    
                } else {
                    console.log('userXno'+user);
                    this.user = null
                }
            })
            console.log(1);
            
        },
        mounted(){
         
        },

 
  methods: {
    logout(){
      firebase.auth().signOut()
      .then( () => this.$router.replace('/'))
    }
    }
};
</script>
