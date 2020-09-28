import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import MemberChild from "../member/MemberChild";

const Member = () => {
  return (
    <div className="member-page">
      <Header />
      <div className="main">
        <MemberChild />
      </div>
      <Footer />
    </div>
  );
};
export default Member;
