import React, { useState } from 'react'
import { useRouter } from 'next/router'
import UserShowCard from '../../components/UserShowCard'
import UserOverallGraph from '../../components/graph/UserOverallGraph'
import UserDayGraph from '../../components/graph/UserDayGraph'
import ShowPage from '../../styles/UserShowPage.module.scss'

export default function UserShow() {
  const router = useRouter()
  const {tag} = router.query

  type graphDisplay = 'day' | 'overall'
  const [displayState, setDisplayState] = useState<graphDisplay>('overall')

  return (
    <div className={ShowPage.container}>
      <UserShowCard tag={tag}></UserShowCard>
      {displayState === 'day' ? <UserDayGraph></UserDayGraph> : <UserOverallGraph></UserOverallGraph>}
    </div>
  )
}
