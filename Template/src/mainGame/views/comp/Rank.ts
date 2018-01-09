/**
 * 菜单栏
 * @author lucywang
 * @date 2017/10/19
 */
class Rank extends eui.Component {
	private rankList: ScrollerList;

	public constructor() {
		super();
	}

	protected childrenCreated() {
		super.childrenCreated();

		interface User {
			No: number;
			name: string;
		}

		let itemArray = [];

		for (let i = 0; i < 100; i++) {
			let item = <User>{};
			item.No = i;
			item.name = "lucy" + i;
			itemArray.push(item);
		}

		let layout = new eui.VerticalLayout();
		this.rankList.layout = layout;

		let arrcol = new eui.ArrayCollection(itemArray);
		this.rankList.dataProvider = arrcol;
	}
}