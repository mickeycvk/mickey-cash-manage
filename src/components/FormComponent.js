import './style.css'
import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
const FormComponent=(props)=>{
    console.log('render')
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState(0)
    const [formValid,setFormValid]=useState(false)
    const inputTitle=(event)=>{
setTitle(event.target.value)
    }
    const inputAmount=(event)=>{
setAmount(event.target.value)
    }
    const saveItem=(event)=>{
        event.preventDefault()
const itemData ={
    id:uuidv4(),
    title:title,
    amount:Number(amount)
}
props.onAddItem(itemData)
setTitle('')
setAmount(0)
    }
    useEffect(()=>{
      
        const checkData = title.trim().length>0&&amount!==0
       if(checkData){
           setFormValid(true)
       }
    },[title,amount])
   
    return(
        <div>
            <form onSubmit={saveItem}>
                <div  className="form-control">
                    <label>Name list</label>
                    <input  type="text" placeholder="Enter name of list" onChange={inputTitle} value={title} />
                </div>
                <div   className="form-control">
                    <label>Amount</label>
                    <input  type="number" placeholder="(+ รายรับ , - รายจ่าย)"onChange={inputAmount} value={amount} />
                </div>
                <div>
                    <button className="btn" type="submit" disabled={!formValid}>Add data</button>
                    
                </div>
            </form>
          
        </div>
    )
}
export default FormComponent