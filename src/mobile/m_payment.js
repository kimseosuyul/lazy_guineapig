import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

function Payment_m() {
    const location = useLocation();
    const [alert, setAlert] = useState(false);
    const naviagte = useNavigate();

    if (location.state === null) {
        return <Navigate to = "/"/>;
    }
    
    return (
    <>
        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
        <div class="flex flex-col w-screen h-svh items-center justify-center gap-8 overflow-hidden bg-yellow-200">
            <div class="flex flex-col w-[95%] h-[95%] items-center mx-8 rounded-sm bg-white border border-gray-400">
                <div class="w-full h-full">
                    <div class="flex flex-col h-[90%] justify-center items-center font-Pretendard text-3xl">
                        <p class="text-3xl">총 결제금액은</p>
                        <p><span class="font-semibold">{location.state.toLocaleString('ko-KR')}</span>원 입니다</p>
                        <p class="mt-10 mb-4 text-base">아래의 계좌로 입금해주세요</p>
                        <img src="images/AQR.png" alt="" class="size-36"></img>
                        <p class="mt-4">하나은행</p>
                        <CopyToClipboard
                            text="70491064470407"
                            onCopy={() => setAlert(true)}
                        >
                            <div class="flex items-center font-bold"><button class="text-3xl mt-2">704-910644-70407</button><span className="material-icons text-center">content_copy</span></div>
                        </CopyToClipboard>
                    </div>
                </div>
                <div class="flex flex-col h-[10%] items-center">  
                    <button class="w-1/2 max-w-[230px] h-[7%] max-h-[70px] fixed bottom-14 bg-blue-500 text-white rounded-lg shadow-md" onClick={() => {naviagte("/complete")}}>결제완료!</button>             
                </div>
            </div>
        </div>       
        <div class={`flex justify-center items-center fixed w-screen h-svh bg-black bg-opacity-50 top-0 ${alert ? "visible":"invisible"}`}>
            <dia class="flex flex-col w-[80%] h-[15%] bg-white p-5
             rounded-lg">
                <div class="text-black">계좌번호가 복사되었습니다.</div>
                <div class="flex flex-1 w-full justify-end items-end text-blue-500 pr-2 underline"><button onClick={() => {setAlert(false)}}>확인</button></div>
            </dia>    
        </div>
    </>
    );
}

export default Payment_m;