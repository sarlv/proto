/*

There are a list of technologies 
for front end developers

CSS
- Bootstrap
- Stylus
- Less
- Sass
JS
- javascript (core)
- ecma6
- js patterns
JS frameworks
- Backbone
- Underscore
- Angular
JS templator
- mustash
TESTS
- karma
- protractor
NODE
- node.js (core)
NODE framworks
- express
DATABASES
- mongodb
DEVELOPING TOOLS
- Grunt
- Bower
- Yeoman
VERSION CONTROL
- git
- svn
- mercurial
*/

window.App = {
    Model: {},
    Collections: {},
    View: {}
}

window.template = function(id) {
    return _.template( $('#' + id).html());
} 

App.Model.Person = Backbone.Model.extend({
    defaults: {
        name: 'John Doe',
        age: 30,
        occupation: 'woker'
    }
});

App.Collections.Person = Backbone.Collection.extend({
    model: App.Model.Person
});

App.View.People = Backbone.View.extend({
    
    tagName: 'ul',

    render: function() {
    
        var personView;
    
        this.collection.each(function(person) {
            personView = new App.View.Person({
                model: person
            });
            this.$el.append(personView.render().el);
        }, this);

        console.log(this.$el)

        return this;
        
    }
});

App.View.Person = Backbone.View.extend({
    
    tagName: 'li',
    
    template: template('personTemplate'),
    
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});


var personCollection = new App.Collections.Person([
    {
        name: 'James Bond',
        age: 27
    },
    {
        name: 'John Doe',
        age: 50,
        occupation: 'web designer'
    },
    {
        name: 'Sally Doe',
        age: 29,
        occupation: 'graphic designer'
    }
]);

var peopleView = new App.View.People({ collection: personCollection });
$(document.body).append(peopleView.render().el);











