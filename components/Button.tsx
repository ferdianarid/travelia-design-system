import React from 'react'
import "../styles/components/button.module.css"

interface ButtonInterface {
	variant: string,
	children?: string,
	outline?: string,
	className?: string,
	onClick?: () => void
}

const Button = ({ variant, children, ...props } : ButtonInterface ) =>  {
	return (
		<button className={`button ${ variant }`} {...props}>{ children }</button>
	)
}

export  default Button
