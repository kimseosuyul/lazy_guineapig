import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Payment() {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.state === undefined) {
        return <Navigate to = "/"/>;
    };
    
    return (
    <>
        <div class="flex justify-center bg-yellow-200 w-screen h-screen">
            <div class="flex flex-col w-[1000px] h-9/10 items-center my-12 p-8  bg-white">
                <div class="w-full h-full border border-gray-400">
                    <div class="flex flex-col justify-center items-center font-noto_sans text-3xl">
                        <p class="mt-36 text-4xl">총 결제금액은 <span class="font-semibold">{location.state.toLocaleString('ko-KR')}</span>원 입니다</p>
                        <p class="mt-28 mb-12">아래의 계좌로 입금해주세요</p>
                        <img src="images/AQR.png" alt="" class="size-48"></img>
                        <p class="mt-4">하나은행</p>
                        <CopyToClipboard
                            text="70491064470407"
                            onCopy={() => alert("계좌번호가 복사되었습니다.")}
                        >
                            <div class="flex items-center font-bold"><button class="text-3xl mt-2">704-910644-70407</button><span className="material-icons text-center">content_copy</span></div>
                        </CopyToClipboard>
                    </div>
                    <div class="h-[30%]"></div>
                    <div class="flex flex-col justify-end items-center mb-6 pt-6">   
                        <button class="w-[230px] h-[55px] bg-blue-500 text-white rounded-lg shadow-md" onClick={() => {navigate('/complete')}}>확인</button>             
                    </div>
                </div>
            </div>
        </div>       
    </>
    );
}

export default Payment;