<template>
    <div>
        <h4>Dashboard</h4>
        <jf-data-table v-bind:my-prop="this.itemsTable" v-bind:stop-load="stopLoad" />
    </div>
</template>

<script>
import JfDataTable from "@/components/layouts/JfDataTable";
    export default {
        name: 'Dashboard',
        data(){
            return {
                stopLoad : true,
                itemsTable:[]
            }
        },
        
        components:{
            JfDataTable
        },
        mounted(){
             fetch('https://www.breakingbadapi.com/api/characters?limit=10&offset=10')
          .then( res => {
            return res.json()
            // console.log(x);
            
          })
          .then( res => {
          console.log(res)
          this.itemsTable = res
          this.stopLoad = false
          })
          .catch( err => {
            console.error(err);
            
          })
        }
    }
</script>

<style scoped>

</style>