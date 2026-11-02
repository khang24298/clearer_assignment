import React, { useRef, useState, useEffect } from "react";
import { motion, useTransform, useMotionValue, type MotionValue } from "framer-motion";
import * as Assets from "./figmaAssets";
const {
  Logo,
  Contents,
  Contents1,
  imgImage2,
  imgIllustrationsJumping,
  imgPineappleSpikyCrown,
  imgWholePineapple,
  imgLittleSunshine,
  imgCircles,
  imgIllus,
  imgImage8,
  imgImage9,
  imgCan2,
  imgCan3,
  imgContents,
  imgImage7,
  imgBox,
  imgBag,
  imgStar,
  imgCart,
  imgPineappleBg,
  imgIllustrationsChilling,
  imgOrangeBg,
  imgImage4907,
  imgImage4908,
  imgImage4901,
  imgImage4904,
  imgImage4905,
  imgImage4906,
  imgScreenshot20261031At1644442,
  img68403C9D0B29131142C48726Fa95A7Df58Fe8815Fa5D1Bbfbc61392BGraphicGoogleSellerRatingMedia1,
  img522791B9620D452583896Af5F600187B1,
  imgScreenshot20261031At1815591,
  imgScreen3,
  imgRectangle240648335,
  imgSuppliedBrandPhotography1,
  imgRectangle240648327,
  imgScreenshot20261031At2052491,
  imgImage4913,
  imgImage4912,
  imgScreen1,
  imgRectangle240648334,
  imgImage4940,
  imgImage4941,
  imgImage4942,
  imgRectangle240648336,
  imgImage4945,
  imgImage4944,
  imgImage4946,
  imgImage4938,
  imgPngwingCom1,
  imgScreenshot20261101At2210121,
  imgImage4948,
  imgImage4903,
  imgBg,
  imgGroup,
  imgGroup1,
  imgGroup2,
  imgExpandDown,
  imgImage4900,
  imgScreenshot20261031At1644441,
  imgGroup3,
  imgBackground,
  imgBackground1,
  imgScreen2,
  imgArrowUpRight,
  imgRectangle240648328,
  imgTrendingUp,
  imgSuppliedBrandPhotography,
  imgRectangle240648329,
  imgTrendingUp1,
  imgArrowUpRight1,
  imgArrowUpRight2,
  imgRectangle240648330,
  imgTrendingUp2,
  imgLogoAym1,
  imgLogoBoxraw1,
  imgLogoBunches1,
  imgGroup4,
  imgGroup5,
  imgGroup6,
  imgGroup7,
  imgGroup8,
  imgGroup9,
  imgLogoFaerly1,
  imgLogoFeey1,
  imgLogoGiesswein1,
  imgLogoGigiTom1,
  imgLogoHyggins1,
  imgLogoIstrap1,
  imgLogoJimmyJoy1,
  imgLogoJimmys1,
  imgLogoKloster1,
  imgLogoKoko1,
  imgLogoMrSimple1,
  imgGroup10,
  imgGroup11,
  imgGroup12,
  imgGroup13,
  imgLogoNapoleon1,
  imgLogoNudea1,
  imgLogoObvi1,
  imgLogoOcusfield1,
  imgGroup14,
  imgGroup15,
  imgLogoRookie1,
  imgLogoSkateSociety1,
  imgLogoSlumberpod1,
  imgLogoThrivewear1,
  imgLogoTwinings1,
  imgGroup16,
  imgGroup17,
  imgLogoVuori1,
  imgLogoWaterdrop1,
  imgLogoWave1,
  imgLogoWed2B1,
  imgMintAtmosphericGlow,
  imgGroup18,
  imgGroup19,
  imgGroup20,
  imgRectangle240648337,
  imgArrowRight,
  imgVector,
  imgGroup21,
  imgGroup22,
  imgLogoConcreteJungle1,
  imgVector1,
  imgVector2,
  imgVector3,
  imgGroup23,
  imgGroup24,
  imgLogoKrior1,
  imgGroup25,
  imgGroup26,
  imgGroup27,
  imgGroup28,
  imgVector4,
  imgVector5,
  imgVector6,
  imgVector7,
  imgGroup29,
  imgGroup30,
  imgArrowOutward,
  imgMinusCircle,
  imgLine472,
  imgPlusCircle,
  imgGroup31,
  imgGroup32,
  imgGroup33,
  imgGroup34,
  imgGroup35,
  imgVector8,
  imgSocialIcon,
  imgSocialIcon1,
  imgSocialIcon2,
  imgSocialIcon3,
  imgSocialIcon4,
  imgImage4902,
  imgCustomerStories
} = Assets;

const EASE = [0.22, 1, 0.36, 1] as const;

export function FigmaHeader() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-center justify-center overflow-clip px-[16px] py-[16px] relative rounded-[1000px] shrink-0" data-node-id="164:13642" data-name="header">
      <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-[1216px]" data-node-id="164:13643">
        <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-center min-w-px relative" data-node-id="164:13644">
          <div className="h-[32px] overflow-clip relative shrink-0 w-[199.669px]" data-node-id="164:13645" data-name="logo">
            <div className="absolute contents inset-[5.01%_4.89%_7.49%_4.01%]" data-node-id="164:13646" data-name="reviewsio-logo1">
              <div className="absolute contents inset-[15.73%_4.89%_18.4%_19.56%]" data-node-id="164:13647" data-name="Group">
                <div className="absolute inset-[15.73%_14.36%_18.4%_19.56%]" data-node-id="164:13648" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                </div>
                <div className="absolute inset-[41.91%_4.89%_20.58%_86.74%]" data-node-id="164:13656" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                </div>
              </div>
              <div className="absolute inset-[5.01%_82.04%_7.49%_4.01%]" data-node-id="164:13660" data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-node-id="164:13665" data-name="Navigation">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="164:13666" data-name="_Dropdown header navigation trigger">
              <div className="content-stretch flex gap-[var(--spacing-xxs,2px)] items-center justify-center overflow-clip px-[var(--spacing-sm,6px)] py-[var(--spacing-xs,4px)] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="164:13667" data-name="_Dropdown header navigation button">
                <div className="content-stretch flex gap-[2px] items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="164:13668" data-name="Text padding">
                  <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[26px] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] whitespace-nowrap" data-node-id="164:13669">
                    Products
                  </p>
                  <div className="relative shrink-0 size-[20px]" data-node-id="164:13670" data-name="Expand_down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpandDown} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center relative shrink-0" data-node-id="164:13823" data-name="_Dropdown header navigation trigger">
              <div className="content-stretch flex gap-[var(--spacing-xxs,2px)] items-center justify-center overflow-clip px-[var(--spacing-sm,6px)] py-[var(--spacing-xs,4px)] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="164:13824" data-name="_Dropdown header navigation button">
                <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="164:13825" data-name="Text padding">
                  <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[26px] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] whitespace-nowrap" data-node-id="164:13826">
                    Pricing
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-node-id="164:13828" data-name="_Dropdown header navigation trigger">
              <div className="content-stretch flex gap-[var(--spacing-xxs,2px)] items-center justify-center overflow-clip px-[var(--spacing-sm,6px)] py-[var(--spacing-xs,4px)] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="164:13829" data-name="_Dropdown header navigation button">
                <div className="content-stretch flex gap-[2px] items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="164:13830" data-name="Text padding">
                  <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[26px] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] whitespace-nowrap" data-node-id="164:13831">
                    Resource
                  </p>
                  <div className="relative shrink-0 size-[20px]" data-node-id="164:13832" data-name="Expand_down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgExpandDown} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-node-id="164:13834" data-name="_Dropdown header navigation trigger">
              <div className="content-stretch flex gap-[var(--spacing-xxs,2px)] items-center justify-center overflow-clip px-[var(--spacing-sm,6px)] py-[var(--spacing-xs,4px)] relative rounded-[var(--radius-md,8px)] shrink-0" data-node-id="164:13835" data-name="_Dropdown header navigation button">
                <div className="content-stretch flex items-center justify-center px-[var(--spacing-xxs,2px)] relative shrink-0" data-node-id="164:13836" data-name="Text padding">
                  <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[26px] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] whitespace-nowrap" data-node-id="164:13837">
                    AI Presence
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[19.308px] items-center justify-center left-[441.34px] top-[-5.65px] w-[29.321px]" data-node-id="164:13839">
              <div className="flex-none rotate-12">
                <div className="bg-[#fc0000] content-stretch flex items-center justify-center overflow-clip px-[4px] py-[2px] relative rounded-[1000px]">
                  <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[8px] text-white whitespace-nowrap" data-node-id="164:13840">
                    NEW
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-node-id="164:13841">
          <div className="content-stretch flex h-[40px] items-center justify-center px-[16px] relative rounded-[25.805px] shrink-0" data-node-id="164:13842" data-name="button">
            <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" data-node-id="I164:13842;128:8627">
              Login
            </p>
          </div>
          <div className="bg-[rgba(0,0,0,0.1)] content-stretch flex h-[40px] items-center justify-center px-[16px] relative rounded-[1000px] shrink-0" data-node-id="164:13843" data-name="button">
            <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.8)] whitespace-nowrap" data-node-id="I164:13843;128:8618">
              Book demo
            </p>
          </div>
          <div className="bg-[#057c74] content-stretch flex h-[40px] items-center justify-center px-[16px] relative rounded-[1000px] shrink-0" data-node-id="164:13844" data-name="button">
            <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="I164:13844;128:8616">
              Get started
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export function FigmaHero1Content({ progress }: { progress: MotionValue<number> }) {
  // Scroll-driven reveals (progress 0 -> 0.22 of the hero track), one group per scroll step
  const rng = (a: number, b: number) => [a, b] as [number, number];
  const headOpacity = useTransform(progress, rng(0.0, 0.04), [0, 1]);
  const headY = useTransform(progress, rng(0.0, 0.05), [60, 0]);
  const headBlur = useTransform(progress, rng(0.0, 0.05), ["blur(16px)", "blur(0px)"]);
  const cardOpacity = useTransform(progress, rng(0.05, 0.09), [0, 1]);
  const cardScale = useTransform(progress, rng(0.05, 0.11), [0.8, 1]);
  const cardY = useTransform(progress, rng(0.05, 0.11), [60, 0]);
  const sideOpacity = useTransform(progress, rng(0.11, 0.15), [0, 1]);
  const sideScale = useTransform(progress, rng(0.11, 0.17), [0.8, 1]);
  const sideYv = useTransform(progress, rng(0.11, 0.17), [-40, 0]);
  const rightX = useTransform(progress, rng(0.11, 0.17), [320, 0]);
  const leftX = useTransform(progress, rng(0.11, 0.17), [-320, 0]);
  const subOpacity = useTransform(progress, rng(0.17, 0.21), [0, 1]);
  const subY = useTransform(progress, rng(0.17, 0.22), [40, 0]);
  return (
    <div className="h-[1017.47px] relative shrink-0 w-[1440px]" data-node-id="164:13845" data-name="hero 1">
      <div className="absolute h-[1017.47px] left-1/2 -translate-x-1/2 top-0 w-[1280px]">
        <div className="absolute content-stretch flex flex-col items-center left-[102.5px] top-[80px] w-[1075px]" data-node-id="200:54020">
          <div className="content-stretch flex items-center justify-center mb-[-40px] p-[8px] relative shrink-0" data-node-id="200:53993" data-name="text">
            <motion.p style={{ opacity: headOpacity, y: headY, filter: headBlur }} className="[word-break:break-word] bg-clip-text bg-gradient-to-b font-['PP_Palma:Fizzy_Heavy'] from-[#015953] from-[64.626%] leading-none not-italic relative shrink-0 text-[140px] text-[transparent] text-center to-[#077c74] to-[87.857%] tracking-[-2.8px] whitespace-nowrap" data-node-id="164:14098">{`Collect reviews. `}</motion.p>
          </div>
          <div className="h-[550.677px] relative shrink-0 w-[721.343px]" data-node-id="200:53996" data-name="kv">
            <motion.div style={{ opacity: cardOpacity, scale: cardScale, y: cardY }} className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.5)] content-stretch flex h-[550.677px] items-center left-[calc(50%-6.4px)] overflow-clip p-[8.442px] rounded-[22.512px] top-0 w-[333.068px]" data-node-id="200:53997">
              <div className="h-[533.793px] relative rounded-[14.07px] shadow-[0px_0px_11.256px_0px_rgba(0,0,0,0.1)] shrink-0 w-[316.184px]" data-node-id="200:53998" data-name="image 4907">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14.07px] size-full" src={imgImage4907} />
              </div>
            </motion.div>
            <motion.div style={{ opacity: sideOpacity, x: rightX, y: sideYv, scale: sideScale }} className="absolute flex h-[282.891px] items-center justify-center left-[415.17px] top-[211.62px] w-[306.178px]" data-node-id="200:53999">
              <div className="flex-none rotate-8">
                <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex h-[247.099px] items-center p-[8.026px] relative rounded-[21.402px] shadow-[0px_2.675px_10.701px_0px_rgba(0,0,0,0.1)] w-[274.46px]">
                  <div className="h-[231.048px] relative rounded-[14.714px] shadow-[0px_0px_10.701px_0px_rgba(0,0,0,0.1)] shrink-0 w-[258.408px]" data-node-id="200:54000" data-name="image 4908">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14.714px] size-full" src={imgImage4908} />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div style={{ opacity: sideOpacity, x: leftX, y: sideYv, scale: sideScale }} className="absolute flex h-[204.7px] items-center justify-center left-0 top-[143.44px] w-[237.443px]" data-node-id="200:54001">
              <div className="-rotate-8 flex-none">
                <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex h-[176.499px] items-center p-[6.055px] relative rounded-[18.165px] shadow-[0px_3.027px_12.11px_0px_rgba(0,0,0,0.1)] w-[214.971px]">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:54002" data-name="review card">
                    <div className="col-1 h-[164.389px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[1.538px_1.538px] mask-size-[220.691px_187.947px] ml-0 mt-0 relative row-1 w-[202.861px]" data-node-id="200:54004" style={{ maskImage: `url("${imgImage4900}")` }} data-name="image 4900">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4901} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div style={{ opacity: subOpacity, y: subY }} className="absolute h-[118.789px] left-[40px] top-[818.68px] w-[1200px]" data-node-id="164:19516">
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roobert:Regular'] leading-[0] left-[600px] not-italic text-[32px] text-[rgba(0,0,0,0.8)] text-center top-0 w-[1200px] whitespace-pre-wrap" data-node-id="164:19517">
            <span className="leading-[1.6]">Build trust with every shopper and get in front of your future customers in AI search engines like</span>
            <span className="leading-[1.6] text-[rgba(0,0,0,0)]">ChatGPT, Gemini, Perplexity, and more</span>
            <span className="leading-[1.6]">{`.          `}</span>
            <span className="leading-[1.6]">{`       `}</span>
            <span className="leading-[1.6]">and more.</span>
          </p>
          <div className="absolute content-stretch flex gap-[8px] items-center left-[339.5px] top-[45.21px]" data-node-id="164:19518">
            <div className="flex h-[65.074px] items-center justify-center relative shrink-0 w-[215.534px]" data-node-id="164:19519">
              <div className="flex-none rotate-3">
                <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative rounded-[1000px]" data-name="button">
                  <div className="relative shrink-0 size-[24px]" data-node-id="164:19520" data-name="image 4904">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4904} />
                  </div>
                  <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[normal] not-italic relative shrink-0 text-[#333] text-[32px] whitespace-nowrap" data-node-id="164:19521">
                    ChatGPT
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-[63.697px] items-center justify-center relative shrink-0 w-[189.27px]" data-node-id="164:19522">
              <div className="-rotate-3 flex-none">
                <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative rounded-[1000px]" data-name="button">
                  <div className="flex items-center justify-center relative shrink-0 size-[26.7px]" data-node-id="164:19523">
                    <div className="flex-none rotate-[6.87deg]">
                      <div className="relative size-[24px]" data-name="image 4905">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4905} />
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[normal] not-italic relative shrink-0 text-[#333] text-[32px] whitespace-nowrap" data-node-id="164:19524">
                    Gemini
                  </p>
                </div>
              </div>
            </div>
            <div className="flex h-[73.579px] items-center justify-center relative shrink-0 w-[230.843px]" data-node-id="164:19525">
              <div className="flex-none rotate-5">
                <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative rounded-[1000px]" data-name="button">
                  <div className="flex items-center justify-center relative shrink-0 size-[26px]" data-node-id="164:19526">
                    <div className="-rotate-5 flex-none">
                      <div className="relative size-[24px]" data-name="image 4906">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4906} />
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[normal] not-italic relative shrink-0 text-[#333] text-[32px] whitespace-nowrap" data-node-id="164:19527">
                    Perplexity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

  );
}

