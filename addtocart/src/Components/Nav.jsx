

function Nav({newData}) {
  console.log(newData);
    return (
      <div className="w-full h-10  flex justify-between items-center text-white px-5">
       <h1 className="text-xl whitespace-nowrap">React</h1>
       <h1 className={`text-xl whitespace-nowrap`}>favourite: <span>{newData.filter(item => item.add).length}</span></h1>
      </div>
    );
}

export default Nav;