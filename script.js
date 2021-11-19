//*Attraverso l’apposita API di Boolean
//https://flynn.boolean.careers/exercises/api/random/mail
//*generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

//todo BONUS
//Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const root = new Vue({
    el: '#root',
    data: {
        mailApiURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
        mailCollections: [],
    },
    computed: {
        allMailUploaded() {
            return ( (this.mailCollections.length + 1) > 10 ) ? true : false;
        }
    },
    created() {
        this.loadMails()
    },
    methods: {
        loadMails() {
            let count = 0;

            while (count < 10) {
                axios.get(this.mailApiURL)
                .then( response => {
                    console.log(response.data.response);
                    this.mailCollections.push(response.data.response)
                })
                .catch(error => {
                    console.log(error);
                });


                count++;
            };

            console.log(this.mailCollections);
        },
    }, 
});