import React from "react";

interface inputFieldProps {
    name: string
    value: string
    onChange: (name: string, value: string) => void
    type?: string
    placeholder?: string


}

const InputField: React.FC<inputFieldProps> = ({name, value, onChange, type = "text", placeholder}) => {
    return (
        <input 
            type={type}
            name={name}
            value={value}
            onChange={e => onChange(name, e.target.value)}
            placeholder={placeholder}
        />
    )
}

export default InputField