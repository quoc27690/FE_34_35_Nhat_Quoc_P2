import React from "react";
import AdminSlideBar from "../partials/AdminSlideBar";
import { Switch, Route } from "react-router-dom";
import routers from "../../routers";
import HeaderTopBar from "../partials/HeaderTopBar";

export default function Admin() {
  const showContent = (routers) => {
    return routers.map((e, i) => (
      <Route key={i} path={e.path} exact={e.exact} component={e.main} />
    ));
  };

  return (
    <div>
      <HeaderTopBar />
      <div className="admin">
        <div className="admin__left">
          <AdminSlideBar></AdminSlideBar>
        </div>
        <div className="admin__right">
          <Switch>{showContent(routers)}</Switch>
        </div>
      </div>
    </div>
  );
}
