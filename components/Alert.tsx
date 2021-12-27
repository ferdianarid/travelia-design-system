import React, { ReactNode } from 'react'

// import icon from heroicons
import { InformationCircleIcon, XIcon } from '@heroicons/react/solid'

// import global css
import "../styles/globals.css"

// interface alert component
interface AlertInterface {
       variant: string
       outline?: string
       children: ReactNode
}

// alert component blueprint
const Alert = ( { variant, outline, children, ...props } : AlertInterface ) => {
       return (
              <React.Fragment>
                     <div className={`w-fit text-sm alert-opacity h-auto py-2 px-4 ${variant} ${outline}-500 rounded-md flex items-center`} {...props}>
                            <InformationCircleIcon className={`h-4 w-4`} />
                            &nbsp;{ children }&nbsp;
                           <XIcon className={`h-4 w-4 hover:cursor-pointer`} />
                     </div>
              </React.Fragment>
       )
}

export default Alert
