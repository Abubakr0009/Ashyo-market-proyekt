import { ReactNode } from "react";

export interface ButtonType {
    icon?:ReactNode,
    iconPosition?:"left" | "right", // Literal Types 
    title?:string,
    extrStyle?:string
}