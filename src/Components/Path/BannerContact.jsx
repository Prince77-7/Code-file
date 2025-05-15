import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import useHostname from "../Provider/HostnameProvider";
import { motion } from "framer-motion";

const BannerContact = () => {
  const originalUrl = useHostname() + "/images/";
  const [onHoverBtn, setonHoverBtn] = useState(false);
  return (
    <Fragment>
      <section>
        <Container>
          <h4 className="text-[24px] ss:text-[36px] md:text-[46px] lg:text-[64px] xl:text-[80px] xl:ml-[144px]">
            Ready to find your <br /> dream home or sell <br /> your property?
          </h4>
          <div
            className="flex justify-end py-6"
            onMouseEnter={() => setonHoverBtn(true)} // Set state menjadi true saat hover
            onMouseLeave={() => setonHoverBtn(false)}
          >
            <Link href={"/contact"} className="flex items-center gap-3">
              <div className="relative overflow-hidden inline-block">
                <img
                  src={originalUrl + "Project image.png"}
                  className="lg:w-auto w-[110px] md:block hidden"
                  alt=""
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: onHoverBtn ? "1" : "0",
                  }}
                  className="absolute w-full h-full left-0 top-0 bg-black transition-all duration-500"
                ></motion.div>
                <motion.img
                  initial={{
                    y: "100%",
                    x: "-50%",
                    scale: 0,
                    rotate: "-180deg",
                  }}
                  animate={{
                    y: onHoverBtn ? "-50%" : "100%",
                    x: "-50%",
                    scale: onHoverBtn ? "1" : "0",
                    rotate: onHoverBtn ? "0deg" : "-180deg",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    // delay: onHoverBtn ? 0.3 : 0.1,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 top-1/2"
                  src={originalUrl + "asdas.svg"}
                  alt=""
                />
              </div>
              <span className="text-[36px] xx:text-[56px] ss:text-[64px] lg:text-[110px] xl:text-[136px]">
                Let's Talk.
              </span>

              <div className="overflow-hidden relative w-[56px] ss:w-[86px] xs:w-[110px] lg:w-[140px] xl:w-[160px] h-[56px] ss:h-[86px] xs:h-[110px] lg:h-[140px] xl:h-[160px]">
                <motion.img
                  initial={{ x: "-50%", y: "-50%", left: "50%", top: "50%" }}
                  animate={{
                    x: onHoverBtn ? "100%" : "-50%",
                    y: onHoverBtn ? "-100%" : "-50%",
                    left: onHoverBtn ? "100%" : "50%",
                    top: onHoverBtn ? "-100%" : "50%",
                  }}
                  transition={{
                    duration: 0.4,
                    // delay: onHoverBtn ? 0.1 : 0.2,
                    ease: "easeInOut",
                  }}
                  src={originalUrl + "carbon_arrow-up-right copy.svg"}
                  alt=""
                  className="w-[56px] ss:w-[86px] xs:w-[110px] lg:w-[140px] xl:w-auto absolute"
                />
                <motion.img
                  initial={{ x: "-100%", y: "100%", left: "50%", top: "50%" }}
                  animate={{
                    x: onHoverBtn ? "-50%" : "-100%",
                    y: onHoverBtn ? "-50%" : "100%",
                    left: onHoverBtn ? "50%" : "-50%",
                    top: onHoverBtn ? "50%" : "100%",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  src={originalUrl + "carbon_arrow-up-right copy 2.svg"}
                  alt=""
                  className="w-[56px] ss:w-[86px] xs:w-[110px] lg:w-[140px] xl:w-auto absolute"
                />
              </div>
            </Link>
          </div>
          <p className="text__24 opacity-60">
            <span className="ml-8">
              Let's connect! Whether you're looking to buy, sell,
            </span>
            <br className="xx:block hidden" /> or just have questions about the Memphis market, <br className="xx:block hidden" /> feel free to reach out.
          </p>
        </Container>
      </section>
    </Fragment>
  );
};

export default BannerContact;
