import { useState } from "react"

export default function Name() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  
  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)
  }

  function handleReset() {
    setFirstName('')
    setLastName('')
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}