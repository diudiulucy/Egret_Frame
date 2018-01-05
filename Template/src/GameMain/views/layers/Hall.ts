class Hall extends eui.Component {
	private player: ScrollerList;
	private virtuallayout:eui.ToggleButton;
	private virtual:eui.Label;
	private btn_new:eui.Button;
	private arrCol:eui.ArrayCollection;
	
	public constructor() {
		super();
		this.skinName = "Skin.Hall";
	}

	protected childrenCreated() {
		super.childrenCreated();

		let itemArray = [
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" },
			// { name: "lucy", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" }
		];
		interface User
		{
			name:number;
			price:number
		}
		for(let i = 0; i < 100;i++){
			let item = <User>{};
			item.name = i;
			item.price = 100 + i;
			itemArray.push(item);
		}

		this.player.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onItemTap, this);
		this.virtuallayout.addEventListener(egret.Event.CHANGE,this._onChange,this);
		this.btn_new.addEventListener(egret.TouchEvent.TOUCH_TAP,this._onBtnNewClick,this);
		this.virtual.text = this.player.useVirtualLayout == true ? "开启":"关闭";

		let layout = this.player.getVerticalLayout();
		layout.horizontalAlign = eui.JustifyAlign.JUSTIFY;
		this.player.layout = layout;
		// this.player.itemRendererSkinName = "testRender";
		this.arrCol = new eui.ArrayCollection(itemArray);
		this.player.dataProvider = this.arrCol;
	}

	private _onChange(e:egret.Event){
		this.virtuallayout.selected ?  this.player.useVirtualLayout = true :  this.player.useVirtualLayout = false;
		this.virtuallayout.selected ?  this.virtual.text = "开启" :  this.virtual.text = "关闭";
		console.log(this.virtual.text)
	}

	private _onItemTap(event: eui.ItemTapEvent){
		console.log(event.itemIndex);
	}

	private _onBtnNewClick(){
		// this.player.dataProvider = 
		// this.arrCol.source = [{ name: "daye", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" }];
		// this.itemArray.unshift({ name: "daye", price: "$2000" });
		// this.arrCol.addItemAt({name: "daye", price: "$2000"},0);
		// this.arrCol.replaceItemAt({name: "daye", price: "$2000"},10);
		// this.arrCol.removeItemAt(2);
	
		console.log(this.arrCol.getItemAt(0));
		let item = this.arrCol.getItemAt(0);
		console.log(this.arrCol.getItemIndex(item));
		// this.arrCol.replaceAll([{ name: "daye", price: "$2000" }, { name: "hello", price: "$3000" }, { name: "hello", price: "$3000" }]);
		
	}
}