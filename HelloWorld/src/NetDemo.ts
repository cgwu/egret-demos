class NetDemo extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage, this);
	}

	private urlLoader: egret.URLLoader;

	private onAddToStage(event: egret.Event){
		this.urlLoader = new egret.URLLoader();
		var req:egret.URLRequest = new egret.URLRequest();
		req.url = 'http://httpbin.org/user-agent';
		this.urlLoader.load(req);
		this.urlLoader.addEventListener(egret.Event.COMPLETE,(e)=>{
			console.log(this.urlLoader.data);
		},this);

	}
}