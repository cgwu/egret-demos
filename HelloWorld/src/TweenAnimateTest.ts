class TweenAnimateTest extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(){
		var shp: egret.Shape = new egret.Shape();
		shp.graphics.beginFill(0x00ff00);
		shp.graphics.drawRect(0,0,100,100);
		shp.graphics.endFill();
		this.addChild(shp);

		//动画
		var tw = egret.Tween.get(shp,{loop:true});
		tw.to({x:300,y:300},2000);

	}
}