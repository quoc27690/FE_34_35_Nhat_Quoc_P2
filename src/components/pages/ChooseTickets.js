import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import ChooseTicketChild from "../chooseticket/ChooseTicketChild";

const ChooseTickets = () => {
  return (
    <div className="choose-ticket-pages">
      <Header />
      <ChooseTicketChild />
      <Footer />
    </div>
  );
};
export default ChooseTickets;
