import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Input, Panel } from 'rsuite';
import { addProduct } from '../../state/products.state';
import './ProductPage.scss';

const ProductPage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const sendProduct = () => {
    dispatch(addProduct({ name, price: Number(price), amount: Number(amount) }));
    history.push(process.env.PUBLIC_URL + '/')
  }

  const onClean = () => {
    setName('');
    setPrice('');
    setAmount('');
  }

  return (
    <div className='product-page'>
      <Panel shaded bordered bodyFill className='form-product'> 
        <h3>Create New Product</h3>
        <Input 
          value={name} 
          placeholder="name" 
          onChange={(value) => setName(value)} 
        />
        <Input 
          value={price} 
          placeholder="price" 
          type='number'
          onChange={(value) => setPrice(value)} 
        />
        <Input 
          value={amount} 
          placeholder="amount" 
          type='number'
          onChange={(value) => setAmount(value)} 
        />
        <Button 
          appearance="primary"
          disabled={name === '' || price === '' || amount === ''}
          onClick={sendProduct}
        >
          Add Product
        </Button>
        <Button 
          appearance="primary"
          onClick={onClean}
        >
          Clean
        </Button>
      </Panel>

    </div>
  );
}

export default ProductPage;
