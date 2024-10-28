import React, { InputHTMLAttributes, ReactNode } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    // onChange: (name: string, value: string) => void; // Definindo o onChange personalizado
    // name: string; // 'n
    onCustomChange?:(name: string, value: string) => void;
}

function Input ({children}:{children:ReactNode}){
    return <div>{children}</div>
}

const InputField: React.FC<InputFieldProps> = ({ onCustomChange, ...rest }) => {



    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        
        rest.onChange && rest.onChange(e); // Chama a função onChange com o nome e valor
        onCustomChange && rest.name && onCustomChange(rest.name, e.target.value)
    
    };

    return (
        <input
            {...rest}
        onChange={handleChange} // Chama a função handleChange
        />
    );
};

Input.Field = InputField


export {Input}


