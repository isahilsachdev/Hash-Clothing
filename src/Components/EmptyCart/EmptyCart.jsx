import React, { useState } from 'react'
import { SuccessModal } from '../SuccessModal/SuccessModal';
import { useNavigate } from 'react-router-dom';

const EmptyCart = ({emptyCart}) => {
  const [modalShow, setModalShow] = useState(true)
  const navigate = useNavigate();
  console.log('empty cart called', emptyCart)
  return (
    <SuccessModal
      show={modalShow}
      onHide={() => {
        setModalShow(false)
        navigate('/')
      }}
      emptyCart={emptyCart}
    />
  )
}

export default EmptyCart