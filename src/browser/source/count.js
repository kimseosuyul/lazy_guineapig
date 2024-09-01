import { React, useEffect, useRef, useState } from "react"

function Count({ChangeList, obj, item}) {
    const [itemCount, setItemCount] = useState();
    const countInput = useRef();

    console.log(obj.option)

    function increaseNumber() {
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
        <div class="flex flex-row border h-[80px] rounded-md gap-6 bg-white border-gray-400">
            <div class="flex justify-center items-center w-[100px] h-full"><img src={obj.image} alt="" class="h-[70px] border border-gray-400 "></img></div>
            <div class="self-center text-nowrap max-pc:self-start max-pc:pt-2 text-[16px] font-noto_sans">{obj.item}</div>
            <div class="flex flex-1 relative h-full items-center max-pc:mt-4">
                <div class="font-noto_sans ml-8 text-xl">{obj.amount.toLocaleString('ko-KR')}원</div>
                <div class="grid grid-cols-5 rounded-md absolute right-0 self-center w-44 h-12 mr-8 max-pc:mr-8">
                    <button class="flex justify-center items-center border bg-gray-100" onClick={decreaseNumber}><span class="material-icons">remove</span></button>
                    <div class="flex justify-center col-span-3 items-center border-y border">
                        <input value={itemCount} onChange={inputOnchange} ref={countInput} onKeyDown={handleEnter} onFocus={onSelect} onBlur={onBlur} 
                        class="text-center outline-none w-full"></input>
                    </div>
                    <button class="flex justify-center items-center border bg-gray-100 " onClick={increaseNumber}><span className="material-icons">add</span></button>  
                </div>              
            </div>
        </div>
        </>
    );
}

export default Count;