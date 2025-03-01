import { IoMdArrowDropdown } from "react-icons/io";
import React, { useState } from 'react'
import { setSelectedStatus } from "../../store/matchSlice/matchSlice";
import { useDispatch, useSelector } from "react-redux";

const MatchesFilter = () => {
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const { selectedStatus } = useSelector(state => state.matches)
    return (
        <div onBlur={() => setActive(false)} tabIndex={1} className='px-[10px] min-w-[140px] relative py-[7px] rounded-[2px] bg-gray-800 text-[14px] font-medium'>
            <div onClick={() => setActive(prev => !prev)} className="flex justify-between items-center gap-4 cursor-pointer">
                <div>
                    {selectedStatus === null && "Все статусы"}
                    {selectedStatus === "Ongoing" && "Live"}
                    {selectedStatus === "Finished" && "Finished"}
                    {selectedStatus === "Scheduled" && "Match preparing"}
                </div>
                <div className={`${active ? "rotate-180" : "rotate-0"} duration-150 text-[18px]`}>
                    <IoMdArrowDropdown />
                </div>
            </div>
            <div className={`absolute left-0 right-0 bottom-[-5px] ${active ? "h-max py-[5px] opacity-100" : "h-0 opacity-0"} overflow-hidden duration-150 translate-y-[100%] shadow-sm rounded-[2px] bg-gray-800 text-[14px] font-medium flex-col gap-1`}>
                <div onClick={() => {
                    dispatch(setSelectedStatus(null))
                    setActive(false)
                }} className="py-[5px] px-[7px] rounded-[2px] mx-[5px] hover:bg-gray-900 cursor-pointer">
                    Все статусы
                </div>
                <div onClick={() => {
                    dispatch(setSelectedStatus("Ongoing"))
                    setActive(false)
                }} className="py-[5px] px-[7px] rounded-[2px] mx-[5px] hover:bg-gray-900 cursor-pointer">
                    Live
                </div>
                <div onClick={() => {
                    dispatch(setSelectedStatus("Finished"))
                    setActive(false)
                }} className="py-[5px] px-[7px] rounded-[2px] mx-[5px] hover:bg-gray-900 cursor-pointer">
                    Finished
                </div>
                <div onClick={() => {
                    dispatch(setSelectedStatus("Scheduled"))
                    setActive(false)
                }} className="py-[5px] px-[7px] rounded-[2px] mx-[5px] hover:bg-gray-900 cursor-pointer">
                    Match preparing
                </div>
            </div>
        </div>
    )
}

export default MatchesFilter
