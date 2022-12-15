var app = new Vue({
el: '#app',
data: {

   arrayDischi : [],
   arrayPerGenere : [],
   genereSelezionato : 'all',

},

mounted() {

   axios.get('./api/index.php')

      .then((res) => {

         this.arrayDischi = res.data

         console.log(this.arrayDischi)

         this.arrayDischi.forEach((elem) => {

            console.log(elem)
  
            //condizione
            if (!this.arrayPerGenere.includes(elem.genre)) {
              this.arrayPerGenere.push(elem.genre);
            }
  
         })

      })

},
created() {

},
beforeUpdate() {

},
methods: {

   cambiaGenere() {

      if(this.genereSelezionato != 'all'){
      axios.get(`./api/index.php?genre=${this.genereSelezionato}`)
      .then((res) => {
        this.arrayDischi = res.data
      })

      } else{

         axios.get(`./api/index.php`)
         .then((res) => {
           this.arrayDischi = res.data

         }) 

      }
    }

}
})