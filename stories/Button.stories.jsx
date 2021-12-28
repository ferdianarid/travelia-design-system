import React from "react"
import { FillButton } from "../components/Button"

export default {
	title: "Component/Button/Fill Button",
	component: FillButton,
	argTypes: { onClick: { action: 'clicked' } }
}


// const Template = args => <FillButton {...args} />

// export const PrimaryBind = Template.bind({})
// PrimaryBind.args = {
// 	variant: "primary",
// 	children: "Primary Args"
// }

// button primary
export const PrimaryButton = () => <FillButton variant="primary">Primary Button</FillButton>

// button secondary
export const SecondaryButton = () => <FillButton variant="secondary">Secondary Button</FillButton>

// button danger
export const DangerButton = () => <FillButton variant="danger">Danger Button</FillButton>

// button warning
export const WarningButton = () => <FillButton variant="warning">Warning Button</FillButton>

// button success
export const SuccessButton  = () => <FillButton variant="success">Success Button</FillButton>

// button dark
export const DarkButton = () => <FillButton variant="dark">Dark Button</FillButton>

// button information
export const InformationButton = () => <FillButton variant="information">Information Button</FillButton>