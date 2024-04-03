
function Cards({name,img,singer,index,Change,add}) {
    return (
        
            <div className="card w-52 h-36 bg-gray-700 rounded-md p-2">
                <div className="upperbox w-full h-[60%]  flex gap-2">
                    <div className="img w-[40%] h-full  rounded-md overflow-hidden">
                        <img src={img} alt="" className="w-full h-full object-cover"  />
                    </div>
                    <div className="text flex flex-col">
                        <h1 className="text-xl text-white ">{name}</h1>
                        <h2 className="text-xl text-white">{singer}</h2>
                    </div>
                </div>
                <div className="btn flex justify-center items-center mt-4">
                    <button onClick={()=> Change(index)} className="bg-black text-white px-4 py-2 rounded-xl">{add ? "add" : "add to fav"}</button>
                </div>

            </div>
       
    );
}

export default Cards;