import { useDispatch, useSelector } from 'react-redux'
import {incrAction,decrAction} from '../redux/Product/product.action'

const Product = () => {
    let product = useSelector((state) => {
        return state;
    })
    let dispatch = useDispatch();

  return (
    <div>
        <h3>Product Component</h3>
        <pre>{JSON.stringify(product)}</pre>
        <button onClick={()=>(dispatch(decrAction()))}>-</button>
        {product.qty}
        <button onClick={()=>(dispatch(incrAction()))}>+</button>
    </div>
  )
}

export default Product