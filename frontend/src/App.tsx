import { useState } from 'react'
import './App.css'
import PrimaryInput from './components/Input/PrimaryInput'
import { Button, Spacer } from '@chakra-ui/react'
import { useIdentityMutation } from './hooks/useIdentityMutation'
import SuccessModal from './components/Modal/modal'

function App() {
  const { mutate, isSuccess } = useIdentityMutation()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")

  const submit = () => {
    mutate({
      email,
      firstName,
      lastName: secondName
    })
  }

  return (
    <div className='container'>
      <SuccessModal 
        title='Successfully confirmed' 
        isVisible={isSuccess}
        subText='Keep an eye on your email, you will soon receive confirmation of your subscription.'
      />
      <form>
        <div className='name-form-container'>
          <PrimaryInput 
            value={firstName} 
            onChange={event => setFirstName(event.target.value)}
            name="firstName"
            label="First Name"
            placeholder="Your first name"
          />
          <PrimaryInput 
            value={secondName} 
            onChange={event => setSecondName(event.target.value)}
            name="secondName"
            label="Last Name"
            placeholder="Your last name"
          />
        </div>
        <Spacer height="4" />
        <PrimaryInput 
          value={email} 
          onChange={event => setEmail(event.target.value)}
          name="email"
          label="Type your email"
          placeholder="someone@email.com"
        />
        <Spacer height="4" />
        <Button colorScheme='blue' width="100%" onClick={submit}>Send</Button>
      </form>
      <div className="product-details">
        <h2>Monthly signature</h2>
        <Spacer height="4" />
        <p>you will pay</p>
        <span>$ 50.00</span>
        <Spacer height="4" />
        <p>Rules: It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>
    </div>
  )
}

export default App
