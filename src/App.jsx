import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navbar, CartContainer, Modal } from "./components"
import { calculateTotals, getCartItems } from "./feature/cart/cartSlice"
function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if (isLoading) {
    return (
      <div className="text-center mt-28">
        <h1 className="text-3xl tracking-wider font-bold">Loading...</h1>
      </div>
    )
  }

  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  )
}

export default App
