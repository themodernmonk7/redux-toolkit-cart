import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../feature/cart/cartSlice"
import { closeModal, openModal } from "../feature/modal/modalSlice"

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <>
      <section className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-black/80">
        <div className="mx-4 flex flex-col items-center justify-center space-y-4 rounded-md bg-slate-900 px-6 py-6 text-white shadow-md md:w-1/3">
          <h4 className="text-center text-xl font-medium">
            Remove all items from your shopping cart?{" "}
          </h4>
          <div className=" space-x-10">
            <button
              className="rounded-sm border-2 border-blue-500 px-3 uppercase tracking-wider text-blue-500"
              onClick={() => {
                dispatch(clearCart())
                dispatch(closeModal())
              }}
            >
              Confirm
            </button>
            <button
              className="rounded-sm border-2 border-red-500 px-3 uppercase tracking-wider text-red-500"
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
