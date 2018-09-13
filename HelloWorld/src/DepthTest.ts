class DepthTest extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(){
		/*
		var spr1:egret.Sprite = new egret.Sprite();
		spr1.graphics.beginFill(0xff0000);
		spr1.graphics.drawRect(0,0,100,100);
		spr1.graphics.endFill();
		this.addChild(spr1);
		// spr1.addChild(spr);

		var spr2:egret.Sprite = new egret.Sprite();
		spr2.x = 50;
		spr2.y = 50;
		spr2.graphics.beginFill(0x00ff00);
		spr2.graphics.drawRect(0,0,100,100);
		spr2.graphics.endFill();
		this.addChild(spr2);
		*/

		var sprCon:egret.Sprite = new egret.Sprite();
		this.addChild(sprCon);

		for(var i:number=0; i < 4; i++){
			var spr:egret.Sprite = new egret.Sprite();
			spr.x = 50*i;
			spr.y = 50*i;
			spr.graphics.beginFill(0xffffff * Math.random());
			spr.graphics.drawRect(0,0,100,100);
			spr.graphics.endFill();
			spr.name = `rect${i}`;
			sprCon.addChild(spr);
		}

		var sprNew:egret.Sprite = new egret.Sprite();
		sprNew.graphics.beginFill(0xff0000);
		sprNew.graphics.drawRect(0,0,100,100);
		sprNew.graphics.endFill();
		sprNew.x = 75;
		sprNew.y = 75;
		sprCon.addChild(sprNew);
		sprCon.setChildIndex(sprNew,2);
		// sprCon.addChildAt(sprNew,2);
		/**
		 * 容器.swapChildren(显示对象，显示对象);
		 * 容器.swapChildrenAt(z-order，z-order);
		 */
		// sprCon.swapChildrenAt(1,2);
		// sprCon.swapChildrenAt(1,3);
		var child4: egret.DisplayObject = sprCon.getChildAt(4);		//按z-order取子对象:推荐使用，性能较好
		// var child4: egret.Sprite = sprCon.getChildAt(4) as egret.Sprite;
		child4.scaleX = 0.6;
		var rect3 = sprCon.getChildByName('rect3');		//按名称取子对象
		rect3.scaleY = 0.6;


	}
}