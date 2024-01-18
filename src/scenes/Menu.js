class Menu extends Phaser.Scene{ //Menu class becomes a child of Phaser.Scene
    constructor(){
        super("menuScene")
    }

    preload(){
        //load images/tile sprites
        this.load.image('rocket', './assets/Rocket.png')
        this.load.image('spaceship', './asssets/SpaceShip.png')
        this.load.image('starfield', './assets/Starfield.png')
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Menu")
        this.scene.start("playScene")
    }
}