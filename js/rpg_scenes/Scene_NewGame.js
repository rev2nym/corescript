//-----------------------------------------------------------------------------
// Scene_NewGame
//
// The scene class of setup new game.

function Scene_NewGame() {
    this.initialize.apply(this, arguments);
}

Scene_NewGame.prototype = Object.create(Scene_Base.prototype);
Scene_NewGame.prototype.constructor = Scene_GameBase;

Scene_NewGame.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

Scene_NewGame.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    DataManager.setupNewGame();
};

Scene_NewGame.prototype.update = function() {
    Scene_Base.prototype.update.call(this);
    SceneManager.goto(Scene_Map);
};
