import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const ArticleMarketTrends = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  const articleDate = new Date().toISOString().split('T')[0];

  return (
    <Fragment>
      <Layout
        step={step}
        title="Understanding Local Housing Market Trends"
        description="An essential guide to analyzing and understanding the trends in your local housing market for informed real estate decisions."
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
                    The Essential Guide to Understanding Your Local Housing Market Trends
                  </h2>
                  <p className="text__20 opacity-60">{articleDate}</p>
                </WrapAnimateUp>
              </div>
            </div>
            <div className="grid-cols-3 grid mt-[5rem]">
              <div className="lg:col-span-1"></div>
              <div className="col-span-3 lg:col-span-2">
                <div className="opacity-80 grid grid-cols-1 gap-[32px]"> {/* Increased gap for longer content */}
                  
                  <WrapAnimateUp step={step}>
                    <div className="grid grid-cols-1 gap-[24px]">
                      <p className="text__20 italic">
                        The real estate market is a dynamic environment, constantly influenced by a myriad of factors. Whether you're looking to buy your dream home, sell a cherished property, or make a savvy investment, a clear understanding of your local housing market trends is paramount. This guide will equip you with the knowledge to interpret market signals and make informed decisions.
                      </p>
                      <img
                        src={originalUrl + "market-trends-hero.png"} // Placeholder image
                        className="w-full object-cover rounded-md shadow-md"
                        alt="Graph showing housing market trends"
                      />
                    </div>
                  </WrapAnimateUp>

                  <h3 className="text__32 font-semibold border-b pb-2">Key Market Indicators: What to Watch</h3>
                  <p className="text__20">
                    Several key metrics provide insights into the health and direction of a housing market. Understanding these indicators is the first step to becoming a market-savvy participant:
                  </p>
                  <ul className="list-disc list-inside text__20 pl-4 space-y-2">
                    <li><strong>Median Sale Price:</strong> This is the midpoint of all homes sold in a given period. Tracking its movement (up or down) indicates general price trends and affordability.</li>
                    <li><strong>Average Days on Market (DOM):</strong> This measures how long homes typically stay listed before selling. A low DOM suggests a seller's market (high demand), while a high DOM indicates a buyer's market.</li>
                    <li><strong>Months of Supply (Inventory):</strong> This metric tells you how many months it would take to sell all currently listed homes at the current sales pace. Generally, 4-6 months is considered a balanced market. Fewer months indicate a seller's market; more months suggest a buyer's market.</li>
                    <li><strong>Sale-to-List Price Ratio:</strong> This compares the final sale price to the original list price. A ratio near or above 100% often signifies strong buyer competition.</li>
                    <li><strong>Number of Homes Sold:</strong> The volume of sales can indicate overall market activity and confidence.</li>
                  </ul>

                  <h3 className="text__32 font-semibold border-b pb-2">The Impact of Seasonality</h3>
                  <div className="space-y-3 text__20">
                    <p>
                      Real estate markets often exhibit seasonal patterns. Spring and early summer are traditionally the busiest times, with more buyers and sellers entering the market. This can lead to increased competition and potentially higher prices.
                    </p>
                    <p>
                      Conversely, the fall and winter months may see a slowdown in activity. However, sellers during these periods are often more motivated, and buyers may face less competition. Understanding these seasonal shifts in your specific local area can help you time your transaction strategically.
                    </p>
                  </div>
                  <img
                        src={originalUrl + "market-seasonality.png"} // Placeholder image
                        className="w-full object-cover rounded-md shadow-md"
                        alt="Visual representation of market seasonality"
                      />

                  <h3 className="text__32 font-semibold border-b pb-2">Decoding Supply and Demand</h3>
                  <div className="space-y-3 text__20">
                    <p>
                      At its core, real estate is driven by supply (the number of homes for sale) and demand (the number of buyers looking to purchase). When demand outpaces supply, it's a seller's market, characterized by rising prices and quick sales. When supply exceeds demand, it becomes a buyer's market, where buyers have more negotiating power and prices may soften.
                    </p>
                    <p>
                      Factors influencing supply include new construction rates, homeowners' willingness to sell, and foreclosure activity. Demand is affected by population growth, employment rates, mortgage interest rates, and overall economic confidence.
                    </p>
                  </div>

                  <h3 className="text__32 font-semibold border-b pb-2">The Role of Mortgage Interest Rates</h3>
                   <div className="space-y-3 text__20">
                    <p>
                      Mortgage interest rates play a significant role in housing affordability and, consequently, market demand. Lower rates make borrowing cheaper, often stimulating buyer activity. Conversely, rising rates can cool down a hot market by increasing the cost of homeownership.
                    </p>
                     <p>
                      It's crucial to not only look at the current rates but also understand the forecast and how potential changes could impact your buying power or selling strategy.
                    </p>
                  </div>

                  <h3 className="text__32 font-semibold border-b pb-2">Leveraging Local Expertise</h3>
                  <div className="space-y-3 text__20">
                    <p>
                      While understanding these general principles is vital, real estate is hyper-local. National trends may not always reflect the nuances of your specific neighborhood or city. This is where the expertise of a seasoned local real estate professional becomes invaluable.
                    </p>
                    <p>
                      As your dedicated agent, I continually analyze these market dynamics, providing you with tailored advice based on up-to-the-minute local data. My goal is to empower you to make strategic decisions, whether that means listing your home at the optimal price point or crafting a competitive offer that stands out.
                    </p>
                    <p>
                      Navigating the complexities of housing market trends doesn't have to be daunting. With the right knowledge and expert guidance, you can approach your real estate journey with confidence and clarity.
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
                  href={"/article/detail/first-home-purchase-journey"} 
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300 p-4 bg-black bg-opacity-50 rounded-b-md"
                >
                  <p className="text__16 opacity-80 mb-1">{articleDate}</p>
                  <h5 className="text__20 md:text__24">First-Time Buyer's Journey</h5>
                </Link>
              </div>
              <div className="w-full relative overflow-hidden wrapArticleCard">
                <img
                  src={originalUrl + "rr2.png"}
                  className="w-full object-cover h-[200px] md:h-[250px] rounded-md"
                  alt="Related article placeholder"
                />
                <Link
                  href={"/article/detail/selling-smart-maximizing-value"} 
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300 p-4 bg-black bg-opacity-50 rounded-b-md"
                >
                  <p className="text__16 opacity-80 mb-1">{articleDate}</p>
                  <h5 className="text__20 md:text__24">Advanced Selling Strategies</h5>
                </Link>
              </div>
              <div className="w-full relative overflow-hidden wrapArticleCard">
                <img
                  src={originalUrl + "rr3.png"}
                  className="w-full object-cover h-[200px] md:h-[250px] rounded-md"
                  alt="Related article placeholder"
                />
                <Link
                  href={"/article/detail/the-2-percent-advantage"}
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

export default ArticleMarketTrends; 