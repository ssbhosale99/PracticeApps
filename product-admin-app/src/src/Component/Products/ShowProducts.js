import './ShowProducts.css';
import ProductItem from './ProductItem';

const products = (props) => {
    if (props.items.length === 0) {
        return <h2 className='products-list__fallback'>Found no expenses.</h2>;
      }
    return(
        <div className="product-container">
        <ul className='products-list'>
             {props.items.map((product, index) =>  (                
            <ProductItem 
                key = {index}
                name = {product.name}
                description = {product.description}
                price = {product.amount}
            />
            ))}
        </ul>
    </div>
    );
}

export default products;