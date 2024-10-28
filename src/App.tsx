import React, { ReactNode, useState } from 'react'
import './App.css'
import { Input } from './components/Form/InputField'

const App: React.FC = () => {

  type FormValues = {
    username: string;
    password: string;

  }

  const [values, setValues] = useState<FormValues>({ username: '', password: '' })


  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e: any) => {
    const { name, value } = e.target
    // console.log("event", e.target.value)
    setValues(prevValues => ({ ...prevValues, [name]: value }))
  }

  return (
    <>
      <Input>
      elele
        <Input.Field type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder='Usuário'
          onCustomChange={(name, value) => console.log(name, value)} />
      </Input>

      <div style={{border:'1px solid black'}}>
        <button>enviar</button>
        <input />
      </div>
   
      {/* <InputField 
      type="text"
      name="password"
      value={values.password}
      onChange={handleChange}
      placeholder='Password'
    /> */}

    </>

  )
}

export default App
