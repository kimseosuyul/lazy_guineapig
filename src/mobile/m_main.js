import { useRef, useState } from "react";
import Count from "./source/m_count";
import { useNavigate } from 'react-router-dom';
import Slide_m from "./source/m_slide";

function Main_m({itemList, ChangeList}) {
    const naviagte = useNavigate();

    const bookArr = ["images/책단체샷수정.jpg", "images/1권표지.jpg", "images/2권표지수정.jpg"];
    const bookList = ["실장할 때까지 맛있는걸 먹는 세이아", "실장할 때까지 맛있는걸 먹는 세이아 1권", "실장할 때까지 맛있는걸 먹는 세이아 2권",] 


    const keyList = [
        "아크릴 키링",
        "세이아 아크릴 키링", 
        "미카 아크릴 키링", 
        "나기사 아크릴 키링",
        "수영복 호시노 아크릴 키링",
        "캠핑 마키 아크릴 키링",
        "이로하 아크릴 키링",
    ];
    const keyArr = [
        "images/키링단체샷.jpg",
        "images/세이아키링.png", 
        "images/미카키링.png", 
        "images/진짜임.png", 
        "images/진짜.png", 
        "images/마키키링.png",
        "images/이로하키링.png",
    ]


    const memoArr = [
        "images/떡메단체샷.jpg",
        "images/제목_없는_아트워크 (2).jpg",
        "images/떡메모지.jpg",
    ]
    const memoList = [
        "떡메모지",
        "떡메모지 분홍",
        "떡메모지 보라"
    ]


    const bookmarkArr = [
        "images/책갈피단체샷.jpg",
        "images/제목_없는_아트워크 2 (1).jpg",
        "images/제목_없는_아트워크 1 (1).jpg",
    ]
    const bookarkList = [
        "책갈피",
        "티파티 책갈피",
        "세이아 책갈피",
    ]


    const stickerArr = [
        "images/스티커단체샷.jpg",
        "images/호시노 (1).png",
        "images/제목_없는_아트워크.png",
        "images/제목_없는_아트워크 9.png",
        "images/제목_없는_아트워크 10.png",
        "images/제목_없는_아트워크 12.png",
        "images/제목_없는_아트워크 4.png",
    ]
    const stickerList = [
        "호시노 스티커",
        "호시노 스티커 1",
        "호시노 스티커 2",
        "호시노 스티커 3",
        "호시노 스티커 4",
        "호시노 스티커 5",
        "호시노 스티커 6",
    ]

    const ref = useRef();

    const [alert, setAlert] = useState(false);

    const submitData = () => {
        if (Object.values(itemList).some(x => x.count !== 0)) {
            naviagte('/enter_information')
        } else {
            onAlert();
        };
    };

    const onAlert = () => {
        setAlert(true);
        document.body.style.overflowY = "hidden";
        document.body.style.position = "fixed";
    };

    const offAlert = () => {
        setAlert(false);
        document.body.style.position = "relative";
        document.body.style.overflowY = "auto";
        ref.current.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    return (
        <>
        {/* main */}
        <div class="flex flex-col w-screen items-center justify-center gap-8 overflow-hidden bg-yellow-200">
            {/* input fields */}
            <div class="flex flex-col w-[95%] h-[95%] items-center mx-8 my-4 rounded-sm bg-yellow-200 p-4">
                <div class="flex flex-col justify-center items-center w-full border-gray-400 border bg-white">
                    <Slide_m arr={bookArr} name={bookList} data={["101p", "/", "22cm × 22cm"]}></Slide_m>
                    <div class="flex justify-center items-center text-[19px] font-Freesentation mb-28 mt-2">각 권당 15,000원 & <br/>두 권 모두 구매시 27,000원 + 책갈피 2종 증정</div>

                    <Slide_m arr={bookmarkArr} name={bookarkList} data={["5cm × 15cm"]}></Slide_m>
                    <div class="flex justify-center items-center text-[19px] font-Freesentation mb-28 mt-2 border-b border-black px-[100px]">각 2,000원</div>

                    <Slide_m arr={keyArr} name={keyList} data={["약 7cm×7cm (키링마다 크기가 조금씩 상이할 수 있습니다.)"]}></Slide_m>
                    <div class="flex justify-center items-center text-[19px] font-Freesentation mb-28 mt-2">각 8,000원</div>

                    <Slide_m arr={memoArr} name={memoList} data={["8cm × 8cm", "/", "100매"]}></Slide_m>
                    <div class="flex justify-center items-center text-[19px] font-Freesentation mb-28 mt-2">각 4,000원</div>

                    <Slide_m arr={stickerArr} name={stickerList} data={["10cm × 15cm (스티커 6개가 1장입니다)"]}></Slide_m>
                    <div class="flex justify-center items-center text-[19px] font-Freesentation mb-28 mt-2">각 3,000원</div>
                </div>
        
            {/* order page */}
            {itemList &&
                <div class="flex flex-col justify-center w-full gap-y-3 my-8 bg-yellow-200" ref={ref}>
                    <Count ChangeList={ChangeList} obj={itemList.item1} item="item1"/>
                    <Count ChangeList={ChangeList} obj={itemList.item2} item="item2"/>
                    <Count ChangeList={ChangeList} obj={itemList.item3} item="item3"/>
                    <Count ChangeList={ChangeList} obj={itemList.item4} item="item4"/>
                    <Count ChangeList={ChangeList} obj={itemList.item5} item="item5"/>
                    <Count ChangeList={ChangeList} obj={itemList.item6} item="item6"/>
                    <Count ChangeList={ChangeList} obj={itemList.item7} item="item7"/>
                    <Count ChangeList={ChangeList} obj={itemList.item8} item="item8"/>
                    <Count ChangeList={ChangeList} obj={itemList.item9} item="item9"/>
                    <Count ChangeList={ChangeList} obj={itemList.item10} item="item10"/>
                    <Count ChangeList={ChangeList} obj={itemList.item11} item="item11"/>
                    <Count ChangeList={ChangeList} obj={itemList.item12} item="item12"/>
                    <Count ChangeList={ChangeList} obj={itemList.item13} item="item13"/>
                    <Count ChangeList={ChangeList} obj={itemList.item14} item="item14"/>

                    {/* submit button */}
                    <div class="flex justify-center mt-4">
                        <button class="w-1/3 min-w-64 h-[60px] bg-blue-500 text-white rounded-lg self-end shadow-md" onClick={submitData}>
                            주문하기
                        </button>
                    </div>
                </div>
            }
            </div>
        </div>

        <div class={`flex justify-center items-center fixed w-screen h-svh bg-black bg-opacity-50 top-0 ${alert ? "visible":"invisible"}`}>
            <dia class="flex flex-col w-[80%] h-[15%] bg-white p-5 rounded-lg">
                <div class="text-black">상품을 선택해 주세요.</div>
                <div class="flex flex-1 w-full justify-end items-end text-blue-500 pr-2 underline"><button onClick={offAlert}>확인</button></div>
            </dia>    
        </div>
        </>
    )
}

export default Main_m; 

// 상품 소개용 이미지, 타이틀 이미지, 주문 페이지