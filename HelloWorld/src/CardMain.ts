class CardMain extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage, this);
	}

	private onAddToStage(event: egret.Event){
		var card: MyCard = new MyCard();
		card.y = 0;
		this.addChild(card);

		var card2: MyCard = new MyCard();
		card2.y = 200;
		this.addChild(card2);

	}
}