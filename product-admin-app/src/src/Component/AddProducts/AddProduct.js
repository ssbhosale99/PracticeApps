
import { useState } from 'react';
import './AddProduct.css';

const AddProduct = (props) => {
    const [enterName, setEnteredName] = useState('');
    const [enterDescription, setEnterDescription] = useState('');
    const [enterAmount, setEnterAmount] = useState('');


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            name: enterName,
            description: enterDescription,
            price: enterAmount,
          };
        
          props.onSaveProductData(expenseData);
          setEnteredName('');
          setEnterDescription('');
          setEnterAmount('');
    }

    const handleAddNameChange = (event) =>{
        setEnteredName(event.target.value);
    }

    const handleAddDescriptionChange = (event) =>{
        setEnterDescription(event.target.value);
    }

    const handleAddAmountChange = (event) =>{
        setEnterAmount(event.target.value);
    }

    return (
        <div className = "new-product__container">
            <form onSubmit= {submitHandler}>
                <div className = "add-product__container">
                <div className='add-product__control'>
                    <label>Title</label>
                    <input
                        type = "text"
                        name = "product name"
                        required="required"
                        value={enterName}
                        placeholder="Enter a name..."
                        onChange={handleAddNameChange}
                    />
                </div>
                <div className='add-product__control'>
                    <label>Description</label>
                    <input
                        type = "text"
                        name = "description"
                        required="required"
                        value={enterDescription}
                        placeholder="Enter a name..."
                        onChange={handleAddDescriptionChange}
                    />
                </div>
                <div className='add-product__control'>
                    <label>Amount</label>
                    <input
                        type = "text"
                        name = "price"
                        required="required"
                        value={enterAmount}
                        placeholder="Enter a name..."
                        onChange={handleAddAmountChange}
                    />
                </div>
                <div className='add-product__actions'>
                    <button type="submit">Add</button>
                </div>
                </div>
            </form>
       </div> 
    );
}

export default AddProduct;