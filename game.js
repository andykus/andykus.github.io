window.onload = () => {
	const game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload, create, update });

	const BLOCK_WIDTH = 179;
	const BLOCK_HEIGHT = 80;
	const BLOCK_PADDING = 5;
	const PADDLE_SPEED = 10;

	let loseText;
	let winText;

	let paddle;
	let blocks;
	let ball;

	function preload() {
		game.load.image('paddle', 'paddle.png');
		game.load.image('ball', 'ball.png');
		game.load.image('block', 'block.png');
	}

	function create() {
		initText();
		renderPaddle();
		renderBall();
		renderBlocks();
	}

	function initText() {
		const textOptions = { font: "40px Arial", fill: "#ffffff", align: "center" };
		loseText = game.add.text(game.world.centerX, game.world.centerY, 'YOU SUCK - git gud', textOptions);
		winText = game.add.text(game.world.centerX, game.world.centerY, 'YOU WIN - stop cheating', textOptions);

		loseText.anchor.setTo(0.5);
		winText.anchor.setTo(0.5);

		loseText.visible = false;
		winText.visible = false;
	}

	function update() {
		game.physics.arcade.collide(ball, paddle, onBallHitPaddle, null, this);
		game.physics.arcade.collide(ball, blocks, onBallHitBlock, null, this);

		if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			paddle.x -= PADDLE_SPEED;
		} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			paddle.x += PADDLE_SPEED;
		}
	}

	function youSuck() {
		ball.kill();
		paddle.kill();
		blocks.callAll('kill');
		loseText.visible = true;
	}

	function youWin() {
		winText.visible = true;
		ball.kill();
		paddle.kill()
	}

	function onBallHitPaddle(ball, paddle) {
		// TODO: Gör så att bollen flyger fortare
	}

	function onBallHitBlock(ball, block) {
		block.kill();

		if (blocks.countLiving() === 0) {
			youWin();
		}
	}

	function renderBlocks() {
		blocks = game.add.group();
		blocks.enableBody = true;
		blocks.physicsBodyType = Phaser.Physics.ARCADE;

		for (let y = 0; y <= 1; y++) {
			for (let x = 0; x <= 3; x++) {
				const xPos = x * (BLOCK_WIDTH + BLOCK_PADDING);
				const yPos = y * (BLOCK_HEIGHT + BLOCK_PADDING);

				const block = blocks.create(xPos, yPos, 'block');
				block.body.immovable = true;
				block.body.bounce.set(1);
			}
		}

		blocks.x = 35;
		blocks.y = 10;
	}

	function renderPaddle() {
		paddle = game.add.sprite(game.world.centerX, game.world.height - 30, 'paddle');
		paddle.anchor.setTo(0.5, 0.5);

		game.physics.enable(paddle, Phaser.Physics.ARCADE);
		
		paddle.body.immovable = true;
		paddle.body.collideWorldBounds = true;
	}

	function renderBall() {
		game.physics.arcade.checkCollision.down = false;

		ball = game.add.sprite(game.world.centerX, game.world.centerY + 100, 'ball');
		ball.anchor.setTo(0.5, 0.5);

		game.physics.enable(ball, Phaser.Physics.ARCADE);
		ball.body.bounce.set(1);
		ball.body.velocity.setTo(200, 200);
		ball.body.collideWorldBounds = true;
		ball.checkWorldBounds = true;

		ball.events.onOutOfBounds.add(youSuck, this);
	}
};
