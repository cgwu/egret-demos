/**
 * 测试加载纹理集：
 * 制作纹理集工具SpriteSheet: https://www.codeandweb.com/texturepacker
 * 导出插件： https://github.com/ping-chen/egret-tool
 */
class SpriteSheetTest extends egret.DisplayObjectContainer{
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
		// 加载纹理集
		var imgs:egret.SpriteSheet = RES.getRes("sprite-sheet-test_json");

		// 从纹理集加载图片
		var img1:egret.Bitmap = new egret.Bitmap();
		img1.texture = imgs.getTexture('flower')
		img1.fillMode = egret.BitmapFillMode.REPEAT;
		img1.width *=2;
		img1.height *=3;
		this.addChild(img1);

		// 从纹理集加载图片2
		var img2:egret.Bitmap = new egret.Bitmap();
		img2.texture = imgs.getTexture('hudie')
		img2.fillMode = egret.BitmapFillMode.SCALE;
		img2.y = 600;
		this.addChild(img2);
	}
}