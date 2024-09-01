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
        <div class="flex flex-col w-1/2 gap-1 mt-4">
            <span class="text-base font-sans">{dataList.label}:</span>
            <div class={`flex items-center h-14 border-b has-[:focus]:border-black ${test ? "border-gray-300":"border-red-700"}`}>
                <input class="peer w-full h-full outline-none ml-5 text-[17px] font-noto_sans" 
                type="text" value={value} placeholder={dataList.placeholder} onChange={onChange} onKeyDown={handleEnter} onFocus={() => {setTest(true)}} ref={ref}/>
            </div>
            <span class={`text-red-700 ml-6 ${test ? "invisible":"visible"}`}>필수입력 항목입니다</span>
        </div>
    )
}

export default Input;