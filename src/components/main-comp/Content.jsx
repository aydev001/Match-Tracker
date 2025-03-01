import { FaExclamationTriangle } from "react-icons/fa";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMatchData } from '../../store/matchSlice/matchSlice'
import MatchesCard from '../simple-comp/matchesCard'
import MatchesLoad from '../simple-comp/MatchesLoad'

const Content = () => {

    const dispatch = useDispatch()
    const { matches, isMatchLoad, isMatchError, selectedStatus } = useSelector(state => state.matches)

    useEffect(() => {
        dispatch(fetchMatchData())
    }, [])

    return (
        <div className='flex flex-col gap-2 font-inter my-[20px]'>
            {isMatchLoad ?
                [1, 2, 3, 4, 5, 6, 7].map(item => (
                    <MatchesLoad key={item} />
                ))
                :
                isMatchError == null ?
                    selectedStatus ?
                        matches?.filter(item => item.status === selectedStatus).map((item, index) => (
                            <MatchesCard key={index} matchData={item} />
                        ))
                        :
                        matches?.map((item, index) => (
                            <MatchesCard key={index} matchData={item} />
                        ))
                    :
                    <div className='min-h-[80vh] flex justify-center items-center text-[20px] text-gray-700 flex-col gap-1'>
                        <span><FaExclamationTriangle /></span>
                        <span>Error</span>
                    </div>
            }
        </div>
    )
}

export default Content
