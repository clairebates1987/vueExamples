// Creating a new Vue instance and pass in an options object.
var demo = new Vue({

    // A DOM element to mount our view model.
    el: '#main',

    // This is the model.
    // Define properties and give them initial values.
    data: {
        active: 'home'
    },

    // Functions we will be using.
    methods: {
        makeActive: function(item){
            // When a model is changed, the view will be automatically updated.
            this.active = item;
        }
    }
});