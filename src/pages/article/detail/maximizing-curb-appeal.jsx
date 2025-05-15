import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const ArticleMaximizingCurbAppeal = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  // Today's date for the article
  const articleDate = new Date().toISOString().split('T')[0];

  return (
    <Fragment>
      <Layout
        step={step}
        title="Maximizing Curb Appeal"
        description="Discover tips to maximize your home\'s curb appeal and make a lasting first impression."
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
                    Maximizing Curb Appeal: First Impressions That Sell Homes Fast
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
                        They say you never get a second chance to make a first impression. In real estate, that first impression is your home’s curb appeal. It’s the first thing potential buyers see, and it can set the tone for their entire viewing experience.
                      </p>
                      <h3 className="text__32">
                        Why A Little Effort Goes a Long Way
                      </h3>
                      <div className="">
                        <p className="text__20">
                          Investing a little time and effort into your home's exterior can significantly boost its attractiveness and perceived value. A welcoming facade invites buyers in and suggests that the home has been well-maintained.
                        </p>
                      </div>
                      <img
                        src={originalUrl + "curb-appeal-hero.png"} // Placeholder image
                        className="w-full object-cover rounded-md"
                        alt="Beautiful home exterior"
                      />
                    </div>
                  </WrapAnimateUp>
                  <h5 className="text__24">Tip 1: Luscious Landscaping</h5>
                  <p className="text__20">
                    A vibrant, well-kept garden can work wonders. Ensure your lawn is neatly mowed, edges are trimmed, and flower beds are weed-free and blooming with seasonal color. Consider adding fresh mulch to garden beds for a polished look. Even a few well-placed potted plants on the porch can add a touch of charm.
                  </p>
                  <img
                        src={originalUrl + "curb-appeal-landscaping.png"} // Placeholder image
                        className="w-full object-cover rounded-md"
                        alt="Lush landscaping"
                      />

                  <h5 className="text__24">Tip 2: The All-Important Front Door</h5>
                  <div className="">
                    <p className="text__20">
                      Your front door is a focal point. A fresh coat of paint in an inviting color can make a dramatic difference. Ensure hardware (handle, knocker, mailbox) is clean and in good condition. A new, stylish welcome mat can also create a warm greeting.
                    </p>
                  </div>
                  
                  <h5 className="text__24">Tip 3: Sparkling Clean Surfaces</h5>
                  <p className="text__20">
                    Pressure wash siding, driveways, and walkways to remove dirt and grime. Clean windows until they sparkle, both inside and out. This not only makes your home look cleaner but also allows more natural light inside. Don't forget to clear gutters and downspouts.
                  </p>

                  <h5 className="text__24">Tip 4: Illuminate and Invite</h5>
                  <div className="">
                    <p className="text__20">
                     Good outdoor lighting enhances safety and ambiance. Ensure all exterior lights are working and consider adding solar-powered lights along pathways or to highlight landscape features. A well-lit entryway is particularly welcoming for evening viewings.
                    </p>
                  </div>
                   <img
                        src={originalUrl + "curb-appeal-lighting.png"} // Placeholder image
                        className="w-full object-cover rounded-md"
                        alt="Home with inviting outdoor lighting"
                      />
                  <h5 className="text__24">Small Changes, Big Impact</h5>
                  <div className="">
                    <p className="text__20">
                      You don’t need a massive budget to boost curb appeal. Simple actions like stowing away clutter (garden hoses, bins, toys), adding new house numbers, or hanging a seasonal wreath can significantly enhance your home’s first impression.
                    </p>
                    <p className="text__20">
                      By focusing on these key areas, you can create an inviting exterior that will make potential buyers eager to see what’s inside, ultimately helping you sell your home faster and for a better price.
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
              {/* Placeholder for other articles */}
              <div className="w-full relative overflow-hidden wrapArticleCard">
                <img
                  src={originalUrl + "rr1.png"} // Placeholder image
                  className="w-full object-cover h-[200px] md:h-[250px] rounded-md"
                  alt="Related article placeholder"
                />
                <Link
                  href={"#!"} // Placeholder link
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300 p-4 bg-black bg-opacity-50 rounded-b-md"
                >
                  <p className="text__16 opacity-80 mb-1">{articleDate}</p>
                  <h5 className="text__20 md:text__24">Understanding Market Trends</h5>
                </Link>
              </div>
              <div className="w-full relative overflow-hidden wrapArticleCard">
                <img
                  src={originalUrl + "rr2.png"} // Placeholder image
                  className="w-full object-cover h-[200px] md:h-[250px] rounded-md"
                  alt="Related article placeholder"
                />
                <Link
                  href={"#!"} // Placeholder link
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300 p-4 bg-black bg-opacity-50 rounded-b-md"
                >
                  <p className="text__16 opacity-80 mb-1">{articleDate}</p>
                  <h5 className="text__20 md:text__24">Tips for First-Time Buyers</h5>
                </Link>
              </div>
              <div className="w-full relative overflow-hidden wrapArticleCard">
                <img
                  src={originalUrl + "rr3.png"} // Placeholder image
                  className="w-full object-cover h-[200px] md:h-[250px] rounded-md"
                  alt="Related article placeholder"
                />
                <Link
                  href={"#!"} // Placeholder link
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300 p-4 bg-black bg-opacity-50 rounded-b-md"
                >
                  <p className="text__16 opacity-80 mb-1">{articleDate}</p>
                  <h5 className="text__20 md:text__24">Selling in a Seller\'s Market</h5>
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

export default ArticleMaximizingCurbAppeal;

