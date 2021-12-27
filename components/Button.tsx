import React, { ReactNode } from 'react'

// import global css
import "../styles/globals.css"

// interface button
interface ButtonInterface {
	variant: string
	color?: string
	children: string | ReactNode
	onClick?: () => void
}

// fill button component
const FillButton = ({ variant, color, children, ...props } : ButtonInterface ) =>  {
	return (
		<button className={`text-sm ${ variant } outline-none py-2 px-4 rounded-md`} {...props}>{ children }</button>
	)
}

// Outline button component
const PillButton = ({ variant, color, children, ...props } : ButtonInterface ) => {
	return (
		<button className={`text-sm ${ variant } outline-none py-2 px-4 rounded-full`} {...props}>{ children }</button>
	)
}

export { FillButton, PillButton }
