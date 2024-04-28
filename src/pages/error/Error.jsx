import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="h-dvh py-8 sm:p-8 bg-[url('https://i.ibb.co/LNRJ8Cr/404-page-What-a-Story.gif')] bg-no-repeat bg-cover bg-center">
      <div className="text-center sm:text-start">
        <Link to="/" className="btn btn-outline btn-secondary lg:btn-lg">
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default Error;
