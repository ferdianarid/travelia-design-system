import React from "react"
import { FillButton, PillButton } from "../components/Button"

export default {
	title: "Button",
	component: FillButton, PillButton,
	argTypes: { onClick: { action: 'clicked' } }
}

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

// pill button primary
export const PillPrimary = () => <PillButton variant="primary">Pill Primary Button</PillButton>

// pill button secondary
export const PillSecondary = () => <PillButton variant="secondary">Pill Secondary Button</PillButton>

// pill button danger
export const PillDanger = () => <PillButton variant="danger">Pill Danger Button</PillButton>

// pill button warning
export const PillWarning = () => <PillButton variant="warning">Pill Warning Button</PillButton>

// pill button success
export const PillSuccess = () => <PillButton variant="success">Pill Success Button</PillButton>

// pill button information
export const PillInformation = () => <PillButton variant="information">Pill Information Button</PillButton>

// pill dark button
export const PillDark = () => <PillButton variant="dark">Pill Dark Button</PillButton>