import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Section } from '../components';

export default () => (
    <Section heading="How it Works" className="how-it-works">
        <Box>
            <Typography variant="h4">How do you get into the writing flow?</Typography>
            <Typography variant="body1">By getting out of your own way and write without fear or doubt blocking you.</Typography>

            <Typography variant="body1">
                Uglee Draft is a story development tool that breaks your writing project
                into small manageable tasks and incentivizes your progress to help you write an ugly draft.
            </Typography>

            <ol>
                <li><Typography variant="body1">Create a profile to know your WHY.</Typography></li>
                <li><Typography variant="body1">Pick a 30-day challenge - a Random or Story Elements project will help to unearth your story or characters.</Typography></li>
                <li><Typography variant="body1">Choose your Champions to motivate you to keep moving forward. Your progress will be tracked on a dashboard and shared with them.</Typography></li>
                <li><Typography variant="body1">Grab a box or crate – fill it with your tools (ie: notebook, sketchbook, pens, gel crayons) and all the things that you will collect for your project.</Typography></li>
                <li><Typography variant="body1">Receive a daily practice of exercise tasks and prompts (writing, art, interactive).  Be afraid. Be very afraid while laughing in the face of imaginative danger!</Typography></li>
                <li><Typography variant="body1">Make a choice. Choose to Accept or Ignore your task each day. Yes, snarky Owl messages will be sent to you.  Choose wisely! Otherwise…</Typography></li>
                <li><Typography variant="body1">Be part of a journey of self-discovery and the story you will write.</Typography></li>
            </ol>
        </Box>
    </Section>
)