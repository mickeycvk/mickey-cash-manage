import  './style.css'
import PropTypes from 'prop-types';
const Item =(props)=>{
    const {title,amount}= props
    const status = amount<0 ? "expense":"income"
    const Symbol = amount<0 ? "-":"+"
    return(
<>
<li className={status}>{title} = {Symbol}{Math.abs(amount)}</li>


</>
    );
}

Item.propTypes= {
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item