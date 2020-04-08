<template>
  <div>
  <v-data-table
    :headers="headers"
    :items="addItems"
    sort-by="calories"
    class="elevation-1"
    :search="search"
    :loading="stopLoad"
    loading-text="Cargando Datos..."
    noResultsText="No hay coincidencias"
    :itemsPerPage="5" 
    
    
  >
    <!-- :footer-props="{
        'items-per-page-text':'Registros por pagina',
        'items-per-page-options': [5,10, 20, 30, -1],
        'items-per-page-all-text':'Todos',
        'page-text':{'N':'n'},
        'show-current-page': true,
        'show-first-last-page': true
    }" -->
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    
    <template v-slot:no-data>
      <!-- <v-btn color="primary" @click="initialize">Reset</v-btn> -->
      <h3>No se encontraron registros</h3>
    </template>
    <!-- <template v-slot:pageText="props">
      Lignes {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
    </template> -->
      <template v-slot:top="{ pagination, options, updateOptions }">
        <v-data-footer 
          :pagination="pagination" 
          :options="options"
          @update:options="updateOptions"
          items-per-page-text="$vuetify.dataTable.itemsPerPageText"/>
      </template>
  </v-data-table>
  </div>
      
</template>

<script>
  export default {
    props: ['myProp', 'stopLoad'],
    data() {
        return {

            page: 1,
            pageCount: 0,
            dialog: false,
            search: '',
            loading: this.stopLoading,
            headers: [
                
                { text: 'Nombre', value: 'name' },
                { text: 'Apodo', value: 'nickname' },
                { text: 'Categoria', value: 'category' },
                // {
                    //   text: 'Dessert (100g serving)',
                //   align: 'start',
                //   sortable: false,
                //   value: 'name',
                // },
                // { text: 'Calories', value: 'calories' },
                // { text: 'Fat (g)', value: 'fat' },
                // { text: 'Carbs (g)', value: 'carbs' },
                // { text: 'Protein (g)', value: 'protein' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
          }
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      // un getter computado
         addItems: function  () {
        // `this` apunta a la instancia de vm
        return this.myProp
        },
         stopLoading: function  () {
        // `this` apunta a la instancia de vm
        return false
        }
        
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
      console.log('from table',this.$parent.$parent.$parent.itemsTable);
        // if (this.myProp.length )
        // this.loading = false
      
    },
    mounted(){
        this.koad()
    },
   

    methods: {
                koad(){
                   
                        // this.loading = this.stopLoading
                        console.log(this.stopLoading);
                        
                },
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },


        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style scoped>

</style>