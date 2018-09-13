class TextTest extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	private onAddToStage(){
		var label: egret.TextField =  new egret.TextField();
		label.width = 400;
		label.height= 400;
		label.textColor = 0xff0000;
		label.fontFamily = 'KaiTi';		//楷体
		label.textAlign = egret.HorizontalAlign.RIGHT;
		label.size = 100;
		label.bold = true;
		label.italic = true;

		label.text = '这是第一个文本';
		// label.text = '这\n是\n第\n一\n个\n文\n本';
		this.addChild(label);
		// alert(`with:${label.width},height:${label.height}`);
		label.text='你好啊';
		// alert(`with:${label.width},height:${label.height}`);
	}
}