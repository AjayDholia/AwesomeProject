import React ,{useState} from 'react'
import {StyleSheet,Text,View,TextInput,TouchableOpacity,ScrollView} from "react-native"
const Header= ({
  value = {},
  onSelect = () =>{}
}) => {

  const onSelecteditem = (val) =>{

    setShowoption(false)
    onSelect(val)
  }
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
  },
]
    console.log("selected value", value)
    console.log("data",data)
const[showoption,setShowoption] = useState(false)
  return (

    <View>
      <View>
        <TouchableOpacity 
        style = {styles.dropdown}
        onPress={()=>setShowoption(!showoption)}
       >
        
         <Text>{!!value?value?.name:`select Country`}</Text>

        </TouchableOpacity>
      </View>
   { showoption && (<View style={{height:120}}>

    <ScrollView>
        {
          data.map((e,i)=>{
           return <TouchableOpacity key={i}
           onPress = {()=>onSelecteditem(e)}
           style={{backgroundColor:"pink",
           paddingHorizontal:6,
           borderRadius:4,
           paddingVertical:8,
           marginBottom:4}}>
            <Text>{e.name}</Text></TouchableOpacity>
          })
         
        }
        </ScrollView></View>)}
      <View >
        <TextInput
          type="text"
          placeholder="Search College"
       
         
        />
      </View>
      </View>
    
  );
}
const styles = StyleSheet.create({
  dropdown:{
    backgroundColor:"gray",
    width:"auto",
    border:"1px solid black",
    padding: 8,
    borderRadius:8,
    minHeight:42,
    alignItems:"center", 
    marginTop:"7%",
    marginBottom:8,
  }
})

export default Header;