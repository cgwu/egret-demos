class TouchEventTest extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage, this);
	}

	private onAddToStage(event: egret.Event){
		var sprite: egret.Sprite = new egret.Sprite();
		sprite.graphics.beginFill(0xff0000);
		sprite.graphics.drawRect(0,0,200, 100);
		sprite.graphics.endFill();
		this.addChild(sprite);

		this.initText();

		//touch 的开关
		sprite.touchEnabled = true;
		sprite.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
	}

	private onTouch(evt:egret.Event):void {
		this.txt.text = `点击了色块 at ${new Date()}`;
	}

	private txt:egret.TextField;
	private initText():void{
		this.txt = new egret.TextField();
		this.txt.size = 25;	//字体大小
		this.txt.x = 250;
		this.txt.width = 200;
		this.txt.height=200;
		this.txt.text = '事件文本';
		this.addChild(this.txt);

	}
}