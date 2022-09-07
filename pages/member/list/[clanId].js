
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import MUIDataTable from "mui-datatables"
import Box from '@mui/material/Box'

const MemberList = () => {
  const router = useRouter()
  const { clanId } = router.query

  const [isLoading, setIsLoading] = useState(true)
  const [members, setMembers] = useState([])

  useEffect(() => {
    if (clanId) {
      fetch('/api/member/list?clanId=' + clanId)
        .then(res => res.json())
        .then(result => setMembers(result))
        .finally(setIsLoading(false))
    }
  }, [clanId])

  const renderMembers = () => {
    if (!members || members.length === 0) return null

    return members.map(x => {
      return (
        <Box key={x._id}>{x.displayName}</Box>
      )
    })
  }

  const columns = [
    { name: 'displayName', label: 'Name' },
    { name: 'class', label: 'Class' },
    { name: 'combatRating', label: 'Combat Rating' },
    { name: 'resonance', label: 'Resonance' },
    { name: 'role', label: 'Clan Role' },
    { name: 'id', label: 'Action' },
  ]

  const data = members.map(x => ({ id: x._id, class: x.class, displayName: x.displayName, combatRating: x.combatRating, resonance: x.resonance }))
  const options = { rowsPerPage: 20 }

  return (
    <Box sx={{ padding: 10, pt: 2 }}>
      <MUIDataTable
        title='Clan Members'
        data={data}
        columns={columns}
        options={options}
      />
    </Box>
  )
}

export default MemberList