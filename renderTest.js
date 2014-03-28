if (Meteor.isClient) {

    Session.set("levelOne", true);
    Session.set("levelTwo", true);

    Template.firstLevelTemplate.levelOne = function () {
        return Session.get("levelOne");
    };

    Template.secondLevelTemplate.levelTwo = function () {
        return Session.get("levelTwo");
    };
}
