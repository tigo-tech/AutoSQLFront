var sqlLi = new Vue({
  el: '#sql',
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
    // checkedNames:[],
    // selected:0,
    pictures:1,
    aggNum:[]
  },
  methods:{
  	tableGet(val){
  		this.colNames=[]
  		this.tableName=val
  		this.colNames.push({col:'物品ID'},{col:'物品名称'},{col:'物品类别'},{col:'数量'})

  	},
  	tableSelect(val){
  		alert(this.aggNum)
  	},
  	getId(col){
  		return "col_"+col
  	},
  	changePic(val){
  		this.pictures = val.target.value
  	},
  	changeAgg(val,item){
  		if (val.target.value != null) {
  			this.$set(this.aggNum,this.aggNum.length,{item:val.target.value})
  		}
  	}
}
})
