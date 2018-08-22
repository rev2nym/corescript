//-----------------------------------------------------------------------------
// Scene_BattleTest
//
// The scene class of the battle test.

function Scene_BattleTest() {
    this.initialize.apply(this, arguments);
}

Scene_BattleTest.prototype = Object.create(Scene_Battle.prototype);
Scene_BattleTest.prototype.constructor = Scene_BattleTest;

Scene_BattleTest.prototype.create = function() {
    DataManager.setupBattleTest();
    Scene_Battle.prototype.create.call(this);
};
