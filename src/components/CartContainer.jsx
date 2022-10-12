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
    <section className="container mx-auto my-10 grid max-w-xl grid-cols-1 gap-4">
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <Total />

      {/* <!-- place order button --> */}
      <button className="mx-6 rounded-sm border border-transparent bg-fuchsia-500 py-4 font-semibold uppercase text-white shadow-lg hover:bg-fuchsia-500/95">
        Place Order
      </button>
      <button
        className="mx-6 rounded-sm border bg-black py-2 uppercase text-white shadow-md hover:bg-black/80"
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
