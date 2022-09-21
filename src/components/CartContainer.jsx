import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { openModal } from "../feature/modal/modalSlice"
import CartItem from "./CartItem"
import Total from "./Total"
const CartContainer = () => {
  const { cartItems, amount } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  if (amount < 1) {
    return (
      <section className="container mx-auto max-w-xl my-10 text-center">
        <header>
          <h2 className="text-3xl uppercase tracking-widest font-bold">
            your bag
          </h2>
          <h4 className=" lowercase tracking-wide pt-2 font-semibold text-gray-700">
            is currently empty
          </h4>
        </header>
      </section>
    )
  }

  return (
    <section className="container mx-auto max-w-xl my-10 grid grid-cols-1 gap-4">
      {/* <!-- item 1 --> */}
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <Total />

      {/* <!-- place order button --> */}
      <button className="bg-fuchsia-500 mx-6 py-4 uppercase font-semibold text-white rounded-sm shadow-lg border border-transparent hover:bg-fuchsia-500/95">
        Place Order
      </button>
      <button
        className="border uppercase bg-black text-white py-2 mx-6 rounded-sm shadow-md hover:bg-black/80"
        onClick={() => {
          dispatch(openModal())
        }}
      >
        clear cart
      </button>
    </section>
  )
}

export default CartContainer
