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
      <div className="mt-28 text-center">
        <h1 className="text-3xl font-bold tracking-wider">Loading...</h1>
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
