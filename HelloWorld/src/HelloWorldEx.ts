class HelloWorldEx extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage, this);
	}

	private onAddToStage(event: egret.Event){
		// 打开性能面板
		// egret.Profiler.getInstance().run();
		console.log("hello egret");

	}
}