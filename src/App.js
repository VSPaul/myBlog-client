import React, { useEffect } from 'react';

// STYLE
import './globalCss.scss';

// PACKEGES
import styled from 'styled-components';

// ROUTES
import Routes from './Router/Index';

// REDUX
import { useDispatch } from 'react-redux';
import { fetchPosts } from './Store/Actions/postsActions';

const MainWrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto;
    background-color: var(--background2);
    overflow: auto;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <MainWrapper>
      <Routes />
    </MainWrapper>
  );
}

export default App;