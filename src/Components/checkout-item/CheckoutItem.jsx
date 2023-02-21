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

const CheckoutItem = ({ item, removeItem, addItem, deleteAllForId }) => {
    const { category, img, price, quantity } = item;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <StyledImage src={img} alt='item' />
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
                {quantity}
                <StyledArrow onClick={() => addItem(item)}> 
                    &#10095;
                </StyledArrow>
            </StyledQuantity>
            <StyledPrice>${price}</StyledPrice>
            <RemoveButtonContainer>
                <StyledRemoveButton onClick={() => deleteAllForId(item)}>
                    &#10005;
                </StyledRemoveButton>
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
