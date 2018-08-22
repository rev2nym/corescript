//-----------------------------------------------------------------------------
// Scene_EventTest
//
// The scene class of the event test.

function Scene_EventTest() {
    this.initialize.apply(this, arguments);
}

Scene_EventTest.prototype = Object.create(Scene_Map.prototype);
Scene_EventTest.prototype.constructor = Scene_EventTest;

Scene_EventTest.prototype.create = function() {
    DataManager.setupEventTest();
    Scene_Map.prototype.create.call(this);
};
