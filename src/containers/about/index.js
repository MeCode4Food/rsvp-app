import React from 'react'
import { useHistory } from 'react-router'

// Component
import Button from '../../components/button'

const About = () => {
  const history = useHistory()
  return (
    <>
      <div>About</div>
      <Button onClick={() => history.push('/testing')}>Route to Error Page</Button>
    </>
  )
}
export default About
