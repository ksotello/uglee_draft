import React from 'react';
import { Header } from './components';
import {
  ComingSoon,
  HowItWorks,
  Signup,
  WritingTasks
} from './sections';

export default () => (
  <div className="App">
    <Header />
    <ComingSoon />
    <HowItWorks />
    <WritingTasks />
    <Signup />
  </div>
);
