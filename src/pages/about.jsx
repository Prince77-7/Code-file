import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import ClientList from "@/Components/Path/ClientList";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const About = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  return (
    <Fragment>
      <Layout step={step} title="About" description="About Desc" navbar={true}>
        <section>
          <Container>
            <WrapAnimateUp step={step}>
              <p className="text__20 opacity-40">ABOUT ME</p>
              <h2 className="text-[40px] md:text-[46px] lg:text-[64px] xl:text-[80px] my-2">
                Waiel Al-Shujaa
              </h2>
              <p className="text__20 opacity-60">Your Trusted Real Estate Advisor</p>
            </WrapAnimateUp>
          </Container>
        </section>

        <section className="pt-0">
          <Container>
            <div className="grid-cols-3 grid">
              <div className="lg:col-span-1"></div>
              <div className="col-span-3 lg:col-span-2">
                <WrapAnimateUp step={step}>
                  <img
                    src={originalUrl + "sas.png"}
                    className="w-full object-cover mb-[32px]"
                    alt=""
                  />
                </WrapAnimateUp>
                <h3 className="text__40 mb-[32px]">
                  <span className="ml-[5rem]">Hello!</span> I'm Waiel, your dedicated partner in navigating the real estate market. My mission is to make your property journey seamless and rewarding, whether you're buying your dream home or selling a valued asset. I believe in a client-first approach, offering unparalleled service with my unique 2% commission structure. By handling professional photography in-house and creating custom websites for premium listings, I provide exceptional value and marketing power, ensuring you achieve the best possible outcome.
                </h3>

                <div className="grid grid-cols-1">
                  {[
                    {
                      time: "75+",
                      desc: "HAPPY CLIENTS & COUNTING",
                    },
                    {
                      time: "50+",
                      desc: "PROPERTIES SUCCESSFULLY SOLD",
                    },
                    {
                      time: "2%",
                      desc: "FULL-SERVICE COMMISSION RATE",
                    },
                  ].map((obj) => {
                    return (
                      <>
                        <div className="flex items-center justify-between py-[32px] border-b !border-Mneutral_200">
                          <h5 className="text__64">{obj.time}</h5>
                          <p className="text__24 opacity-40 text-right">{obj.desc}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <ClientList />

        <BannerContact />
      </Layout>
    </Fragment>
  );
};

export default About;
