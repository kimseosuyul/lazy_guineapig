import { useState } from "react";

function Slide({arr, name, data}) {
    const [arrNum, setArrNum] = useState(0);

    const RightOnClick = () => {
        if (arrNum + 1 < arr.length) {
            setArrNum(arrNum+1);
        } else {
            setArrNum(0);
        }
    }

    const LeftOnClick = () => {
        if (arrNum - 1 < 0) {
            setArrNum(arr.length-1);
        } else {
            setArrNum(arrNum-1);
        }
    }

    return(
        <div class="flex flex-col items-center w-full border-t border-black">
            <div class="flex flex-row items-center justify-center w-full gap-4 pt-8">
                <img src="images/왼쪽.png" class="h-[30px]" onClick={LeftOnClick}></img>
                <div class="flex justify-center items-center w-full">
                    <img src={arr[arrNum]} alt="" class="shadow-md border h-[300px] max-mini:h-[200px] max-big:h-[500px] border-gray-400"></img>
                </div>
                <img src="images/오른쪽.png" class="h-[30px]" onClick={RightOnClick}></img>
            </div>
            <div class="font-pop text-[17px] border-b border-gray-400 mt-2 px-6 py-2">{name[arrNum]}</div>
            <div class="flex flex-row mt-2 gap-2 p-3 flex-wrap">
                {arr.map((data, index) => (
                    <div key={index} class={`flex justify-center items-center size-[80px] border shadow-sm border-gray-300 ${arrNum==index ? "shadow-md shadow-black":null}`} onClick={() => {setArrNum(index)}}>
                        <img src={data} alt="" class="h-[60px]"></img>
                    </div>
                ))}
            </div>
            <div class="flex flex-row justify-center text-[15px] border-t border-gray-400 font-Freesentation gap-4 pt-2 pb-3 mt-2 px-8">
                {data.map((data) => (
                    <span>{data}</span>                   
                ))}
            </div>
        </div>
    )
}

export default Slide;