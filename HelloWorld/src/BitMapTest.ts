class BitMapTest extends egret.DisplayObjectContainer{
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
		this.addChild(img1);

		var t1:egret.Bitmap = new egret.Bitmap();
		t1.y = 200;
		t1.texture = RES.getRes('tooltip');
		this.addChild(t1);

		var t2:egret.Bitmap = new egret.Bitmap();
		t2.y = 300;
		// t2.width *= 2;
		t2.width = 400;
		t2.height = 200;
		t2.texture = RES.getRes('tooltip');	//自动应用9宫格："scale9grid": "19,9,110,40"
		this.addChild(t2);

		var t3:egret.Bitmap = new egret.Bitmap();
		t3.y = 550;
		t3.width = 600;
		t3.height = 200;
		t3.texture = RES.getRes('tooltip2');
		this.addChild(t3);

		var t4:egret.Bitmap = new egret.Bitmap();
		t4.y = 800;
		t4.width = 600;
		t4.height = 200;
		t4.texture = RES.getRes('tooltip2');
		var rect:egret.Rectangle = new egret.Rectangle(19,9,110,40);
		t4.scale9Grid = rect;	//手动应用9宫格
		this.addChild(t4);
	}
	/**
	 * 三种方式
	 * getRes()
	 * getResAsync()
	 * getResByUrl()
	 */
}