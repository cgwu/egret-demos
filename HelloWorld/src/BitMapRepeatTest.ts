class BitMapRepeatTest extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage, this);
	}

	private onAddToStage(event: egret.Event){
		RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,()=>{
			RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete,this);
			RES.loadGroup('testgroup');
		},this);
		RES.loadConfig('resource/default.res.json','resource/');
	}
	private onGroupComplete(){
		var img1:egret.Bitmap = new egret.Bitmap();
		img1.texture = RES.getRes('hudie_png');
		img1.fillMode = egret.BitmapFillMode.REPEAT;
		img1.width *=2;
		img1.height *=3;
		this.addChild(img1);

	}
	/**
	 * 三种方式
	 * getRes()
	 * getResAsync()
	 * getResByUrl()
	 */
}