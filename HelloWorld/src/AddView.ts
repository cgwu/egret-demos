class AddView extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(){
		var spr:egret.Sprite = new egret.Sprite();
		spr.graphics.beginFill(0xff0000);
		spr.graphics.drawRect(10,10,50,50);
		spr.graphics.endFill();
		// this.addChild(spr);

		var spr1:egret.Sprite = new egret.Sprite();
		spr1.y = 100;
		spr1.graphics.beginFill(0x0000ff);
		spr1.graphics.drawRect(0,0,100,100);
		spr1.graphics.endFill();
		this.addChild(spr1);
		// spr1.addChild(spr);

		var spr2:egret.Sprite = new egret.Sprite();
		spr2.y = 300;
		spr2.graphics.beginFill(0x00ff00);
		spr2.graphics.drawRect(0,0,100,100);
		spr2.graphics.endFill();
		this.addChild(spr2);
		spr2.addChild(spr);

		// if(spr.parent){
		// 	spr.parent.removeChild(spr);
		// }
		console.log(this.numChildren);
	}
}