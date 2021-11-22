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
        this.genApiMail();
    },
    methods: {
        loadMails() {
            let count = 0;

            while (count < 10) {
                axios.get(this.mailApiURL)
                .then( response => {
                    this.mailCollections.push(response.data.response)
                })
                .catch(error => {
                    console.log(error);
                });

                count++;
            };

            console.log(this.mailCollections);
        },
        genApiMail() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( result => {
                    this.mailCollections.push(result.data.response);
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }, 
    },
});