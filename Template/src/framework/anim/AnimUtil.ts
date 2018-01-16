/**
 * 动画库的封装
 * @author lucywang
 * @date 2018/01/16
 */
class AnimUtil extends Single {

	public static get Instance(): AnimUtil {
		return this.getInstance();
	}

	/**
	 * 循环执行多次动画的封装,透明度的变化
	 * @param target 目标对象
	 * @param duration 持续时间
	 * @param repeat 重复次数
	 */
	public doRepeatAnimation(target: egret.DisplayObject, duration: number, repeat: number): void {
		if (repeat <= 0) return;
		console.log("执行次数" + repeat);
		function onComplete(obj, time) {
			egret.Tween.get(target).to({ alpha: 1 }, duration).call(() => {
				this.doRepeatAnimation(obj, duration, time);
			}, this);
		}

		repeat = repeat - 1;

		egret.Tween.get(target).to({ alpha: 0 }, duration).call(onComplete, this, [target, repeat]);
	}

	


	
}