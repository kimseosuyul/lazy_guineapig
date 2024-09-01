import { useRef, useState, useEffect } from "react";

function Input({dataList, value, check, changeDataList}) {
    const ref = useRef()
    const [test, setTest] = useState(true);

    const onChange = (e) => {
        changeDataList(dataList.name, e.target.value);
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
          ref.current.blur();
        }
      };

    /* eslint-disable */
    useEffect(() => {
        if (check > 0) {
            if (value === "") {
                setTest(false);
            }            
        }
    }, [check])

    return (
        <div class="flex flex-col w-4/5 h-[40%] max-h-[150px]">
            <span class="text-sm ">{dataList.label}:</span>
            <div class={`flex items-center h-[50%] max-h-14 min-h-[30px] border-b has-[:focus]:border-black ${test ? "border-gray-300":"border-red-700"}`}>
                <input class="peer w-full h-full outline-none ml-5 text-[17px] font-Freesentation" 
                type="text" value={value} placeholder={dataList.placeholder} onChange={onChange} onKeyDown={handleEnter} onFocus={() => {setTest(true)}} ref={ref}/>
            </div>
            <span class={`text-red-700 ml-5 ${test ? "invisible":"visible"}`}>필수입력 항목입니다</span>
        </div>
    )
}

export default Input;