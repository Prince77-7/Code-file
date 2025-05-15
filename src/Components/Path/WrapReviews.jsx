import React, { Fragment } from "react";
import AccordionReview from "./AccordionReview";
import { Container } from "react-bootstrap";
import useHostname from "../Provider/HostnameProvider";

const WrapReviews = () => {
  const originalUrl = useHostname() + "/images/";
  return (
    <Fragment>
      <section>
        <Container>
          <h5 className="text__24 opacity-40 mb-[36px]">CLIENT TESTIMONIALS</h5>
          {[
            {
              title: "The Johnsons (Sold Home)",
              service: ["SELLER REPRESENTATION", "2% COMMISSION"],
              img: originalUrl + "Client logo.png",
              desc: "Waiel sold our home in record time and saved us thousands with his 2% commission! The professional photos and custom website he created were outstanding. Highly recommend!",
              name: "Michael & Jessica Johnson",
              subname: "Home Sellers in Sunnyvale",
            },
            {
              title: "David K. (Bought Home)",
              service: ["BUYER REPRESENTATION"],
              img: originalUrl + "asdasd.png",
              desc: "As a first-time buyer, Waiel made the process so easy. He was patient, knowledgeable, and helped me find the perfect place. His negotiation skills were top-notch.",
              name: "David Kim",
              subname: "First-Time Home Buyer",
            },
            {
              title: "Sarah & Tom P. (Sold & Bought)",
              service: ["SELLER & BUYER REPRESENTATION", "PROPERTY MARKETING"],
              img: originalUrl + "sdasd.png",
              desc: "We used Waiel to sell our old house and buy our new one. The 2% fee on the sale was a huge plus, and his marketing for our listing was incredible. He found us our dream home quickly. A true professional!",
              name: "Sarah & Tom Peterson",
              subname: "Repeat Clients",
            },
            {
              title: "The Lee Family (Investment)",
              service: ["INVESTMENT CONSULTATION", "MARKET ANALYSIS"],
              img: originalUrl + "dssds.png",
              desc: "Waiel\'s insight into the local market helped us find a great investment property. His honest advice and low fees made all the difference. We\'ll definitely work with him again.",
              name: "James & Emily Lee",
              subname: "Real Estate Investors",
            },
          ].map((obj) => {
            return (
              <AccordionReview
                title={obj.title}
                service={obj.service}
                img={obj.img}
                desc={obj.desc}
                name={obj.name}
                subname={obj.subname}
              />
            );
          })}
        </Container>
      </section>
    </Fragment>
  );
};

export default WrapReviews;