/**
 * Interactive Typewriter Search Bar matching Figma Node 164:14185 (Search query)
 * and Node 164:14217 (Insertion point cursor)
 * 10-second timeline cohort loop with 2.3s linear character typing,
 * followed by Figma's exact cursor blinking keyframes.
 */
function TypewriterSearchQuery({
  text = "Suggest me 5–7 moisturizers that are available in Vietnam, across price ranges of 300k, 500k, and 1 million VND.",
}: {
  text?: string;
}) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [replayCount, setReplayCount] = useState(0);

  useEffect(() => {
    let loopTimer: ReturnType<typeof setInterval>;
    let typingTimer: ReturnType<typeof setInterval>;

    const TOTAL_CYCLE_MS = 10000;
    const TYPE_DURATION_MS = 2300;
    const intervalPerChar = TYPE_DURATION_MS / text.length;

    const runTypewriter = () => {
      setDisplayedChars(0);
      let count = 0;
      if (typingTimer) clearInterval(typingTimer);
      typingTimer = setInterval(() => {
        count++;
        if (count <= text.length) {
          setDisplayedChars(count);
        } else {
          clearInterval(typingTimer);
        }
      }, intervalPerChar);
    };

    runTypewriter();
    loopTimer = setInterval(runTypewriter, TOTAL_CYCLE_MS);

    return () => {
      clearInterval(loopTimer);
      clearInterval(typingTimer);
    };
  }, [text, replayCount]);

  return (
    <div
      className="flex-[1_0_0] min-w-px relative cursor-pointer"
      onClick={() => setReplayCount((c) => c + 1)}
      title="Click to replay typing animation"
    >
      <p
        className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.5] not-italic relative text-[29.643px] text-[rgba(0,0,0,0.85)] min-h-[90px]"
        data-node-id="164:14185"
        data-name="Search query"
      >
        <span>{text.slice(0, displayedChars)}</span>
        <motion.span
          className="inline-block w-[3.5px] h-[30px] bg-[#015953] align-middle ml-[3px] rounded-full shadow-[0_0_8px_rgba(1,89,83,0.3)]"
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
          }}
          transition={{
            duration: 10,
            times: [0, 0.2749, 0.275, 0.3199, 0.32, 0.3649, 0.365, 0.3999, 0.4, 1],
            ease: "linear",
            repeat: Infinity,
          }}
          data-node-id="164:14217"
          data-name="Insertion point"
        />
      </p>
    </div>
  );
}

export function FigmaHero2Content() {
  return (
    <div className="h-[1315px] overflow-clip relative shrink-0 w-full" data-node-id="164:14153" data-name="hero 2">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 p-[8px] top-[80px]" data-node-id="164:17768">
        <p className="[word-break:break-word] bg-clip-text bg-gradient-to-b font-['PP_Palma:Fizzy_Heavy'] from-[#015953] from-[64.626%] leading-none not-italic relative shrink-0 text-[140px] text-[transparent] text-center to-[#077c74] to-[87.857%] tracking-[-2.8px] whitespace-nowrap" data-node-id="164:14168">{`Get found by AI. `}</p>
      </div>
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.5)] content-stretch flex items-center left-1/2 p-[16px] rounded-[36.788px] top-[392.35px] w-[1522.96px]" data-node-id="164:18273">
        <div className="flex-[1_0_0] grid-rows-[max-content] inline-grid leading-[0] min-w-px place-items-start relative" data-node-id="164:14225" data-name="img">
          <div className="aspect-[2310/1444] col-1 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[1490.96px_957.995px] ml-0 mt-0 relative rounded-[25.703px] row-1 w-[100.86%]" data-node-id="164:18266" style={{ maskImage: `url("${imgScreenshot20261031At1644441}")` }} data-name="Screenshot 2026-10-31 at 16.44.44 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[25.703px] size-full" src={imgScreenshot20261031At1644442} />
          </div>
        </div>
      </div>
      <motion.div
        whileHover={{ scale: 1.015, boxShadow: "0 16px 40px rgba(1,89,83,0.15)" }}
        transition={{ duration: 0.2 }}
        className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.45)] backdrop-blur-md content-stretch flex items-start left-[calc(50%+269.5px)] overflow-clip p-[26.349px] rounded-[26.349px] top-[290px] w-[695px] shadow-[0_8px_32px_rgba(1,89,83,0.08)] border border-white/50"
        data-node-id="164:14175"
        data-name="Search bar"
      >
        <div className="content-stretch flex h-[48.051px] items-center overflow-clip relative shrink-0 w-[80.086px]" data-node-id="164:14176" data-name="Search affordance">
          <motion.div
            animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="opacity-85 overflow-clip relative shrink-0 size-[52.233px]"
            data-node-id="164:14177"
            data-name="glitter-2-svgrepo-com 1"
          >
            <div className="absolute inset-[8.22%_7.94%]" data-node-id="164:14178" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
            </div>
          </motion.div>
        </div>
        <TypewriterSearchQuery />
      </motion.div>
    </div>
  );
}

interface Hero3Props {
  progress?: MotionValue<number>;
}

export function FigmaHero3Content({ progress }: Hero3Props) {
  return (
    <div className="bg-[#fefcdf] h-[1262px] mx-auto overflow-clip relative shrink-0 w-[1440px]" data-node-id="164:14229" data-name="hero 3">
      <Hero3Artwork progress={progress} />
      <div className="absolute content-stretch flex flex-col items-center left-[112px] right-[112px] top-[181px] z-10 pointer-events-none" data-node-id="164:14232" data-name="Content">
        <p className="[word-break:break-word] bg-clip-text bg-gradient-to-b font-['PP_Palma:Fizzy_Heavy'] from-[#015953] from-[64.626%] h-[140px] leading-none not-italic relative shrink-0 text-[140px] text-[transparent] text-center to-[#077c74] to-[87.857%] tracking-[-2.8px] w-[1200px]" data-node-id="164:14233">
          Sell more.
        </p>
      </div>
    </div>
  );
}

/**
 * Pixel-perfect reproduction of Figma Frame 164:14229 (hero 3) & uploaded 3D scene.
 * Replaces the static pineapple slices with the 4 authentic 3D elements (Box, Bag, Star, Cart Badge)
 * jumping dynamically from the central Joomi juice can on scroll.
 */
