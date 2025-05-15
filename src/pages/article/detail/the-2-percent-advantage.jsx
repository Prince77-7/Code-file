import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const ArticleTwoPercentAdvantage = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  const articleDate = new Date().toISOString().split('T')[0];

  return (
    <Fragment>
      <Layout
        step={step}
        title="The 2% Advantage"
        description="Learn how a 2% commission structure can offer smart savings in today\'s real estate market."
        navbar={true}
      >
        <section>
          <Container>
            <div className="grid-cols-3 grid">
              <div className="col-span-3 lg:col-span-2">
                <WrapAnimateUp step={step}>
                  <Link href={"/article"}>
                    <div className="flex items-center gap-2">
                      <img src={originalUrl + "Back.svg"} alt="Back to articles" />
                      <p className="opacity-40">BACK TO ARTICLES</p>
                    </div>
                  </Link>
                  <h2 className="text__64 my-2">
                    The 2% Advantage: Smart Savings in Today's Real Estate Market
                  </h2>
                  <p className="text__20 opacity-60">{articleDate}</p>
                </WrapAnimateUp>
              </div>
            </div>
            <div className="grid-cols-3 grid mt-[5rem]">
              <div className="lg:col-span-1"></div>
              <div className="col-span-3 lg:col-span-2">
                <div className="opacity-80 grid grid-cols-1 gap-[24px]">
                  <WrapAnimateUp step={step}>
                    <div className=" grid grid-cols-1 gap-[24px]">
                      <p className="text__20">
                        In a competitive real estate market, every dollar counts. That's why understanding commission structures is crucial for both buyers and sellers. My innovative 2% commission rate is designed to put more money back in your pocket without compromising on service or results.
                      </p>
                      <h3 className="text__32">
                        Challenging Traditional Commission Norms
                      </h3>
                      <div className="">
                        <p className="text__20">
                          Traditional real estate commissions can often range from 5% to 6% of the home's sale price. While this has been the standard, it doesn't always reflect the modern efficiencies and capabilities of today's agents. I believe in a fairer, more transparent approach.
                        </p>
                      </div>
                      <img
                        src={originalUrl + "two-percent-hero.png"} // Placeholder image
                        className="w-full object-cover rounded-md"
                        alt="Calculator showing savings"
                      />
                    </div>
                  </WrapAnimateUp>
                  <h5 className="text__24">How Does a 2% Commission Benefit You?</h5>
                  <p className="text__20">
                    Simply put, a lower commission means significant savings. For sellers, this translates to retaining more of your hard-earned equity. For buyers, while commission is typically paid by the seller, a more efficient model can contribute to a smoother overall transaction and potentially more negotiating power for your agent.
                  </p>

                  <h5 className="text__24">Full Service, Not Discounted Service</h5>
                  <div className="">
                    <p className="text__20">
                      It's important to understand that my 2% commission doesn't mean cutting corners. I provide a full suite of premium real estate services, including:
                    </p>
                    <ul className="list-disc list-inside text__20 pl-4">
                        <li>Professional in-house photography to make your listing shine.</li>
                        <li>Custom-designed websites for premium properties, offering unparalleled marketing reach.</li>
                        <li>Expert market analysis and pricing strategy.</li>
                        <li>Skilled negotiation on your behalf.</li>
                        <li>Comprehensive guidance through the entire buying or selling process.</li>
                    </ul>
                    <p className="text__20 mt-3">
                      I achieve this by streamlining my processes, leveraging technology, and handling key marketing aspects like photography and website creation myself, passing those savings directly to you.
                    </p>
                  </div>
                   <img
                        src={originalUrl + "full-service-graphic.png"} // Placeholder image
                        className="w-full object-cover rounded-md"
                        alt="Chart showing full services"
                      />
                  
                  <h5 className="text__24">The Future of Real Estate is Value-Driven</h5>
                  <p className="text__20">
                    Choosing an agent with a 2% commission is a smart financial decision. It's about getting exceptional service and results while maximizing your financial outcome. In a dynamic market, this value proposition is more important than ever.
                  </p>

                  <h5 className="text__24">Ready to Experience the Advantage?</h5>
                  <div className="">
                    <p className="text__20">
                      If you're considering buying or selling, let's discuss how my 2% commission structure and comprehensive services can benefit you. It's time to expect more from your real estate experience – more service, more savings, more satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-0 mt-[5rem]">
          <Container>
            <h5 className="text__24 opacity-40 mb-[36px]">MORE ARTICLES</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="w-full relative overflow-hidden wrapArticleCard">
                <img
                  src={originalUrl + "rr1.png"}
                  className="w-full object-cover h-[200px] md:h-[250px] rounded-md"
                  alt="Related article placeholder"
                />
                <Link
                  href={"#!"}
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300 p-4 bg-black bg-opacity-50 rounded-b-md"
                >
                  <p className="text__16 opacity-80 mb-1">{articleDate}</p>
                  <h5 className="text__20 md:text__24">Maximizing Curb Appeal</h5>
                </Link>
              </div>
              <div className="w-full relative overflow-hidden wrapArticleCard">
                <img
                  src={originalUrl + "rr2.png"}
                  className="w-full object-cover h-[200px] md:h-[250px] rounded-md"
                  alt="Related article placeholder"
                />
                <Link
                  href={"#!"}
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300 p-4 bg-black bg-opacity-50 rounded-b-md"
                >
                  <p className="text__16 opacity-80 mb-1">{articleDate}</p>
                  <h5 className="text__20 md:text__24">Staging Your Home to Sell</h5>
                </Link>
              </div>
              <div className="w-full relative overflow-hidden wrapArticleCard">
                <img
                  src={originalUrl + "rr3.png"}
                  className="w-full object-cover h-[200px] md:h-[250px] rounded-md"
                  alt="Related article placeholder"
                />
                <Link
                  href={"#!"}
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300 p-4 bg-black bg-opacity-50 rounded-b-md"
                >
                  <p className="text__16 opacity-80 mb-1">{articleDate}</p>
                  <h5 className="text__20 md:text__24">Neighborhood Buying Guide</h5>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <BannerContact />
      </Layout>
    </Fragment>
  );
};

export default ArticleTwoPercentAdvantage; 