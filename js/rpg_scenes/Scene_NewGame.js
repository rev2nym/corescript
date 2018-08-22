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

Scene_NewGame.prototype.create = function() {
    DataManager.setupNewGame();
    Scene_Base.prototype.create.call(this);
};

Scene_NewGame.prototype.update = function() {
    Scene_Base.prototype.update.call(this);
    this.checkPlayerLocation();
    SceneManager.goto(Scene_Map);
};

Scene_NewGame.prototype.checkPlayerLocation = function() {
    if ($dataSystem.startMapId === 0) {
        throw new Error('Player\'s starting position is not set');
    }
};
