class MaskDemo extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToSage, this);
	}

	private onAddToSage(event: egret.Event){
		var shp: egret.Shape = new egret.Shape();
		shp.graphics.beginFill(0xff0000);
		shp.graphics.drawRect(0,0,100,100);
		shp.graphics.endFill();
		this.addChild(shp);
	
		var shp2:egret.Shape =  new egret.Shape();
		shp2.graphics.beginFill(0x00ff00);
		shp2.graphics.drawCircle(20,20,20);
		shp2.graphics.endFill();
		this.addChild(shp2);

		var rect:egret.Rectangle = new egret.Rectangle(20,20,40,50);
		shp.mask = rect;	// 遮罩，在此区域内的部分显示，其它部分隐藏。

	}
}