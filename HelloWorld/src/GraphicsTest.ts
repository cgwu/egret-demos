class GraphicsTest extends egret.DisplayObjectContainer{
	constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage, this);
	}

	private onAddToStage(event: egret.Event){
		this.drawRect();
		this.drawRect2();
		this.drawCircle();
		this.drawLine();
		this.drawCurve();
	}

	private drawRect(){
		var sprite: egret.Shape = new egret.Shape();
		sprite.graphics.beginFill(0xff0000);
		sprite.graphics.lineStyle(10,0x0000ff);
		sprite.graphics.drawRect(0,0,100, 100);
		sprite.graphics.endFill();
		this.addChild(sprite);
	}

	private drawRect2(){
		var sprite: egret.Shape = new egret.Shape();
		sprite.graphics.beginFill(0x00ff00);
		sprite.graphics.drawRect(0,0,100, 100);
		sprite.graphics.endFill();
		sprite.y = 100;
		this.addChild(sprite);
	}

	private drawCircle(){
		var sprite: egret.Shape = new egret.Shape();
		sprite.graphics.beginFill(0xff0000);
		sprite.graphics.lineStyle(10,0x0000ff);
		sprite.graphics.drawCircle(200,200,50);
		sprite.graphics.endFill();
		this.addChild(sprite);
	}

	private drawLine(){
		var sprite: egret.Shape = new egret.Shape();
		// sprite.graphics.beginFill(0xffff00);	//可以填充或不填充
		sprite.graphics.lineStyle(10,0x0000ff);
		sprite.graphics.moveTo(0,300);
		sprite.graphics.lineTo(300,600);
		sprite.graphics.lineTo(600,400);
		sprite.graphics.lineTo(400,600);
		sprite.graphics.endFill();
		this.addChild(sprite);
	}

	private drawCurve(){
		var sprite: egret.Shape = new egret.Shape();
		// sprite.graphics.beginFill(0xffff00);	//可以填充或不填充
		sprite.graphics.lineStyle(10,0xff00ff);
		sprite.graphics.moveTo(0,300);
		sprite.graphics.curveTo(300,600,600,400);
		sprite.graphics.endFill();
		this.addChild(sprite);
	}

}