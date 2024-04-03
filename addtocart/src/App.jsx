import Nav from './Components/Nav'
import Cards from "./Components/Cards";
import { useState } from "react";
function App() {
  let data = [
   {name:"kabira",singer:"arjit",img:"https://i.pinimg.com/564x/c2/65/b9/c265b97774734fdb6fea90b6da2b0b34.jpg", add:false},
   {name:"dil hai mushkil",singer:"arjit",img:"https://i.pinimg.com/564x/cd/03/00/cd0300f56fe190ac4ea44fd145f66a7b.jpg",add:false},
   {name:"tu hai ki nahi",singer:"arjit",img:"https://images.unsplash.com/photo-1675218719517-b20e5bade63c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",add:false},
   
]

let [newData,setData] =useState(data)
 


let Change = (index)=>{
    return setData((pre)=>{
        return pre.map((item,idx)=>{
            if (idx == index) {
                return {...item, add: !item.add}
            }
            
            return item
        })
    })



}

    return (
        <div className="w-full h-screen bg-gray-700 px-20 py-10">
            <Nav newData={newData} />
           <div className="card mt-20 flex gap-4">
          
          {newData.map((item,index)=>{
            return <Cards key={index}  name={item.name} img={item.img} index={index} singer={item.singer} Change={Change} add={item.add}/>
          })}

           </div>

        </div>
    );
}

export default App;