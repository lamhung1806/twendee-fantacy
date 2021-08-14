import { RoutersEnum } from "enums/routers";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useMemo } from "react";
import cx from "classnames";

export default function NavBar() {
  const location = useLocation();

  const NAVIGATORS = useMemo(
    () => [
      {
        to: RoutersEnum.DASHBOARD,
        title: "Dashboard",
      },
      {
        to: RoutersEnum.LEAGUE_TABLE,
        title: "League Tables",
      },
      {
        to: RoutersEnum.H2H,
        title: "Head-to-head",
      },
    ],
    []
  );

  return (
    <div className="NavBar">
      <ul>
        {NAVIGATORS.map((link) => (
          <li
            className={cx({
              active: location.pathname === link.to,
            })}
          >
            <Link
              to={link.to}
              className={cx("link", {
                active: location.pathname === link.to,
              })}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
