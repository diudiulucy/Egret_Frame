/**
 * 面板弹出的管理类
 * @author lucywang
 * @date 2018/01/10
 */
enum EffectType {
    None,            //没有动画
    Slight,          //从中间轻微弹出
    Violent,         //中间猛烈弹出
    LeftRigt,        //从左到右
    RightLeft,       //从右到左
    UpDown,          //从下到上
    DownUp           //从上到下
}

class PopupManager extends Single {
    private _popUpLayerList = {};
    private _darkBg: egret.Sprite;

    public static get Instance(): PopupManager {
        return this.getInstance();
    }

    /**
     * 打开窗口 
     * 
     */
    public open(layerName: string, effectType: EffectType = EffectType.None, dark: boolean = false): void {
        let scene = SceneManager.Instance.runningScene;
        //判断当前场景是否包含此layer，包含则返回
        if (scene.contains(this._popUpLayerList[layerName])) return;

        //创建layer
        let cls = egret.getDefinitionByName(layerName);
        let layer = new cls();
        scene.addChild(layer);
        this._popUpLayerList[layerName] = layer;

        
        dark && this._createDarkBg(layer);

        effectType != EffectType.None && this._playOpenEffect(layer, effectType);
    }

    /**
     * 关闭窗口
     * 
     */
    public close(layerName: string, effectType: number): void {
        let scene = SceneManager.Instance.runningScene;
        if (!layerName && !scene.contains(this._popUpLayerList[layerName])) return;

        let callback = function () {
            if (element && scene.contains(element)) {
                scene.removeChild(element);
                this._popUpLayerList[layerName] = null;
                delete this._popUpLayerList[layerName];
            }
        }

        let element = this._popUpLayerList[layerName];
        this._playCloseEffect(element, effectType, callback);
    }

    private _createDarkBg(layer: egret.DisplayObjectContainer) {
        let width = egret.MainContext.instance.stage.width;
        let height = egret.MainContext.instance.stage.height;
        this._darkBg = new egret.Sprite();
        this._darkBg.graphics.clear();
        this._darkBg.graphics.beginFill(0x000000, 0.6);
        this._darkBg.graphics.drawRect(0, 0, width, height);
        this._darkBg.graphics.endFill();
        this._darkBg.width = width;
        this._darkBg.height = height;
        this._darkBg.visible = true;
        if (!layer.contains(this._darkBg)) {
            layer.addChildAt(this._darkBg, 0);
        }
        this._darkBg.touchEnabled = true;

        egret.Tween.get(this._darkBg).to({ alpha: 1 }, 150);

    }

    private _playOpenEffect(element: egret.DisplayObjectContainer, type: EffectType) {
        switch (type) {
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
            case EffectType.LeftRigt:
                element.x = - egret.MainContext.instance.stage.width;
                egret.Tween.get(element).to({ x: 0 }, 500, egret.Ease.cubicOut);
                break;
            case EffectType.RightLeft:
                element.x = egret.MainContext.instance.stage.width;
                egret.Tween.get(element).to({ x: 0 }, 500, egret.Ease.cubicOut);
                break;
            case EffectType.UpDown:
                element.y = - egret.MainContext.instance.stage.height;
                egret.Tween.get(element).to({ y: 0 }, 500, egret.Ease.cubicOut);
                break;
            case EffectType.DownUp:
                element.y = egret.MainContext.instance.stage.height;
                egret.Tween.get(element).to({ y: 0 }, 500, egret.Ease.cubicOut);
                break;
        }
    }

    private _playCloseEffect(element: egret.DisplayObjectContainer, type: EffectType, callback: Function) {
        let onComplete: Function = function () {
            if (element.contains(this.darkSprite)) {
                element.removeChild(this.darkSprite);
            }
        };
        if (this._darkBg) {
            egret.Tween.get(this._darkBg).to({ alpha: 0 }, 100).call(onComplete, this);
        }

        switch (type) {
            case EffectType.None:
                callback.call(this);
                break;
            case EffectType.Slight:
                egret.Tween.get(element).to({ alpha: 0, scaleX: 0, scaleY: 0 }, 500, egret.Ease.backOut).call(callback, this);
                break;
            case EffectType.Violent:
                egret.Tween.get(element).to({ alpha: 0, scaleX: 0, scaleY: 0 }, 300, egret.Ease.elasticOut).call(callback, this);
                break;
            case EffectType.LeftRigt:
                egret.Tween.get(element).to({ x: element.width }, 500, egret.Ease.cubicOut).call(callback, this);
                break;
            case EffectType.RightLeft:
                egret.Tween.get(element).to({ x: -element.width }, 500, egret.Ease.cubicOut).call(callback, this);
                break;
            case EffectType.UpDown:
                egret.Tween.get(element).to({ y: element.height }, 500, egret.Ease.cubicOut).call(callback, this);
                break;
            case EffectType.DownUp:
                egret.Tween.get(element).to({ y: -element.height }, 500, egret.Ease.cubicOut).call(callback, this);
                break;
        }
    }

}