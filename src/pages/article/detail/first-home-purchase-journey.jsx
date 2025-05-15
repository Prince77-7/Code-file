import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import useHostname from "@/Components/Provider/HostnameProvider";
import Layout from "@/Components/Layout/Layout";
import BannerContact from "@/Components/Path/BannerContact";
import Link from "next/link";
import { useStep } from "@/Components/Provider/PageTransitionProvider";
import WrapAnimateUp from "@/Components/Path/WrapAnimateUp";

const ArticleFirstHomeJourney = () => {
  const originalUrl = useHostname() + "/images/";
  const { step } = useStep();
  const articleDate = new Date().toISOString().split('T')[0];

  return (
    <Fragment>
      <Layout
        step={step}
        title="Your First Home Purchase Journey"
        description="A comprehensive step-by-step guide to navigating your first home purchase with confidence."
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
                    Navigating Your First Home Purchase: A Comprehensive Step-by-Step Journey
                  </h2>
                  <p className="text__20 opacity-60">{articleDate}</p>
                </WrapAnimateUp>
              </div>
            </div>
            <div className="grid-cols-3 grid mt-[5rem]">
              <div className="lg:col-span-1"></div>
              <div className="col-span-3 lg:col-span-2">
                <div className="opacity-80 grid grid-cols-1 gap-[32px]">
                  
                  <WrapAnimateUp step={step}>
                    <div className="grid grid-cols-1 gap-[24px]">
                      <p className="text__20 italic">
                        Buying your first home is an exciting milestone, but it can also feel overwhelming. This comprehensive guide breaks down the journey into manageable steps, empowering you to navigate the process with clarity and confidence, from initial dreams to holding the keys in your hand.
                      </p>
                      <img
                        src={originalUrl + "first-home-hero.png"}
                        className="w-full object-cover rounded-md shadow-md"
                        alt="Happy couple with keys to new home"
                      />
                    </div>
                  </WrapAnimateUp>

                  <h3 className="text__32 font-semibold border-b pb-2">Understanding First-Time Homebuyer Status</h3>
                  <div className="space-y-3 text__20">
                    <p>Many assume that first-time homebuyers are simply people who have never owned a home before. However, according to the U.S. Department of Housing and Urban Development (HUD), a first-time homebuyer is defined as anyone who hasn't owned a principal residence in the last three years.</p>
                    <p>This expanded definition creates opportunities for those who may have owned property in the past but have been renting recently. Additionally, specific circumstances may allow you to qualify as a first-time buyer even if you've owned a home within the past three years.</p>
                    <p><strong>Benefits of first-time homebuyer status include:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access to down payment and closing costs assistance programs</li>
                      <li>Eligibility for low or no down payment loan options</li>
                      <li>Special tax credits in some jurisdictions</li>
                      <li>Educational resources specifically designed for new homeowners</li>
                    </ul>
                  </div>

                  <h3 className="text__32 font-semibold border-b pb-2">Phase 1: Preparation and Financial Planning</h3>
                  <div className="space-y-3 text__20">
                    <p><strong>Step 1: Assess Your Financial Health.</strong> Before diving in, thoroughly review your credit score, budget, and savings. Your credit score significantly impacts the interest rate you'll receive, potentially saving or costing you thousands over the life of your loan.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Check your credit reports from all three major bureaus (Experian, Equifax, and TransUnion)</li>
                      <li>Address any errors or negative items on your credit report</li>
                      <li>Aim for a credit score of at least 620, though 660-680 is preferred by many lenders and programs</li>
                      <li>Avoid opening new credit accounts or making large purchases before applying for a mortgage</li>
                      <li>Calculate your debt-to-income ratio (DTI)—most lenders prefer it to be below 43%</li>
                    </ul>
                    
                    <p><strong>Step 2: Determine Your Budget.</strong> Calculating how much house you can afford involves more than just the mortgage payment. Consider the full cost of homeownership:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Principal and interest payments (your mortgage)</li>
                      <li>Property taxes (which vary significantly by location)</li>
                      <li>Homeowner's insurance premiums</li>
                      <li>Potential PMI (Private Mortgage Insurance) if down payment is less than 20%</li>
                      <li>HOA or condo fees if applicable</li>
                      <li>Utilities (often higher than in a rental property)</li>
                      <li>Maintenance and repairs (budget 1-3% of home value annually)</li>
                    </ul>
                    <p>Use the 28/36 rule as a starting point: your housing costs shouldn't exceed 28% of your gross monthly income, and your total debt payments shouldn't exceed 36%.</p>
                    
                    <p><strong>Step 3: Save for a Down Payment and Closing Costs.</strong> While 20% has traditionally been the standard down payment amount, many first-time buyers purchase homes with much less:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Conventional loans: As low as 3% down</li>
                      <li>FHA loans: As low as 3.5% down</li>
                      <li>VA loans: 0% down for qualifying veterans and service members</li>
                      <li>USDA loans: 0% down for eligible rural properties</li>
                    </ul>
                    <p>Don't forget closing costs, which typically range from 2-5% of the loan amount. These include loan origination fees, appraisal fees, title insurance, and more.</p>
                    
                    <p><strong>Down Payment Assistance Programs:</strong> Many states and local governments offer down payment assistance programs specifically for first-time homebuyers. These can include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Grants (money you don't have to repay)</li>
                      <li>Forgivable loans (forgiven if you stay in the home for a certain period)</li>
                      <li>Deferred-payment loans (no payments until you sell or refinance)</li>
                      <li>Low-interest loans specifically for down payment assistance</li>
                    </ul>
                    <p>In California, the CalHFA (California Housing Finance Agency) offers several programs to help first-time homebuyers with down payments and closing costs.</p>
                    
                    <p><strong>Step 4: Get Mortgage Pre-Approval.</strong> This critical step gives you a realistic price range and strengthens your position when making offers:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Shop around and compare at least 3-5 lenders for the best rates and terms</li>
                      <li>Gather necessary documentation (pay stubs, W-2s, bank statements, tax returns)</li>
                      <li>Consider various loan types to find the best fit for your situation</li>
                      <li>Understand the difference between pre-qualification (estimated, based on self-reported information) and pre-approval (verified by the lender)</li>
                    </ul>
                    <p>A pre-approval letter typically remains valid for 60-90 days, depending on the lender.</p>
                  </div>
                  
                  <img
                      src={originalUrl + "financial-planning.png"}
                      className="w-full object-cover rounded-md shadow-md"
                      alt="Financial planning documents and calculator"
                  />

                  <h3 className="text__32 font-semibold border-b pb-2">Phase 2: Loan Options for First-Time Homebuyers</h3>
                  <div className="space-y-3 text__20">
                    <p>Understanding the various mortgage options is crucial to finding the most affordable path to homeownership:</p>
                    
                    <p><strong>Conventional Loans:</strong> These loans are not backed by the government but follow guidelines set by Fannie Mae and Freddie Mac.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Down payment: As low as 3% for first-time buyers</li>
                      <li>Credit score: Typically 620 minimum, with better rates for scores above 740</li>
                      <li>PMI required if down payment is less than 20%, but can be removed once you reach 20% equity</li>
                      <li>Potentially lower overall costs for those with excellent credit</li>
                    </ul>
                    
                    <p><strong>FHA Loans:</strong> Backed by the Federal Housing Administration, these loans are often easier to qualify for.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Down payment: As low as 3.5% with a credit score of 580+</li>
                      <li>More flexible credit requirements (minimum 500 with 10% down)</li>
                      <li>Mortgage insurance premium (MIP) required for the life of the loan in most cases</li>
                      <li>Lower debt-to-income ratio requirements than some conventional loans</li>
                    </ul>
                    
                    <p><strong>VA Loans:</strong> For eligible veterans, active-duty service members, and some surviving spouses.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>No down payment required</li>
                      <li>No monthly mortgage insurance</li>
                      <li>Typically lower interest rates than conventional loans</li>
                      <li>More forgiving credit requirements</li>
                    </ul>
                    
                    <p><strong>USDA Loans:</strong> For homes in eligible rural areas.</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>No down payment required</li>
                      <li>Lower mortgage insurance than FHA loans</li>
                      <li>Income limits apply (must be at or below 115% of area median income)</li>
                      <li>Property must be in a USDA-eligible area</li>
                    </ul>
                    
                    <p><strong>State-Specific Programs:</strong> Many states offer special loan programs for first-time homebuyers with competitive rates and down payment assistance.</p>
                    <p>For example, California's CalHFA offers first mortgage loans with competitive interest rates and down payment assistance programs that can be combined with their first mortgages.</p>
                  </div>

                  <h3 className="text__32 font-semibold border-b pb-2">Phase 3: Finding Your Home</h3>
                  <div className="space-y-3 text__20">
                    <p><strong>Step 5: Define Your Needs and Wants.</strong> Create a detailed list to focus your search effectively:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Must-haves:</strong> Non-negotiable features (number of bedrooms, school district, maximum commute time)</li>
                      <li><strong>Nice-to-haves:</strong> Features you want but could compromise on (updated kitchen, garage, large yard)</li>
                      <li><strong>Deal-breakers:</strong> Features that would immediately eliminate a property (busy street, flood zone)</li>
                    </ul>
                    <p>Consider both your current needs and future plans. If you plan to stay in the home for several years, think about how your needs might evolve.</p>
                    
                    <p><strong>Step 6: Choose a Real Estate Agent.</strong> A knowledgeable buyer's agent is particularly valuable for first-time homebuyers:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>They understand local market conditions and fair pricing</li>
                      <li>They can identify potential issues with properties that you might miss</li>
                      <li>They handle negotiations and paperwork</li>
                      <li>They can recommend trusted inspectors, lenders, and other professionals</li>
                      <li>Their commission is typically paid by the seller, not you as the buyer</li>
                    </ul>
                    <p>Interview multiple agents to find someone who understands your needs and communication style.</p>
                    
                    <p><strong>Step 7: The Home Search.</strong> Beyond visiting properties with your agent:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Research neighborhoods thoroughly (crime statistics, school ratings, future development plans)</li>
                      <li>Visit at different times of day to assess noise, traffic, and overall atmosphere</li>
                      <li>Check commute times during rush hour</li>
                      <li>Research property tax history and trends</li>
                      <li>Look into utility costs by asking sellers for recent bills</li>
                      <li>Consider the home's resale potential, even if you plan to stay long-term</li>
                    </ul>
                    <p>Keep an organized record of properties you visit, noting pros and cons of each to help with your final decision.</p>
                  </div>

                  <h3 className="text__32 font-semibold border-b pb-2">Phase 4: Making an Offer and Closing the Deal</h3>
                  <div className="space-y-3 text__20">
                    <p><strong>Step 8: Crafting Your Offer.</strong> A competitive offer in today's market requires strategy:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Research comparable sales ("comps") to determine a fair price</li>
                      <li>Consider market conditions (buyer's market vs. seller's market)</li>
                      <li>Decide on contingencies (inspection, financing, appraisal)</li>
                      <li>Determine earnest money deposit amount (typically 1-3% of purchase price)</li>
                      <li>Choose a closing timeline that works for both parties</li>
                      <li>Consider including a personal letter in some markets (though check with your agent, as this practice is discouraged in some areas)</li>
                    </ul>
                    
                    <p><strong>Step 9: Negotiation.</strong> This process often involves multiple rounds:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Be prepared for counteroffers</li>
                      <li>Understand which terms are most important to you and where you can compromise</li>
                      <li>Consider the total package, not just the price (closing costs, repairs, appliances, closing timeline)</li>
                      <li>Maintain perspective and don't let emotions drive decisions</li>
                    </ul>
                    
                    <p><strong>Step 10: Home Inspection and Appraisal.</strong> These critical evaluations protect your investment:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Inspection:</strong> Hire a professional home inspector to identify any issues with the property</li>
                      <li>Consider specialized inspections if warranted (roof, foundation, mold, pest)</li>
                      <li>Negotiate repairs or credits based on inspection findings</li>
                      <li><strong>Appraisal:</strong> Your lender will require an appraisal to ensure the home is worth the loan amount</li>
                      <li>If the appraisal comes in low, you may need to renegotiate, increase your down payment, or walk away</li>
                    </ul>
                    
                    <p><strong>Step 11: Securing Your Mortgage.</strong> Now is the time to finalize your financing:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Submit all required documentation promptly</li>
                      <li>Respond quickly to any additional requests from your lender</li>
                      <li>Avoid making large purchases or applying for new credit during this time</li>
                      <li>Don't change jobs if possible</li>
                      <li>Keep funds for closing in an accessible account</li>
                      <li>Review the Closing Disclosure, which details all costs and must be provided at least 3 business days before closing</li>
                    </ul>
                    
                    <p><strong>Step 12: The Final Walk-Through and Closing.</strong> The last steps before you get your keys:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Conduct a final walk-through 24 hours before closing to ensure the property is in the agreed-upon condition</li>
                      <li>Verify all negotiated repairs have been completed</li>
                      <li>Check that all included fixtures and appliances remain in the home</li>
                      <li>At closing, review and sign numerous documents</li>
                      <li>Bring a cashier's check or arrange a wire transfer for closing costs</li>
                      <li>Bring identification and any other required documents</li>
                    </ul>
                  </div>
                  
                  <img
                      src={originalUrl + "closing-deal.png"}
                      className="w-full object-cover rounded-md shadow-md"
                      alt="Signing documents at closing"
                  />

                  <h3 className="text__32 font-semibold border-b pb-2">Phase 5: After Closing - Your First Steps as a Homeowner</h3>
                  <div className="space-y-3 text__20">
                    <p>Congratulations! You've closed on your first home. Here are important next steps:</p>
                    
                    <p><strong>Immediate Tasks:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Change locks and security codes</li>
                      <li>Set up utilities in your name</li>
                      <li>Update your address with USPS, DMV, financial institutions, etc.</li>
                      <li>Locate water shut-off valve, circuit breaker box, and gas shut-off</li>
                      <li>Test smoke and carbon monoxide detectors, replace batteries if needed</li>
                      <li>Create a home maintenance calendar</li>
                    </ul>
                    
                    <p><strong>Financial Considerations:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Set up automatic mortgage payments</li>
                      <li>Create a separate savings account for home maintenance and repairs</li>
                      <li>Understand tax benefits of homeownership</li>
                      <li>Consider putting your home into a revocable living trust to protect generational wealth</li>
                      <li>Review your home insurance annually to ensure adequate coverage</li>
                    </ul>
                    
                    <p><strong>Long-term Value:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Keep records of all home improvements</li>
                      <li>Stay informed about your home's value and neighborhood trends</li>
                      <li>Consider strategic improvements that increase home value</li>
                      <li>Review your mortgage terms periodically to determine if refinancing would be beneficial</li>
                    </ul>
                  </div>

                  <h3 className="text__32 font-semibold border-b pb-2">Resources for First-Time Homebuyers</h3>
                  <div className="space-y-3 text__20">
                    <p><strong>Educational Resources:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>HUD-approved housing counseling agencies offer free or low-cost advice</li>
                      <li>First-time homebuyer workshops and seminars (online or in-person)</li>
                      <li>Online mortgage and affordability calculators</li>
                      <li>Consumer Financial Protection Bureau (CFPB) homebuyer guides</li>
                    </ul>
                    
                    <p><strong>Financial Assistance Programs:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>State housing finance agencies (like CalHFA in California)</li>
                      <li>Local government down payment assistance programs</li>
                      <li>Employer-assisted housing programs</li>
                      <li>Community development financial institutions</li>
                      <li>Non-profit organizations focused on affordable homeownership</li>
                    </ul>
                    
                    <p><strong>Professional Support:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Experienced real estate agents who specialize in first-time buyers</li>
                      <li>Mortgage loan officers who understand various assistance programs</li>
                      <li>Home inspectors who can educate you about property conditions</li>
                      <li>Real estate attorneys who can review contracts and protect your interests</li>
                    </ul>
                  </div>

                  <h3 className="text__32 font-semibold border-b pb-2">Your Journey Starts Here</h3>
                  <p className="text__20">
                    Buying your first home is a significant achievement and an important step in building financial security. While the process involves many steps and may seem daunting at first, breaking it down into manageable phases makes it approachable. Remember that millions of people have successfully navigated this journey before you.
                  </p>
                  <p className="text__20">
                    Having a knowledgeable team of professionals on your side can make all the difference in ensuring a smooth and successful first home purchase. I'm here to provide the expertise and support you need throughout this exciting journey. Let's start your path to homeownership today!
                  </p>
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
                  href={"/article/detail/understanding-local-market-trends"} 
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300 p-4 bg-black bg-opacity-50 rounded-b-md"
                >
                  <p className="text__16 opacity-80 mb-1">{articleDate}</p>
                  <h5 className="text__20 md:text__24">Understanding Market Trends</h5>
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
                  href={"/article/detail/staging-secrets-show-stopper"}
                  className="text-white w-[90%] absolute left-1/2 -translate-x-1/2 -bottom-[20rem] linkWrap transition-all duration-300 p-4 bg-black bg-opacity-50 rounded-b-md"
                >
                  <p className="text__16 opacity-80 mb-1">{articleDate}</p>
                  <h5 className="text__20 md:text__24">Home Staging Secrets</h5>
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

export default ArticleFirstHomeJourney; 