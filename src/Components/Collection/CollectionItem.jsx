import React from 'react';
import {
    ItemImageContainer,
    CollectionItemContainer,
    ItemFooterContainer,
    ItemNameContainer,
    ItemPriceContainer,
    CustomButtonContainer,
} from './collectionItem.styles';

const CollectionItem = ({ item, removeButton, handleAddToCard }) => {
    const { brand, price, img } = item;

    return (
        <>
        {
            img && (
                <CollectionItemContainer>
                    <ItemImageContainer image={img && img.length && (img[1] || img[0])} />
                    <ItemFooterContainer>
                        <ItemNameContainer>{brand?.toUpperCase()}</ItemNameContainer>
                        <ItemPriceContainer>${price && price}</ItemPriceContainer>
                    </ItemFooterContainer>
                    {
                        !removeButton && (
                            <CustomButtonContainer onClick={() => handleAddToCard({...item})} inverted>
                                Add to cart
                            </CustomButtonContainer>
                        )
                    }
                </CollectionItemContainer>
            )
        }
        </>
    );
};

export default CollectionItem;
