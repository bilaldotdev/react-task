import { lazy, Suspense } from 'react';
import { BrowserRouter, useLocation, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Container from '../components/Container';
import Navbar from '../components/Navbar';

const ListTasks = lazy(() => import('../pages/tasks/list-tasks'));
const CreateTask = lazy(() => import('../pages/tasks/create-task'));
const BulkDelete = lazy(() => import('../pages/tasks/bulk-delete'));

const NotFound = lazy(() => import('../pages/404'));

const RootElement = () => {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return (
      <>
        <Navbar />
        <Navigate replace to="list-tasks" />
        <Outlet />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const Router = () => {
  return (
    <Container>
      <Suspense fallback="Loading...">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootElement />}>
              <Route path="list-tasks" element={<ListTasks />} />
              <Route path="create-task" element={<CreateTask />} />
              <Route path="bulk-delete" element={<BulkDelete />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Container>
  );
};

export default Router;
