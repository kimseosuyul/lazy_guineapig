function Inpo({name, value}) {
    return (
        <>
        <div class="flex flex-row items-center max-h-[70px] h-[50%] mr-6 border-b">
            <span class="text-base ml-4 w-[85px] font-noto_sans">{name}</span> 
            <div class="flex items-center border border-gray-300 max-h-[40px] flex-1 p-4 bg-gray-100">
                <input class="text-lg text-gray-600 outline-none max-h-[35px] flex-1 bg-gray-100" 
                value={value} disabled={true}/>
            </div>
        </div>
        </>
    )
}

export default Inpo;