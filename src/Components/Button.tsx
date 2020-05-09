import React, {useState} from "react";

type ButtonProps ={
    children: React.ReactNode,
    backgroundColor: string,
    darkShadow: string,
    lightShadow: string,
    color: string,
    onClick: any
}

const Button = ({children, backgroundColor, color, darkShadow, lightShadow, onClick}: ButtonProps) => {
    const [state, setState] = useState('initial')

    const styleHandler: any = (state: string) => {
        switch (state) {
            case 'initial':
            default:
                return {
                marginBottom: '1rem',
                width: '100%',
                height: '30px',
                border: `1px solid ${backgroundColor}`,
                transitionDuration: '0.5s, 0.5s',
                transitionProperty: 'background-color, color',
                fontWeight: 'bold',
                borderRadius: '3px',
                color: color,
                backgroundColor: backgroundColor,
                boxShadow: `${darkShadow} 5px 5px 30px 0, ${lightShadow} -5px -5px 30px 0`
                }
            case 'hover':
                return {
                    marginBottom: '1rem',
                    width: '100%',
                    height: '30px',
                    border: `1px solid ${color}`,
                    transitionDuration: '0.5s, 0.5s',
                    transitionProperty: 'background-color, color',
                    fontWeight: 'bold',
                    borderRadius: '3px',
                    color: backgroundColor,
                    backgroundColor: color,
                    boxShadow: `${darkShadow} 5px 5px 30px 0, ${lightShadow} -5px -5px 30px 0`
                }
            case 'active':
                return {
                    marginBottom: '1rem',
                    width: '100%',
                    height: '30px',
                    border: `1px solid ${backgroundColor}`,
                    transitionDuration: '0.5s, 0.5s',
                    transitionProperty: 'background-color, color',
                    fontWeight: 'bold',
                    borderRadius: '3px',
                    color: color,
                    backgroundColor: backgroundColor,
                    boxShadow: `inset ${darkShadow} 5px 5px 30px 0, inset ${lightShadow} -5px -5px 30px 0`
                }
        }

    }

    return(
        <button
            style={styleHandler(state)}
            onMouseOver={() => setState('hover')}
            onMouseOut={() => setState('initial')}
            onClick={()=> {
                setState('active')
                onClick()
            }}>{children}</button>
    )
}

export default Button;