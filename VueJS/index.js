var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!',
        list: [],
        inpMessage: ''
    },

    methods: {
        addList() {
            this.list.push(event.target.value)
            console.log(this.list)
            this.inpMessage = ''
        },
        removeList() {
            let index
            index = event.target.dataset.index
            this.list.splice(index, 1)
            console.log(this.list)
        }
    }

})