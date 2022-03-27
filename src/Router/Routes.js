import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router';

// PACKAGES
import styled from 'styled-components';

// MIDDLEWARES
import {
  NonPrivateRoute,
  PrivateRoute,
} from './Utils';

// PAGES
import MainPage from '../Pages/MainPage/MainPage';
import PostContent from '../Pages/PostContent/PostContent';
import AddPost from '../Pages/PostContent/AddPost';


const Wrapper = styled.div`
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
        @media (max-width: 775px) {
            width:100%;
            margin-left:0;
        };
`;

const AddPostWrapper = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;


const Routes = memo(function Routes() {
  const location = useLocation();

  const NonPrivate = [
    // {
    //   exact: true,
    //   path: '/',
    //   component: <Home />,
    // },
  ];

  const Private = [
  ];

  const General = [
    {
      exact: true,
      path: '/',
      component: <MainPage />,
    },
    {
      path: '/blog/:path',
      component: <PostContent flag={location.state} />,
    },
  ];

  return (
    <Route>
      <AddPostWrapper>
        <AddPost />
      </AddPostWrapper>

      <Switch>
        {NonPrivate.map((route, i) =>
          <NonPrivateRoute exact={route.exact} key={i} path={route.path}>
            {route.component}
          </NonPrivateRoute>
        )}

        {Private.map((route, i) =>
          <PrivateRoute exact={route.exact} key={i} path={route.path}>
            {route.component}
          </PrivateRoute>
        )}

        {General.map((route, i) =>
          <Route key={i} exact={route.exact} path={route.path}>
            {route.component}
          </Route>
        )}


        <Route path="*">
          <Wrapper>
            <h1 style={{ fontSize: "200px", color: 'var(--text2)', margin: '0' }}> 404 </h1><br></br>
            <h1 style={{ fontSize: "20px", color: 'var(--text2)' }}> Page not found </h1><br></br>
          </Wrapper>
        </Route>
      </Switch>
    </Route >
  )
});

export default Routes;