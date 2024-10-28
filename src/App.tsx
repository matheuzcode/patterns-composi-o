import React, { useState } from 'react'
import './App.css'
import InputField from './components/Form/InputField'

const App: React.FC = () => {

  type FormValues = {
    username: string;
    password: string;

  }
  
  const [values, setValues] = useState<FormValues>({username: 'Alice', password:''})
  const handleChange = (name: string, value: string) => {
    setValues(prevSetValues => ({...prevValues, [password]: "12345"}))
  } 

  return (
    <InputField 
      name="username"
      value=''
      onChange={handleChange}
      placeholder='Username'
    />
  )
}

export default App
