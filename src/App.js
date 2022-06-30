import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PaginationService from './api/PaginationService';
import classes from './App.module.scss';
import ProductsList from './components/ProductsList/ProductsList';
import Input from './components/UI/Input/Input';
import { filteredProductsList, getProductsList } from './store/actions/products';

function App() {

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const { products, filteredProducts } = useSelector(state => state.products)

  const getProductsHandler = async () => {
    const products = await PaginationService.getProducts()
    dispatch(getProductsList(products))
  }

  const changeInputHandler = ({target: {value}}) => {
    setValue(prev => /\d+/.test(Number(value)) ? value : prev)
  }

  const filteredHandler = useMemo(() => {
    if (value) {
      return filteredProducts.data.filter((i) => i.id === Number(value))
    } else {
      return filteredProducts.data
    }
  },[value, filteredProducts])

  useEffect(() => {
    getProductsHandler()
  },[])

  useEffect(() => {
    dispatch(filteredProductsList(products))
  },[products])

  return (
    <div className={classes.App}>
      <main>
        <div className={classes.FilterWrapper}>
          <div className={classes.Wrapper}>
            <Input 
              type="text"
              value={value}
              placeholder="Filter"
              onChange={changeInputHandler} />
          </div>
          
        </div>
        <div className={classes.ProductsWrapper}>
          { products?.data?.length 
            ? <ProductsList
              filteredList={filteredHandler}
            />
            : <span>List is empty</span>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
