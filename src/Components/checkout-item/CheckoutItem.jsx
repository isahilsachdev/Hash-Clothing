import React from 'react';
import {
    CheckoutItemContainer,
    ImageContainer,
    StyledArrow,
    StyledImage,
    StyledName,
    StyledPrice,
    StyledQuantity,
    RemoveButtonContainer,
    StyledRemoveButton,
} from './checkoutItem.styles';
import { useDispatch } from "react-redux";
import { deleteCartItem } from '../../Redux/App/action';

const CheckoutItem = ({ item, removeItem, addItem }) => {
    const { category, img, price, quantity } = item;
    const dispatch = useDispatch();
    const clearItem = item => {
        dispatch(deleteCartItem(item?.id))
    };

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <StyledImage src={img[0]} alt='item' />
            </ImageContainer>
            <StyledName>{category}</StyledName>
            <StyledQuantity>
                {quantity === 1 ? (
                    <StyledArrow inactive>&#10094;</StyledArrow>
                ) : (
                    <StyledArrow onClick={() => removeItem(item)}>
                        &#10094;
                    </StyledArrow>
                )}
                {quantity || 1} {/* fix this */}
                <StyledArrow onClick={() => addItem(item)}> 
                    &#10095;
                </StyledArrow>
            </StyledQuantity>
            <StyledPrice>${price}</StyledPrice>
            <RemoveButtonContainer>
                <StyledRemoveButton onClick={() => clearItem(item)}>
                    &#10005;
                </StyledRemoveButton>
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
