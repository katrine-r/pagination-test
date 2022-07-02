import classNames from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PaginationService from './api/PaginationService';
import classes from './App.module.scss';
import './AppActive.scss';
import ProductsList from './components/ProductsList/ProductsList';
import Input from './components/UI/Input/Input';
import Loader from './components/UI/Loader/Loader';
import { filteredProductsList, getProductsList } from './store/actions/products';
import { getPageCount, getPagesArr } from './utils';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';

function App() {

  const [value, setValue] = useState('')
  const [per_page, setPer_page] = useState(5)
  const [page, setPage] = useState(1)

  const dispatch = useDispatch()
  const { products, filteredProducts } = useSelector(state => state.products)

  const getProductsHandler = async () => {
    const products = await PaginationService.getProducts(per_page, page)
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

  const totalCount = products?.total

  const pageCount = getPageCount(totalCount, per_page)
  const pages = getPagesArr(pageCount)

  const arrowBackHandler = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  }

  const arrowForwardHandler = () => {
    if (page !== pages.length) {
      setPage(page + 1)
    }
  }

  useEffect(() => {
    getProductsHandler()
  },[page])

  useEffect(() => {
    dispatch(filteredProductsList(products))
  },[products])

  return (
    <div className={classes.App}>
      <main>
        <div className={classes.FilterWrapper}>
          <div className={classes.Wrapper}>
            <div className={classes.InputWrapper}>
              <span className={classes.SearchIconWrapper}>
                <SearchIcon className={classes.SearchIcon} />
              </span>
              <Input 
                type="text"
                value={value}
                placeholder="Filter"
                onChange={changeInputHandler} />
            </div>
          </div>
        </div>
        <div className={classes.ProductsWrapper}>
          <div className={classes.Content}>
            <div>
              { products?.data?.length 
                ? <ProductsList
                  filteredList={filteredHandler}
                />
                : <Loader />
              }
            </div>
            <div className={classes.PaginationWrapper}>
              <Button 
                disabled={page === 1 ? true : false} 
                className={classes.Icons} 
                onClick={arrowBackHandler}
              >
                <ArrowBackIosIcon className={classes.Icons} />
              </Button>
              
              <ul className={classes.Pagination}>
                {pages.map(i => 
                  <li 
                    key={i}
                    className={classNames('PaginationItem', {active: page === i})}
                    onClick={() => setPage(i)}
                  >
                    {i}
                  </li>
                )}
              </ul>

              <Button
                disabled={page === pages.length ? true : false} 
                className={classes.Icons} 
                onClick={arrowForwardHandler}
              >
                <ArrowForwardIosIcon className={classes.Icons} />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
