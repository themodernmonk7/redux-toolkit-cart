import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import { IoIosRemove, IoIosAdd } from "react-icons/io"
import { useDispatch } from "react-redux"
import { decrease, increase, remove } from "../feature/cart/cartSlice"

const CartItem = ({ id, img, price, title, amount }) => {
  const dispatch = useDispatch()
  return (
    <>
      <article className="relative flex items-center justify-between rounded-md border ">
        <div className="flex space-x-2 px-2 py-2">
          {/* <!-- Product Image --> */}
          <img src={img} className="h-28 w-28  " alt={title} />
          {/* <!-- product details --> */}
          <div>
            <h2 className="text-xl">{title}</h2>
            <p className=" space-x-2">
              <span className="font-semibold">${price}</span>
              <span className="text-sm font-normal text-gray-500 line-through">
                3,495
              </span>
            </p>
          </div>
        </div>

        {/* <!-- Value Button --> */}
        <div className="flex space-x-4 py-2 md:px-6 ">
          <button
            className="rounded-full px-1 py-1 hover:bg-gray-200/40"
            onClick={() => {
              if (amount === 1) {
                dispatch(remove(id))
                return
              }
              dispatch(decrease({ id }))
            }}
          >
            {" "}
            <IoIosRemove />{" "}
          </button>
          <p className="rounded-md border bg-fuchsia-500 px-2 text-white ">
            {amount}
          </p>
          <button
            className="rounded-full px-1 py-1 hover:bg-gray-200/40"
            onClick={() => {
              dispatch(increase({ id }))
            }}
          >
            {" "}
            <IoIosAdd />{" "}
          </button>
        </div>
        <button
          className="absolute top-2 right-2 rounded-full px-1 py-1 text-gray-600 hover:bg-gray-200/40 hover:text-black"
          onClick={() => {
            dispatch(remove(id))
          }}
        >
          {" "}
          <AiOutlineClose size="14px" />{" "}
        </button>
      </article>
    </>
  )
}

export default CartItem
