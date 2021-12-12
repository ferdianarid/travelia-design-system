import React from "react"
import { ButtonPrimary, ButtonSecondary } from "../components/Button"

export default {
	title: "Button",
	component: ButtonPrimary, ButtonSecondary
}

// button primary
export const PrimaryButton = () => <ButtonPrimary variant="primary">Button Primary</ButtonPrimary>

// button secondary
export const SecondaryButton = () => <ButtonSecondary variant="secondary">Button Secondary</ButtonSecondary>