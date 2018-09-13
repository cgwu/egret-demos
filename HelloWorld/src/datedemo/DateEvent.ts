namespace datedemo {

	export class DateEvent extends egret.Event {
		static NAME: string = "约会事件";	// default "public"
		when: string = "";
		where = "";
		what = "";

		constructor(type: string, bubbles?: boolean, cancelable?: boolean, data?: any) {
			super(type, bubbles, cancelable, data);
		}
	}

}