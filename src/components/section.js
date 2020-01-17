import React from 'react';
import { Typography } from '@material-ui/core';

import './section.css';

export default ({ heading, children, className }) => (
    <section className={`section${className !== undefined ? ` ${className}` : ``}`}>
        <Typography variant="h3">{heading}</Typography>
        {React.Children.only(children)}
    </section>
);
