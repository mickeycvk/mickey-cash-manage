
import Item from './item'
import './style.css'


const Transaction=(props)=>{
    const {items}=props
   
      return (
    <div >
   

    
    {items.map((element)=>{
      return <Item {...element}key= {element.id} />
      
    })}
 
    
    </div>
      );
}
export default Transaction
