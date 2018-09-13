
namespace datedemo {
	export class Boy extends egret.Sprite {
		constructor() {
			super();
		}

		makeDate() {
			var de: DateEvent = new DateEvent(DateEvent.NAME);
			de.what = "看电影";
			de.when = "后天";
			de.where = "沙滩";
			this.dispatchEvent(de);
		}
	}
}