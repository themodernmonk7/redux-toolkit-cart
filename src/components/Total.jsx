import React from "react"
import { useSelector } from "react-redux"

const Total = () => {
  const { amount, total } = useSelector((state) => state.cart)
  return (
    <>
      {/* <!-- total section --> */}
      <section>
        <div className="px-6 py-1 text-sm font-semibold uppercase tracking-wide text-gray-800">
          <p>
            Price details{" "}
            <span className="capitalize">
              ({amount} item{amount > 1 && "s"})
            </span>
          </p>
        </div>
        <div className="mx-6 flex justify-between border-y py-2">
          <div className="flex w-full flex-col justify-between tracking-wide text-gray-800 ">
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
                <span className=" text-sm font-normal text-fuchsia-500">
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
        <div className="mx-6 flex justify-between text-lg  font-normal text-black">
          <p className="">Total</p>
          <p className="">${total}</p>
        </div>
      </section>
    </>
  )
}

export default Total
