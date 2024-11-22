import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <>
      <span className="text-4xl text-primary">
        Welcome
        <Outlet />
      </span>
    </>
  );
}
export default HomeLayout;
