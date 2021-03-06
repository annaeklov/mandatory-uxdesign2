import React from "react";
import { Link } from "react-router-dom";
import FocusTrap from "focus-trap-react";

export default function Sidebar({ sidebarIsOpen, onClickMask, onClickLink }) {
  let className = "Sidebar";

  if (!sidebarIsOpen) {
    className += " Sidebar--closed";
  }

  return (
    <FocusTrap active={sidebarIsOpen} paused={!sidebarIsOpen}>
      <div>
        {sidebarIsOpen && (
          <label onClick={onClickMask} className="Sidebar__mask">
            <button
              aria-label="Close menu"
              className="Sidebar__mask-button"
            ></button>
          </label>
        )}
        <aside
          className={className}
          aria-label="the sidebar with three links"
          role="navigation"
        >
          <h1>Menu</h1>
          <ul className="Sidebar__menu" role="navigation">
            <li className="Sidebar__menu-item">
              <Link
                to={"/"}
                className="Sidebar__menu-link"
                onClick={onClickLink}
              >
                <i
                  className="fas fa-play-circle
"
                ></i>
                Quiz
              </Link>
            </li>
            <li className="Sidebar__menu-item">
              <Link
                to={"/stats"}
                className="Sidebar__menu-link"
                onClick={onClickLink}
              >
                <i className="fas fa-chart-bar"></i>
                Stats
              </Link>
            </li>
            <li className="Sidebar__menu-item">
              <Link
                to={"/about"}
                className="Sidebar__menu-link"
                onClick={onClickLink}
              >
                <i className="fas fa-info-circle"></i>
                About
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </FocusTrap>
  );
}
