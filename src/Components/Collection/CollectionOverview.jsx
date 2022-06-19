import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchCategories } from '../../Redux/App/action';
import Spinner from '../Spinner/Spinner';

import Collection from './Collection';

import { CollectionsContainer } from './collectionsOverview.styles';

const CollectionsOverview = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCategories('shop'));
    }, [dispatch]);
    
    const { clothData, isLoading, error } = useSelector(
      (state) => state.app,
      shallowEqual
    );

    return (
      <>
        {
          clothData?.length ? (
            <CollectionsContainer>
                {clothData?.map(({ ...collectionProps }, index) => (
                    <Collection key={index} {...collectionProps} />
                ))}
            </CollectionsContainer>
          ) : (
            <Spinner />
          )
        }
      </>
    )
};

export default CollectionsOverview;
