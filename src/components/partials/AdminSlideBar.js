import React from "react";
import { Link } from "react-router-dom";
import { ADMIN_SLIDE_BAR } from "../../constants/adminSlideBar";

export default function AdminSlideBar() {
  return (
    <div className="admin-slide-bar">
      <ul>
        {ADMIN_SLIDE_BAR.map((e, i) => (
          <li key={i}>
            <Link to={e.to}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
