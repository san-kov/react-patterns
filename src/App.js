import React from 'react';
import styled from 'styled-components';

import CompoundComponents from './compound-components';

const AuthWrapper = styled.div`
  max-width: 400px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212121;
`;

const App = () => {
  return (
    <AuthWrapper>
      <CompoundComponents />
    </AuthWrapper>
  );
};

export default App;
