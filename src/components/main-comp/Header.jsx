import { RiRefreshLine } from "react-icons/ri";
import { FiAlertTriangle } from "react-icons/fi";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchMatchData } from "../../store/matchSlice/matchSlice";
import MatchesFilter from "../simple-comp/MatchesFilter";

const Header = () => {
    const dispatch = useDispatch()
    const { isMatchError, isMatchLoad } = useSelector(state => state.matches)
    return (
        <div className='flex justify-between items-center gap-1 my-[30px]'>
            <div className="flex justify-start items-center gap-2">
                <div className='font-bold italic font-exo text-[20px]'>
                    Match Tracker
                </div>
                <div>
                    <MatchesFilter/>
                </div>
            </div>
            <div className='flex justify-end items-center gap-1'>
                {isMatchError !== null && !isMatchLoad ?
                    <div className="alert-triagle">
                        <span className="text-red-500"><FiAlertTriangle /></span>
                        <span>Ошибка: не удалось загрузить информацию</span>
                    </div> :
                    ""}
                <button onClick={() => dispatch(fetchMatchData())} className="btn-primary">
                    <span>Обновить</span>
                    <span className={`${isMatchLoad ? "animate-spin" : "animate-none"}`}>
                        <RiRefreshLine />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Header
