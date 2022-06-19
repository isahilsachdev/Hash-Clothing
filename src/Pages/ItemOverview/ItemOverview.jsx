import React, { useEffect } from 'react';
import CollectionItem from '../../Components/Collection/CollectionItem';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import {
    CollectionContainer,
    ItemsContainer,
    StyledHr,
    StyledTitle,
} from './collection.styles';
import { fetchCategories, postCartItem } from '../../Redux/App/action';
import Spinner from '../../Components/Spinner/Spinner';

const ItemOverview = () => {
    const {id: page} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCategories(page));
    }, [dispatch, page]);
    const { clothData, isLoading, error } = useSelector(
      (state) => state.app,
      shallowEqual
    );
    const handleAddToCard = (cloth) => {
        dispatch(postCartItem(cloth));
    };

    return (
        <>
        {
            clothData?.length ? (
                <CollectionContainer>
                    <StyledTitle>{page?.toUpperCase()}</StyledTitle>
                    <StyledHr />
                    <ItemsContainer>
                        {clothData?.length && clothData?.map((item, index) => (
                            <CollectionItem key={index} item={item} handleAddToCard={handleAddToCard} />
                        ))}
                    </ItemsContainer>
                </CollectionContainer>
            ) : (
                <Spinner />
            )
        }
        </>
    );
};
export default ItemOverview;
