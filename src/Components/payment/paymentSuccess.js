import React from 'react'
import { IoMdCheckmarkCircle } from "react-icons/io";

const PaymentSuccess = () => {
  return (
    <div style={{textAlign:'center', margin:"10vh"}}>
      <div><IoMdCheckmarkCircle size={200} color="green"/></div>
      <h1>Payment Success</h1>      
    </div>
  )
}

export default PaymentSuccess
