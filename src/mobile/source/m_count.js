import { React, useEffect, useRef, useState } from "react"

function Count({ChangeList, obj, item}) {
    const [itemCount, setItemCount] = useState();
    const countInput = useRef();

    function increaseNumber() {
        console.log()
        setItemCount(Number(itemCount) + 1);
    };

    function onSelect(e) { 
        e.target.select();
    };

    function decreaseNumber() {
        if (itemCount !== 0) {
            setItemCount(itemCount - 1);            
        }
    };

    function inputOnchange(e) {
        let count = Number(e.target.value);

        if (isNaN(count)) {
        } else {
            setItemCount(count);
        }
    };

    function onBlur() {
        if (itemCount === "") {
            setItemCount(0);
        }
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
          countInput.current.blur();
        }
      };

    /* eslint-disable */
    useEffect(() => {
        setItemCount(obj.count);
    }, [])

    /* eslint-disable */
    useEffect(() => {
        ChangeList(item, itemCount, obj);
    }, [itemCount]);

    return (
        <>
        <div class="flex flex-row border border-gray-400 h-[90px] rounded-md bg-white">
            <div class="flex justify-center items-center w-1/5 h-full"><img src={obj.image} alt="" class="h-[80px] border border-gray-400 ml-2"></img></div>
            <div class="flex flex-col  flex-1">
                <div class=" flex-1 w-full text-nowrap ml-2 self-start pt-2 text-[15px] font-Freesentation whitespace-pre-wrap;">{obj.item}</div>
                <div class="flex relative h-full items-center mt-4">
                    <div class="mb-4 ml-2 font-noto_sans">{obj.amount.toLocaleString('ko-KR')}원</div>
                    <div class="grid grid-cols-5 rounded-md absolute right-0 self-center w-32 h-8 mr-4 mb-4">
                        <button class="flex justify-center items-center border border-gray-400" onClick={decreaseNumber}><span class="material-icons">remove</span></button>
                        <div class="flex justify-center col-span-3 items-center border-y text-sm border-gray-400">
                            <input value={itemCount} onChange={inputOnchange} ref={countInput} onKeyDown={handleEnter} onFocus={onSelect} onBlur={onBlur} 
                            class="text-center outline-none w-full"></input>
                        </div>
                        <button class="flex justify-center items-center border border-gray-400" onClick={increaseNumber}><span className="material-icons">add</span></button>  
                    </div>
                </div>                
            </div>
        </div>

        </>
    );
}

export default Count;