import React from "react";

interface SectionProps {
    title: string;
    children: React\.ReactNode;
}

const Section = ({title, children}: SectionProps) => (
    <>
        <h2>{title}</h2>
        {children}
    </>
);

export default Section;