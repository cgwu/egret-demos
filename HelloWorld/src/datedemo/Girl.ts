
namespace datedemo {
	export class Girl extends egret.Sprite {
		constructor() {
			super();
		}

		takeDate(evt:DateEvent): void {
			console.log(`得到${evt.target.name}的邀请.`);
			console.log(`when:${evt.when},where:${evt.where},what:${evt.what}`);
		}
	}
}