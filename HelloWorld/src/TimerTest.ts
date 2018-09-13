class TimerTest extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
	}

	/**
	 * 2个属性：delay, repeatCount
	 * 3个方法：start,reset,stop
	 * 2个事件：TimerEvent.TIMER, TimerEvent.TIMER_COMPLETE
	 */
	private onAddToStage(){
		var timer: egret.Timer = new egret.Timer(2000,5);
		timer.addEventListener(egret.TimerEvent.TIMER, this.fnTimer, this);
		timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.fnTimerComplete, this);
		timer.start();
	}
	private fnTimer(e:egret.TimerEvent){
		console.log('timer');
	}
		
	private fnTimerComplete(e:egret.TimerEvent){
		console.log('timer complete');
	}

}