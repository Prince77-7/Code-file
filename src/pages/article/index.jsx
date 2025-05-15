import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const Index = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  const articleDate = new Date().toISOString().split('T')[0];

  const articles = [
    {
      date: articleDate,
      img: originalUrl + "thumb-curb-appeal.png",
      title: "Maximizing Curb Appeal: First Impressions That Sell Homes Fast",
      desc: "Boost your home's first impression with essential curb appeal tips for a faster sale at a better price.",
      link: "/article/detail/maximizing-curb-appeal",
    },
    {
      date: articleDate,
      img: originalUrl + "thumb-2-percent.png",
      title: "The 2% Advantage: Smart Savings in Today's Real Estate Market",
      desc: "Discover how my 2% commission structure provides full service while maximizing your savings in real estate.",
      link: "/article/detail/the-2-percent-advantage",
    },
    {
      date: articleDate,
      img: originalUrl + "thumb-neighborhood.png",
      title: "Beyond the Listing: How to Find Your Perfect Neighborhood Gem",
      desc: "Explore tips for looking beyond property listings to find a neighborhood that truly fits your lifestyle.",
      link: "/article/detail/finding-your-neighborhood-gem",
    },
    {
      date: articleDate,
      img: originalUrl + "thumb-staging.png",
      title: "Staging Secrets: Transform Your Home into a Show-Stopper",
      desc: "Unlock home staging secrets to captivate buyers and turn your property into an irresistible show-stopper.",
      link: "/article/detail/staging-secrets-show-stopper",
    },
    {
      date: articleDate,
      img: originalUrl + "thumb-winning-bid.png",
      title: "Navigating the Offer: Pro Tips for a Winning Home Bid",
      desc: "Gain an edge with professional tips for crafting a compelling offer and successfully navigating the home bidding process.",
      link: "/article/detail/navigating-the-offer-winning-bid",
    },
    {
      date: articleDate,
      img: originalUrl + "thumb-market-trends.png",
      title: "The Essential Guide to Understanding Your Local Housing Market Trends",
      desc: "A deep dive into analyzing market indicators, seasonality, and inventory to make informed real estate decisions.",
      link: "/article/detail/understanding-local-market-trends",
    },
    {
      date: articleDate,
      img: originalUrl + "thumb-first-home-journey.png",
      title: "Navigating Your First Home Purchase: A Comprehensive Step-by-Step Journey",
      desc: "A detailed walkthrough for first-time homebuyers, from financial planning to closing the deal on your dream home.",
      link: "/article/detail/first-home-purchase-journey",
    },
    {
      date: articleDate,
      img: originalUrl + "thumb-selling-smart.png",
      title: "Selling Smart: Advanced Strategies to Maximize Your Home's Value in Any Market",
      desc: "Beyond staging: explore advanced pricing, negotiation, and marketing strategies to get the best return on your property.",
      link: "/article/detail/selling-smart-maximizing-value",
    },
  ];

  return (
    <Fragment>
      <Layout
        step={step}
        title="In-Depth Real Estate Articles & Insights"
        description="Explore comprehensive articles on buying, selling, market trends, and maximizing property value."
        navbar={true}
      >
        <section>
          <Container>
            <WrapAnimateUp step={step} className="pt-[40px] md:pt-[80px]">
              <h1 className="text-[40px] md:text-[46px] lg:text-[64px] xl:text-[80px] my-4 text-center">My Real Estate Articles</h1>
              <p className="text__20 opacity-60 text-center mb-[40px] md:mb-[60px]">Insights, tips, and advice for your property journey.</p>
            </WrapAnimateUp>
          </Container>
          <WrapAnimateUp step={step}>
            <div className="grid grid-cols-1">
              {articles.map((obj, index) => {
                return (
                  <div className="py-[40px] border-b !border-Mneutral_200" key={index}>
                    <Container>
                      <div className="grid grid-cols-1 md:grid-cols-8 gap-[24px] xl:gap-[64px] items-center">
                        <div className="md:col-span-2 xl:col-span-1">
                          <p className="text__18 opacity-40 md:text-left text-center mb-2 md:mb-0">{obj.date}</p>
                        </div>
                        <div className="md:col-span-3">
                          <Link href={obj.link}>
                            <img
                              src={obj.img}
                              className="object-cover w-full h-[200px] md:h-auto rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
                              alt={obj.title}
                            />
                          </Link>
                        </div>
                        <div className="md:col-span-3 xl:col-span-4 flex flex-col gap-4 justify-between h-full">
                          <div className="">
                            <Link href={obj.link} className="no-underline hover:no-underline">
                              <h4 className="text__32 md:text__40 mb-2 text-Mneutral_900 hover:text-Mprimary">{obj.title}</h4>
                            </Link>
                            <p className="text__18 opacity-60 line-clamp-3">{obj.desc}</p>
                          </div>
                          <div className="self-start mt-auto">
                            <Link
                              href={obj.link}
                              className="inline-block text__18 px-[24px] py-[14px] rounded-full border !border-Mneutral_900 hover:bg-Mneutral_900 hover:text-white transition-colors duration-300"
                            >
                              READ ARTICLE
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Container>
                  </div>
                );
              })}
            </div>
          </WrapAnimateUp>
        </section>

        <BannerContact />
      </Layout>
    </Fragment>
  );
};

export default Index;
