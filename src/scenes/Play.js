class Play extends Phaser.Scene{ //Menu class becomes a child of Phaser.Scene
    constructor(){
        super("playScene")
    }

    create() {
        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding,
        game.config.width, borderUISize * 2, 0x00FF0).setOrigin(0,0)
        
        // place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480,
            'starfield').setOrigin(0,0)

        // white borders
        this.add.rectangle(0,0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0)
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0)
        this.add.rectangle(0,0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0)
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0)

        // add rocket (p1)
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0)
        
        // define keys
        keyFIRE = 
        this.input.keyboard.addkey(Phaser.Input.keyboard.keyCodes.F)
        keyRESET =
        this.input.keyboard.addkey(Phaser.Input.Keyboard.KeyCodes.R)
        keyLEFT = 
        this.input.keyboard.addkey(Phaser.Input.keyboard.keyCodes.LEFT)
        keyRIGHT = 
        this.input.keyboard.addkey(Phaser.Input.keyboard.keycodes.RIGHT)

    }

    update(){
        this.starfield.tilePositionX -= 4
        this.p1Rocket.update()
    }
}