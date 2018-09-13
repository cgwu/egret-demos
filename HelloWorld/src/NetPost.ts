class NetPost extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage, this);
	}


	private onAddToStage(event: egret.Event){
		var loader:egret.URLLoader = new egret.URLLoader();
		loader.dataFormat = egret.URLLoaderDataFormat.VARIABLES;
		loader.addEventListener(egret.Event.COMPLETE,(e:egret.Event)=>{
			// var ld: egret.URLLoader = <egret.URLLoader>(event.target);	// 出错！
			var ld: egret.URLLoader = e.target as egret.URLLoader;	// 正确!
			console.log(ld.data);
		},this);

		var req:egret.URLRequest = new egret.URLRequest();
		req.url = 'http://httpbin.org/post';
		req.method = egret.URLRequestMethod.POST;
		req.data = new egret.URLVariables('test=ok&中文=非常好');
		loader.load(req);
	}
}