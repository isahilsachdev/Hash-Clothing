import React, { Suspense, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchCategories } from '../../Redux/App/action';
import MenuItem from '../../Components/MenuItem/MenuItem';

import { HomeCategoriesMenu } from './home.styles';
import Spinner from '../../Components/Spinner/Spinner';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  
  const { clothData, isLoading, error } = useSelector(
    (state) => state.app,
    shallowEqual
  );
  
  return (
    <Suspense fallback={Spinner}>
      <HomeCategoriesMenu>
        {clothData?.length ? (
          clothData.map(({ ...sectionProps }, index) => (
          <MenuItem
              key={index}
              size={index > 2 && 'large'}
              {...sectionProps}
          />
        ))) : (
          <Spinner />
        )}
      </HomeCategoriesMenu>
    </Suspense>
  )
}

export default Home