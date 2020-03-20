import React from 'react'
import { useHistory } from 'react-router'
import './style.scss'

// Component
import Button, { BackButton } from '../../components/button'

const Lucie = () => {
  const history = useHistory()
  return (
    <>
      <div className="title">About</div>
      <Button onClick={() => history.push('/testing')}>Route to Error Page</Button>
      <BackButton />
    </>
  )
}
export default Lucie
