import React from "react"
import Button from "../components/Button"

export default {
	title: "Button",
	component: Button
}

// button primary
export const PrimaryButton = () => <Button variant="primary">Button Primary</Button>

// button secondary
export const SecondaryButton = () => <Button variant="secondary">Button Secondary</Button>

// button danger
export const ButtonDanger = () => <Button variant="danger">Button Danger</Button>

