/**
 * 测试加载纹理集：
 * 制作纹理集工具SpriteSheet: https://www.codeandweb.com/texturepacker
 * 导出插件： https://github.com/ping-chen/egret-tool
 */
class SourndTest extends egret.DisplayObjectContainer{
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
		
		this.initControlBtns();	//初始播放控制按钮
	}

	private _music:egret.Sound;
	private _channel: egret.SoundChannel;

	private onGroupComplete(){
		// 加载声音
		this._music = RES.getRes("matouqin_mp3");
		this._channel = this._music.play();
		// this.music.play(10,1);
	}

	private initControlBtns(){
		var btnStart:egret.Sprite = new egret.Sprite();
		btnStart.graphics.beginFill(0xff0000);
		btnStart.graphics.drawRect(0,0,100,100);
		btnStart.graphics.endFill();
		btnStart.width = 100;
		btnStart.height = 60;
		this.addChild(btnStart);
		btnStart.touchEnabled = true;
		btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
			if(this._channel) this._channel.stop();
		},this);

		var btnReplay:egret.Sprite = new egret.Sprite();
		btnReplay.graphics.beginFill(0x0000ff);
		btnReplay.graphics.drawRect(0,0,100,100);
		btnReplay.graphics.endFill();
		btnReplay.width = 100;
		btnReplay.height = 60;
		btnReplay.y = 100;
		this.addChild(btnReplay);
		btnReplay.touchEnabled = true;
		btnReplay.addEventListener(egret.TouchEvent.TOUCH_TAP,(e)=>{
			// if(this._channel) this._channel.stop();	//判断已开始，则停止,否则会播放多个channel.
			this._channel = this._music.play();
		},this);
		
	}
}