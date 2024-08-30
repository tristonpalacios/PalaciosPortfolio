const photos = [
  {
    src: "/assets/images/loaders/Tagilla.png",
    width: 1080,
    height: 720,
    alt: "Photo by Diego Guzmán",
  },
  {
    src: "/assets/images/loaders/PropitalAmmo1.png",
    width: 1080,
    height: 720,
    alt: "Photo by Diego Guzmán",
  },
];
const Contact = () => {
  return (
    <section className="section contact" id="Contact">
      <div className="contact_wrapper">
        <div className="contact__header">
          <div className="section__header--title">
            <div className="section__header--subtitle">
              <div className="contact__form">
                <h1 className="projects__header">Contact Me!</h1>
                <form
                  className="form"
                  action="https://formspree.io/f/meojabrr"
                  method="POST"
                >
                  <div className="form__flex">
                    <div className="form__info">
                      <label htmlFor="Name">Hello, I am</label>
                      <input
                        type="text"
                        name="Name"
                        id="Name"
                        placeholder="Your Name Here"
                        required
                      />
                    </div>
                    <div className="form__info">
                      <label htmlFor="Service"> and I need</label>
                      <input
                        type="text"
                        name="Service"
                        id="Service"
                        placeholder="Type of Service"
                        required
                      />
                    </div>
                  </div>
                  <div className="form__flex">
                    <div className="form__info">
                      <label htmlFor="Email">Get in touch with me at</label>
                      <input
                        type="text"
                        name="Email"
                        id="Email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form__flex">
                    <textarea
                      name="Message"
                      placeholder="Additional Info"
                      id=""
                    ></textarea>
                  </div>
                  <div className="form__flex">
                    <button className="animButton">
                      <span>
                        Send <i className="uil uil-message"></i>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="contact__profile">
                <div className="contact__profile--item">
                  <img
                    src="/assets/images/loaders/SELFIE.JPG"
                    alt="Triston Palacios"
                  />
                  <div className="contact__profile--col">
                    <b>Triston Palacios</b>
                    <span>Software Engineer</span>
                  </div>
                </div>
                <div className="contact__profile--item">
                  <div className="contact__profile--bg"></div>
                  <div className="contact__profile--col">
                    <b>Email</b>
                    <span>triston.j.palacios@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
