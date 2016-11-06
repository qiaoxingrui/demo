
var app = getApp();

Page( {
  data: {
    scrollTop: "0",
    toView: "red",
    name: "1",
    goodList: [
      { id: "red", name: "分类1" },
      { id: "1", name: "商品1", goodTypeId: "1", price: "10", favorPrice: "5", attr1: "1", attr2: "0", attr3: "0", attr4: "1", attr5: "0", sort: 1 },
      { id: "2", name: "商品2", goodTypeId: "1", price: "10", favorPrice: "5", attr1: "1", attr2: "0", attr3: "0", attr4: "1", attr5: "0", sort: 2 },
      { id: "3", name: "商品3", goodTypeId: "1", price: "10", favorPrice: "5", attr1: "1", attr2: "0", attr3: "0", attr4: "1", attr5: "0", sort: 3 },
      { id: "4", name: "商品4", goodTypeId: "1", price: "10", favorPrice: "5", attr1: "1", attr2: "0", attr3: "0", attr4: "1", attr5: "0", sort: 4 },
      { id: "blue", name: "分类2" },
      { id: "5", name: "商品5", goodTypeId: "2", price: "10", favorPrice: "5", attr1: "1", attr2: "0", attr3: "0", attr4: "1", attr5: "0", sort: 5 },
      { id: "6", name: "商品6", goodTypeId: "2", price: "10", favorPrice: "5", attr1: "1", attr2: "0", attr3: "0", attr4: "1", attr5: "0", sort: 6 },
      { id: "7", name: "商品7", goodTypeId: "2", price: "10", favorPrice: "5", attr1: "1", attr2: "0", attr3: "0", attr4: "1", attr5: "0", sort: 7 },
      { id: "8", name: "商品8", goodTypeId: "2", price: "10", favorPrice: "5", attr1: "1", attr2: "0", attr3: "0", attr4: "1", attr5: "0", sort: 8 },
      { id: "9", name: "商品9", goodTypeId: "2", price: "10", favorPrice: "5", attr1: "1", attr2: "0", attr3: "0", attr4: "1", attr5: "0", sort: 9 },
      { id: "gray", name: "分类3" },
      { id: "10", name: "商品10", goodTypeId: "3", price: "10", favorPrice: "5", attr1: "1", attr2: "0", attr3: "0", attr4: "1", attr5: "0", sort: 10 },
      { id: "11", name: "商品11", goodTypeId: "3", price: "10", favorPrice: "5", attr1: "1", attr2: "0", attr3: "0", attr4: "1", attr5: "0", sort: 11 },
      { id: "12", name: "商品12", goodTypeId: "3", price: "10", favorPrice: "5", attr1: "1", attr2: "0", attr3: "0", attr4: "1", attr5: "0", sort: 12 }
    ],
    typeList: [
      { id: "red", name: "分类1" },
      { id: "blue", name: "分类2" },
      { id: "gray", name: "分类3" },
      { id: "4", name: "分类4" },
      { id: "5", name: "分类5" },
      { id: "6", name: "分类6" },
      { id: "7", name: "分类7" },
      { id: "8", name: "分类8" },
      { id: "99", name: "分类9" },
      { id: "10", name: "分类10" },
      { id: "11", name: "分类11" },
      { id: "12", name: "分类12" },
      { id: "13", name: "分类13" },
      { id: "14", name: "分类14" },
      { id: "15", name: "分类15" },
      { id: "16", name: "分类16" }
    ]
  },
  upper: function( e ) {
    this.setData( {
      //刷新数据
    })
  },
  lower: function( e ) {
    //更新数据
    console.log( "到底了" )
  },
  tapType: function( e ) {
    this.setData( {
      toView: e.currentTarget.id
    })
  },
  tapGood: function( e ) {
    console.log( e );//详情
  },
  scrollGood:function(e){
    console.log( e );
    this.setData( {
      toView: ""
    })
  },
  onLoad() {
    //调用应用实例的方法获取全局数据
    // app.fetchApi(API_URL, (err, data) => {
    //   //更新数据
    //   this.setData({ title:data.title, movies: data.subjects, loading: false })
    // })
  }





})