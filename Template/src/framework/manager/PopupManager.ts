/**
 * 面板弹出的管理类
 * @author lucywang
 * @date 2018/01/10
 */
enum EffectType {
    None,            //没有动画
    Slight,          //从中间轻微弹出
    Violent,
}

class PopupManager extends Single {

    public static get Instance(): PopupManager {
        return this.getInstance();
    }

    /**打开窗口 */
    public open(layerName: string, dark: boolean = false, effectType: EffectType): void {
        let scene = SceneManager.Instance.runningScene;

        let cls = egret.getDefinitionByName(layerName);
        let displayObject = new cls();

        if (!displayObject && scene.contains(displayObject)) return;

        scene.addChild(displayObject);
        this._playEffect(displayObject, effectType);
    }

    private _playEffect(element: egret.DisplayObject, type: EffectType) {
        switch (type) {
            case EffectType.None:
                break;
            case EffectType.Slight:
                element.alpha = 0;
                element.scaleX = 0.5;
                element.scaleY = 0.5;
                egret.Tween.get(element).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 300, egret.Ease.backOut);
                break;
            case EffectType.Violent:
                element.alpha = 0;
                element.scaleX = 0.5;
                element.scaleY = 0.5;
                egret.Tween.get(element).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
                break;
        }
    }


    public close(displayObject: egret.DisplayObject, effectType: number): void {
        let scene = SceneManager.Instance.runningScene;

        let element = displayObject;
        //以下是弹窗动画
        switch (effectType) {
            case 0:
                break;
            case 1:
                egret.Tween.get(element).to({ alpha: 0, scaleX: 0, scaleY: 0, x: element.x + element.width / 2, y: element.y + element.height / 2 }, 300);
                break;
            case 2:
                break;
            case 3:
                egret.Tween.get(element).to({ x: element.width }, 500, egret.Ease.cubicOut);
                break;
            case 4:
                egret.Tween.get(element).to({ x: -element.width }, 500, egret.Ease.cubicOut);
                break;
            case 5:
                egret.Tween.get(element).to({ y: element.height }, 500, egret.Ease.cubicOut);
                break;
            case 6:
                egret.Tween.get(element).to({ y: -element.height }, 500, egret.Ease.cubicOut);
                break;
            default:
                break;
        }

        var waitTime = 500;
        if (effectType == 0) {
            waitTime = 0;
        }

        egret.setTimeout(function () {
            if (displayObject && scene.contains(displayObject)) {
                scene.removeChild(displayObject);
            }

        }, this, waitTime);
    }


}