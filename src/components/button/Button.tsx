import React from "react";

export interface ButtonProps {
    label:string;
    children?:React.ReactNode;
    onClick:()=>void;
}

export const Button=({label,children=<></>,onClick}:ButtonProps) => {
return (
    <button onClick={onClick}>
        {children}
        {label}
        </button>
)
};
