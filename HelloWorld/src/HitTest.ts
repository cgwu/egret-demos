class HitTest extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToSage, this);
	}

	private onAddToSage(event: egret.Event){
		var shp: egret.Shape = new egret.Shape();
		shp.width = 100;
		shp.height = 100;
		shp.graphics.beginFill(0xff0000);
		// shp.graphics.drawRect(0,0,100,100);
		shp.graphics.drawCircle(0,0,20);
		shp.graphics.endFill();
		this.addChild(shp);
	
		this.initInfo();

		// var isHit:boolean = shp.hitTestPoint(110,110);	//精确碰撞检测,判断width,height是否在范围内.
		var isHit:boolean = shp.hitTestPoint(14,14,true);	//精确碰撞检测,判断shape是否在范围内(true:shape);(false:边框)
		// var isHit:boolean = shp.hitTestPoint(15,15,true);	//精确碰撞检测,判断shape是否在范围内(true:shape);(false:边框)
		// this.infoText.text = '碰撞检测: ' + isHit;
		this.infoText.text = `碰撞检测: ${isHit},width:${shp.width}, height:${shp.height}`;

		this.initCards();
	}

	private infoText: egret.TextField;
	private initInfo(){
		this.infoText = new egret.TextField();
		this.infoText.y = 200;
		// this.infoText.text = '';
		this.addChild(this.infoText);
	}

	private initCards(){
		var card: MyCard = new MyCard();
		card.y = 300;
		this.addChild(card);

		var card2: MyCard = new MyCard();
		card2.y = 410;
		this.addChild(card2);
	}

}