import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchCartItem } from '../../Redux/App/action';
import Spinner from '../../Components/Spinner/Spinner';
import Checkout from '../Checkout/Checkout';
import EmptyCart from '../../Components/EmptyCart/EmptyCart';

const CartItems = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCartItem());
    }, [dispatch]);
    
    const { isLoading, error, cartData } = useSelector(
      (state) => state.app,
      shallowEqual
    );

    return (
        <>
            {
              isLoading ? (
                  <Spinner />
                ) : error ? (
                  'Something went wrong'
                ) : cartData?.length ? (
                  <Checkout cartData={cartData} />
                ) : <EmptyCart emptyCart={true} />
            }
        </>
    )
};
export default CartItems;
