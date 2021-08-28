import Productitem from './ProductItem.css';

const ProductItem = (props) => {
    return (
        <li className = 'products-item'>
            <div className = "productItem">
                <h2> {props.name}</h2>
                <div>{props.description}</div>
                <div>{props.price}</div>
            </div>
        </li>
    );
}

export default ProductItem;