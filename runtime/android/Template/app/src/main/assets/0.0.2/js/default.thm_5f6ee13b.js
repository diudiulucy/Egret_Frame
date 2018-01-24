window.skins={};
window.Skin={};
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"}
generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text")
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		t.visible = false;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/views/hall/rank/Rank.exml'] = window.skins.Rank = (function (_super) {
	__extends(Rank, _super);
	function Rank() {
		_super.call(this);
		this.skinParts = ["rankList"];
		
		this.height = 416;
		this.width = 404;
		this.elementsContent = [this._Image1_i(),this.rankList_i()];
	}
	var _proto = Rank.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "rank_bg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.rankList_i = function () {
		var t = new ScrollerList();
		this.rankList = t;
		t.percentHeight = 65;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = skins.RankItem;
		t.verticalCenter = 20;
		t.percentWidth = 62;
		return t;
	};
	return Rank;
})(eui.Skin);generateEUI.paths['resource/views/hall/HallLayer.exml'] = window.Skin.Hall = (function (_super) {
	__extends(Hall, _super);
	function Hall() {
		_super.call(this);
		this.skinParts = ["up","bg","head","coin","dimond","top","logo","gameEntryList","menu_list","bottom","player","virtuallayout","virtual","btn_new"];
		
		this.height = 720;
		this.width = 1280;
		this.up_i();
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.image"],[0],this._TweenItem1,"target")
		eui.Binding.$bindProperties(this, [45],[],this._Object1,"rotation")
	}
	var _proto = Hall.prototype;

	_proto.up_i = function () {
		var t = new egret.tween.TweenGroup();
		this.up = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._To1_i()];
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.ease = "quintIn";
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.top_i(),this.logo_i(),this._Scroller1_i(),this._Rank1_i(),this.bottom_i(),this.player_i(),this._DataGroup1_i(),this.virtuallayout_i(),this.virtual_i(),this.btn_new_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "hall_bg_jpg";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.top_i = function () {
		var t = new eui.Group();
		this.top = t;
		t.percentWidth = 100;
		t.elementsContent = [this.bg_i(),this._Image4_i(),this.head_i(),this.coin_i(),this.dimond_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "topbar_png";
		t.percentWidth = 50;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.right = 0;
		t.scaleX = -1;
		t.source = "topbar_png";
		t.percentWidth = 50;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "Mr.big";
		t.textColor = 0xf4ad02;
		t.x = 264;
		t.y = 21;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.right = 44;
		t.source = "decorate_png";
		t.y = 46;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Group();
		this.head = t;
		t.left = 102;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "imgbg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "imgmask_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.coin_i = function () {
		var t = new eui.Group();
		this.coin = t;
		t.anchorOffsetX = 0;
		t.height = 64;
		t.right = 400;
		t.width = 224;
		t.y = 6;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Label2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "icon_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.right = 6;
		t.source = "+_png";
		t.verticalCenter = -2;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "coin2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "99.16万";
		t.textColor = 0xdbac0d;
		t.verticalCenter = 0;
		return t;
	};
	_proto.dimond_i = function () {
		var t = new eui.Group();
		this.dimond = t;
		t.anchorOffsetX = 0;
		t.height = 64;
		t.right = 150;
		t.width = 224;
		t.y = 6;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Label3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "icon_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.right = 6;
		t.source = "+_png";
		t.verticalCenter = -2;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "dimond_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "99.16万";
		t.textColor = 0xDBAC0D;
		t.verticalCenter = 0;
		return t;
	};
	_proto.logo_i = function () {
		var t = new eui.Image();
		this.logo = t;
		t.horizontalCenter = -246;
		t.source = "logo_png";
		t.verticalCenter = -210;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 370;
		t.horizontalCenter = -220;
		t.verticalCenter = 50;
		t.width = 660;
		t.viewport = this.gameEntryList_i();
		return t;
	};
	_proto.gameEntryList_i = function () {
		var t = new eui.List();
		this.gameEntryList = t;
		t.itemRendererSkinName = skins.HallPlayItem;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i()];
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.antes = "底注：200";
		t.condition = "两批马 有癞子 2000金币";
		t.icon = "newBie_png";
		t.icon_selected = "newBie_selected_png";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.antes = "底注：800";
		t.condition = "两批马 有癞子 2000金币";
		t.icon = "plebs_png";
		t.icon_selected = "plebs_selected_png";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.antes = "底注：1000";
		t.condition = "两批马 有癞子 2000金币";
		t.icon = "rich_png";
		t.icon_selected = "rich_selected_png";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.antes = "底注：2000";
		t.condition = "两批马 有癞子 2000金币";
		t.icon = "betGod_png";
		t.icon_selected = "betGod_selected_png";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.antes = "底注：2000";
		t.condition = "两批马 有癞子 2000金币";
		t.icon = "betGod_png";
		t.icon_selected = "betGod_selected_png";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.antes = "底注：2000";
		t.condition = "两批马 有癞子 2000金币";
		t.icon = "betGod_png";
		t.icon_selected = "betGod_selected_png";
		return t;
	};
	_proto._Rank1_i = function () {
		var t = new Rank();
		t.height = 468;
		t.horizontalCenter = 350;
		t.skinName = "skins.Rank";
		t.verticalCenter = 0;
		t.width = 442;
		return t;
	};
	_proto.bottom_i = function () {
		var t = new eui.Group();
		this.bottom = t;
		t.bottom = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Image13_i(),this.menu_list_i(),this._Image14_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "menu_bg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.menu_list_i = function () {
		var t = new eui.List();
		this.menu_list = t;
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = skins.HallMenuItem;
		t.width = 950;
		t.layout = this._HorizontalLayout2_i();
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 50;
		t.horizontalAlign = "center";
		t.paddingLeft = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i(),this._Object13_i(),this._Object14_i()];
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.icon = "play_png";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.icon = "feedback_png";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.icon = "settings_png";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.icon = "share_png";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.icon = "shop_png";
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.icon = "mail_png";
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		t.icon = "benifit_png";
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "left_png";
		return t;
	};
	_proto.player_i = function () {
		var t = new ScrollerList();
		this.player = t;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = testRender;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 640;
		return t;
	};
	_proto._DataGroup1_i = function () {
		var t = new eui.DataGroup();
		t.height = 200;
		t.itemRendererSkinName = testRender;
		t.visible = false;
		t.width = 200;
		t.x = 633;
		t.y = 139;
		t.dataProvider = this._ArrayCollection3_i();
		return t;
	};
	_proto._ArrayCollection3_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object15_i(),this._Object16_i(),this._Object17_i()];
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		t.name = "null";
		t.price = "null";
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		t.name = "null";
		t.price = "null";
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		t.name = "null";
		t.price = "null";
		return t;
	};
	_proto.virtuallayout_i = function () {
		var t = new eui.ToggleButton();
		this.virtuallayout = t;
		t.label = "虚拟";
		t.visible = false;
		t.x = 1050;
		t.y = 338;
		return t;
	};
	_proto.virtual_i = function () {
		var t = new eui.Label();
		this.virtual = t;
		t.text = "";
		t.visible = false;
		t.x = 1052;
		t.y = 248;
		return t;
	};
	_proto.btn_new_i = function () {
		var t = new eui.Button();
		this.btn_new = t;
		t.label = "更新数据";
		t.visible = false;
		t.x = 1064;
		t.y = 220;
		return t;
	};
	return Hall;
})(eui.Skin);generateEUI.paths['resource/views/itemRender/HallMenuItem.exml'] = window.skins.HallMenuItem = (function (_super) {
	__extends(HallMenuItem, _super);
	function HallMenuItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 94;
		this.width = 91;
		this.elementsContent = [this._Image1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image1,"source")
	}
	var _proto = HallMenuItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	return HallMenuItem;
})(eui.Skin);generateEUI.paths['resource/views/itemRender/HallPlayItem.exml'] = window.skins.HallPlayItem = (function (_super) {
	__extends(HallPlayItem, _super);
	function HallPlayItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 347;
		this.width = 210;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Label1","bold",true),
					new eui.SetProperty("_Label2","bold",true)
				])
			,
			new eui.State ("down",
				[
					new eui.SetStateProperty(this, ["hostComponent.data.icon_selected"],[0],this._Image1,"source"),
					new eui.SetProperty("_Label1","bold",true),
					new eui.SetProperty("_Label2","bold",true)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image1,"source")
		eui.Binding.$bindProperties(this, ["hostComponent.data.antes"],[0],this._Label1,"text")
		eui.Binding.$bindProperties(this, ["hostComponent.data.condition"],[0],this._Label2,"text")
	}
	var _proto = HallPlayItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.size = 18;
		t.textColor = 0x161313;
		t.y = 195;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.horizontalCenter = 0;
		t.maxWidth = 100;
		t.multiline = true;
		t.size = 18;
		t.textColor = 0x161313;
		t.y = 228;
		return t;
	};
	return HallPlayItem;
})(eui.Skin);generateEUI.paths['resource/views/itemRender/playerState.exml'] = window.playerState = (function (_super) {
	__extends(playerState, _super);
	function playerState() {
		_super.call(this);
		this.skinParts = ["usernameTxt","onlineTxt"];
		
		this.height = 100;
		this.width = 500;
		this.elementsContent = [this._Rect1_i(),this.usernameTxt_i(),this.onlineTxt_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.username"],[0],this.usernameTxt,"text")
		eui.Binding.$bindProperties(this, ["hostComponent.data.online"],[0],this.onlineTxt,"text")
	}
	var _proto = playerState.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0.8;
		t.fillColor = 0x046bf7;
		t.percentHeight = 100;
		t.strokeColor = 0x000000;
		t.percentWidth = 100;
		return t;
	};
	_proto.usernameTxt_i = function () {
		var t = new eui.Label();
		this.usernameTxt = t;
		t.left = 20;
		t.verticalCenter = 0;
		return t;
	};
	_proto.onlineTxt_i = function () {
		var t = new eui.Label();
		this.onlineTxt = t;
		t.right = 30;
		t.verticalCenter = 0;
		return t;
	};
	return playerState;
})(eui.Skin);generateEUI.paths['resource/views/itemRender/RankItem.exml'] = window.skins.RankItem = (function (_super) {
	__extends(RankItem, _super);
	function RankItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 80;
		this.width = 273;
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text")
	}
	var _proto = RankItem.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this._BitmapLabel1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xeda310;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 69;
		t.y = 22;
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "green_fnt";
		t.height = 82;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.text = "1";
		t.width = 51;
		t.x = 14;
		t.y = 23;
		return t;
	};
	return RankItem;
})(eui.Skin);generateEUI.paths['resource/views/itemRender/ShopItem.exml'] = window.skins.ShopItem = (function (_super) {
	__extends(ShopItem, _super);
	function ShopItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 223;
		this.width = 208;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Image2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.price"],[0],this._Label1,"text")
		eui.Binding.$bindProperties(this, ["hostComponent.data.icon"],[0],this._Image2,"source")
	}
	var _proto = ShopItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "itembg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.textColor = 0x020202;
		t.y = 170;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81;
		t.horizontalCenter = 0;
		t.width = 84;
		t.y = 49;
		return t;
	};
	return ShopItem;
})(eui.Skin);generateEUI.paths['resource/views/itemRender/testRender.exml'] = window.testRender = (function (_super) {
	__extends(testRender, _super);
	function testRender() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 100;
		this.width = 500;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text")
		eui.Binding.$bindProperties(this, ["hostComponent.data.price"],[0],this._Label2,"text")
	}
	var _proto = testRender.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0x000000;
		t.strokeWeight = 2;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.left = 20;
		t.textColor = 0x161414;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.right = 30;
		t.textColor = 0x141111;
		t.verticalCenter = 0;
		return t;
	};
	return testRender;
})(eui.Skin);generateEUI.paths['resource/views/login/LoginLayer.exml'] = window.skins.LoginLayer = (function (_super) {
	__extends(LoginLayer, _super);
	function LoginLayer() {
		_super.call(this);
		this.skinParts = ["edit_name","edit_psw","btn_login"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = LoginLayer.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "PreLoadingBg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.right = 150;
		t.percentWidth = 35;
		t.y = 406;
		t.elementsContent = [this.edit_name_i(),this.edit_psw_i(),this.btn_login_i()];
		return t;
	};
	_proto.edit_name_i = function () {
		var t = new eui.EditableText();
		this.edit_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0x000000;
		t.height = 66;
		t.text = "9113";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.edit_psw_i = function () {
		var t = new eui.EditableText();
		this.edit_psw = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0x000000;
		t.height = 66;
		t.text = "112233";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 93;
		return t;
	};
	_proto.btn_login_i = function () {
		var t = new eui.Button();
		this.btn_login = t;
		t.horizontalCenter = 0;
		t.label = "登录";
		t.y = 188;
		return t;
	};
	return LoginLayer;
})(eui.Skin);generateEUI.paths['resource/views/ui/TabBarButtonSkin.exml'] = window.skins.TabBarButtonSkin = (function (_super) {
	__extends(TabBarButtonSkin, _super);
	function TabBarButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 82;
		this.width = 180;
		this.elementsContent = [this._Group1_i()];
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Label1","textColor",0x843b12)
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","_Group1",1,""),
					new eui.SetProperty("_Image1","source","tab_select2_png"),
					new eui.SetProperty("_Label1","textColor",0x843b12)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label1,"text")
	}
	var _proto = TabBarButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "tab_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "select_tip_png";
		t.verticalCenter = 0;
		return t;
	};
	return TabBarButtonSkin;
})(eui.Skin);generateEUI.paths['resource/views/ui/TabStackView.exml'] = window.skins.TabStackView = (function (_super) {
	__extends(TabStackView, _super);
	function TabStackView() {
		_super.call(this);
		this.skinParts = ["tabBg","Tab","viewStack","View","TabStackView"];
		
		this.height = 562;
		this.width = 900;
		this.elementsContent = [this.TabStackView_i()];
		
		eui.Binding.$bindProperties(this, ["viewStack"],[0],this._TabBar1,"dataProvider")
	}
	var _proto = TabStackView.prototype;

	_proto.TabStackView_i = function () {
		var t = new eui.Group();
		this.TabStackView = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.Tab_i(),this.View_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		return t;
	};
	_proto.Tab_i = function () {
		var t = new eui.Group();
		this.Tab = t;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.tabBg_i(),this._TabBar1_i()];
		return t;
	};
	_proto.tabBg_i = function () {
		var t = new eui.Image();
		this.tabBg = t;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(16,7,99,48);
		t.source = "tab_view_bg_png";
		t.verticalCenter = 0;
		t.width = 196;
		return t;
	};
	_proto._TabBar1_i = function () {
		var t = new eui.TabBar();
		this._TabBar1 = t;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = skins.TabBarButtonSkin;
		t.top = 20;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto.View_i = function () {
		var t = new eui.Group();
		this.View = t;
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.width = 683.15;
		t.x = -76;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.viewStack_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(24,20,148,124);
		t.source = "tab_view_bg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.viewStack_i = function () {
		var t = new eui.ViewStack();
		this.viewStack = t;
		t.percentHeight = 100;
		t.selectedIndex = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "设置";
		t.percentWidth = 100;
		t.elementsContent = [this._Scroller1_i(),this._Image2_i()];
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 180;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.verticalCenter = -146;
		t.percentWidth = 90;
		t.viewport = this._Label1_i();
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "asdfasdasdfasfasdfasdfasdfasdfasdfas奥斯sdfsdfsdfsdfgsdfgsdfgdf卡来得及gsdfgsd付款时间段空间ADSL看水电费水电费公司的分公司电饭锅地方风景奥斯卡来得双方各撒地方公司的风格撒地方及福克斯的九分裤撒大家俯瞰风景奥斯卡来得及反馈圣诞节卡三等奖福克斯的金风科技社康的";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "code_png";
		t.y = 283;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "关于";
		t.percentWidth = 100;
		t.elementsContent = [this._Label2_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "关于";
		t.x = 10;
		t.y = 81;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "反馈";
		t.percentWidth = 100;
		t.elementsContent = [this._Label3_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "反馈";
		t.x = 17;
		t.y = 79;
		return t;
	};
	return TabStackView;
})(eui.Skin);generateEUI.paths['resource/views/hall/rule/RuleLayer.exml'] = window.skins.RuleLayer = (function (_super) {
	__extends(RuleLayer, _super);
	var RuleLayer$Skin1 = 	(function (_super) {
		__extends(RuleLayer$Skin1, _super);
		function RuleLayer$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RuleLayer$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RuleLayer$Skin1;
	})(eui.Skin);

	function RuleLayer() {
		_super.call(this);
		this.skinParts = ["bg","btn_close","stackMail","tabView"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group5_i()];
		
		eui.Binding.$bindProperties(this, ["stackMail"],[0],this._TabBar1,"dataProvider")
	}
	var _proto = RuleLayer.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1236;
		t.elementsContent = [this.bg_i(),this._Image3_i(),this.btn_close_i(),this._Image4_i(),this.tabView_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "bg_png";
		t.verticalCenter = 0;
		t.x = 1236;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "player_png";
		t.x = 585;
		t.y = 24.67;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.label = "";
		t.x = 1083.33;
		t.y = -10;
		t.skinName = RuleLayer$Skin1;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "coin_de_png";
		t.x = 34.91;
		t.y = 63.67;
		return t;
	};
	_proto.tabView_i = function () {
		var t = new eui.Group();
		this.tabView = t;
		t.height = 494;
		t.horizontalCenter = 0;
		t.verticalCenter = 35;
		t.width = 976;
		t.elementsContent = [this._Group1_i(),this._Group4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.elementsContent = [this._Image5_i(),this._TabBar1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(16,7,99,48);
		t.source = "tab_view_bg_png";
		t.verticalCenter = 0;
		t.width = 196;
		return t;
	};
	_proto._TabBar1_i = function () {
		var t = new eui.TabBar();
		this._TabBar1 = t;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = skins.TabBarButtonSkin;
		t.top = 20;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this.stackMail_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(24,20,148,124);
		t.source = "tab_view_bg_png";
		t.width = 762;
		return t;
	};
	_proto.stackMail_i = function () {
		var t = new eui.ViewStack();
		this.stackMail = t;
		t.height = 200;
		t.selectedIndex = 0;
		t.width = 308;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "推到胡";
		t.percentWidth = 100;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "推到胡";
		t.x = 10;
		t.y = 81;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "鸡平胡";
		t.percentWidth = 100;
		t.elementsContent = [this._Label2_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "鸡平胡";
		t.x = 17;
		t.y = 79;
		return t;
	};
	return RuleLayer;
})(eui.Skin);generateEUI.paths['resource/views/hall/settings/SettingLayer.exml'] = window.skins.SettingLayer = (function (_super) {
	__extends(SettingLayer, _super);
	var SettingLayer$Skin2 = 	(function (_super) {
		__extends(SettingLayer$Skin2, _super);
		function SettingLayer$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SettingLayer$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SettingLayer$Skin2;
	})(eui.Skin);

	function SettingLayer() {
		_super.call(this);
		this.skinParts = ["bg","btn_close"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = SettingLayer.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1236;
		t.elementsContent = [this.bg_i(),this._Image3_i(),this.btn_close_i(),this._Image4_i(),this._TabStackView1_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "bg_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "bg_png";
		t.x = 1236;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "about_png";
		t.x = 585;
		t.y = 24.67;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.label = "";
		t.x = 1083.33;
		t.y = -10;
		t.skinName = SettingLayer$Skin2;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "coin_de_png";
		t.x = 34.91;
		t.y = 63.67;
		return t;
	};
	_proto._TabStackView1_i = function () {
		var t = new TabStackView();
		t.height = 500;
		t.horizontalCenter = 0;
		t.skinName = "skins.TabStackView";
		t.verticalCenter = 32;
		t.width = 900;
		return t;
	};
	return SettingLayer;
})(eui.Skin);generateEUI.paths['resource/views/hall/shop/Shop.exml'] = window.skins.Shop = (function (_super) {
	__extends(Shop, _super);
	var Shop$Skin3 = 	(function (_super) {
		__extends(Shop$Skin3, _super);
		function Shop$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = Shop$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return Shop$Skin3;
	})(eui.Skin);

	function Shop() {
		_super.call(this);
		this.skinParts = ["bg","btn_close","shopList"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.coin"],[0],this._Label1,"text")
	}
	var _proto = Shop.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1236;
		t.elementsContent = [this.bg_i(),this._Image4_i(),this.btn_close_i(),this._Scroller1_i(),this._Label1_i(),this._Label2_i(),this._Image5_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "bg_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "bg_png";
		t.x = 1236;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "tab_de_png";
		t.x = 1166;
		t.y = 66;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_title_png";
		t.x = 585;
		t.y = 24.67;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.label = "";
		t.x = 1083.33;
		t.y = -10;
		t.skinName = Shop$Skin3;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 464;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollPolicyH = "off";
		t.verticalCenter = 54;
		t.width = 849.33;
		t.x = 215;
		t.y = 197;
		t.viewport = this.shopList_i();
		return t;
	};
	_proto.shopList_i = function () {
		var t = new eui.List();
		this.shopList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 368;
		t.itemRendererSkinName = skins.ShopItem;
		t.width = 785.33;
		t.x = -85.33;
		t.y = 0;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 208;
		t.orientation = "rows";
		t.requestedColumnCount = 4;
		t.rowHeight = 223;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.gid = "6";
		t.icon = "diamond_01_png";
		t.price = "1";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.gid = "6";
		t.icon = "diamond_02_png";
		t.price = "1";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.gid = "6";
		t.icon = "diamond_03_png";
		t.price = "1";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.gid = "6";
		t.icon = "diamond_04_png";
		t.price = "1";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.gid = "6";
		t.icon = "diamond_05_png";
		t.price = "1";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.gid = "6";
		t.icon = "diamond_06_png";
		t.price = "1";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.gid = "6";
		t.icon = "diamond_07_png";
		t.price = "1";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.gid = "6";
		t.icon = "diamond_07_png";
		t.price = "1";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.gid = "6";
		t.icon = "diamond_07_png";
		t.price = "1";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.gid = "6";
		t.icon = "diamond_07_png";
		t.price = "1";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.alpha = 0.6;
		t.background = true;
		t.backgroundColor = 0x99670d;
		t.textAlign = "center";
		t.width = 152;
		t.x = 504;
		t.y = 117;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.height = 42;
		t.text = "金币：";
		t.textColor = 0x070707;
		t.x = 420;
		t.y = 117;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "coin_de_png";
		t.x = 34.91;
		t.y = 63.67;
		return t;
	};
	return Shop;
})(eui.Skin);