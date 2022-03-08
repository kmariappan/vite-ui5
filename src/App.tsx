import './App.css';

import { Icon, Label, ThemeProvider, Title, TitleLevel } from '@ui5/webcomponents-react';
import React from 'react';
import { getIcon } from 'utils/sapicons';

function App() {
  return (
    <div>
      <ThemeProvider>
        <div>
          <Title level={TitleLevel.H5}>Hello</Title>
          <Label required>tes</Label>
          <Icon style={{ color: 'red' }} name={getIcon('accept')}></Icon>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
