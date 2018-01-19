# scrollerList的使用
![alt text](doc/images/1.png)

可以通过直接拖拽的方式来创建scrollerList，将其拖动到exml文件中
然后将其

![alt text](doc/images/2.png)

itemRenderSkinName赋值，绑定具体的item的皮肤,
也可用代码来对其进行皮肤的绑定，item的皮肤如下：

![alt text](doc/images/3.png)

相应的exml源码如下：

![alt text](doc/images/4.png)

注意之前的itemRenderSkinName和此class要对应，

![alt text](doc/images/5.png)

这里的data.name利用了其数据的双向绑定的原理

![alt text](doc/images/6.png)

可以直接对其赋值，不需要通过额外的变量来控制

具体item的点击事件如下

![alt text](doc/images/10.png)

可以对其布局来赋值产生不同的布局方式

![alt text](doc/images/11.png)

效果图：垂直布局

![alt text](doc/images/8.png)

效果图：水平布局:

![alt text](doc/images/7.png)

单纯的list列表可以通过编辑器来进行数据的设定

![alt text](doc/images/9.png)

具体的属性和itemRender的属性对应

# PopUpManager的使用
先创建自己的layer

![alt text](doc/images/12.png)

在viewconstant注册

![alt text](doc/images/14.png)

打开面板

![alt text](doc/images/13.png)

# tabView的使用

和scrollerList一样拖拽到exml文件里
然后指定皮肤为以下的

![alt text](doc/images/15.png)

以TabStackView为模板来建立你的tabView文件
注意tab的dataProvider属性定义为viewstack

![alt text](doc/images/16.png)
每添加一个组，将其name赋值为tab上想要显示的内容

egret编辑器直接看效果图
![alt text](doc/images/17.png)



