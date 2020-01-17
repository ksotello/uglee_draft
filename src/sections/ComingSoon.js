import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Section } from '../components';

export default () => (
    <Section heading="Coming Soon" className="coming-soon --shadowed-text --white-text">
        <Box>
            <blockquote>
                <Typography variant="h4">Let Go - Get into the flow</Typography>
                <Typography variant="body1">
                    Live your life, take chances, be crazy. Don’t wait ‘cause right now is the oldest you’ve ever been
                    And the youngest you’ll be ever again.
                </Typography>
                <div><Typography variant="body1">~ Suzanne Collins</Typography></div>
            </blockquote>
        </Box>
    </Section>
)