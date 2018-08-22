//-----------------------------------------------------------------------------
// Scene_GameBase
//
// The superclass of all classes after the title scene.

function Scene_GameBase() {
    this.initialize.apply(this, arguments);
}

Scene_GameBase.prototype = Object.create(Scene_Base.prototype);
Scene_GameBase.prototype.constructor = Scene_GameBase;

Scene_GameBase.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

Scene_GameBase.prototype.update = function() {
    $gameSystem.update();
    Scene_Base.prototype.update.call(this);
};
