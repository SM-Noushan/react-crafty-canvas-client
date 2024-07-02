import { Typewriter } from "react-simple-typewriter";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Aboutus = () => {
  return (
    <div>
      <div className="text-2xl">
        <Typewriter
          cursor
          cursorBlinking
          delaySpeed={500}
          deleteSpeed={25}
          // loop={0}
          typeSpeed={75}
          words={[
            "Art begins with the heart and using eyes, sees everything as it is. It is noticing and appreciating which is the basis for any creation.",
          ]}
        />
      </div>
      <div className="hero mt-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1 w-full">
            <Fade duration={5000} triggerOnce>
              <img
                src="https://images.unsplash.com/photo-1518732836484-bd257665c9d1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-lg brightness-75 h-80 md:h-96 w-full object-cover object-center lg:h-auto"
              />
            </Fade>
          </div>
          <div className="flex-1 pr-12">
            <Slide direction="right" triggerOnce>
              <h1 className="text-5xl font-bold">Crafty Craft</h1>
            </Slide>
            <Slide triggerOnce>
              <p className="py-6 text-justify">
                Welcome to Crafty Craft - your home for handmade treasures!
                We&apos;re passionate about creativity and craftsmanship,
                curating a collection that celebrates the beauty of handmade
                artistry. From jewelry to home decor, each piece is thoughtfully
                crafted with care. Join our vibrant community of artisans and
                enthusiasts as we share in the joy of creativity. Welcome to
                Crafty Craft - where every creation tells a story and every
                artist finds a home.
              </p>
            </Slide>
            <Fade duration={5000} triggerOnce>
              <img
                src="https://i.ibb.co/yNy0Zxj/crafty-canvas-signature.png"
                alt="crafty-canvas-signature"
                className="w-52 -rotate-12 mb-4 relative -left-8 -z-10"
              />
            </Fade>
            <h2 className="text-2xl mb-4">The Work of Art</h2>
            <Zoom cascade direction="u" triggerOnce>
              <div>
                <h3>Landscape Painting</h3>
                <progress
                  className="progress w-56"
                  value="60"
                  max="100"
                ></progress>
              </div>
              <div>
                <h3>Portrait Drawing</h3>
                <progress
                  className="progress w-56"
                  value="50"
                  max="100"
                ></progress>
              </div>
              <div>
                <h3>Watercolor Painting</h3>
                <progress
                  className="progress w-56"
                  value="55"
                  max="100"
                ></progress>
              </div>
              <div>
                <h3>Oil Painting</h3>
                <progress
                  className="progress w-56"
                  value="40"
                  max="100"
                ></progress>
              </div>
              <div>
                <h3>Charcoal Sketching</h3>
                <progress
                  className="progress w-56"
                  value="63"
                  max="100"
                ></progress>
              </div>
              <div>
                <h3>Cartoon Drawing</h3>
                <progress
                  className="progress w-56"
                  value="66"
                  max="100"
                ></progress>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
