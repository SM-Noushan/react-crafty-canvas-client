import { Typewriter } from "react-simple-typewriter";
const Feedback = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 mb-12">
      <div className="flex flex-col justify-center gap-12">
        <div className="space-y-2">
          <h2 className="text-xl font-bold leading-tight lg:text-4xl">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={["Greetings,", "Let's hear from you."]}
            />
          </h2>
        </div>
        <img
          src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-52 md:h-64 rounded-md"
        />
      </div>
      <form className="space-y-6 border-2 p-8">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            placeholder="your name"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="your email"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <textarea
            type="email"
            placeholder="your message"
            className="textarea textarea-bordered textarea-lg w-full"
          />
        </label>
        <button
          type="submit"
          className="btn w-full btn-outline font-bold tracking-wide uppercase rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Feedback;
