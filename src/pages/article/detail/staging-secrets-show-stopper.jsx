import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const ArticleStagingSecrets = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  const articleDate = new Date().toISOString().split('T')[0];

  return (
    <Fragment>
      <Layout
        step={step}
        title="Staging Secrets for Sellers"
        description="Learn home staging secrets to transform your property into a show-stopper that captivates buyers."
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
                    Staging Secrets: Transform Your Home into a Show-Stopper
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
                        When selling your home, creating an irresistible first impression is key. Effective home staging can transform your space, helping potential buyers envision themselves living there and often leading to quicker sales and better offers. Here are some staging secrets to turn your property into a show-stopper.
                      </p>
                      <h3 className="text__32">
                        The Power of Decluttering and Depersonalizing
                      </h3>
                      <div className="">
                        <p className="text__20">
                          The most crucial first step in staging is to declutter and depersonalize. Remove excess furniture, personal photos, and knick-knacks. This creates a sense of spaciousness and allows buyers to imagine their own belongings in the space, rather than feeling like they are intruding in someone else's home.
                        </p>
                      </div>
                      <img
                        src={originalUrl + "staging-declutter.png"} // Placeholder image
                        className="w-full object-cover rounded-md"
                        alt="Clean and decluttered living room"
                      />
                    </div>
                  </WrapAnimateUp>
                  <h5 className="text__24">Secret 1: Neutralize Your Color Palette</h5>
                  <p className="text__20">
                    While you may love bold colors, neutral tones have broader appeal. Painting walls in soft, neutral shades like beige, gray, or off-white creates a calm and inviting atmosphere. This also provides a blank canvas, making it easier for buyers to visualize their own style.
                  </p>

                  <h5 className="text__24">Secret 2: Define Each Space</h5>
                  <div className="">
                    <p className="text__20">
                      Ensure every room has a clear purpose. If you have an ambiguous space, stage it to showcase its potential – perhaps as a home office, a reading nook, or a children's play area. Well-defined spaces help buyers understand how they can utilize the entire home.
                    </p>
                  </div>
                   <img
                        src={originalUrl + "staging-defined-space.png"} // Placeholder image
                        className="w-full object-cover rounded-md"
                        alt="Well-defined home office space"
                      />
                  
                  <h5 className="text__24">Secret 3: Let There Be Light!</h5>
                  <p className="text__20">
                    Maximize natural light by opening curtains and blinds. Clean windows thoroughly. Enhance lighting with a mix of ambient (overhead), task (lamps for reading/work), and accent (highlighting artwork) fixtures. A well-lit home feels larger, cleaner, and more welcoming.
                  </p>

                  <h5 className="text__24">Secret 4: The Art of Furniture Arrangement</h5>
                  <div className="">
                    <p className="text__20">
                     Arrange furniture to create a good flow and highlight the best features of each room. Pull furniture away from walls to make rooms feel larger. Create conversational areas in living spaces. The goal is to make each room feel spacious and functional.
                    </p>
                  </div>
                  <h5 className="text__24">Secret 5: Add Inviting Touches</h5>
                  <div className="">
                    <p className="text__20">
                      Small details can make a big difference. Think fresh flowers or a bowl of fruit in the kitchen, plush towels in the bathroom, new bedding in the bedrooms, and tasteful, minimalist decor. These touches add warmth and help create an emotional connection for buyers.
                    </p>
                    <p className="text__20">
                      Effective staging is an investment that can yield significant returns. By implementing these secrets, you'll be well on your way to making your home the star of the show!
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
                  <h5 className="text__20 md:text__24">Navigating a Buyer's Market</h5>
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
                  <h5 className="text__20 md:text__24">Understanding Closing Costs</h5>
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

export default ArticleStagingSecrets; 