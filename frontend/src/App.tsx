import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyle from "./styles/GlobalStyle";

import PATH from './constants/path';
import LodingPage from '@pages/LodingPage';

const RootPage = lazy(() => import('@pages/RootPage'));
const HomePage = lazy(() => import('@pages/HomePage'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const MyPage = lazy(() => import('@pages/MyPage'));
const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const SearchPage = lazy(() => import('@pages/SearchPage'));
const SearchResultPage = lazy(() => import('@pages/SearchResultPage'));
const NonExistencePage = lazy(() => import('@pages/NonExistencePage'));


function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Suspense fallback={<LodingPage/>}>
          <Routes>
            <Route path={PATH.ROOT} element={<RootPage/>} />
            <Route path={PATH.HOME} element={<HomePage/>} />
            <Route path={PATH.LOGIN} element={<LoginPage/>} />
            <Route path={PATH.MYPAGE} element={<MyPage/>} />
            <Route path={PATH.SEARCH} element={<SearchPage/>} />
            <Route path={PATH.SEARCH_RESULT} element={<SearchResultPage/>} />
            <Route path={PATH.ERROR_PAGE} element={<ErrorPage/>} />
            <Route path={PATH.NON_EXISTENCE_PAGE} element={<NonExistencePage/>} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
