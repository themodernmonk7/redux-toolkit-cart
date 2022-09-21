import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../feature/cart/cartSlice"
import { closeModal, openModal } from "../feature/modal/modalSlice"

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <>
      <section className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 z-10">
        <div className="bg-slate-900 text-white shadow-md px-6 py-6 mx-4 md:w-1/3 flex flex-col justify-center items-center space-y-4 rounded-md">
          <h4 className="text-xl text-center font-medium">
            Remove all items from your shopping cart?{" "}
          </h4>
          <div className=" space-x-10">
            <button
              className="uppercase border-2 border-blue-500 text-blue-500 px-3 rounded-sm tracking-wider"
              onClick={() => {
                dispatch(clearCart())
                dispatch(closeModal())
              }}
            >
              Confirm
            </button>
            <button
              className="uppercase border-2 border-red-500 px-3 rounded-sm text-red-500 tracking-wider"
              onClick={() => {
                dispatch(closeModal())
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Modal
