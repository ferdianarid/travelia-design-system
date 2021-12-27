import React from "react"
import Alert from "../components/Alert"

export default {
       title: "Alert",
       component: Alert
}

// Primary Alert
export const PrimaryAlert = () => <Alert variant="primary" outline="outline-blue">Welcome to Dashboard Page</Alert>

// Secondary Alert
export const SecondaryAlert = () => <Alert variant="secondary">Click for more information</Alert>

// Danger Alert
export const DangerAlert = () => <Alert variant="danger" outline="outline-red">Sorry, failed to save an informations</Alert>

// Warning Alert
export const WarningAlert = () => <Alert variant="warning" outline="warning">Please check and fill all required form first</Alert>

// Success Alert
export const SuccessAlert = () => <Alert variant="success" outline="outline-green">Successfully purchase a package</Alert>

// Dark Alert
export const DarkAlert = () => <Alert variant="dark" outline="dark">Read more information</Alert>

// Information Alert
export const InformationAlert = () => <Alert variant="information">Subscribe for more information</Alert>