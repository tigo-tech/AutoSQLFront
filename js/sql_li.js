var sqlLi = new Vue({
  el: '#sqlLi',
  data: {
    items: [
    	{ sqlTable: 'Item' },
     	{ sqlTable: 'User' },
     	{ sqlTable: 'ItemBuy'},
     	{ sqlTable: 'Region'},
     	{ sqlTable: 'UserLogin'},
     	{ sqlTable: 'ItemCreate'}
    ],
    tableName: 'Item',
    colNames:[
    ],
    checkedNames:[],
    // selected:[]
  },
  methods:{
  	tableGet(val){
  		this.colNames=[]
  		this.tableName=val
  		this.colNames.push({col:'物品ID'},{col:'物品名称'},{col:'数量'},{col:'物品类别'})

  	},
  	tableSelect(val){
  		alert(this.checkedNames)
  	}
}
})
