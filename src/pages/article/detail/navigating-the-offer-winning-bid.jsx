import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const ArticleWinningBid = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  const articleDate = new Date().toISOString().split('T')[0];

  return (
    <Fragment>
      <Layout
        step={step}
        title="Navigating the Offer Process"
        description="Professional tips for crafting a winning bid when buying a home."
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
                    Navigating the Offer: Pro Tips for a Winning Home Bid
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
                        You've found the perfect home – now comes the crucial step of making an offer. In a competitive market, crafting a compelling bid is essential. Here are some professional tips to help you navigate the offer process and increase your chances of success.
                      </p>
                      <h3 className="text__32">
                        Understanding the Seller's Perspective
                      </h3>
                      <div className="">
                        <p className="text__20">
                         Before writing your offer, try to understand the seller's motivations. Are they looking for a quick sale? Is price the most important factor, or are they concerned about a smooth closing? Knowing this can help you tailor your offer to be more attractive.
                        </p>
                      </div>
                      <img
                        src={originalUrl + "offer-handshake.png"} // Placeholder image
                        className="w-full object-cover rounded-md"
                        alt="Handshake sealing a deal"
                      />
                    </div>
                  </WrapAnimateUp>
                  <h5 className="text__24">Tip 1: Get Pre-Approved for a Mortgage</h5>
                  <p className="text__20">
                    This is non-negotiable in today's market. A mortgage pre-approval letter shows sellers that you are a serious, financially capable buyer. It strengthens your offer and can give you an edge over buyers who haven't taken this step.
                  </p>

                  <h5 className="text__24">Tip 2: Make a Competitive Offer (But Be Smart)</h5>
                  <div className="">
                    <p className="text__20">
                      Your offer price should be competitive, based on current market conditions and comparable sales (comps) in the area. I can help you analyze this data to determine a strong offer. While it's tempting to go in low, an offer that's significantly under market value might not be taken seriously, especially in a seller's market.
                    </p>
                  </div>
                  
                  <h5 className="text__24">Tip 3: Consider Your Contingencies Wisely</h5>
                  <p className="text__20">
                    Contingencies (like financing, appraisal, and inspection) protect you, but too many can weaken your offer. Discuss with me which contingencies are most important for your situation and which, if any, you might be comfortable waiving or shortening to make your bid more appealing. This is a strategic decision that requires careful consideration.
                  </p>
                   <img
                        src={originalUrl + "offer-document.png"} // Placeholder image
                        className="w-full object-cover rounded-md"
                        alt="Offer document with pen"
                      />

                  <h5 className="text__24">Tip 4: Write a Personal Letter (Optional but Powerful)</h5>
                  <div className="">
                    <p className="text__20">
                     Sometimes, an emotional connection can tip the scales. A heartfelt letter to the seller explaining why you love their home and how you envision your life there can make your offer stand out, especially if there are multiple similar bids.
                    </p>
                  </div>
                  <h5 className="text__24">Tip 5: Be Prepared to Negotiate</h5>
                  <div className="">
                    <p className="text__20">
                      The seller might counter your offer. It's important to have a clear idea of your maximum budget and your priorities before negotiations begin. I will guide you through this process, helping you respond strategically and timely.
                    </p>
                    <p className="text__20">
                      Making a winning offer is both an art and a science. With the right preparation and expert guidance, you can navigate the process with confidence and secure the home of your dreams.
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
                  <h5 className="text__20 md:text__24">Staging Your Home to Sell</h5>
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
                  <h5 className="text__20 md:text__24">Finding Your Neighborhood Gem</h5>
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
                  <h5 className="text__20 md:text__24">The 2% Commission Advantage</h5>
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

export default ArticleWinningBid; 