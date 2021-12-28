import React from 'react'

import "../styles/globals.css"

// interface input
interface InputInterface {
       widthSize?: string
       heightSize?: string
       textSize?: string
       placeholder: string
}

// input component
const Input = ( props: InputInterface ) => {
       // destructuring props
       const { widthSize, heightSize, textSize, placeholder, ...rest } = props
       return (
              <React.Fragment>
                     <input placeholder={`${placeholder}`} className={`w-${widthSize} text-${textSize} h-${heightSize} rounded-[.275rem] px-2 border border-gray-400`} {...rest} />
              </React.Fragment>
       )
}

export default Input
