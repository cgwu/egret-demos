namespace datedemo {

	export class SimpleDate extends egret.DisplayObjectContainer {
		constructor() {
			super();
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		}

		private onAddToStage(event: egret.Event) {
			var boy: Boy = new Boy();
			boy.name = '小张';
			var girl: Girl = new Girl();
			girl.name = '小雪';
			// boy.addEventListener(DateEvent.NAME, girl.takeDate, girl);
			boy.addEventListener(DateEvent.NAME, girl.takeDate, girl,false, 10);
			if(boy.hasEventListener(DateEvent.NAME)){
				console.log('有注册');
			} else {
				console.log('未注册');
			}
			boy.makeDate();
			boy.removeEventListener(DateEvent.NAME, girl.takeDate, girl);
			if(boy.hasEventListener(DateEvent.NAME)){
				console.log('有注册');
			} else {
				console.log('未注册');
			}
		}
	}
}