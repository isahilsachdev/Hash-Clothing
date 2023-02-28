import React, { useEffect, useState } from 'react';
import CheckoutItem from '../../Components/checkout-item/CheckoutItem';
import { useDispatch } from "react-redux";

import {
    CheckoutPageContainer,
    CheckoutHeader,
    HeaderBlock,
    Notice,
    Total,
} from './checkout.styles';
import { deleteCartItem, postCartItem, deleteAllCartItemForId } from '../../Redux/App/action';
import EmptyCart from '../../Components/EmptyCart/EmptyCart';
import { StripeCheckoutForm } from './StripeCheckoutForm';

const updateItemsWithQuantity = (data) => {
    const obj = {};
    data.forEach(i => {
        if(!obj[i.item_id]) {
            obj[i.item_id] = {...i}
        } else {
            obj[i.item_id] = {
                ...obj[i.item_id],
                quantity: obj[i.item_id].quantity + 1
            }
        }
    })

    const newArr = Object.keys(obj).map(key => obj[key])
    return newArr;
}

const Checkout = ({ cartData }) => {
    const [totalAmount, setTotalAmount] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();

    const removeItem = item => {
        dispatch(deleteCartItem(item?.item_id))
    };

    const addItem = item => {
        dispatch(postCartItem(item))
    }

    const deleteAllForId = item => {
        dispatch(deleteAllCartItemForId(item))
    }

    useEffect(() => {
        let total = 0;
        cartData.forEach(item => {
            total += Number(item.price)
        })
        setTotalAmount(total);
    }, [cartData])

    return (
        // <CheckoutPageContainer>
        //     <CheckoutHeader>
        //         <HeaderBlock>
        //             <span>Product</span>
        //         </HeaderBlock>
        //         <HeaderBlock>
        //             <span>Category</span>
        //         </HeaderBlock>
        //         <HeaderBlock>
        //             <span>Quantity</span>
        //         </HeaderBlock>
        //         <HeaderBlock>
        //             <span>Price</span>
        //         </HeaderBlock>
        //         <HeaderBlock>
        //             <span>Remove</span>
        //         </HeaderBlock>
        //     </CheckoutHeader>
        //     {updateItemsWithQuantity(cartData).map(item => (
        //         <CheckoutItem key={item.name} item={item} addItem={addItem} removeItem={removeItem} deleteAllForId={deleteAllForId} />
        //     ))}
        //     <Total>
        //         <span>TOTAL: ${totalAmount || 0}</span>
        //     </Total>
        //     {showModal && <EmptyCart />}
        <StripeCheckoutForm />
        //     <Notice>
        //         * Use the following test card for payment <br />
        //         4242424242424242 - Exp: 01/20 - CVV: 123
        //     </Notice>
        // </CheckoutPageContainer>
    )
};

export default Checkout;