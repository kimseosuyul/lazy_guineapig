import { useState, useEffect } from "react";
import Input from "./source/m_input";
import Inpo from "./source/m_inpo";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CustomerData_m({itemList, dataList, valueList, changeDataList}) {
    const navigate = useNavigate();
    const [check, setCheck] = useState(0);

    const [itemPage, setItemPage] = useState();
    const [modal, setModal] = useState(false);

    const onClick = () => {
        navigate("/")
    }

    if (Object.values(itemList).every(x => x.count === 0)) {
        return(
            <div class={`flex justify-center items-center fixed w-screen h-svh bg-black bg-opacity-50 top-0`}>
                <div class="flex flex-col w-[80%] h-[15%] bg-white p-5 rounded-lg">
                    <div class="text-black">아직 상품이 선택되지 않았습니다.</div>
                    <div class="flex flex-1 w-full justify-end items-end text-blue-500 pr-2 underline"><button onClick={onClick}>확인</button></div>
                </div>    
            </div>
        )
    } else {
        const {name, callNumber, email, accountNumber} = valueList;

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

        useEffect(() => {
            window.scrollTo({top:0})
        }, [])

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
            <div class="flex flex-col w-screen h-svh items-center justify-center gap-8 overflow-hidden bg-yellow-200">
                {/* input fields */}
                <div class="flex flex-col w-[95%] h-[95%] items-center mx-8 rounded-sm bg-white border border-gray-400">
                    {/* image */}
                    <div class="flex flex-col items-center size-32 h-[80%] mt-2">
                        <img src="images/정보입력페이지.jpg" alt="" class=""/>
                        <div class="font-pop text-[20px]">개인정보 입력</div>
                    </div>
                    <Input dataList={dataList.name} value={name} check={check} changeDataList={changeDataList}/>
                    <Input dataList={dataList.callNumber} value={callNumber} check={check} changeDataList={changeDataList}/>
                    <Input dataList={dataList.email} value={email} check={check} changeDataList={changeDataList}/>
                    <Input dataList={dataList.accountNumber} value={accountNumber} check={check} changeDataList={changeDataList}/> 
                    
                    <div class="flex flex-1 w-full h-[50px] justify-center items-end mb-8">
                        <button class="max-w-[300px] max-h-[60px] w-1/2 h-[100%] bg-blue-500 text-white rounded-lg self-center text-base mb-4" onClick={onModal}>
                            결제하기
                        </button>
                    </div>

            </div>

            {/* check modal */}
            <div class={`w-full h-full fixed bg-black bg-opacity-70 ${modal ? 'visible':'invisible'}`} onClick={() => {setModal(false);}}></div>
            <div class="flex flex-col w-full h-[90%] max-w-[800px] bottom-0 max-2xl:bottom-[0] justify-center items-center fixed invisible">
                <div class={`flex flex-col w-screen h-full bg-white border rounded-md z-10 ${modal ? 'visible':'invisible'}`}>
                    <div class="flex justify-center items-center font-bold text-[24px] pt-4 font-noto_sans">최종 정보 확인</div>
                    <div class="flex flex-col mt-2 ml-4 h-[40%] text-2xl place-content-around">
                        <Inpo name="입금자명" value={name}/>
                        <Inpo name="연락처" value={callNumber}/>
                        <Inpo name="email" value={email}/>
                        <Inpo name="계좌번호" value={accountNumber}/>
                    </div>
                    <div class="flex flex-col flex-1 h-1/3 overflow-auto bg-white">
                        <div class="self-center mt-2 text-lg">구입 품목</div>
                        {itemPage && itemPage.map((x, index) => (
                            <div key={index} class="flex flex-row items-center border-b max-h-32 mx-4 py-2 odd:bg-gray-100 even:bg-white">
                                <div class="flex justify-center items-center size-16 border ml-4"><img src={x.image} alt="" class="border border-gray-400 h-16"></img></div>
                                <div class="flex max-pc:flex-col flex-row flex-1 gap-6">
                                    <div class="self-center flex-1 w-4/5 ml-4 text-nowrap max-pc:self-start max-pc:pt-2 text-[14px] font-Freesentation">{x.item}</div>
                                    <div class="flex relative h-full items-center mt-4 ">
                                        <div class="absolute right-0 self-center h-8 mr-8 max-pc:mb-8 font-bold text-nowrap">{x.count}개</div>
                                    </div>                
                                </div>
                            </div>
                        ))}
                    </div>    
                    <div class="flex flex-col h-[15%] items-center justify-center border">  
                        <button class="w-1/2 max-w-[230px] h-[50%] min-h-[40px] max-h-[70px] bottom-5 bg-blue-500 text-white rounded-lg shadow-md" onClick={submitData}>확인</button>      
                    </div>
                </div>
            </div>
            </div>
        </>
    )}
    
    };

export default CustomerData_m;
