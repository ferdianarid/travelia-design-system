import React from "react"
import Input from "../components/Input"

export default {
       title: "Component/Input",
       component: Input
}

// small input component
export const SmallInput = () => <Input widthSize={"72"} heightSize={"8"} textSize={"sm"} placeholder="Input your email address" />

// medium input component
export const LargeInput = () => <Input widthSize={"80"} heightSize={"10"} textSize={"base"} placeholder="Input your email address" />