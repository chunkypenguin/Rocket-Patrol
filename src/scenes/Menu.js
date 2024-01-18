class Menu extends Phaser.Scene{ //Menu class becomes a child of Phaser.Scene
    constructor(){
        super("menuScene")
    }

    preload(){
        //load images/tile sprites
        this.load.image('rocket', './assets/Rocket.png')
        this.load.image('spaceship', './assets/SpaceShip.png')
        this.load.image('starfield', './assets/Starfield.png')

        // load spritesheet
        this.load.spritesheet('explosion', './assets/SpaceshipBrokeSpriteSheet.png', {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 8
        })
    }

    create() {
        // animation configuration
        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', {
                start: 0, end: 8, first: 0}),
                frameRrate: 30
        })
        this.add.text(20, 20, "Rocket Patrol Menu")
        this.scene.start("playScene")
    }
}