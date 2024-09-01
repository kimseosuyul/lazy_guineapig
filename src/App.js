import './App.css';
import {BrowserView, MobileView} from 'react-device-detect'
import CustomerData from './browser/data';
import Main from './browser/main';
import Payment from './browser/payment';
import Payment_m from './mobile/m_payment';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from 'react';
import Main_m from './mobile/m_main';
import CustomerData_m from './mobile/m_data';
import QrCode from './browser/qr_code';
import Success_m from './mobile/source/m_success';
import Success from './browser/source/success';

export default function App() {
  const saveItemList = JSON.parse(sessionStorage.getItem('itemList'));
  const saveDataList = JSON.parse(sessionStorage.getItem('dataList'));

  const defaultItemList = {
    item1: {
      item: "실장할 때까지 맛있는걸 먹는 세이아 1권",
      amount: 15000,
      image: "images/1권표지.jpg",
      count: 0,
    },
    item2: {
      item: "실장할 때까지 맛있는걸 먹는 세이아 2권",
      amount: 15000,
      image: "images/2권표지수정.jpg",
      count: 0,
    },
    item3: {
      item: "실장할 때까지 맛있는걸 먹는 세이아 1,2권+책갈피 2종",
      amount: 27000,
      image: "images/책단체샷수정.jpg",
      count:0
    },
    item4: {
      item: "세이아 아크릴 키링",
      amount: 8000,
      image: "images/세이아키링.png",
      count:0
    },
    item5: {
      item: "미카 아크릴 키링",
      amount: 8000,
      image: "images/미카키링.png",
      count:0
    },
    item6: {
      item: "나기사 아크릴 키링",
      amount: 8000,
      image: "images/진짜임.png",
      count:0
    },
    item7: {
      item: "수영복 호시노 아크릴 키링",
      amount: 8000,
      image: "images/진짜.png",
      count:0
    },
    item8: {
      item: "캠핑 마키 아크릴 키링",
      amount: 8000,
      image: "images/마키키링.png",
      count:0
    },
    item9: {
      item: "이로하 아크릴 키링",
      amount: 8000,
      image: "images/이로하키링.png",
      count:0
    },
    item10: {
      item: "떡메모지 분홍",
      amount: 4000,
      image: "images/제목_없는_아트워크 (2).jpg",
      count:0
    },
    item11: {
      item: "떡메모지 보라",
      amount: 4000,
      image: "images/떡메모지.jpg",
      count:0
    },
    item12: {
      item: "티파티 책갈피",
      amount: 2000,
      image: "images/제목_없는_아트워크 2 (1).jpg",
      count:0
    },
    item13: {
      item: "세이아 책갈피",
      amount: 2000,
      image: "images/제목_없는_아트워크 1 (1).jpg",
      count:0
    },
    item14: {
      item: "호시노 스티커",
      amount: 3000,
      image: "images/스티커단체샷.jpg",
      count:0
    },
  }

  const defaultDataList = {
    name:"",
    callNumber:"",
    email:"",
    accountNumber:"",
  }

  const [itemList, setItemList] = useState(saveItemList);
  const [valueList, setValueList] = useState(saveDataList);

  const ChangeItemList = (item, value, list) => {
      setItemList({...itemList,
        [item]: {...list,
          count:value}
      });
  }

  const changeDataList = (name, value) => {
    setValueList({...valueList,
        [name]:value,
      }
    )
  };

  const dataList = {
    name:{
        name:"name",
        placeholder:"반드시 입금자명을 입력해주세요", 
        label:"이름"
    },
    callNumber:{
        name:"callNumber",
        placeholder:"전화번호를 입력해주세요",
        label:"연락처"
    },
    email:{
        name:"email",
        placeholder:"이메일 주소를 입력해주세요",
        label:"email"
    },
    accountNumber:{
        name:"accountNumber",
        placeholder:"환불용 계좌번호를 입력해주세요",
        label:"계좌번호"
    },
  };


  /* eslint-disable */
  useEffect(() => {
    if(saveItemList) {
      setItemList(saveItemList);
    } else {
      sessionStorage.setItem("itemList", defaultItemList);
      setItemList(defaultItemList);
    };

    if(saveDataList) {
      setValueList(saveDataList);
    } else {
      sessionStorage.setItem("dataList", defaultDataList);
      setValueList(defaultDataList);
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('itemList', JSON.stringify(itemList));
  }, [itemList]);

  useEffect(() => {
    sessionStorage.setItem('dataList', JSON.stringify(valueList));
  }, [valueList]);

  return (
    <>
    <BrowserView>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main itemList={itemList} ChangeList={ChangeItemList}/>}/>
            <Route path='/enter_information' element={<CustomerData itemList={itemList} dataList={dataList} valueList={valueList} changeDataList={changeDataList}/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/complete' element={<Success/>}/>
            <Route path='/QR_code/:id' element={<QrCode/>}/>
        </Routes>
      </BrowserRouter>
    </BrowserView>
    <MobileView>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main_m itemList={itemList} ChangeList={ChangeItemList}/>}/>
            <Route path='/enter_information' element={<CustomerData_m itemList={itemList} dataList={dataList} valueList={valueList} changeDataList={changeDataList}/>}/>
            <Route path='/payment' element={<Payment_m/>}/>
            <Route path='/complete' element={<Success_m/>}/>
            <Route path='/QR_code/:id' element={<QrCode/>}/>
        </Routes>
      </BrowserRouter>
    </MobileView>
    </>
  )
}