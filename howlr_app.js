Howls = new Mongo.Collection("howls");

if (Meteor.isClient) {
  Template.body.helpers({
    howls: function() {
      return Howls.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-howl-form": function(event) {
      var text = event.target.text.value;

      Howls.insert({
        text: text,
        createdAt: new Date()
      });

      event.target.text.value = "";

      return false;
    }    
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
