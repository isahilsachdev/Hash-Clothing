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
import { deleteAllCartItem, deleteCartItem } from '../../Redux/App/action';
import EmptyCart from '../../Components/EmptyCart/EmptyCart';

const Checkout = ({ cartData }) => {
    const [totalAmount, setTotalAmount] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        let total = 0;
        cartData.forEach(item => {
            total += Number(item.price)
        })
        setTotalAmount(total);
    }, [cartData])

    useEffect(() => {
        window.inai.initialize({
            container_id: "inai-widget",
            token: "46a7cf2e-15e3-4e77-bcbc-17681f18a605", // as documented above
            order_id: "ord_2AnHnWAWeuLn3SWyJ3dltsRXSNB",    // as documented above
            styles: { // documented below
              container: {},
              cta: {
                "color": '#333',
                "border": '1px solid #333'
              }, 
              errorText: {}
            },
            customer: {
              email: "customer@example.com",
              phoneNumber: "919876543210"
            },
            countryCode: 'USA',
            ctaText: "Pay Now"
        }).then((response) => {
            console.log('response', response);
            setShowModal(true);
        }).catch(error => {
            console.log('error', error);
            setShowModal(true);
        }).finally(() => {
            const itemsArray = cartData.map(item => item.id);
            dispatch(deleteAllCartItem(itemsArray));
        });
    }, [])
    return (
        <CheckoutPageContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Category</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartData.map(item => (
                <CheckoutItem key={item.name} item={item} />
            ))}
            <Total>
                <span>TOTAL: ${totalAmount || 0}</span>
            </Total>
            {showModal && <EmptyCart />}
            <div id="inai-widget"></div>
            <Notice>
                * Use the following test card for payment <br />
                4242424242424242 - Exp: 01/20 - CVV: 123
            </Notice>
        </CheckoutPageContainer>
    )
};

export default Checkout;