import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from 'react'
import logo from "../../images/icon.svg"
import avatar from "../../images/avatar.svg"

const MatchesCard = ({ matchData }) => {
    
    const [active, setActive] = useState(false)
    return (
        <div onClick={() => { setActive(prev => !prev) }} className='p-[10px] rounded-sm bg-gray-900 hover:bg-[#1e1c34c2] cursor-pointer duration-150'>
            <div className="flex justify-between items-center gap-1">
                <div className='flex-1 flex justify-between items-center gap-1'>
                    <div className='flex justify-start items-center gap-1'>
                        <img className='w-[40px] h-[40px]' src={logo} alt="command-logo" />
                        <div className='font-medium text-[14px]'>
                            {matchData?.awayTeam?.name}
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='font-medium text-[14px]'>
                            {matchData?.awayScore} : {matchData?.homeScore}
                        </div>
                        {matchData?.status === "Finished" &&
                            <div className='px-[10px] py-[2px] rounded-[2px] min-w-max text-[12px] font-medium bg-red-500 text-white'>
                                Finished
                            </div>}
                        {matchData?.status === "Scheduled" &&
                            <div className='px-[10px] py-[2px] rounded-[2px] min-w-max text-[12px] font-medium bg-amber-600 text-white'>
                                Match preparing
                            </div>}
                        {matchData?.status === "Ongoing" &&
                            <div className='px-[10px] py-[2px] rounded-[2px] min-w-max text-[12px] font-medium bg-green-600 text-white'>
                                Live
                            </div>}
                    </div>
                    <div className='flex justify-start items-center gap-1'>
                        <div className='font-medium text-[14px]'>
                            {matchData?.homeTeam?.name}
                        </div>
                        <img className='w-[40px] h-[40px]' src={logo} alt="command-logo" />
                    </div>
                </div>
                <div className={`${active ? "rotate-180" : "rotate-0"} duration-200`}>
                    <IoIosArrowDown />
                </div>
            </div>
            <div className={`font-medium text-[12px] flex justify-between gap-3 flex-col md:flex-row overflow-hidden ${active ? "h-max mt-[10px] opacity-100" : "h-0 opacity-0"} duration-150`}>
                <div className="flex-1">
                    <div className="flex justify-between items-center gap-1">
                        {matchData?.homeTeam?.players?.map((item, index) => (
                            <div key={index} className="px-[10px] py-[4px] rounded-sm bg-[#302f5d6c] flex justify-between items-center gap-1 w-full flex-col lg:flex-row">
                                <div className="flex justify-start items-center gap-1">
                                    <img className="w-[35px] h-[35px]" src={avatar} alt="avatar" />
                                    <div>
                                        {item?.username}
                                    </div>
                                </div>
                                <div className="flex justify-end items-center gap-1">
                                    <div className="text-gray-500">
                                        Убийств:
                                    </div>
                                    <div>
                                        {item?.kills}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-[5px] items-center gap-1 px-[10px] py-[4px] rounded-sm bg-[#302f5d6c]">
                        <div className="flex-1 h-[30px] flex justify-center items-center gap-1">
                            <div className="text-gray-500">
                                Points:
                            </div>
                            <div>
                                {matchData?.homeTeam?.points}
                            </div>
                        </div>
                        <div className="flex-1 h-[30px] flex justify-center items-center gap-1">
                            <div className="text-gray-500">
                                Место:
                            </div>
                            <div>
                                {matchData?.homeTeam?.place}
                            </div>
                        </div>
                        <div className="flex-1 h-[30px] flex justify-center items-center gap-1">
                            <div className="text-gray-500">
                                Всего убийств:
                            </div>
                            <div>
                                {matchData?.homeTeam?.total_kills}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center md:hidden">VS</div>

                <div className="flex-1">
                    <div className="flex justify-between items-center gap-1">
                        {matchData?.awayTeam?.players?.map((item, index) => (
                            <div key={index} className="px-[10px] py-[4px] rounded-sm bg-[#302f5d6c] flex justify-between items-center gap-1 w-full flex-col lg:flex-row">
                                <div className="flex justify-start items-center gap-1">
                                    <img className="w-[35px] h-[35px]" src={avatar} alt="avatar" />
                                    <div>
                                        {item?.username}
                                    </div>
                                </div>
                                <div className="flex justify-end items-center gap-1">
                                    <div className="text-gray-500">
                                        Убийств:
                                    </div>
                                    <div>
                                        {item?.kills}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-[5px] items-center gap-1 px-[10px] py-[4px] rounded-sm bg-[#302f5d6c]">
                        <div className="flex-1 h-[30px] flex justify-center items-center gap-1">
                            <div className="text-gray-500">
                                Points:
                            </div>
                            <div>
                                {matchData?.awayTeam?.points}
                            </div>
                        </div>
                        <div className="flex-1 h-[30px] flex justify-center items-center gap-1">
                            <div className="text-gray-500">
                                Место:
                            </div>
                            <div>
                                {matchData?.awayTeam?.place}
                            </div>
                        </div>
                        <div className="flex-1 h-[30px] flex justify-center items-center gap-1">
                            <div className="text-gray-500">
                                Всего убийств:
                            </div>
                            <div>
                                {matchData?.awayTeam?.total_kills}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchesCard
