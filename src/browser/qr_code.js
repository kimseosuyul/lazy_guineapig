import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function QrCode() {
    const [params] = useState(useParams().id)
    const [response, setResponse] = useState();

    const onClick = () => {
        axios.post("http://127.0.0.1:8000/master_page/", {id:response.id})
        .then((response) => {
            alert("확인되었습니다");
        })
    }

    console.log(params)
    /* eslint-disable */
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/confirmation/", {params:{id:params}})
        .then((response) => {
            setResponse(response.data);
        })
    }, [])

    return(
        <>
        <div class="flex justify-center bg-yellow-200 w-screen h-full">
            <div class="flex flex-col w-[1000px] h-9/10 items-center gap-8 my-12 bg-white">
                <div class="flex flex-row w-full">
                    <div class="m-8 w-full border">
                        {response !== undefined && 
                            <div class="flex flex-col gap-4 pt-2 ml-2">
                                <div>입금자명: {response.name}</div>
                                <div>연락처: {response.call_number}</div>
                                <div>이메일: {response.email}</div>
                                <div>계좌번호: {response.account_number}</div>
                                <div>상품 구매 목록: 
                                    {Object.values(response.order_list).filter((x) => x.count > 0).map((x, index) => (
                                        <div key={index} class="flex flex-row items-center border-b max-h-32 mx-4 py-2 odd:bg-gray-100 even:bg-white">
                                            <div class="flex max-pc:flex-col flex-row flex-1 gap-6">
                                                <div class="self-center flex-1 w-4/5 ml-4 text-nowrap max-pc:self-start max-pc:pt-2 text-[14px] font-noto_sans">{x.item}</div>
                                                <div class="flex relative h-full items-center mt-4 ">
                                                <div class="absolute right-0 self-center h-8 mr-8 max-pc:mb-8 font-bold text-nowrap">{x.count}개</div>
                                            </div>                
                                        </div>
                                        </div>))}
                                </div>
                                {response.payment ? <div class="flex flex-col flex-1 gap-4 w-full h-[60px] justify-center items-end mb-6">
                                    <button class="max-w-[300px] max-h-[60px] w-1/2 h-[95%] bg-blue-500 text-white rounded-lg self-center shadow-md text-base" onClick={onClick}>
                                        상품 수령 확인
                                    </button>
                                    <div class="self-center">*상품 수령 전까지는 이 버튼을 절대 누르시면 안됩니다*</div>
                                </div>:<div>이미 상품을 수령하였습니다.</div>}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default QrCode;