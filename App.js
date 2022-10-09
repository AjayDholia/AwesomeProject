import React,{useState,useEffect} from "react";
import axios from 'axios'
import Header from "./components/Header"
import Table from './components/Table'
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from "react-native"
export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [seachData, setSearchData] = useState("");
  const [countryList, setCountryList] = useState([]);
  const onSelect = (item) =>{
    setSelectedItem(item)
  }
  return (
    <><Header
    value={selectedItem}
    onSelect={onSelect}
    />
    <Table/>
    </>
  )
}
  


