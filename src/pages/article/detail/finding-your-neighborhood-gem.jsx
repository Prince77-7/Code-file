import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const ArticleNeighborhoodGem = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  const articleDate = new Date().toISOString().split('T')[0];

  return (
    <Fragment>
      <Layout
        step={step}
        title="Finding Your Neighborhood Gem"
        description="Tips on how to look beyond the listing and find the perfect neighborhood that fits your lifestyle."
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
                    Beyond the Listing: How to Find Your Perfect Neighborhood Gem
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
                        Finding the right home is more than just square footage and the number of bedrooms. It's about finding a neighborhood that truly fits your lifestyle, a place where you can thrive. But how do you look beyond online listings to discover that perfect community?
                      </p>
                      <h3 className="text__32">
                        The Vibe Check: What's Important to You?
                      </h3>
                      <div className="">
                        <p className="text__20">
                          Before you even start looking at specific areas, define what makes a neighborhood a "gem" for you. Are you looking for a bustling urban environment, a quiet suburban retreat, or something in between? Consider factors like:
                        </p>
                        <ul className="list-disc list-inside text__20 pl-4">
                            <li>Proximity to work or family</li>
                            <li>Quality of schools</li>
                            <li>Access to parks and green spaces</li>
                            <li>Walkability to shops, cafes, and restaurants</li>
                            <li>Community amenities (pools, playgrounds, etc.)</li>
                            <li>Noise levels and traffic</li>
                        </ul>
                      </div>
                      <img
                        src={originalUrl + "neighborhood-hero.png"} // Placeholder image
                        className="w-full object-cover rounded-md"
                        alt="Diverse neighborhood street"
                      />
                    </div>
                  </WrapAnimateUp>
                  <h5 className="text__24">Step 1: Boots on the Ground</h5>
                  <p className="text__20">
                    Online research is a great starting point, but nothing beats experiencing a neighborhood firsthand. Spend time walking or driving around at different times of the day and on different days of the week. How does it feel on a Tuesday morning versus a Saturday afternoon? This will give you a much richer sense of the community's rhythm.
                  </p>

                  <h5 className="text__24">Step 2: Talk to the Locals</h5>
                  <div className="">
                    <p className="text__20">
                      Don't be shy! Strike up conversations with people you see in the neighborhood – at a local coffee shop, a park, or even while they're out gardening. Ask them what they love about living there and what some of the challenges might be. Their insights can be invaluable.
                    </p>
                  </div>
                   <img
                        src={originalUrl + "neighborhood-talk.png"} // Placeholder image
                        className="w-full object-cover rounded-md"
                        alt="People talking in a cafe"
                      />
                  
                  <h5 className="text__24">Step 3: Investigate the Amenities</h5>
                  <p className="text__20">
                    Check out the local amenities that matter to you. Visit the grocery stores, parks, libraries, and community centers. If you have children, look into the schools and local kid-friendly activities. The quality and accessibility of these resources can greatly impact your daily life.
                  </p>

                  <h5 className="text__24">Step 4: Consider Your Commute</h5>
                  <div className="">
                    <p className="text__20">
                     If you commute for work, do a trial run during peak hours. A dream home can quickly become less appealing if coupled with a nightmare commute. Explore public transportation options as well.
                    </p>
                  </div>
                  <h5 className="text__24">Finding Your Place</h5>
                  <div className="">
                    <p className="text__20">
                      A great real estate agent does more than just find houses; they help you find a community. As your local expert, I can provide insights into different neighborhoods that match your criteria, helping you uncover the hidden gems that online listings might miss.
                    </p>
                    <p className="text__20">
                      Ready to find not just a house, but a place to call home? Let's explore together.
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
                  <h5 className="text__20 md:text__24">The 2% Commission Advantage</h5>
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
                  <h5 className="text__20 md:text__24">Maximizing Curb Appeal</h5>
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
                  <h5 className="text__20 md:text__24">Home Staging Essentials</h5>
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

export default ArticleNeighborhoodGem; 