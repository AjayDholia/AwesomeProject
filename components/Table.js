import React from 'react'
import {Text,View,FlatList} from 'react-native'
const data = [{
    name:"ajay",
    id:1
  },
  {
    name:"sandeep",
    id:2
  },
  {
    name:"akhil",
    id:3
  },
  {
    name:"digvijay",
    id:4
  }
]
function Table() {
    
    const item = ({item}) =>{
        return(
            <View style={{flexDirection:"row"}}>
                <View style={{width:100, backgroundColor:"pink" }}>
                    <Text>{item.name}</Text>
                </View>
                <View style={{width:100, backgroundColor:"pink" }}>
                    <Text>{item.id}</Text>
                </View>
                
            </View>
        )
    }

  return (
   <View style={{flex:1, justifyContent:"center",alignContent:"center",marginTop:"10%"}}>
    <FlatList
    data={data}
    renderItem={item}
    />
   </View>
  )
}

export default Table