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
})(eui.Skin);generateEUI.paths['resource/eui_skins/TabBarButtonSkin.exml'] = window.TabBarButtonSkin = (function (_super) {
	__extends(TabBarButtonSkin, _super);
	function TabBarButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 77;
		this.width = 229;
		this.elementsContent = [this._Image1_i(),this._Label1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.8)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this._Label1,"text")
	}
	var _proto = TabBarButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.scale9Grid = new egret.Rectangle(28,9,173,59);
		t.source = "tab_png";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return TabBarButtonSkin;
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
})(eui.Skin);generateEUI.paths['resource/views/hall/Rank.exml'] = window.skins.Rank = (function (_super) {
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
		t.height = 259;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = skins.RankItem;
		t.width = 252;
		t.y = 93;
		return t;
	};
	return Rank;
})(eui.Skin);generateEUI.paths['resource/views/hall/HallLayer.exml'] = window.Skin.Hall = (function (_super) {
	__extends(Hall, _super);
	function Hall() {
		_super.call(this);
		this.skinParts = ["player","virtuallayout","virtual","btn_new","gameEntryList","menu_list","bottom"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this.player_i(),this._List1_i(),this._DataGroup1_i(),this.virtuallayout_i(),this.virtual_i(),this.btn_new_i(),this._Scroller1_i(),this.bottom_i(),this._Rank1_i()];
	}
	var _proto = Hall.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "hall_bg_jpg";
		t.percentWidth = 100;
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
	_proto._List1_i = function () {
		var t = new eui.List();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 296.97;
		t.itemRendererSkinName = testRender;
		t.visible = false;
		t.width = 506.06;
		t.x = 667;
		t.y = 339;
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.name = "lucy";
		t.price = "3000";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.name = "mx";
		t.price = "6000";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.name = "null";
		t.price = "null";
		return t;
	};
	_proto._DataGroup1_i = function () {
		var t = new eui.DataGroup();
		t.height = 200;
		t.itemRendererSkinName = testRender;
		t.visible = false;
		t.width = 200;
		t.x = 1173;
		t.y = 139;
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object4_i(),this._Object5_i(),this._Object6_i()];
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.name = "null";
		t.price = "null";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.name = "null";
		t.price = "null";
		return t;
	};
	_proto._Object6_i = function () {
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
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 370;
		t.horizontalCenter = 191;
		t.verticalCenter = 0;
		t.width = 660;
		t.viewport = this.gameEntryList_i();
		return t;
	};
	_proto.gameEntryList_i = function () {
		var t = new eui.List();
		this.gameEntryList = t;
		t.itemRendererSkinName = skins.HallPlayItem;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection3_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._ArrayCollection3_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i()];
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.antes = "底注：200";
		t.condition = "两批马 有癞子 2000金币";
		t.icon = "newBie_png";
		t.icon_selected = "newBie_selected_png";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.antes = "底注：800";
		t.condition = "两批马 有癞子 2000金币";
		t.icon = "plebs_png";
		t.icon_selected = "plebs_selected_png";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.antes = "底注：1000";
		t.condition = "两批马 有癞子 2000金币";
		t.icon = "rich_png";
		t.icon_selected = "rich_selected_png";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.antes = "底注：2000";
		t.condition = "两批马 有癞子 2000金币";
		t.icon = "betGod_png";
		t.icon_selected = "betGod_selected_png";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.antes = "底注：2000";
		t.condition = "两批马 有癞子 2000金币";
		t.icon = "betGod_png";
		t.icon_selected = "betGod_selected_png";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.antes = "底注：2000";
		t.condition = "两批马 有癞子 2000金币";
		t.icon = "betGod_png";
		t.icon_selected = "betGod_selected_png";
		return t;
	};
	_proto.bottom_i = function () {
		var t = new eui.Group();
		this.bottom = t;
		t.bottom = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image2_i(),this.menu_list_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
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
		t.dataProvider = this._ArrayCollection4_i();
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
	_proto._ArrayCollection4_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object13_i(),this._Object14_i(),this._Object15_i(),this._Object16_i(),this._Object17_i(),this._Object18_i(),this._Object19_i()];
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.icon = "play_png";
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		t.icon = "feedback_png";
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		t.icon = "settings_png";
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		t.icon = "share_png";
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		t.icon = "shop_png";
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		t.icon = "mail_png";
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		t.icon = "benifit_png";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "left_png";
		return t;
	};
	_proto._Rank1_i = function () {
		var t = new Rank();
		t.height = 416;
		t.left = 40;
		t.skinName = "skins.Rank";
		t.verticalCenter = 0;
		t.width = 404;
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
		this.width = 252;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._BitmapLabel1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text")
	}
	var _proto = RankItem.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xeda310;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
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
})(eui.Skin);generateEUI.paths['resource/views/hall/shop/Shop.exml'] = window.skins.Shop = (function (_super) {
	__extends(Shop, _super);
	var Shop$Skin1 = 	(function (_super) {
		__extends(Shop$Skin1, _super);
		function Shop$Skin1() {
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
		var _proto = Shop$Skin1.prototype;

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
		return Shop$Skin1;
	})(eui.Skin);

	function Shop() {
		_super.call(this);
		this.skinParts = ["close"];
		
		this.height = 750;
		this.width = 1280;
		this.elementsContent = [this._Group1_i(),this._ScrollerList1_i(),this._Scroller1_i()];
	}
	var _proto = Shop.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 22;
		t.source = "bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.right = 22;
		t.scaleX = -1;
		t.source = "bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shop_title_png";
		t.x = 585;
		t.y = 50.67;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Button();
		this.close = t;
		t.label = "";
		t.x = 1121.33;
		t.y = 27;
		t.skinName = Shop$Skin1;
		return t;
	};
	_proto._ScrollerList1_i = function () {
		var t = new ScrollerList();
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 464;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.verticalCenter = 54;
		t.width = 849.33;
		t.viewport = this._List1_i();
		return t;
	};
	_proto._List1_i = function () {
		var t = new eui.List();
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
		t.icon = "diamond_01_png";
		t.price = "$2";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.icon = "diamond_02_png";
		t.price = "$4";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.icon = "diamond_03_png";
		t.price = "$6";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.icon = "diamond_04_png";
		t.price = "$8";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.icon = "diamond_05_png";
		t.price = "$10";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.icon = "diamond_06_png";
		t.price = "$18";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.icon = "diamond_07_png";
		t.price = "$20";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.icon = "diamond_07_png";
		t.price = "null";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.icon = "diamond_07_png";
		t.price = "null";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.icon = "diamond_07_png";
		t.price = "null";
		return t;
	};
	return Shop;
})(eui.Skin);