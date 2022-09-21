import React from "react"
import { useSelector } from "react-redux"

const Total = () => {
  const { amount, total } = useSelector((state) => state.cart)
  return (
    <>
      {/* <!-- total section --> */}
      <section>
        <div className="px-6 uppercase font-semibold tracking-wide py-1 text-sm text-gray-800">
          <p>
            Price details{" "}
            <span className="capitalize">
              ({amount} item{amount > 1 && "s"})
            </span>
          </p>
        </div>
        <div className="flex justify-between py-2 border-y mx-6">
          <div className="text-gray-800 flex flex-col justify-between tracking-wide w-full ">
            <p className="flex justify-between">
              <span> Total MRP</span>
              <span>${total}</span>
            </p>

            <p className="flex justify-between">
              <span> Discount on MRP</span>
              <span className="text-green-400">${-0.0}</span>
            </p>

            <p className="flex justify-between">
              <span>Coupon Discount</span>
              <span className="text-fuchsia-500">
                {" "}
                <a href="#"> Apply Coupon </a>
              </span>
            </p>

            <div className="flex justify-between">
              <p>
                {" "}
                Convenience Fee{" "}
                <span className=" text-fuchsia-500 font-normal text-sm">
                  {" "}
                  <a href="#"> Know More </a>
                </span>{" "}
              </p>
              <p>
                <span className="line-through"> $99</span>
                <span className="text-green-400"> FREE</span>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- total --> */}
        <div className="flex justify-between mx-6 font-normal  text-black text-lg">
          <p className="">Total</p>
          <p className="">${total}</p>
        </div>
      </section>
    </>
  )
}

export default Total
