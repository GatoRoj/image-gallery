import React from "react";
import Badge from 'react-bootstrap/Badge'
import './Footer.css';
export const Footer = ({text}) =>{
    return(
        <div>
            <Badge bg="dark" className="footer">
                {text}
            </Badge>
        </div>
    )
}