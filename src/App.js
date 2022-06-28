import { useDispatch, useSelector } from 'react-redux';
import PaginationService from './api/PaginationService';
import classes from './App.module.scss';
import ProductsList from './components/ProductsList/ProductsList';
import Button from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';
import { getProductsList } from './store/actions/products';

function App() {

  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products)

  const getProductsHandler = async () => {
    const products = await PaginationService.getProducts()
    dispatch(getProductsList(products))
  }

  return (
    <div className={classes.App}>
      <main>
        <div className={classes.FilterWrapper}>
          <div className={classes.Wrapper}>
            <Input type="text" />
            <Button onClick={getProductsHandler}>get products</Button>
          </div>
          
        </div>
        <div className={classes.ProductsWrapper}>
          { products?.data?.length 
            ? <ProductsList />
            : <span>List is empty</span>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
