import React from "react";

interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card = ({title, children, className = ''}: CardProps) => (
    <article className={`card ${className}`}>
        <h3>{title}</h3>
        <div>{children}</div>
    </article>
);

export default Card;