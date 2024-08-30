import Scrollbar from "smooth-scrollbar";
import Link from "next/link";

const Header = () => {
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const scrollbar = Scrollbar.get(document.body);
      scrollbar.scrollIntoView(target, {
        damping: 0.1,
        offsetTop: 0,
      });
    }
  };

  return (
    <header className="header">
      <div className="header__wrap">
        <ul className="header__left">
          <li>
            <a
              href="#Projects"
              onClick={(e) => handleLinkClick(e, "#Projects")}
              className="animLink"
              data-text="Projects"
            >
              <span>Projects</span>
            </a>
          </li>
        </ul>
        <ul className="header__right">
          <button
            onClick={(e) => handleLinkClick(e, "#Contact")}
            className="animButton"
          >
            <span>Contact</span>
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
