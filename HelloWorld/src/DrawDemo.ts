class DrawDemo extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToSage, this);
	}

	private onAddToSage(event: egret.Event){
		var sprite: egret.Sprite = new egret.Sprite();
		sprite.graphics.beginFill(0xff0000);
		sprite.graphics.drawRect(0,0,200, 100);
		sprite.graphics.endFill();
		sprite.x = 100;
		sprite.y = 200;
		sprite.alpha = 0.2;
		sprite.scaleX = 0.5;
		sprite.scaleY = 0.5;
		sprite.rotation = -45;
		/*
		alpha,width,height,rotation,scaleX,scaleY,skewY,skewX(斜切),visible,x,y
		 */
		this.addChild(sprite);
		

	}
}