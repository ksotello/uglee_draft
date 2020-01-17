import React from 'react';
import { Box, Typography, Card } from '@material-ui/core';
import { Section } from '../components';

export default () => (
    <Section heading="Writing Tasks" className="writing-tasks --shadowed-text --white-text">
        <Box>
            <Card>
                <Typography variant="body1">
                    Your place is on fire!  You have about 5 to 10 seconds to grab what you value before you escape.  What is it that you value?  Is it there in the house? Why do you value it? 
                </Typography>
            </Card>

            <Card>
                <Typography variant="body1">
                    Your character’s abode has the same fate. What does your character value the most to save?  Is there anything in there to save? Tell us why your character value it.  
                </Typography>
            </Card>
            
            <Card>
                <Typography variant="body1">
                    Take each of your protagonist, antagonist, and villain through this exercise to determine what each of your character values and what drives them to save or leave behind.  This value drives their actions and choices.  
                    What has happened in their life to make this choice?
                </Typography>
            </Card>
        </Box>
    </Section>
)