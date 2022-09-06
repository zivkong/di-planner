import { useEffect, useState } from 'react'

const ClanCreate = () => {
  const [clan, setClan] = useState(null)

  useEffect(() => {
    fetch('/api/clan/create')
      .then(res => res.json())
      .then(response => {
        setClan(response.name)
      })
  }, [])

  return (
    <div>
      Create Clan {clan}
    </div>
  )
}

export default ClanCreate