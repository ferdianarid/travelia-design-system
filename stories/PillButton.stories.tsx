import React from "react"
import { PillButton } from "../components/Button"

export default {
	title: "Component/Button/Pill Button",
	component: PillButton,
	argTypes: { onClick: { action: 'clicked' } }
}

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