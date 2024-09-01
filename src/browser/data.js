import { useState, useEffect } from "react";
import Input from "./source/input";
import Inpo from "./source/inpo";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

function CustomerData({itemList, dataList, valueList, changeDataList}) {
    const navigate = useNavigate();
    const [check, setCheck] = useState(0);

    const [itemPage, setItemPage] = useState();
    const [modal, setModal] = useState(false);

    const {name, callNumber, email, accountNumber} = valueList;

    if (valueList === null) {
        alert("상품을 선택해 주세요.");
        return <Navigate to = "/"/>;
    }

    if (Object.values(itemList).filter((x) => x.count > 0).length <= 0) {
        return <Navigate to = "/"/>;
    } 

    const onModal = () => {
        let obj = Object.values(valueList).every(x => x !== '')

        if (obj === true) {
            setModal(true);
        } else {
            setCheck(check + 1);
        };
    }

    const initList = () => {
        return(        
            Object.values(itemList).filter((x) => x.count > 0)
        );
    }

    /* eslint-disable */
    useEffect(() => {
        setItemPage(initList)
    }, [itemList])

    const submitData = () => {
        axios.post("https://gomdwae.pythonanywhere.com/add_data/", {
            item: itemList,
            customer: valueList,
        })
        .then((response) => {
            navigate('/payment', {
                state: response.data.amount,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <>
        <div class="flex justify-center bg-yellow-200 w-screen h-screen">
            {/* input fields */}
            <div class="flex flex-col w-[1000px] items-center my-12 rounded-sm bg-white border border-gray-400">
                {/* image */}
                <div class="flex flex-col items-center size-80 mt-12 mb-24">
                    <img src="images/정보입력페이지.jpg" alt=""></img>
                    <div class="font-pop text-[30px]">개인정보 입력</div>
                </div>
                <Input dataList={dataList.name} value={name} check={check} changeDataList={changeDataList}/>
                <Input dataList={dataList.callNumber} value={callNumber} check={check} changeDataList={changeDataList}/>
                <Input dataList={dataList.email} value={email} check={check} changeDataList={changeDataList}/>
                <Input dataList={dataList.accountNumber} value={accountNumber} check={check} changeDataList={changeDataList}/>

                <div class="flex flex-1 justify-center items-end my-12">
                    <button class="w-[300px] h-[60px] bg-blue-500 text-white rounded-lg self-end shadow-md text-xl" onClick={onModal}>
                        결제하기
                    </button>
                </div>

            </div>

            {/* check modal */}
            <div class={`w-full h-full fixed bg-black bg-opacity-70 ${modal ? 'visible':'invisible'}`} onClick={() => {setModal(false);}}></div>
            <div class="flex w-full h-full justify-center items-center fixed invisible">
                <div class={`flex flex-col w-[600px] h-[750px] bg-white border rounded-md z-10 ${modal ? 'visible':'invisible'}`}>
                    <div class="flex justify-center items-center font-bold text-3xl pt-8 font-noto_sans">최종 정보 확인</div>
                    <div class="flex flex-col mt-4 ml-4 text-2xl">
                        <Inpo name="입금자명" value={name}/>
                        <Inpo name="연락처" value={callNumber}/>
                        <Inpo name="email" value={email}/>
                        <Inpo name="계좌번호" value={accountNumber}/>
                    </div>
                    <div class="flex flex-col h-[320px] overflow-auto bg-white mx-8">
                        <table class="table-auto my-6">
                            <thead>
                                <tr>
                                    <th class="w-24"></th>
                                    <th class="pr-[80px]">구입 품목</th>
                                    <th class="w-[100px]">수량</th>
                                </tr>
                            </thead>
                            <tbody>
                                {itemPage && itemPage.map((x, index) => (
                                    <tr key={index} class="h-20 font-Freesentations odd:bg-white even:bg-gray-100 border-b border-gray-300"> 
                                        <td><div class="flex justify-center items-center h-16 w-16 border ml-8"><img src={x.image} alt="" class="h-16 border border-gray-400"></img></div></td>
                                        <td>
                                            <div class="flex flex-1 flex-row items-center h-24">
                                                <div class="flex flex-1 ml-8">{x.item}</div>
                                            </div>
                                        </td>
                                        <td class="flex justify-center items-center h-24">{x.count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> 
                    </div>
                    <div class="flex flex-col flex-1 justify-end items-center mb-6 pt-6 border-t">   
                        <button class="w-[230px] h-[55px] bg-blue-500 text-white rounded-lg shadow-md" onClick={submitData}>확인</button>             
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CustomerData;
