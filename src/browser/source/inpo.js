function Inpo({name, value}) {
    return (
        <>
        <div class="flex flex-row items-center gap-10 h-[70px] mr-6 border-b">
            <span class="text-xl ml-8 w-[85px] font-noto_sans">{name}</span> 
            <div class="flex items-center border-2 border-gray-300 h-[40px] w-[400px] p-4 bg-gray-100">
                <input class="text-lg text-gray-600 outline-none h-[35px] flex-1 bg-gray-100" 
                value={value} disabled={true}/>
            </div>
        </div>
        </>
    )
}

export default Inpo;