function Hero3Artwork({ progress }: Hero3Props) {
  // If no parent progress is supplied (e.g. standalone render), default to settled rest (value 1)
  const defaultProgress = useMotionValue(1);
  const activeProgress = progress ?? defaultProgress;

  // =========================================================================
  // SCROLL-DRIVEN PARABOLIC JUMP TRANSFORMS (Relative to resting coordinates)
  // Each element bursts out from the central juice can along a 3D arc,
  // overshooting slightly at its jump peak before settling into its final position.
  // =========================================================================

  // 1. Delivery Box (Top-Left)
  // Launches from can top opening (dx=+230, dy=+115), arcs up to (-70), lands at rest (0, 0)
  const boxX = useTransform(activeProgress, [0.70, 0.77, 0.84], [230, 85, 0], { clamp: true });
  const boxY = useTransform(activeProgress, [0.70, 0.77, 0.84], [115, -70, 0], { clamp: true });
  const boxScale = useTransform(activeProgress, [0.70, 0.77, 0.84], [0.1, 1.22, 1], { clamp: true });
  const boxRotate = useTransform(activeProgress, [0.70, 0.77, 0.84], [35, -28, -15.8], { clamp: true });
  const boxOpacity = useTransform(activeProgress, [0.70, 0.73, 0.84], [0, 1, 1], { clamp: true });

  // 2. Shopping Bag (Top-Right)
  // Launches from can top opening (dx=-270, dy=+20), arcs up to (-90), lands at rest (0, 0)
  const bagX = useTransform(activeProgress, [0.72, 0.79, 0.86], [-270, -100, 0], { clamp: true });
  const bagY = useTransform(activeProgress, [0.72, 0.79, 0.86], [20, -90, 0], { clamp: true });
  const bagScale = useTransform(activeProgress, [0.72, 0.79, 0.86], [0.1, 1.20, 1], { clamp: true });
  const bagRotate = useTransform(activeProgress, [0.72, 0.79, 0.86], [-25, 22, 10.2], { clamp: true });
  const bagOpacity = useTransform(activeProgress, [0.72, 0.75, 0.86], [0, 1, 1], { clamp: true });

  // 3. Yellow Star (Mid-Left Foreground)
  // Launches from can body (dx=+360, dy=-190), arcs up to (-90), drops into foreground (0, 0)
  const starX = useTransform(activeProgress, [0.74, 0.82, 0.89], [360, 130, 0], { clamp: true });
  const starY = useTransform(activeProgress, [0.74, 0.82, 0.89], [-190, -90, 0], { clamp: true });
  const starScale = useTransform(activeProgress, [0.74, 0.82, 0.89], [0.1, 1.25, 1], { clamp: true });
  const starRotate = useTransform(activeProgress, [0.74, 0.82, 0.89], [-40, 30, 18.35], { clamp: true });
  const starOpacity = useTransform(activeProgress, [0.74, 0.77, 0.89], [0, 1, 1], { clamp: true });

  // 4. Green Shopping Cart Badge (Bottom-Right Foreground)
  // Launches from can lower body (dx=-290, dy=-200), arcs up to (-110), drops into foreground (0, 0)
  const cartX = useTransform(activeProgress, [0.76, 0.84, 0.92], [-290, -110, 0], { clamp: true });
  const cartY = useTransform(activeProgress, [0.76, 0.84, 0.92], [-200, -110, 0], { clamp: true });
  const cartScale = useTransform(activeProgress, [0.76, 0.84, 0.92], [0.1, 1.22, 1], { clamp: true });
  const cartRotate = useTransform(activeProgress, [0.76, 0.84, 0.92], [25, -22, -12.5], { clamp: true });
  const cartOpacity = useTransform(activeProgress, [0.76, 0.79, 0.92], [0, 1, 1], { clamp: true });

  // 5. Central Can subtle tactile reaction pulse when items burst out
  const canScale = useTransform(activeProgress, [0.70, 0.76, 0.84, 0.92], [1.0, 0.97, 1.025, 1.0], { clamp: true });
  const canY = useTransform(activeProgress, [0.70, 0.76, 0.84, 0.92], [0, 4, -4, 0], { clamp: true });

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(ellipse 48% 44% at 50% 64%, rgb(255, 248, 175) 0%, rgb(254, 252, 227) 65%, rgb(254, 252, 223) 100%)",
      }}
    >
      {/* 1. Delivery Box (Top-Left, z-10 behind can) */}
      <motion.div
        style={{
          x: boxX,
          y: boxY,
          scale: boxScale,
          rotate: boxRotate,
          opacity: boxOpacity,
        }}
        className="absolute left-[420px] top-[380px] w-[140px] h-[130px] z-10 origin-center pointer-events-none drop-shadow-md"
      >
        <motion.div
          animate={{ y: [0, -7, 0], rotate: [0, 1.5, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full -scale-x-100"
        >
          <img
            alt="3D Delivery Package"
            className="w-full h-full object-contain pointer-events-none select-none"
            src={imgBox}
          />
        </motion.div>
      </motion.div>

      {/* 2. Shopping Bag (Top-Right, z-10 behind can) */}
      <motion.div
        style={{
          x: bagX,
          y: bagY,
          scale: bagScale,
          rotate: bagRotate,
          opacity: bagOpacity,
        }}
        className="absolute left-[880px] top-[430px] w-[220px] h-[220px] z-10 origin-center pointer-events-none drop-shadow-md"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full -scale-x-100"
        >
          <img
            alt="3D Shopping Bag"
            className="w-full h-full object-contain pointer-events-none select-none"
            src={imgBag}
          />
        </motion.div>
      </motion.div>

      {/* 3. Center Joomi Pineapple Juice Can (z-20) */}
      <motion.div
        style={{
          scale: canScale,
          y: canY,
        }}
        className="absolute h-[557px] left-[566px] top-[482px] w-[308px] z-20 origin-center drop-shadow-[0_18px_36px_rgba(35,72,41,0.08)]"
      >
        {/* Base 3D Aluminum Can with metallic rim, bottom, and cylindrical shading */}
        <img
          alt="Joomi Pineapple Juice 330ml Can"
          className="absolute inset-0 h-full w-full object-contain pointer-events-none select-none"
          src={imgCan3}
        />

        {/* Masked Label Overlay with Multiply Blending */}
        <div
          className="absolute inset-0 overflow-hidden mix-blend-multiply"
          style={{
            WebkitMaskImage: `url(${imgCan2})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center center",
            WebkitMaskSize: "100% 100%",
            maskImage: `url(${imgCan2})`,
            maskRepeat: "no-repeat",
            maskPosition: "center center",
            maskSize: "100% 100%",
          }}
        >
          {/* Label warm cream body fill */}
          <div className="absolute inset-0 bg-[#fff8e8]" />

          {/* Top Tagline */}
          <p
            className="absolute left-1/2 top-[41px] -translate-x-1/2 font-['Archivo'] text-[11px] font-semibold text-[#234829] tracking-[0.04em] whitespace-nowrap select-none"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            A BRIGHT LITTLE PICK-ME-UP.
          </p>

          {/* Brand "joomi" */}
          <p className="absolute left-1/2 top-[88px] -translate-x-1/2 font-['Short_Stack'] text-[72px] leading-none text-[#234829] tracking-[-0.02em] select-none">
            joomi
          </p>

          {/* Flavor Name */}
          <div className="absolute left-[34px] top-[188px] font-['Cascadia_Code'] font-bold text-[19px] leading-[1.05] tracking-tight text-[#234829] select-none">
            <p className="m-0">PINEAPPLE</p>
            <p className="m-0">JUICE</p>
          </div>

          {/* Floating Golden Circles (Vector SVG) */}
          <div className="absolute left-[38px] top-[146px] w-[242px] pointer-events-none select-none">
            <img alt="" className="block w-full h-auto" src={imgCircles} />
          </div>

          {/* Pineapple Graphic with green crown and diamond texture (Vector SVG) */}
          <div className="absolute left-[134px] top-[162px] w-[148px] -rotate-[7.77deg] pointer-events-none select-none">
            <img alt="" className="block w-full h-auto" src={imgIllus} />
          </div>

          {/* Bottom Copy */}
          <div className="absolute bottom-[54px] left-[24px] flex flex-col gap-[3px] select-none">
            <p
              className="font-['Archivo'] font-medium text-[11px] text-[#234829] tracking-[0.01em]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Big tropical energy.
            </p>
            <p
              className="font-['Archivo'] font-bold text-[13px] text-[#234829]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              330 mL
            </p>
          </div>
        </div>
      </motion.div>

      {/* 4. Yellow Star (Mid-Left Foreground, z-30 with soft depth blur) */}
      <motion.div
        style={{
          x: starX,
          y: starY,
          scale: starScale,
          rotate: starRotate,
          opacity: starOpacity,
        }}
        className="absolute left-[200px] top-[680px] w-[320px] h-[320px] z-30 origin-center pointer-events-none filter blur-[3.5px] drop-shadow-xl"
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full -scale-x-100"
        >
          <img
            alt="3D Glowing Star"
            className="w-full h-full object-contain pointer-events-none select-none"
            src={imgStar}
          />
        </motion.div>
      </motion.div>

      {/* 5. Green Shopping Cart Badge (Bottom-Right Foreground, z-30 with camera depth blur) */}
      <motion.div
        style={{
          x: cartX,
          y: cartY,
          scale: cartScale,
          rotate: cartRotate,
          opacity: cartOpacity,
        }}
        className="absolute left-[720px] top-[660px] w-[580px] h-[520px] z-30 origin-center pointer-events-none filter blur-[4.5px] drop-shadow-2xl"
      >
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -1.5, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full"
        >
          <img
            alt="3D Shopping Cart Badge"
            className="w-full h-full object-contain pointer-events-none select-none"
            src={imgCart}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function FigmaHowLeft() {
  return (
    <div
      className="content-stretch flex flex-col gap-[36px] lg:gap-[40px] items-start relative shrink-0 max-w-[600px]"
      data-node-id="184:26270"
      data-name="Heading and subheading"
    >
      <div
        className="content-stretch flex flex-col gap-[20px] lg:gap-[24px] items-start not-italic relative shrink-0 w-full"
        data-node-id="184:26472"
        data-name="text"
      >
        <p
          className="font-['Roobert:SemiBold'] leading-[1.2] relative shrink-0 text-[#30b7ae] text-[20px] lg:text-[24px] tracking-[-0.48px]"
          data-node-id="184:26271"
        >
          HOW IT WORKS
        </p>
        <p
          className="font-['PP_Palma:Fizzy_Heavy'] leading-[1.04] relative shrink-0 text-[#057c74] text-[52px] sm:text-[62px] lg:text-[72px] tracking-[-1.44px] max-w-[580px] break-normal"
          data-node-id="184:26272"
        >
          Empowering you to drive growth
        </p>
      </div>
      <div
        className="bg-[#057c74] content-stretch flex h-[56px] items-center justify-center px-[28px] relative rounded-[1000px] shrink-0 hover:bg-[#04635d] transition-colors cursor-pointer shadow-md hover:shadow-lg"
        data-node-id="184:26461"
        data-name="button"
      >
        <p
          className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[24px] lg:text-[28px] text-white whitespace-nowrap"
          data-node-id="I184:26461;128:8608"
        >
          Book a demo
        </p>
      </div>
    </div>
  );
}

export function FigmaSlide1() {
  return (
    <div
      className="relative size-full overflow-hidden bg-[#243530]"
      data-node-id="184:26274"
      data-name="slide 1"
    >
      <img
        alt="Collect review - Dermarium notification"
        className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
        src={img522791B9620D452583896Af5F600187B1}
      />
      <div
        className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10 bg-[rgba(0,0,0,0.32)] backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col gap-3 lg:gap-4 p-6 lg:p-7 rounded-[24px] z-10 mx-auto text-white"
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
        data-node-id="184:26276"
      >
        <p
          className="font-['Roobert:SemiBold'] leading-tight text-2xl lg:text-[32px] tracking-[-1px] text-white"
          data-node-id="184:26277"
        >
          Collect review
        </p>
        <p
          className="font-['Roobert:Regular'] leading-[1.25] text-base lg:text-[20px] text-white/85 tracking-[-0.3px]"
          data-node-id="184:26278"
        >
          Set up flows that ask at the right moment, in the format each customer is most likely to use, from a star rating email to a video upload
        </p>
      </div>
    </div>
  );
}

export function FigmaSlide2() {
  return (
    <div
      className="relative size-full overflow-hidden bg-[#fc0] flex flex-col justify-end items-center pb-6 lg:pb-10 px-6 lg:px-10"
      data-node-id="184:26279"
      data-name="slide 2"
    >
      <div
        className="absolute top-6 lg:top-8 left-1/2 -translate-x-1/2 w-[85%] max-w-[480px] h-[78%] rounded-[32px] overflow-hidden shadow-xl"
        data-node-id="184:26280"
        data-name="68403c9d0b29131142c48726_fa95a7df58fe8815fa5d1bbfbc61392b_graphic-google-seller-rating-media 1"
      >
        <img
          alt=""
          className="absolute inset-0 size-full object-cover object-top pointer-events-none rounded-[32px]"
          src={img68403C9D0B29131142C48726Fa95A7Df58Fe8815Fa5D1Bbfbc61392BGraphicGoogleSellerRatingMedia1}
        />
      </div>
      <div
        className="relative w-full mx-auto bg-white/50 backdrop-blur-2xl border border-white/60 shadow-[0_12px_36px_rgba(0,0,0,0.08)] flex flex-col gap-3 lg:gap-4 p-6 lg:p-7 rounded-[24px] z-10 text-[#1b2230]"
        style={{
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
        data-node-id="184:26281"
      >
        <p
          className="font-['Roobert:SemiBold'] leading-tight text-2xl lg:text-[34px] tracking-[-1px] text-[#1b2230]"
          data-node-id="184:26282"
        >
          Elevate conversions
        </p>
        <p
          className="font-['Roobert:Regular'] leading-[1.25] text-base lg:text-[22px] tracking-[-0.3px] text-[#1b2230]/85"
          data-node-id="184:26283"
        >
          Show the reviews that convert, directly on the pages where shoppers decide.
        </p>
      </div>
    </div>
  );
}

export function FigmaSlide3() {
  return (
    <div
      className="relative size-full overflow-hidden p-6 lg:p-10 flex flex-col justify-between"
      data-node-id="184:26284"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(5, 124, 116) 0%, rgb(5, 124, 116) 100%)",
      }}
      data-name="slide 3"
    >
      <div
        className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full"
        data-node-id="184:26285"
      >
        <div
          className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full"
          data-node-id="184:26286"
        >
          <p
            className="font-['Roobert:SemiBold'] relative shrink-0 text-[26px] lg:text-[32px] text-[rgba(255,255,255,0.9)] w-full"
            data-node-id="184:26287"
          >
            Survey Insights
          </p>
          <p
            className="font-['PP_Palma:Fizzy_Heavy'] relative shrink-0 text-[56px] lg:text-[72px] text-white tracking-[-2.88px] w-full"
            data-node-id="184:26288"
          >
            82.6 %
          </p>
          <p
            className="font-['Roobert:Regular'] relative shrink-0 text-[18px] lg:text-[24px] text-[rgba(255,255,255,0.8)] w-full"
            data-node-id="184:26289"
          >
            customers reponded with 🥰 or better
          </p>
        </div>
      </div>
      <div
        className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[14px] lg:gap-[16px] items-start left-0 top-1/2 w-full max-w-[644px] px-6 lg:px-10"
        data-node-id="184:26313"
      >
        <div
          className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
          data-node-id="184:26314"
        >
          <div
            className="bg-[#cbefee] flex-[1_0_0] h-[52px] lg:h-[56px] min-w-px relative rounded-br-[1000px] rounded-tr-[1000px]"
            data-node-id="184:26315"
          />
          <p
            className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[32px] lg:text-[36px] text-white whitespace-nowrap"
            data-node-id="184:26316"
          >
            🥰
          </p>
          <p
            className="[word-break:break-word] absolute font-['Roobert:Medium'] leading-[1.2] not-italic right-[188px] text-[16px] lg:text-[18px] text-[rgba(0,91,85,0.8)] top-[16px] tracking-[-0.36px] translate-x-full whitespace-nowrap"
            data-node-id="184:26317"
          >
            120 responses
          </p>
        </div>
        <div
          className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[85%]"
          data-node-id="184:26318"
        >
          <div
            className="bg-[#a4e2a7] flex-[1_0_0] h-[52px] lg:h-[56px] min-w-px relative rounded-br-[1000px] rounded-tr-[1000px]"
            data-node-id="184:26319"
          />
          <p
            className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[32px] lg:text-[36px] text-white whitespace-nowrap"
            data-node-id="184:26320"
          >
            😊
          </p>
        </div>
        <div
          className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[70%]"
          data-node-id="184:26321"
        >
          <div
            className="bg-[#ffe7e7] flex-[1_0_0] h-[52px] lg:h-[56px] min-w-px relative rounded-br-[1000px] rounded-tr-[1000px]"
            data-node-id="184:26322"
          />
          <p
            className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[32px] lg:text-[36px] text-white whitespace-nowrap"
            data-node-id="184:26323"
          >
            🙂
          </p>
        </div>
        <div
          className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[55%]"
          data-node-id="184:26324"
        >
          <div
            className="bg-[#fdf6bb] flex-[1_0_0] h-[52px] lg:h-[56px] min-w-px relative rounded-br-[1000px] rounded-tr-[1000px]"
            data-node-id="184:26325"
          />
          <p
            className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[32px] lg:text-[36px] text-white whitespace-nowrap"
            data-node-id="184:26326"
          >
            🤨
          </p>
        </div>
        <div
          className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[42%]"
          data-node-id="184:26327"
        >
          <div
            className="bg-[rgba(255,255,255,0.3)] flex-[1_0_0] h-[52px] lg:h-[56px] min-w-px relative rounded-br-[1000px] rounded-tr-[1000px]"
            data-node-id="184:26328"
          />
          <p
            className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[32px] lg:text-[36px] text-white whitespace-nowrap"
            data-node-id="184:26329"
          >
            😥
          </p>
        </div>
      </div>
      <div
        className="[word-break:break-word] bg-[rgba(255,255,255,0.5)] backdrop-blur-xl border border-white/30 shadow-md content-stretch flex flex-col gap-[14px] lg:gap-[16px] items-center not-italic px-[28px] lg:px-[32px] py-[16px] lg:py-[20px] relative rounded-[22px] shrink-0 w-full mx-auto z-10"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
        data-node-id="184:26307"
      >
        <p
          className="font-['Roobert:SemiBold'] leading-[normal] relative shrink-0 text-[28px] lg:text-[36px] text-white tracking-[-1.44px] w-full"
          data-node-id="184:26308"
        >
          Optimize experience
        </p>
        <p
          className="font-['Roobert:Regular'] leading-[1.2] relative shrink-0 text-[18px] lg:text-[24px] text-[rgba(255,255,255,0.85)] tracking-[-0.48px] w-full"
          data-node-id="184:26309"
        >
          Gain insights, understand your customers better and enhance their shopping experience
        </p>
      </div>
    </div>
  );
}

export function FigmaAiInsights() {
  const [replayKey, setReplayKey] = React.useState(0);

  return (
    <div
      key={replayKey}
      className="content-stretch flex flex-col items-center overflow-clip py-[120px] relative shrink-0 w-full select-none"
      data-node-id="164:20348"
      data-name="AI insights"
    >
      <div
        className="content-stretch flex flex-col gap-[55px] items-center relative shrink-0 w-full"
        data-node-id="164:21962"
      >
        <div
          className="content-stretch flex flex-col items-center relative shrink-0 w-full cursor-pointer group"
          data-node-id="184:26465"
          data-name="Content"
          onClick={() => setReplayKey((k) => k + 1)}
          title="Click to replay animation"
        >
          <div
            className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full"
            data-node-id="164:20402"
            data-name="Heading and subheading"
          >
            {/* Step 1: AI Insights and Analytics (Figma node 164:20414) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: [0, 0, 1, 1], y: [-10, -10, 0, 0] }}
              transition={{
                opacity: { duration: 10, times: [0, 0.03, 0.23, 1], ease: ["linear", [0.5, 0, 0.5, 1], "linear"], repeat: Infinity },
                y: { duration: 10, times: [0, 0.05, 0.15, 1], ease: ["linear", [0.05, 0.4, 0.5, 1], "linear"], repeat: Infinity },
              }}
              className="w-full flex justify-center py-1"
            >
              <p
                className="[word-break:break-word] bg-clip-text bg-gradient-to-b font-['PP_Palma:Fizzy_Heavy'] from-[#015953] from-[64.626%] leading-[1.2] min-w-full not-italic relative shrink-0 text-[96px] text-[transparent] text-center to-[#077c74] to-[87.857%] tracking-[-1.92px]"
                data-node-id="164:20414"
              >
                AI Insights and Analytics
              </p>
            </motion.div>

            {/* Step 2: that turn customer (Figma node 164:20426) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: [0, 0, 1, 1], y: [-10, -10, 0, 0] }}
              transition={{
                opacity: { duration: 10, times: [0, 0.23, 0.33, 1], ease: ["linear", [0.5, 0, 0.5, 1], "linear"], repeat: Infinity },
                y: { duration: 10, times: [0, 0.15, 0.25, 1], ease: ["linear", [0.05, 0.4, 0.5, 1], "linear"], repeat: Infinity },
              }}
              className="w-full flex justify-center py-1"
              data-node-id="164:20426"
            >
              <p
                className="[word-break:break-word] bg-clip-text bg-gradient-to-b font-['PP_Palma:Fizzy_Heavy'] from-[#015953] from-[64.626%] leading-[1.2] not-italic text-[96px] text-[transparent] text-center to-[#077c74] to-[87.857%] tracking-[-1.92px] w-[1200px]"
                data-node-id="164:20427"
              >
                that turn customer
              </p>
            </motion.div>

            {/* Step 3: feedback into growth (Figma node 164:20443) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: [0, 0, 1, 1], y: [-10, -10, 0, 0] }}
              transition={{
                opacity: { duration: 10, times: [0, 0.35, 0.45, 1], ease: ["linear", [0.5, 0, 0.5, 1], "linear"], repeat: Infinity },
                y: { duration: 10, times: [0, 0.25, 0.35, 1], ease: ["linear", [0.05, 0.4, 0.5, 1], "linear"], repeat: Infinity },
              }}
              className="w-full flex justify-center py-1"
            >
              <p
                className="[word-break:break-word] bg-clip-text bg-gradient-to-b font-['PP_Palma:Fizzy_Heavy'] from-[#015953] from-[64.626%] leading-[1.2] not-italic relative shrink-0 text-[96px] text-[transparent] text-center to-[#077c74] to-[87.857%] tracking-[-1.92px] w-[1200px]"
                data-node-id="164:20443"
              >
                feedback into growth
              </p>
            </motion.div>
          </div>
        </div>

        {/* Step 4: Analytics Dashboard Card (Figma node 164:20399) */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: [0, 0, 1, 1], y: [-40, -40, 0, 0] }}
          transition={{
            opacity: { duration: 10, times: [0, 0.5, 0.54, 1], ease: ["linear", [0.5, 0, 0.5, 1], "linear"], repeat: Infinity },
            y: { duration: 10, times: [0, 0.5, 0.56, 1], ease: ["linear", [0.05, 0.4, 0.5, 1], "linear"], repeat: Infinity },
          }}
          whileHover={{ scale: 1.015, y: -4, boxShadow: "0 32px 80px rgba(1,61,57,0.22)" }}
          className="h-[729.859px] relative rounded-[18px] shrink-0 w-[1370px] shadow-[0_24px_60px_rgba(1,61,57,0.18)] cursor-pointer transition-shadow"
          data-node-id="164:20399"
          data-name="Screenshot 2026-10-31 at 18.15.59 1"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[18px]">
            <img
              alt="Analytics Dashboard"
              className="absolute h-[102.07%] left-[-0.94%] max-w-none top-[-1.51%] w-[102.02%]"
              src={imgScreenshot20261031At1815591}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function FigmaCustomerStories({ imageScale, imageY }: { imageScale?: MotionValue<number>; imageY?: MotionValue<number> }) {
  return (
    <div className="h-[1099px] relative shrink-0 w-[1440px]" data-node-id="164:20214" data-name="customer stories">
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[80px] top-[80px] w-[781px]" data-node-id="164:20215" data-name="Heading and subheading">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 w-full" data-node-id="164:20336">
          <p className="font-['Roobert:SemiBold'] leading-[1.2] relative shrink-0 text-[#30b7ae] text-[24px] tracking-[-0.48px] w-full" data-node-id="184:27481">
            PROOF OF PERFORMANCE
          </p>
          <div className="font-['PP_Palma:Fizzy_Heavy'] leading-[0] relative shrink-0 text-[#057c74] text-[72px] tracking-[-1.44px] w-full" data-node-id="164:20217">
            <p className="leading-none mb-0">How leading brands</p>
            <p className="leading-none">grow with REVIEWS.io</p>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex h-[56px] items-center justify-center px-[24px] relative rounded-[1000px] shrink-0" data-node-id="164:20311" data-name="button">
          <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[#333] text-[28px] whitespace-nowrap" data-node-id="I164:20311;128:8604">
            View all stories
          </p>
        </div>
      </div>
      <motion.div style={{ scale: imageScale, y: imageY }} className="absolute left-[157px] top-[229.94px] w-[1120px] h-[783px]" data-node-id="164:20218" data-name="main">
        <img
          alt="Customer stories"
          className="size-full object-contain pointer-events-none select-none"
          src={imgCustomerStories}
        />
      </motion.div>
    </div>

  );
}

export function FigmaLogoRowTop() {
  return (
    <div className="relative h-[80px] w-[4360.396px] shrink-0">
      <div className="absolute h-[80px] left-0 top-0 w-[201.98px]" data-node-id="164:22959" data-name="logo-aym 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoAym1} />
      </div>
      <div className="absolute h-[80px] left-[233.66px] top-0 w-[420.594px]" data-node-id="164:22963" data-name="logo-boxraw 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoBoxraw1} />
      </div>
      <div className="absolute h-[80px] left-[685.94px] top-0 w-[270.891px]" data-node-id="164:22965" data-name="logo-bunches 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoBunches1} />
      </div>
      <div className="absolute h-[80px] left-[988.51px] overflow-clip top-0 w-[246.337px]" data-node-id="164:22967" data-name="logo-charlie-hustle 1">
        <div className="absolute contents inset-[20.44%_6.5%_20.16%_6.44%]" data-node-id="164:22968" data-name="Clip path group">
          <div className="absolute inset-[21.42%_6.93%_20.44%_6.76%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.808px_-0.788px] mask-size-[214.471px_47.525px]" data-node-id="164:22971" style={{ maskImage: `url("${imgGroup4}")` }} data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup5} />
          </div>
        </div>
      </div>
      <div className="absolute h-[80px] left-[1266.53px] overflow-clip top-0 w-[340.594px]" data-node-id="164:22978" data-name="logo-cultiver 1">
        <div className="absolute contents inset-[20.36%_4.81%_20.24%_4.74%]" data-node-id="164:22979" data-name="Clip path group">
          <div className="absolute inset-[20.35%_4.81%_20.17%_4.74%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.003px_0.003px] mask-size-[308.073px_47.525px]" data-node-id="164:22982" style={{ maskImage: `url("${imgGroup6}")` }} data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
          </div>
        </div>
      </div>
      <div className="absolute h-[80px] left-[1638.81px] overflow-clip top-0 w-[340.594px]" data-node-id="164:22991" data-name="logo-decjuba 1">
        <div className="absolute contents inset-[20.44%_4.82%_20.16%_4.68%]" data-node-id="164:22992" data-name="Clip path group">
          <div className="absolute inset-[20.44%_4.82%_20.16%_4.68%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[308.238px_47.525px]" data-node-id="164:22995" style={{ maskImage: `url("${imgGroup8}")` }} data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup9} />
          </div>
        </div>
      </div>
      <div className="absolute h-[80px] left-[2011.09px] top-0 w-[157.624px]" data-node-id="164:22997" data-name="logo-faerly 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoFaerly1} />
      </div>
      <div className="absolute h-[80px] left-[2200.4px] top-0 w-[122.772px]" data-node-id="164:23004" data-name="logo-feey 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoFeey1} />
      </div>
      <div className="absolute h-[80px] left-[2354.85px] top-0 w-[224.95px]" data-node-id="164:23009" data-name="logo-giesswein 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoGiesswein1} />
      </div>
      <div className="absolute h-[80px] left-[2611.49px] top-0 w-[333.465px]" data-node-id="164:23026" data-name="logo-gigi-tom 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoGigiTom1} />
      </div>
      <div className="absolute h-[80px] left-[2976.63px] top-0 w-[212.277px]" data-node-id="164:23035" data-name="logo-hyggins 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoHyggins1} />
      </div>
      <div className="absolute h-[80px] left-[3220.59px] top-0 w-[241.584px]" data-node-id="164:23044" data-name="logo-istrap 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoIstrap1} />
      </div>
      <div className="absolute h-[80px] left-[3493.86px] top-0 w-[96.634px]" data-node-id="164:23052" data-name="logo-jimmy-joy 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoJimmyJoy1} />
      </div>
      <div className="absolute h-[80px] left-[3622.18px] top-0 w-[130.693px]" data-node-id="164:23061" data-name="logo-jimmys 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoJimmys1} />
      </div>
      <div className="absolute h-[80px] left-[3784.55px] top-0 w-[149.703px]" data-node-id="164:23069" data-name="logo-kloster 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoKloster1} />
      </div>
      <div className="absolute h-[80px] left-[3965.94px] top-0 w-[153.663px]" data-node-id="164:23090" data-name="logo-koko 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoKoko1} />
      </div>
      <div className="absolute h-[80px] left-[4151.29px] top-0 w-[209.109px]" data-node-id="164:23100" data-name="logo-mr-simple 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoMrSimple1} />
      </div>

    </div>
  );
}

export function FigmaLogoRowBottom() {
  return (
    <div className="relative h-[80px] w-[4399.208px] shrink-0">
      <div className="absolute h-[80px] left-0 overflow-clip top-0 w-[315.248px]" data-node-id="164:23113" data-name="logo-musclenation 1">
        <div className="absolute contents inset-[20.44%_5.22%_20.16%_5.1%]" data-node-id="164:23114" data-name="Clip path group">
          <div className="absolute inset-[20.43%_5.22%_20.17%_5.1%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.006px_0.003px] mask-size-[282.711px_47.525px]" data-node-id="164:23117" style={{ maskImage: `url("${imgGroup10}")` }} data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup11} />
          </div>
        </div>
      </div>
      <div className="absolute h-[80px] left-[346.93px] overflow-clip top-0 w-[165.545px]" data-node-id="164:23130" data-name="logo-nakie 1">
        <div className="absolute contents inset-[20.32%_9.66%_20.28%_9.91%]" data-node-id="164:23131" data-name="Clip path group">
          <div className="absolute inset-[20.32%_9.66%_20.28%_9.91%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[133.145px_47.525px]" data-node-id="164:23134" style={{ maskImage: `url("${imgGroup12}")` }} data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup13} />
          </div>
        </div>
      </div>
      <div className="absolute h-[80px] left-[544.16px] top-0 w-[340.594px]" data-node-id="164:23144" data-name="logo-napoleon 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoNapoleon1} />
      </div>
      <div className="absolute h-[80px] left-[916.44px] top-0 w-[363.564px]" data-node-id="164:23159" data-name="logo-nudea 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoNudea1} />
      </div>
      <div className="absolute h-[80px] left-[1311.68px] top-0 w-[149.703px]" data-node-id="164:23165" data-name="logo-obvi 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoObvi1} />
      </div>
      <div className="absolute h-[80px] left-[1493.07px] top-0 w-[209.901px]" data-node-id="164:23169" data-name="logo-ocusfield 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoOcusfield1} />
      </div>
      <div className="absolute h-[80px] left-[1734.65px] overflow-clip top-0 w-[103.762px]" data-node-id="164:23178" data-name="logo-rocka 1">
        <div className="absolute contents inset-[20.55%_15.48%_20.04%_15.33%]" data-node-id="164:23179" data-name="Clip path group">
          <div className="absolute inset-[20.55%_15.48%_20.04%_15.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.003px_0.001px] mask-size-[71.793px_47.525px]" data-node-id="164:23182" style={{ maskImage: `url("${imgGroup14}")` }} data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup15} />
          </div>
        </div>
      </div>
      <div className="absolute h-[80px] left-[1870.1px] top-0 w-[141.782px]" data-node-id="164:23184" data-name="logo-rookie 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoRookie1} />
      </div>
      <div className="absolute h-[80px] left-[2043.56px] top-0 w-[96.634px]" data-node-id="164:23189" data-name="logo-skate-society 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoSkateSociety1} />
      </div>
      <div className="absolute h-[80px] left-[2171.88px] top-0 w-[449.901px]" data-node-id="164:23202" data-name="logo-slumberpod 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoSlumberpod1} />
      </div>
      <div className="absolute h-[80px] left-[2653.47px] top-0 w-[393.663px]" data-node-id="164:23204" data-name="logo-thrivewear 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoThrivewear1} />
      </div>
      <div className="absolute h-[80px] left-[3078.81px] top-0 w-[321.584px]" data-node-id="164:23218" data-name="logo-twinings 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoTwinings1} />
      </div>
      <div className="absolute h-[80px] left-[3432.08px] overflow-clip top-0 w-[144.951px]" data-node-id="164:23220" data-name="logo-vaay 1">
        <div className="absolute contents inset-[20.4%_11.02%_20.2%_11.22%]" data-node-id="164:23221" data-name="Clip path group">
          <div className="absolute inset-[20.4%_11.02%_20.2%_11.22%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[112.702px_47.525px]" data-node-id="164:23224" style={{ maskImage: `url("${imgGroup16}")` }} data-name="Group">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup17} />
          </div>
        </div>
      </div>
      <div className="absolute h-[80px] left-[3608.71px] top-0 w-[245.545px]" data-node-id="164:23226" data-name="logo-vuori 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoVuori1} />
      </div>
      <div className="absolute h-[31.683px] left-[3885.94px] top-[24.16px] w-[75.248px]" data-node-id="164:23228" data-name="logo-waterdrop 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoWaterdrop1} />
      </div>
      <div className="absolute h-[80px] left-[3992.87px] top-0 w-[150.495px]" data-node-id="164:23240" data-name="logo-wave 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoWave1} />
      </div>
      <div className="absolute h-[80px] left-[4175.05px] top-0 w-[224.158px]" data-node-id="164:23251" data-name="logo-wed2b 1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoWed2B1} />
      </div>

    </div>
  );
}

export function FigmaIntegrations() {
  return (
    <div className="bg-[#fbfdf4] content-stretch flex flex-col gap-[96px] items-center overflow-clip px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-node-id="184:27382" data-name="integrations">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[492.347px] left-1/2 top-[calc(50%+79.5px)] w-[672.974px]" data-node-id="184:27383" data-name="Mint atmospheric glow">
        <div className="absolute inset-[-40.62%_-29.72%]">
          <img alt="" className="block max-w-none size-full" src={imgMintAtmosphericGlow} />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start justify-center px-[80px] relative shrink-0 w-full" data-node-id="184:27549" data-name="text">
        <p className="[word-break:break-word] font-['PP_Palma:Fizzy_Heavy'] leading-[1.2] not-italic relative shrink-0 text-[#005b55] text-[72px] text-center tracking-[-1.44px] w-full" data-node-id="184:27385">
          Alongside many platforms and tools linked to REVIEWS.io
        </p>
      </div>
      <div className="h-[358px] relative shrink-0 w-[668px]" data-node-id="194:33205">
        <div className="absolute contents left-[-8px] top-[-8px]" data-node-id="184:27551">
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="absolute bg-[rgba(255,255,255,0.25)] backdrop-blur-md content-stretch flex flex-col h-[92.001px] items-center left-[223.31px] p-[8px] rounded-[24px] shadow-[0px_8px_24px_0px_rgba(1,89,83,0.15)] top-[126.77px] w-[245.848px] z-10"
            data-node-id="194:33472"
          >
            <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[24px] relative rounded-[16px] shrink-0 w-full shadow-sm" data-node-id="184:27458" data-name="reviews.io">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="184:27459" data-name="reviewsio-logo1">
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[31.05px] mt-[3.43px] place-items-start relative row-1" data-node-id="184:27460" data-name="Group">
                  <div className="col-1 h-[21.077px] ml-0 mt-0 relative row-1 w-[131.936px]" data-node-id="184:27461" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup18} />
                  </div>
                  <div className="col-1 h-[12.004px] ml-[134.1px] mt-[8.38px] relative row-1 w-[16.698px]" data-node-id="184:27469" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup19} />
                  </div>
                </div>
                <div className="col-1 h-[28.001px] ml-0 mt-0 relative row-1 w-[27.847px]" data-node-id="184:27473" data-name="Group">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup20} />
                </div>
              </div>
            </div>
          </motion.div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[267.7px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[-8px] w-[157.067px]" data-node-id="194:33440">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 7, 0, -7, 0] }}
              transition={{ duration: 4.5, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut", repeat: Infinity }}
              whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.2 } }}
              className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full cursor-pointer"
              data-node-id="184:27443"
              data-name="Integration card / BigCommerce"
            >
              <div className="h-[32px] relative shrink-0 w-[109.067px]" data-node-id="184:27491" data-name="image 4940">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[170.42%] left-0 max-w-none top-[-36.15%] w-full" src={imgImage4940} />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[82.83px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[8px] w-[149.72px]" data-node-id="194:33439">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -7, 0, 7, 0] }}
              transition={{ duration: 4.5, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut", repeat: Infinity }}
              whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.2 } }}
              className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full cursor-pointer"
              data-node-id="184:27499"
              data-name="Integration card / Shopify"
            >
              <div className="h-[31.999px] relative shrink-0 w-[101.72px]" data-node-id="184:27501" data-name="image 4941">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4941} />
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[-8px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[104px] w-[171.37px]" data-node-id="194:33438">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 7, 0, -7, 0] }}
              transition={{ duration: 4.5, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut", repeat: Infinity }}
              whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.2 } }}
              className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full cursor-pointer"
              data-node-id="184:27503"
              data-name="Integration card / WooCommerce"
            >
              <div className="h-[31.999px] relative shrink-0 w-[123.37px]" data-node-id="184:27506" data-name="image 4942">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4942} />
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[63.57px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[250px] w-[138.24px]" data-node-id="194:33445">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -7, 0, 7, 0] }}
              transition={{ duration: 4.5, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut", repeat: Infinity }}
              whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.2 } }}
              className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full cursor-pointer"
              data-node-id="184:27508"
              data-name="Integration card / Klaviyo"
            >
              <div className="absolute contents left-[16px] top-[12px]" data-node-id="184:27517" data-name="Mask group">
                <div className="absolute h-[32px] left-[16px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[90.24px_32px] top-[12px] w-[92.849px]" data-node-id="184:27516" style={{ maskImage: `url("${imgRectangle240648336}")` }}>
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle240648337} />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[473.9px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[234px] w-[216.42px]" data-node-id="194:33443">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -7, 0, 7, 0] }}
              transition={{ duration: 4.5, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut", repeat: Infinity }}
              whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.2 } }}
              className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full cursor-pointer"
              data-node-id="184:27539"
              data-name="Integration card / Dotdigital"
            >
              <div className="h-[32px] relative shrink-0 w-[168.42px]" data-node-id="184:27542" data-name="image 4945">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4945} />
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[258px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[294px] w-[169.44px]" data-node-id="194:33444">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 7, 0, -7, 0] }}
              transition={{ duration: 4.5, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut", repeat: Infinity }}
              whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.2 } }}
              className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full cursor-pointer"
              data-node-id="184:27521"
              data-name="Integration card / Gorgias"
            >
              <div className="h-[29.048px] relative shrink-0 w-[121.44px]" data-node-id="184:27537" data-name="image 4944">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4944} />
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[529.7px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[104px] w-[146px]" data-node-id="194:33442">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 7, 0, -7, 0] }}
              transition={{ duration: 4.5, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut", repeat: Infinity }}
              whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.2 } }}
              className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full cursor-pointer"
              data-node-id="184:27529"
              data-name="Integration card / Attentive"
            >
              <div className="h-[26.457px] relative shrink-0 w-[98px]" data-node-id="184:27545" data-name="image 4946">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[241.56%] left-0 max-w-none top-[-72.21%] w-full" src={imgImage4946} />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[465.9px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[8px] w-[157.558px]" data-node-id="194:33441">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -7, 0, 7, 0] }}
              transition={{ duration: 4.5, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut", repeat: Infinity }}
              whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.2 } }}
              className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full cursor-pointer"
              data-node-id="184:27447"
              data-name="Integration card / Magento"
            >
              <div className="h-[32px] relative shrink-0 w-[109.558px]" data-node-id="184:27479" data-name="image 4938">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4938} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>

  );
}

export function FigmaFeedbackHeader() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[48px] items-center left-1/2 top-[160px] w-[1280px]" data-node-id="184:26354">
      <p className="[word-break:break-word] bg-clip-text bg-gradient-to-b font-['PP_Palma:Fizzy_Heavy'] from-[#015953] from-[64.626%] leading-none min-w-full not-italic relative shrink-0 text-[100px] text-[transparent] text-center to-[#077c74] to-[87.857%] tracking-[-2px] w-[min-content]" data-node-id="184:26355">
        Brands love what we do!
      </p>
      <div className="content-stretch flex gap-[28px] items-center relative shrink-0" data-node-id="194:33517">
        <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[24px] relative rounded-[26.349px] shrink-0" data-node-id="194:33518" data-name="g2 rate">
          <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[0] not-italic relative shrink-0 text-[0px] text-[#212126] text-center tracking-[-0.72px] whitespace-nowrap" data-node-id="194:33519">
            <span className="leading-[1.5] text-[36px]">{`4.8 `}</span>
            <span className="leading-[1.5] text-[32px]">★</span>
          </p>
          <div className="content-stretch flex gap-[8px] items-center pt-[4px] relative shrink-0" data-node-id="194:33520" data-name="subtext">
            <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.5] not-italic relative shrink-0 text-[24px] text-[#212126] tracking-[-0.48px] whitespace-nowrap" data-node-id="194:33521">
              rating on
            </p>
            <div className="h-[31.999px] relative shrink-0 w-[101.72px]" data-node-id="194:33522" data-name="image 4941">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4941} />
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[24px] relative rounded-[26.349px] shrink-0 w-[364px]" data-node-id="194:33523" data-name="shopify rate">
          <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[0] not-italic relative shrink-0 text-[0px] text-[#212126] text-center tracking-[-0.72px] whitespace-nowrap" data-node-id="194:33524">
            <span className="leading-[1.5] text-[36px]">{`4.8 `}</span>
            <span className="leading-[1.5] text-[32px]">★</span>
          </p>
          <div className="content-stretch flex gap-[8px] items-center pt-[4px] relative shrink-0" data-node-id="194:33525" data-name="subtext">
            <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.5] not-italic relative shrink-0 text-[24px] text-[#212126] tracking-[-0.48px] whitespace-nowrap" data-node-id="194:33526">
              rating on
            </p>
            <div className="relative shrink-0 size-[32px]" data-node-id="194:33527" data-name="pngwing.com 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPngwingCom1} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export function FigmaFeedbackCta() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#057c74] content-stretch drop-shadow-[0px_8px_10px_rgba(0,0,0,0.1)] flex gap-[16px] items-center justify-center left-1/2 px-[40px] py-[24px] rounded-[1193.036px] top-[962.64px]" data-node-id="200:34458" data-name="button">
      <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[33.405px] text-white whitespace-nowrap" data-node-id="200:34459">
        Start your free 14-day trial
      </p>
      <div className="relative shrink-0 size-[40px]" data-node-id="200:34460" data-name="Arrow_right">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} />
      </div>
    </div>

  );
}

export function FigmaTestimonial1() {
  return (
    <div
      className="-translate-x-1/2 absolute bg-[#ffe16b] content-stretch flex flex-col gap-[24px] items-start left-[calc(50%-11.45px)] px-[32px] py-[24px] rounded-[22px] top-[19.02px] w-[555px] h-[279px] shadow-[0_16px_36px_rgba(0,60,55,0.12)]"
      data-node-id="194:33372"
      data-name="testimonial 1"
    >
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="194:33499">
        <div className="h-[46.587px] relative shrink-0 w-[67.5px]" data-node-id="194:33374" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
        </div>
        <div className="overflow-clip relative shrink-0 size-[56px]" data-node-id="194:33500" data-name="logo-greyston 1">
          <div className="absolute contents inset-[0_0.42%_0.42%_0]" data-node-id="194:33501" data-name="Clip path group">
            <div
              className="absolute inset-[-1.5%_-2.67%_-2.55%_-1.48%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.829px_0.838px] mask-size-[55.763px_55.763px]"
              data-node-id="194:33504"
              style={{
                maskImage: `url("${imgGroup21}")`,
                WebkitMaskImage: `url("${imgGroup21}")`,
              }}
              data-name="Group"
            >
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup22} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="194:33376" data-name="user name">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="194:33398" data-name="name">
          <div className="flex flex-col font-['Roobert:SemiBold'] justify-center relative shrink-0 text-[#005b57] text-[32px] tracking-[-0.64px]" data-node-id="194:33399">
            <p className="leading-none">Greyston Bakery</p>
          </div>
          <div className="flex flex-col font-['Roobert:Regular'] justify-center relative shrink-0 text-[#005b55] text-[16px] tracking-[-0.32px]" data-node-id="194:33400">
            <p className="leading-[1.2]">Greyston Bakery</p>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roobert:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#005b55] text-[20px] tracking-[-0.4px] w-full" data-node-id="194:33375">
        <p className="leading-[1.2]">“We are very happy with REVIEWS.io and the online assistance they provide. Very speedy and easy communication.”</p>
      </div>
    </div>
  );
}

export function FigmaTestimonial2() {
  return (
    <div className="absolute flex h-[317.035px] items-center justify-center left-[36.05px] top-0 w-[573.11px]" data-node-id="194:33529">
      <div className="flex-none rotate-4 rotate-[4deg]">
        <div className="bg-[#afe4c8] content-stretch flex flex-col gap-[24px] h-[279px] items-start px-[32px] py-[24px] relative rounded-[22px] w-[555px] shadow-[0_18px_40px_rgba(0,60,55,0.15)]" data-name="testimonial 2">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="194:33530">
            <div className="h-[46.587px] relative shrink-0 w-[67.5px]" data-node-id="194:33531" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
            <div className="relative shrink-0 size-[48px]" data-node-id="194:33553" data-name="logo-concrete-jungle 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoConcreteJungle1} />
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="194:33548" data-name="user name">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="194:33549" data-name="name">
              <div className="flex flex-col font-['Roobert:SemiBold'] justify-center relative shrink-0 text-[#005b57] text-[32px] tracking-[-0.64px]" data-node-id="194:33550">
                <p className="leading-none">Daniel Singh</p>
              </div>
              <div className="flex flex-col font-['Roobert:Regular'] justify-center relative shrink-0 text-[#005b55] text-[16px] tracking-[-0.32px]" data-node-id="194:33551">
                <p className="leading-[1.2]">Concrete Jungle</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Roobert:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[#005b55] text-[20px] tracking-[-0.4px] w-full" data-node-id="194:33552">
            <p className="leading-[1.2]">“We wanted a platform that gave us the features we needed at a fair price.”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FigmaTestimonial3() {
  return (
    <div className="-translate-x-1/2 absolute flex h-[317.035px] items-center justify-center left-[calc(50%-11.45px)] top-[2.37px] w-[573.11px]" data-node-id="194:33575">
      <div className="-rotate-4 -rotate-[4deg] flex-none">
        <div className="bg-[#005b55] content-stretch flex flex-col gap-[24px] h-[279px] items-start px-[32px] py-[24px] relative rounded-[22px] w-[555px] shadow-[0_20px_45px_rgba(0,40,37,0.22)]" data-name="testimonial 3">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="194:33576">
            <div className="h-[46.587px] relative shrink-0 w-[67.5px]" data-node-id="194:33577" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
            </div>
            <div className="overflow-clip relative shrink-0 size-[48px]" data-node-id="194:33635" data-name="logo-zipster 1">
              <div className="absolute inset-[0.58%_1.01%_1.01%_0.58%]" data-node-id="194:33636" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
              </div>
              <div className="absolute inset-[0.58%_1.01%_1.01%_0.58%]" data-node-id="194:33637" data-name="Vector">
                <div className="absolute inset-[-0.59%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector3} />
                </div>
              </div>
              <div className="absolute contents inset-[35.55%_7.29%_35.97%_10.37%]" data-node-id="194:33638" data-name="Clip path group">
                <div
                  className="absolute inset-[35.6%_7.32%_35.98%_10.72%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.166px_-0.024px] mask-size-[40.38px_16.392px]"
                  data-node-id="194:33641"
                  style={{
                    maskImage: `url("${imgGroup23}")`,
                    WebkitMaskImage: `url("${imgGroup23}")`,
                  }}
                  data-name="Group"
                >
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup24} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="194:33599" data-name="user name">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="194:33600" data-name="name">
              <div className="flex flex-col font-['Roobert:SemiBold'] justify-center relative shrink-0 text-[32px] text-white tracking-[-0.64px]" data-node-id="194:33601">
                <p className="leading-none">Zipster</p>
              </div>
              <div className="flex flex-col font-['Roobert:Regular'] justify-center relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] tracking-[-0.32px]" data-node-id="194:33602">
                <p className="leading-[1.2]">Zipster</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Roobert:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full" data-node-id="194:33603">
            <p className="leading-[1.2]">“We use almost all of the widgets from REVIEWS.io. They're great at showcasing our products.”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FigmaTestimonial4() {
  return (
    <div className="absolute flex h-[317.035px] items-center justify-center left-[51.82px] top-[18.29px] w-[573.11px]" data-node-id="194:33700">
      <div className="flex-none rotate-4 rotate-[4deg]">
        <div className="bg-[#ffe7e7] content-stretch flex flex-col gap-[24px] h-[279px] items-start px-[32px] py-[24px] relative rounded-[22px] w-[555px] shadow-[0_22px_48px_rgba(0,40,37,0.16)]" data-name="testimonial 4">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="194:33701">
            <div className="h-[46.587px] relative shrink-0 w-[67.5px]" data-node-id="194:33702" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
            <div className="relative shrink-0 size-[48px]" data-node-id="194:33733" data-name="logo-krior 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogoKrior1} />
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="194:33724" data-name="user name">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="194:33725" data-name="name">
              <div className="flex flex-col font-['Roobert:SemiBold'] justify-center relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[-0.64px]" data-node-id="194:33726">
                <p className="leading-none">KRIOR</p>
              </div>
              <div className="flex flex-col font-['Roobert:Regular'] justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] tracking-[-0.32px]" data-node-id="194:33727">
                <p className="leading-[1.2]">KRIOR</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Roobert:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] tracking-[-0.4px] w-full" data-node-id="194:33728">
            <p className="leading-[1.2]">“The team from REVIEWS.io is amazing. You can get in touch very easily and they help you super quick with your problem!”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FigmaTestimonial5() {
  return (
    <div className="absolute flex h-[317.035px] items-center justify-center left-0 top-[26.88px] w-[573.11px]" data-node-id="194:33738">
      <div className="-rotate-4 -rotate-[4deg] flex-none">
        <div className="bg-[#cbefee] content-stretch flex flex-col gap-[24px] h-[279px] items-start px-[32px] py-[24px] relative rounded-[22px] w-[555px] shadow-[0_24px_52px_rgba(0,40,37,0.18)]" data-name="testimonial 5">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="194:33739">
            <div className="h-[46.587px] relative shrink-0 w-[67.5px]" data-node-id="194:33740" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
            <div className="overflow-clip relative shrink-0 size-[48px]" data-node-id="194:33758" data-name="logo-caruso 1">
              <div className="absolute inset-[0.58%_1.01%_1.01%_0.58%]" data-node-id="194:33759" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
              </div>
              <div className="absolute inset-[0.58%_1.01%_1.01%_0.58%]" data-node-id="194:33760" data-name="Vector">
                <div className="absolute inset-[-0.59%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector3} />
                </div>
              </div>
              <div className="absolute contents inset-[37.43%_8.35%_38.5%_7.6%]" data-node-id="194:33761" data-name="Clip path group">
                <div
                  className="absolute inset-[31.29%_7.28%_31.57%_7.43%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.289px_2.972px] mask-size-[41.051px_14.343px]"
                  data-node-id="194:33764"
                  style={{
                    maskImage: `url("${imgGroup25}")`,
                    WebkitMaskImage: `url("${imgGroup25}")`,
                  }}
                  data-name="Group"
                >
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup26} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="194:33745" data-name="user name">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="194:33746" data-name="name">
              <div className="flex flex-col font-['Roobert:SemiBold'] justify-center relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[-0.64px]" data-node-id="194:33747">
                <p className="leading-none">Tony Caruso</p>
              </div>
              <div className="flex flex-col font-['Roobert:Regular'] justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] tracking-[-0.32px]" data-node-id="194:33748">
                <p className="leading-[1.2]">Caruso's Natural Health</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Roobert:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] tracking-[-0.4px] w-full" data-node-id="194:33749">
            <p className="leading-[1.2]">“We were using Yotpo but found REVIEWS.io better suited to our business needs.”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FigmaTestimonial6() {
  return (
    <div
      className="absolute bg-[#fdf6bb] content-stretch flex flex-col gap-[24px] h-[279px] items-start left-[36.05px] px-[32px] py-[24px] rounded-[22px] top-[47.72px] w-[555px] shadow-[0_26px_56px_rgba(0,40,37,0.18)]"
      data-node-id="194:33767"
      data-name="testimonial 6"
    >
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="194:33768">
        <div className="h-[46.587px] relative shrink-0 w-[67.5px]" data-node-id="194:33769" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
        </div>
        <div className="overflow-clip relative shrink-0 size-[48px]" data-node-id="194:33791" data-name="logo-coopers 1">
          <div className="absolute inset-[0.58%_1.01%_1.01%_0.58%]" data-node-id="194:33792" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
          </div>
          <div className="absolute inset-[0.58%_1.01%_1.01%_0.58%]" data-node-id="194:33793" data-name="Vector">
            <div className="absolute inset-[-0.59%]">
              <img alt="" className="block max-w-none size-full" src={imgVector3} />
            </div>
          </div>
          <div className="absolute contents inset-[15.2%_16.26%_15.57%_15.79%]" data-node-id="194:33794" data-name="Clip path group">
            <div
              className="absolute inset-[15.21%_16.26%_15.57%_15.79%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.001px_0px] mask-size-[32.616px_33.229px]"
              data-node-id="194:33797"
              style={{
                maskImage: `url("${imgGroup27}")`,
                WebkitMaskImage: `url("${imgGroup27}")`,
              }}
              data-name="Group"
            >
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup28} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="194:33778" data-name="user name">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="194:33779" data-name="name">
          <div className="flex flex-col font-['Roobert:SemiBold'] justify-center relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[-0.64px]" data-node-id="194:33780">
            <p className="leading-none">Made By Coopers</p>
          </div>
          <div className="flex flex-col font-['Roobert:Regular'] justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] tracking-[-0.32px]" data-node-id="194:33781">
            <p className="leading-[1.2]">Made By Coopers</p>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roobert:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] tracking-[-0.4px] w-full" data-node-id="194:33782">
        <p className="leading-[1.2]">“Easy to use and helpful team when things get a bit too techy for me to understand!”</p>
      </div>
    </div>
  );
}

export function FigmaTestimonial7() {
  return (
    <div className="absolute flex h-[344.558px] items-center justify-center left-[29.08px] top-[28.21px] w-[584.865px]" data-node-id="194:33800">
      <div className="flex-none rotate-7 rotate-[7deg]">
        <div className="bg-white content-stretch flex flex-col gap-[24px] h-[279px] items-start px-[32px] py-[24px] relative rounded-[22px] w-[555px] shadow-[0_28px_60px_rgba(0,40,37,0.22)]" data-name="testimonial 7">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="194:33801">
            <div className="h-[46.587px] relative shrink-0 w-[67.5px]" data-node-id="194:33802" data-name="Vector">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
            </div>
            <div className="overflow-clip relative shrink-0 size-[48px]" data-node-id="194:33832" data-name="logo-jimmy-joy 2">
              <div className="absolute contents inset-[0_0.42%_0.42%_0]" data-node-id="194:33833" data-name="Clip path group">
                <div className="absolute contents inset-[-8.19%_-7.2%_-7.23%_-8.19%]" data-node-id="194:33836" data-name="Group">
                  <div
                    className="absolute inset-[0_0.42%_0.42%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[49.435px_49.435px]"
                    data-node-id="194:33837"
                    style={{
                      maskImage: `url("${imgVector4}")`,
                      WebkitMaskImage: `url("${imgVector4}")`,
                    }}
                    data-name="Vector"
                  >
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                  </div>
                  <div className="absolute contents inset-[-8.19%_-7.2%_-7.23%_-8.19%]" data-node-id="194:33838" data-name="Clip path group">
                    <div className="absolute contents inset-[-9.94%_-12.43%_-28.2%_-8.19%]" data-node-id="194:33841" data-name="Group">
                      <div
                        className="absolute inset-[-9.94%_-12.43%_-28.2%_-8.19%] mask-position-[4.094px_4.983px,_0.029px_0.928px] mask-size-[49.435px_49.435px,_57.288px_57.299px]"
                        data-node-id="194:33842"
                        style={{
                          maskImage: `url("${imgVector4}"), url("${imgVector6}")`,
                          WebkitMaskImage: `url("${imgVector4}"), url("${imgVector6}")`,
                        }}
                        data-name="Vector"
                      >
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
                      </div>
                      <div className="absolute contents inset-[20.14%_9.48%_20.87%_13.42%]" data-node-id="194:33843" data-name="Clip path group">
                        <div
                          className="absolute inset-[-7.93%_-7.02%_-7.02%_-7.92%] mask-position-[3.934px_3.927px,_-0.13px_-0.128px,_10.711px_13.739px] mask-size-[49.435px_49.435px,_57.288px_57.299px,_37.973px_29.591px]"
                          data-node-id="194:33846"
                          style={{
                            maskImage: `url("${imgVector4}"), url("${imgVector6}"), url("${imgGroup29}")`,
                            WebkitMaskImage: `url("${imgVector4}"), url("${imgVector6}"), url("${imgGroup29}")`,
                          }}
                          data-name="Group"
                        >
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup30} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="194:33811" data-name="user name">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-node-id="194:33812" data-name="name">
              <div className="flex flex-col font-['Roobert:SemiBold'] justify-center relative shrink-0 text-[32px] text-[rgba(0,0,0,0.8)] tracking-[-0.64px]" data-node-id="194:33813">
                <p className="leading-none">Otto Mouton</p>
              </div>
              <div className="flex flex-col font-['Roobert:Regular'] justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] tracking-[-0.32px]" data-node-id="194:33814">
                <p className="leading-[1.2]">Jimmy Joy</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Roobert:Regular'] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[rgba(0,0,0,0.8)] tracking-[-0.4px] w-full" data-node-id="194:33815">
            <p className="leading-[1.2]">“Our experience with REVIEWS.io has been incredible! We only wish we had switched to REVIEWS.io earlier!”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FigmaTestimonials() {
  return (
    <div className="h-[372.766px] relative shrink-0 w-[624.93px]" data-node-id="200:53990" data-name="testimonials">
      <FigmaTestimonial1 />
      <FigmaTestimonial2 />
      <FigmaTestimonial3 />
      <FigmaTestimonial4 />
      <FigmaTestimonial5 />
      <FigmaTestimonial6 />
      <FigmaTestimonial7 />
    </div>
  );
}

export function FigmaWhatsNew() {
  return (
    <div className="bg-[#fc0] content-stretch flex flex-col items-start justify-center overflow-clip p-[80px] relative shrink-0 w-[1440px]" data-node-id="164:19455" data-name="what's new">
      <div className="content-stretch flex gap-[40px] h-[144px] items-center relative shrink-0 w-[1280px]" data-node-id="164:19506" data-name="Heading and subheading">
        <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-center min-w-px relative" data-node-id="200:34445">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="198:34326">
            <div className="[word-break:break-word] font-['PP_Palma:Fizzy_Heavy'] leading-[0] not-italic relative shrink-0 text-[72px] text-[rgba(0,0,0,0.7)] tracking-[-1.44px] whitespace-nowrap" data-node-id="164:19508">
              <p className="leading-none mb-0 whitespace-pre">{`What’s new `}</p>
              <p className="leading-none whitespace-pre">this month?</p>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Roobert:Regular'] leading-[1.2] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.8)] w-[445.464px]" data-node-id="198:34324">
            Discover the latest updates designed to help you collect more customer reviews, build trust, and increase conversions.
          </p>
        </div>
        <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex gap-[16px] h-[56px] items-center justify-center px-[22.4px] relative rounded-[1400px] shrink-0" data-node-id="200:34446" data-name="button">
          <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[#333] text-[25.2px] whitespace-nowrap" data-node-id="200:34447">
            Explore updates
          </p>
          <div className="relative shrink-0 size-[20px]" data-node-id="200:34453" data-name="Arrow Outward">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowOutward} />
          </div>
        </div>
      </div>
    </div>

  );
}

export function FigmaFooter() {
  return (
    <div className="bg-[#fbfdf4] content-stretch flex flex-col items-start relative shrink-0" data-node-id="151:12970" data-name="footer">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1440px]" data-node-id="151:12986">
        <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-node-id="151:12982" data-name="content">
          <div className="flex flex-row items-center self-stretch" data-node-id="151:13012">
            <div className="border-[rgba(0,0,0,0.1)] border-r border-solid content-stretch flex flex-col h-full items-start justify-center px-[80px] relative shrink-0">
              <div className="h-[32px] overflow-clip relative shrink-0 w-[199.669px]" data-node-id="151:12991" data-name="66e00d77b400163fc0d831d0_4d3b0b51312903ee62e3ff7df64fc4af_reviewsio-logo 1">
                <div className="absolute contents inset-[5.01%_4.89%_7.49%_4.01%]" data-node-id="151:12992" data-name="reviewsio-logo1">
                  <div className="absolute contents inset-[15.73%_4.89%_18.4%_19.56%]" data-node-id="151:12993" data-name="Group">
                    <div className="absolute inset-[15.73%_14.36%_18.4%_19.56%]" data-node-id="151:12994" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
                    </div>
                    <div className="absolute inset-[41.91%_4.89%_20.58%_86.74%]" data-node-id="151:13002" data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                  <div className="absolute inset-[5.01%_82.04%_7.49%_4.01%]" data-node-id="151:13006" data-name="Group">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start py-[40px] relative shrink-0" data-node-id="151:12981" data-name="right">
            <div className="content-stretch flex gap-[59px] items-start relative shrink-0" data-node-id="151:12980">
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="147:10637" data-name="div10">
                <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#30b7ae] text-[14px] tracking-[-0.28px] uppercase w-[min-content]" data-node-id="200:34598">
                  PLATFORM
                </p>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="200:34613">
                  <div className="content-stretch flex gap-[9px] items-start relative shrink-0" data-node-id="147:10638" data-name="a1">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="147:10639">
                      Overview
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="147:10640" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="147:10643" data-name="svg2">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.504px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="147:10644" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup32} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="147:10646" data-name="a2">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="147:10647">{`Products & Features`}</p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="147:10648" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="147:10651" data-name="svg3">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="147:10652" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup33} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[9px] items-start relative shrink-0" data-node-id="147:10654" data-name="a3">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="147:10655">
                      Integrations
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="147:10656" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="147:10659" data-name="svg4">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.502px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="147:10660" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup34} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="147:10662" data-name="a4">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="147:10663">
                      Pricing
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="147:10664" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="147:10667" data-name="svg5">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.498px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="147:10668" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup35} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="200:34467" data-name="a4">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34468">
                      Product updates
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34469" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34472" data-name="svg5">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.498px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34473" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup35} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="200:34475" data-name="div10">
                <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#30b7ae] text-[14px] tracking-[-0.28px] uppercase w-[min-content]" data-node-id="200:34600">
                  EXPLORE
                </p>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="200:34614">
                  <div className="content-stretch flex gap-[9px] items-start relative shrink-0" data-node-id="200:34476" data-name="a1">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34477">
                      AI insights
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34478" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34481" data-name="svg2">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.504px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34482" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup32} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="200:34484" data-name="a2">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34485">
                      Success stories
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34486" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34489" data-name="svg3">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34490" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup33} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[9px] items-start relative shrink-0" data-node-id="200:34492" data-name="a3">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34493">
                      Compare platforms
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34494" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34497" data-name="svg4">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.502px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34498" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup34} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="200:34500" data-name="a4">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34501">{`Blogs & Guides`}</p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34502" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34505" data-name="svg5">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.498px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34506" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup35} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="200:34508" data-name="a4">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34509">
                      Partner directory
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34510" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34513" data-name="svg5">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.498px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34514" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup35} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="200:34516" data-name="div10">
                <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#30b7ae] text-[14px] tracking-[-0.28px] uppercase w-[min-content]" data-node-id="200:34608">
                  COMpany
                </p>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="200:34615">
                  <div className="content-stretch flex gap-[9px] items-start relative shrink-0" data-node-id="200:34517" data-name="a1">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34518">
                      About us
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34519" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34522" data-name="svg2">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.504px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34523" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup32} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="200:34525" data-name="a2">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34526">
                      Contact us
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34527" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34530" data-name="svg3">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34531" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup33} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[9px] items-start relative shrink-0" data-node-id="200:34533" data-name="a3">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34534">
                      Careers
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34535" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34538" data-name="svg4">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.502px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34539" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup34} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="200:34541" data-name="a4">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34542">
                      Become a partner
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34543" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34546" data-name="svg5">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.498px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34547" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup35} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="200:34549" data-name="a4">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34550">
                      Partner Directory
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34551" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34554" data-name="svg5">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.498px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34555" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup35} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-node-id="200:34557" data-name="div10">
                <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#30b7ae] text-[14px] tracking-[-0.28px] uppercase w-[min-content]" data-node-id="200:34610">{`support & legal`}</p>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-node-id="200:34616">
                  <div className="content-stretch flex gap-[9px] items-start relative shrink-0" data-node-id="200:34558" data-name="a1">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34559">
                      Help center
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34560" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34563" data-name="svg2">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.504px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34564" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup32} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="200:34566" data-name="a2">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34567">
                      FAQs
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34568" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34571" data-name="svg3">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34572" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup33} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[9px] items-start relative shrink-0" data-node-id="200:34574" data-name="a3">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34575">{`Privacy & Data protection`}</p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34576" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34579" data-name="svg4">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.502px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34580" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup34} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="200:34582" data-name="a4">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34583">{`Terms & Conditions`}</p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34584" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34587" data-name="svg5">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.498px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34588" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup35} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-node-id="200:34590" data-name="a4">
                    <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[#1b2230] text-[18px] tracking-[-0.36px] whitespace-nowrap" data-node-id="200:34591">
                      Legal information
                    </p>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="200:34592" data-name="Mask group">
                      <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[3.5px] mt-[3.5px] place-items-start relative row-1" data-node-id="200:34595" data-name="svg5">
                        <div className="col-1 mask-intersect mask-luminance mask-no-clip mask-no-repeat mask-position-[-3.498px_-3.5px] mask-size-[12px_12px] ml-0 mt-0 relative row-1 size-[5px]" data-node-id="200:34596" style={{ maskImage: `url("${imgGroup31}")` }} data-name="Group">
                          <div className="absolute inset-[-10%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup35} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px relative shrink-0 w-full" data-node-id="151:12984" data-name="Vector">
          <div className="absolute bottom-1/2 left-0 right-0 top-[-50%]">
            <img alt="" className="block max-w-none size-full" src={imgVector8} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--spacing-7xl,64px)] items-start overflow-clip py-[var(--spacing-7xl,64px)] relative shrink-0 w-[1440px]" data-node-id="200:34340" data-name="Footer">
        <div className="content-stretch flex flex-col items-start px-[80px] relative shrink-0 w-full" data-node-id="200:34359" data-name="Container">
          <div className="content-center flex flex-wrap gap-y-[24px] items-center justify-between relative shrink-0 w-full" data-node-id="200:34360" data-name="Content">
            <p className="[word-break:break-word] font-['Roobert:Regular'] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] whitespace-nowrap" data-node-id="200:34361">{`© REVIEWS.io. All right reserved. `}</p>
            <div className="content-stretch flex gap-[var(--spacing-3xl,24px)] items-center relative shrink-0" data-node-id="200:34362" data-name="Social icons">
              <div className="relative shrink-0 size-[24px]" data-node-id="200:34368" data-name="Social icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialIcon} />
              </div>
              <div className="relative shrink-0 size-[24px]" data-node-id="200:34363" data-name="Social icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialIcon1} />
              </div>
              <div className="relative shrink-0 size-[24px]" data-node-id="200:34365" data-name="Social icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialIcon2} />
              </div>
              <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="200:34364" data-name="Social icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialIcon3} />
              </div>
              <div className="relative shrink-0 size-[24px]" data-node-id="200:34366" data-name="Social icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialIcon4} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between px-[80px] relative shrink-0 w-full" data-node-id="200:34431">
          <div className="h-[118.9px] relative shrink-0 w-[450.578px]" data-node-id="200:34429" data-name="Screenshot 2026-11-01 at 22.10.12 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[175.82%] left-[-10.93%] max-w-none top-[-29.13%] w-[115.69%]" src={imgScreenshot20261101At2210121} />
            </div>
          </div>
          <div className="h-[114.771px] relative rounded-[22px] shrink-0 w-[472.995px]" data-node-id="200:34432" data-name="image 4948">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[22px] size-full" src={imgImage4948} />
          </div>
        </div>
      </div>
    </div>

  );
}

export function FigmaMailGraphic() {
  return (
    <div className="absolute aspect-[357.325927734375/394.286376953125] left-[5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7.144px_11.191px] mask-size-[356.775px_407.03px] right-[70.18%] rounded-[9px] top-[10771.15px]" data-node-id="151:12989" style={{ maskImage: `url("${imgImage4902}")` }} data-name="image 4901">
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[9px] size-full" src={imgImage4903} />
    </div>

  );
}
