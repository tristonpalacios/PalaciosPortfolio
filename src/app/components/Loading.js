const Loading = () => {
  return (
    <div className="loading">
      {" "}
      <img
        src="/assets/images/loaders/vLogo.png"
        alt="Hero Image"
        className="loading__svg"
      />
      <div className="loading__box">
        <div className="loading__text">
          <div className="loading__text--border loading__width_animation"></div>
          LOADING EXPERIENCE
        </div>
        <div className="loading__bar">
          <div className="loading__counter">
            <span>0%</span>
            <div className="loading__counter--number">100%</div>
          </div>
          <div className="loading__bar--inner"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
