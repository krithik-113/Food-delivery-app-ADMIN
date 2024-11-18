import { useEffect, useState } from 'react'
 import axios from "axios"
import './List.css'
import { toast } from 'react-toastify'
const List = () => {
  const [list, setList] = useState([])
  const fetchList = async () => {
    const response = await axios.get(`/api/food/list`)
    console.log(response.data)
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error("Error")
    }
  }
  useEffect(() => {
    fetchList()
  }, [])
  
  const removeFood = async (id)=>{
    const res = await axios.post("/api/food/remove", { id });
    if (res.data.success) {
      toast.success(res.data.message)
      await fetchList()
    } else {
      toast.error(res.data.message)
    }
  }
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b><b>Name</b><b>Category</b><b>Price</b><b>Action</b>
        </div>
        {list.map((item,index) => {
          return (
            <div key={index} className="list-table-format">
              <img
                src={item.image}
                alt=""
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p
                onClick={() => removeFood(item._id)}
                style={{ cursor: "pointer" }}
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default List