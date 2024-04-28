import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <section className="my-8 font-yanone-kaffeesatz hero min-h-[calc(100dvh-64px)] bg-[url('https://images.unsplash.com/photo-1527402858-36f052d83df4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center rounded-none bg-opacity-0">
      <div className="hero-overlay bg-opacity-60 rounded-none" />
      <Outlet />
    </section>
  );
};

export default Auth;
