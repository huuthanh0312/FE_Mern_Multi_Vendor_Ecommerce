import React, { useState } from 'react'
import { LuArrowDownSquare } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Orders = () => {
  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setsearchValue] = useState('')
  const [parPage, setParPage] = useState(5)
  const [show, setShow] = useState(false)

  return (
    <div className="px-2 lg:px-5 pb-6">
      <div className="w-full p-4 bg-white rounded-md shadow-sm">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => {
              setParPage(parseInt(e.target.value))
            }}
            className="px-4 py-2 hover:border-indigo-500 outline-none bg-[#E5E5E5] border border-slate-700 rounded-md text-black"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <input
            type="text"
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#E5E5E5] text-[#383737] border border-slate-700 rounded-md "
            placeholder="search"
          />
        </div>
        <div className="relative mt-5 overflow-x-auto bg-[#E5E5E5] rounded-md pb-3">
          <div className="w-full text-sm text-left px-2">
            <div className="text-sm text-[#383737] uppercase border-b border-slate-700">
              <div className="flex justify-center items-center font-bold">
                <div className="py-3 w-[25%]">Order id</div>
                <div className="py-3 w-[13%]">Price</div>
                <div className="py-3 w-[18%]">Paymenr Status</div>
                <div className="py-3 w-[18%]">Order Status</div>
                <div className="py-3 w-[18%]">Action</div>
                <div className="py-3 w-[8%]">
                  <LuArrowDownSquare />
                </div>
              </div>
            </div>
            <div className="text-[#383737]">
              <div className="flex justify-center items-start font-medium border-b border-slate-500">
                <div className="py-3 w-[25%] whitespace-nowrap">#34332</div>
                <div className="py-3 w-[13%]">$532</div>
                <div className="py-3 w-[18%]">Pending</div>
                <div className="py-3 w-[18%]">Pending</div>
                <div className="py-3 w-[18%]">
                  <Link>View</Link>
                </div>
                <div onClick={(e) => setShow(!show)} className="py-3 w-[8%]">
                  <LuArrowDownSquare />
                </div>
              </div>
            </div>
            <div className={show ? 'block border-b border-slate-500 bg-[#909096]' : 'hidden'}>
              <div className="flex justify-center items-start font-medium border-b border-slate-500">
                <div className="py-3 w-[25%] whitespace-nowrap">#34332</div>
                <div className="py-3 w-[13%]">$532</div>
                <div className="py-3 w-[18%]">Pending</div>
                <div className="py-3 w-[18%]">Pending</div>
                <div className="py-3 w-[18%]">
                  <Link>View</Link>
                </div>
                <div className="py-3 w-[8%]"></div>
              </div>
              <div className="flex justify-center items-start font-medium border-b border-slate-500">
                <div className="py-3 w-[25%] whitespace-nowrap">#34332</div>
                <div className="py-3 w-[13%]">$532</div>
                <div className="py-3 w-[18%]">Pending</div>
                <div className="py-3 w-[18%]">Pending</div>
                <div className="py-3 w-[18%]">
                  <Link>View</Link>
                </div>
                <div className="py-3 w-[8%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders