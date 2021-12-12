import React from 'react'
import "../styles/components/button.module.css"

interface ButtonInterface {
	variant?: string,
	children?: string,
	outline?: string,
	onClick?: () => void
}

const ButtonPrimary = ({ variant, children, ...props } : ButtonInterface ) =>  {
	return (
		<button className={`button ${ variant }`} {...props}>{ children }</button>
	)
}

const ButtonSecondary = ({ variant, children, ...props } : ButtonInterface ) =>  {
	return (
		<button className={`button ${ variant }`} {...props}>{ children }</button>
	)
}

export { ButtonPrimary, ButtonSecondary }
