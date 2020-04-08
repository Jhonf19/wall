<template>
    <div>
        <v-row justify="center">
        <v-col md="4">
        <v-card>
            <v-card-title>Ingreso</v-card-title>
            <v-card-text>
                <v-text-field 
                v-model="email"
                :rules="emailRules" 
                label="Correo" 
                required
                hide-details="auto"
                autofocus />
                <v-text-field
                v-model="password"
                label="Contraseña" 
                :rules="passRules" 
                hide-details="auto"
                type="password" />

            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="verify()">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
      </v-row>  
    </div>
</template>

<script>

// import { db } from "@db/conection.js";
import  firebase  from "firebase";
    export default {
        name: 'Login',
        data: () => ({
            email:'',
            password:'',
            emailRules: [
                v => !!v || 'Correo es obligatorio',
                v => /.+@.+\..+/.test(v) || 'Correo debe ser valido',
            ],            
            passRules: [
                v => !!v || 'Contraseña es obligatorio',
                // v => (v && v.length <= 10) || 'Usuario de tener maximo 10 caracters',
            ],            
        }),
        methods:{
            verify(){
                // alert(this.email+' '+this.password)
                  firebase.auth().signInWithEmailAndPassword(this.email, this.password).then( user => {
                    console.log(user);
                    this.$router.replace('/dashboard')
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
        
    }
</script>

<style scoped>

</style>