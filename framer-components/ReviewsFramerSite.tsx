/**
 * REVIEWS.IO — FULL ANIMATED FRAMER CODE COMPONENT (Henrietta Style)
 *
 * Drop this single file into Framer (Assets -> Code -> New Code File -> `ReviewsFramerSite.tsx`)
 * and place it on your Framer canvas with Width = 100% (Fill).
 */
import React, { useRef, useState, useEffect } from "react";
import { addPropertyControls, ControlType } from "framer";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  type MotionValue,
  AnimatePresence,
} from "framer-motion";

// Auto-extracted Figma assets and helper components from Frame 164:13640
//Wait-free local assets served from /assets/
import { motion } from "motion/react";
const imgImage2 = "/assets/b402365b02a843e89f98718dda1f69bda16ef140.png";
const imgIllustrationsJumping = "/assets/d2dc240b1bc81884b99481e66d9c6d64d7d65ee6.svg";
const imgPineappleSpikyCrown = "/assets/3fc9e39a102c7f17ea9da77ea351a3af8c314f19.svg";
const imgWholePineapple = "/assets/3e34546fe34e91bc8864887fe338fc342b1f462d.svg";
const imgLittleSunshine = "/assets/f6e1df35a79e0bf6189800184d7aaba111e3aca5.svg";
const imgCircles = "/assets/54fc92644d828d2014ee11db9b6ab5dce0e3d5d6.svg";
const imgIllus = "/assets/8fdb8326f3370ee64bb20f76ba375fb4e22a7632.svg";
const imgImage8 = "/assets/3314b561711a4850c25811376fcc7ab44a352915.png";
const imgImage9 = "/assets/3584490a534911c0591bcfd62853e1768f890ccb.png";
const imgCan2 = "/assets/20243b3591e05dd153481498e390135149f88cf9.png";
const imgCan3 = "/assets/8d66e9e833abdf98615f45f2083357dd4c61e539.png";
const imgContents = "/assets/28761254121af2c563971fe86e40fac73c98b6a4.png";
const imgImage7 = "/assets/53b726407ffb545d49d79856f58d116f9f148d97.png";
const imgBox = "/assets/16b8f05500862756711b004cec64f165e4246341.png";
const imgBag = "/assets/3f8c7384d81da1fe40d2a43fcc9416539fcb1243.png";
const imgStar = "/assets/308b2e5dbb23dfa451e7d7ca6bdfe65665d8ba84.png";
const imgCart = "/assets/f436a65813f68feaf06801cb5164ac3685d00695.png";
const imgPineappleBg = "/assets/325dd6441d1f8e7357e6584177a30fec40aebdcd.svg";
const imgIllustrationsChilling = "/assets/ad63d11ceafa07883b5c53c81fc51ca835243ba6.svg";
const imgOrangeBg = "/assets/58f3adad9f00920f8c8bb4cb1174472e49976714.svg";
const imgImage4907 = "/assets/673d6e700f6e1ac40bde736901554361d13dc414.png";
const imgImage4908 = "/assets/3e6cf3057d25f0aeeb0cba240be6c702498e44ea.png";
const imgImage4901 = "/assets/ad5ac742b2e7e39b8f7c186482d72d73561f1cc4.png";
const imgImage4904 = "/assets/808cf4a87ce2d856a11af393004688f1a9052950.png";
const imgImage4905 = "/assets/848a7726020e45f570d9dcaab538d92de5e50c24.png";
const imgImage4906 = "/assets/bbcec2b62a17c474b73be71f17cd33dc30bdc113.png";
const imgScreenshot20261031At1644442 = "/assets/foundai.png";
const img68403C9D0B29131142C48726Fa95A7Df58Fe8815Fa5D1Bbfbc61392BGraphicGoogleSellerRatingMedia1 = "/assets/ca9c4cfc973899267b6c4345a0fc599a66e8f630.png";
const img522791B9620D452583896Af5F600187B1 = "/assets/bafd84c69c7aed20ac5beed8bde855b820100fc1.png";
const imgScreenshot20261031At1815591 = "/assets/b6ad59c119faa405bcec6af9cd62d5e808d6bdf5.png";
const imgScreen3 = "/assets/adb17e11f1d1041ca56caae2accd7df579853d73.png";
const imgRectangle240648335 = "/assets/7ffe1f23590b3cb309cb0c7f7667533a5f3d9dcf.png";
const imgSuppliedBrandPhotography1 = "/assets/acb33396eee690dd763ef3aadf1c706d95204b4f.png";
const imgRectangle240648327 = "/assets/d76d03cb0df072b8cc20e7cd4a7e0517f3d19012.png";
const imgScreenshot20261031At2052491 = "/assets/975fcb8a3ed53782d46495bacca8bd8046210285.png";
const imgImage4913 = "/assets/d5fa7c26394d73ef1542b13988a1319d8f7f8609.png";
const imgImage4912 = "/assets/ca1be737b50f5311b35b7a0a4b7c52ab103dab68.png";
const imgScreen1 = "/assets/297d27d9e6340f43450a0e303e32194110e69a0a.png";
const imgRectangle240648334 = "/assets/6d121ffb14e34c2970d63492fd01ff8ff4d3e6e0.png";
const imgImage4940 = "/assets/dbe04675d96a90710b8c26ce16303adabb927934.png";
const imgImage4941 = "/assets/48939f21194d70af0b8eb825f796efb93b296ac7.png";
const imgImage4942 = "/assets/880bc2cb8c770b6e79112314837c37634fa3c010.png";
const imgRectangle240648336 = "/assets/73142a94062b36d0158be49f3112f2ed999388e7.png";
const imgImage4945 = "/assets/1254402674dd7f35f76805894006936a70900110.png";
const imgImage4944 = "/assets/8375bb8ef645494fa6942578789016a08d3e8037.png";
const imgImage4946 = "/assets/2494623b9ed00bd6001a2c8f6810b4b206057323.png";
const imgImage4938 = "/assets/bbaf1f0beea6df545c6f3f9358c310a2500246fd.png";
const imgPngwingCom1 = "/assets/65666fd35cc526f11a4e018e32733e8360214aee.png";
const imgScreenshot20261101At2210121 = "/assets/c267b9412b15b9a93767b93b115e052c216ec417.png";
const imgImage4948 = "/assets/e3045136b45b2121e5c957b6656866f87375c5d4.png";
const imgImage4903 = "/assets/01c2c9e6ef466ee4c3360c699e82f22d554fe750.png";
const imgBg = "/assets/b0a162cc0ae9b46983f69a0ce9810ff9e22c5fa2.svg";
const imgGroup = "/assets/040bf2094bc5f6f4d6471563ed3b0dbcdc143fc7.svg";
const imgGroup1 = "/assets/ff9ab1e71c70f847fc083fb7dc1aa892feac284f.svg";
const imgGroup2 = "/assets/92691a643cdfe126a4482ffb5e44e09b274dac80.svg";
const imgExpandDown = "/assets/80e8580dc60a6458eb7b327de95f97cd1be2e839.svg";
const imgImage4900 = "/assets/828717250261d435bf050d8ea98753e7c9037691.svg";
const imgScreenshot20261031At1644441 = "/assets/7b30ff8cb91f3c91688390c46ce042440972e515.svg";
const imgGroup3 = "/assets/02e6458539cf800b0c5b4628140884a7875c8c4f.svg";
const imgBackground = "/assets/beb4ade8836cb8418858b0d1c26ffd105d994480.svg";
const imgBackground1 = "/assets/acc91138293bc401256303b5feebd06fdd91ec09.svg";
const imgScreen2 = "/assets/029c016bd062a323e4702158d9f1c7a1fbda91d2.svg";
const imgArrowUpRight = "/assets/1118bf38fec92ae1082ac7424ade80b19b4b34c7.svg";
const imgRectangle240648328 = "/assets/bb1115605496d24a2097dcdd3f84c627c1e2c4eb.svg";
const imgTrendingUp = "/assets/86f1b8aee4c938dba1244cdef89147a32e4a3df8.svg";
const imgSuppliedBrandPhotography = "/assets/3e9186f2a4ead62c21811fb25ccf9d180b742d3e.svg";
const imgRectangle240648329 = "/assets/5480aa0cdb83aa9570637768887b7cf50d680245.svg";
const imgTrendingUp1 = "/assets/423d45d7fbd1fde296d4ec66dfa8b0bb0c55ab37.svg";
const imgArrowUpRight1 = "/assets/a22cb73f28620cfa7a625dbe41cd8b738af875fe.svg";
const imgArrowUpRight2 = "/assets/944fa6f9e6c1c9d26a1ed0b9c438bf2952d4353c.svg";
const imgRectangle240648330 = "/assets/6394388074be480597a9118a6a711809fcae61a8.svg";
const imgTrendingUp2 = "/assets/53ba77770b1b1be20bfee29f841374f1baa3be4b.svg";
const imgLogoAym1 = "/assets/2afbcf2518c2c6957978cf5a754a852788df03a4.svg";
const imgLogoBoxraw1 = "/assets/b09473b98bda43ad9c752a92f110c51b8f163d46.svg";
const imgLogoBunches1 = "/assets/0a496a567635909fc2ebd01bf9fbbab0fa572359.svg";
const imgGroup4 = "/assets/ea31ce6053a8e4a5ce4a7d638f4bb089d24b0991.svg";
const imgGroup5 = "/assets/5717f80bd816f62e7402e01ccc119c59571d07c4.svg";
const imgGroup6 = "/assets/d98ff6edc35d6bcf996158d70a0483b27cf4b89d.svg";
const imgGroup7 = "/assets/cd1e365fd9dd77e6feaa19b2ce67577cbed9bacb.svg";
const imgGroup8 = "/assets/f71917b10ab77b11dad1a04c220e64db282f9783.svg";
const imgGroup9 = "/assets/254b8d5c4d7668674ae2b7c00f63badfee8501a5.svg";
const imgLogoFaerly1 = "/assets/b702a15f5eb593ee353283a9c974ad597578c865.svg";
const imgLogoFeey1 = "/assets/8df0af75451c9188318efac5b4ed318089dab2d1.svg";
const imgLogoGiesswein1 = "/assets/5daacb4af104485a7929a178cc73801947499699.svg";
const imgLogoGigiTom1 = "/assets/f27b93708ee618f9b1f9aae2ddb8c1c46f908030.svg";
const imgLogoHyggins1 = "/assets/d02d0c524a0659022a113325c2732513cafb652b.svg";
const imgLogoIstrap1 = "/assets/c523d0f0c0334392e3e2d015b9ba84f964097c66.svg";
const imgLogoJimmyJoy1 = "/assets/092c88254777aa65900e47f08b72ec4be28976b0.svg";
const imgLogoJimmys1 = "/assets/45b4d80a6906b476384e3e705aadaf9d1359b459.svg";
const imgLogoKloster1 = "/assets/66f7eb370356866e340826db95f507f2745ceae2.svg";
const imgLogoKoko1 = "/assets/1f7745bd8df9dbed83d39ef5ccf8c5dc241c0c44.svg";
const imgLogoMrSimple1 = "/assets/e1b11a72663f243ddcb186c73635a2363079b0c1.svg";
const imgGroup10 = "/assets/41ee2d6f7713062172534e1f3b9b1deb9604fdd5.svg";
const imgGroup11 = "/assets/397fd3355d7bcb903af7c39501873b32ca4db683.svg";
const imgGroup12 = "/assets/75daee448b3467ff09202a933c6fcf1f759f3eb6.svg";
const imgGroup13 = "/assets/ffb04c1ae0a9f248f60c164b297d61e54435f407.svg";
const imgLogoNapoleon1 = "/assets/1bd8fbc7131bcc528d145422d58ec023a11857a6.svg";
const imgLogoNudea1 = "/assets/1fc9787ac41bca7cb52623c8911b607710c43477.svg";
const imgLogoObvi1 = "/assets/0462ac3e160a801e245d21bc38028d5b061b5d4a.svg";
const imgLogoOcusfield1 = "/assets/7de217e9d4f08e0ea27ed6b97999a32974ee3134.svg";
const imgGroup14 = "/assets/06b1348f232fb493a1cd97e30736cf8f72817721.svg";
const imgGroup15 = "/assets/9358996f77b484817e6fa3779e855b82c17ef531.svg";
const imgLogoRookie1 = "/assets/6692e64066caadd2fd320690cbd0b58c8f0e89a9.svg";
const imgLogoSkateSociety1 = "/assets/f5b87690cf3f441f59e50ba4b6c4f0124cc80b86.svg";
const imgLogoSlumberpod1 = "/assets/b4b8dbbdb681ce801ae67d3012ec41ae81d3bb8d.svg";
const imgLogoThrivewear1 = "/assets/a43acbad56ac36bbe4891fcb64346a71690c0ef0.svg";
const imgLogoTwinings1 = "/assets/7e242d1556de3494eca930604afdbf7e1bb4892a.svg";
const imgGroup16 = "/assets/089b1bcbe945b51013085f2967c6a6b4fa3c2c9b.svg";
const imgGroup17 = "/assets/4fe650b5a82daaf74581124c126e2607a3b891a0.svg";
const imgLogoVuori1 = "/assets/1ce5c8ace6691852ecc1ee5fd496bba3693b65d2.svg";
const imgLogoWaterdrop1 = "/assets/7bed68f30f016d9c5ab827bd90d9ae7630e7176d.svg";
const imgLogoWave1 = "/assets/1f8015cb323437e15ef01c459724e65e60ff50c5.svg";
const imgLogoWed2B1 = "/assets/65d1a7287f05a660338f88c0a4fb2d442139d315.svg";
const imgMintAtmosphericGlow = "/assets/21edaa0253569fd53ffa7d6b88705a6efa66f99e.svg";
const imgGroup18 = "/assets/059008e9076600d71111addf9480117c95a90718.svg";
const imgGroup19 = "/assets/3c062501096041e5d5584a29f6e24de012153c8b.svg";
const imgGroup20 = "/assets/4c5f052f5c2a7d76251d9ac7dcca0edddaf3ee4e.svg";
const imgRectangle240648337 = "/assets/1e1ceed49dfe6bcb60ebe6e476d910ea69d452a2.svg";
const imgArrowRight = "/assets/64691fef43bc435fde70aebebaa376a2a714cfa0.svg";
const imgVector = "/assets/60964ecb97b4f89c7274de8773e8c6b82d56ae09.svg";
const imgGroup21 = "/assets/3fe43b3e3eeea38fc5edf6f12ebcf8223bd782f1.svg";
const imgGroup22 = "/assets/21eba3e57ef97a4bac59577918161bbfc20c9891.svg";
const imgLogoConcreteJungle1 = "/assets/c0480ce767839f15307768ecce508e78d8037948.svg";
const imgVector1 = "/assets/826d854e87c6e76647bfe14dd7b1663f46c640bb.svg";
const imgVector2 = "/assets/699fee69e6f00e9e7cd2b248130125208f256cbc.svg";
const imgVector3 = "/assets/6dcf5f8b9fe2c0c0743154279478f90fa87dcf0e.svg";
const imgGroup23 = "/assets/03f202fd4b6084b5018e24a7059bf2847c9620b5.svg";
const imgGroup24 = "/assets/e1010aac3167a972270fd1e45fcd906463556285.svg";
const imgLogoKrior1 = "/assets/d09a88cfdf207e3d12b9fd46a882453e3890e230.svg";
const imgGroup25 = "/assets/70b3d2cea51f30310840ce9f72fd70f8de4e90c3.svg";
const imgGroup26 = "/assets/ccc2d80f086efc9db7972d9cb9c20064fe388c28.svg";
const imgGroup27 = "/assets/65aed9d0408436390d31c847ff6c705ca36dc761.svg";
const imgGroup28 = "/assets/ff56b10ea939a7b3389736702ba30b4119d652b2.svg";
const imgVector4 = "/assets/032d5975de196da41f7cf315d5e5858e991d89e4.svg";
const imgVector5 = "/assets/a4408df3e33f06f2abd7c2c31ff523aed491fdda.svg";
const imgVector6 = "/assets/00ab70965d592c785d2fc9cd73c7f4aca94503be.svg";
const imgVector7 = "/assets/c957a09aa488c29655a2cfe710c145b73f2776b1.svg";
const imgGroup29 = "/assets/0dee6dcf10d627a5ae5c2f1897dec3ff2d1e13cc.svg";
const imgGroup30 = "/assets/fb04662eb9a7e1090f56f154b975c6feb5b6eef6.svg";
const imgArrowOutward = "/assets/1ddd930384e0197f3dbb53d29ef02037ce38ae33.svg";
const imgMinusCircle = "/assets/e71b983b9aebf74796ca4a8f902bd602c0f9fa6b.svg";
const imgLine472 = "/assets/851a233f57dde2319faee10d3e39557241594d5e.svg";
const imgPlusCircle = "/assets/393ec1395915cda2eb2d41c0d9feae0587b731cf.svg";
const imgGroup31 = "/assets/ecd597b846f4a3e0a5b6a478ce4d277457dd4efa.svg";
const imgGroup32 = "/assets/6cd231c10f2c79670188a3ff7f6d21d091078cec.svg";
const imgGroup33 = "/assets/34d9264990bbdb98f12810ceae03795aee986ca2.svg";
const imgGroup34 = "/assets/cf63fbe86ca2736d74e1dd15388d904325d8184a.svg";
const imgGroup35 = "/assets/2ba1bdaa30dd73a2fb9a9d0fa15ebb573cd85e75.svg";
const imgVector8 = "/assets/6e94c16188902573456a7f623e48014a1e128da3.svg";
const imgSocialIcon = "/assets/af8e1880d817803909e12d2e123acbf3895eb5f0.svg";
const imgSocialIcon1 = "/assets/8969ea0a9e2c117a2575edb4ff867244591fadb8.svg";
const imgSocialIcon2 = "/assets/1caa7508f354d164e8aaae7f2d890151bad8f6c6.svg";
const imgSocialIcon3 = "/assets/4ae2b87c58005d4ea1dff2034636330d70b26cf7.svg";
const imgSocialIcon4 = "/assets/366ea60b25bbb8db92650563177dc4f22b29c21b.svg";
const imgImage4902 = "/assets/07bb913ad5e8dab02e8910dd95b0226ab4aab2c2.svg";

function Logo({ className }: { className?: string }) {
  return (
    <div className={className || "h-[39px] relative w-[147px]"} data-node-id="164:16238" data-name="Logo">
      <p className="[word-break:break-word] absolute font-['Clash_Display:Medium'] inset-0 leading-[normal] not-italic text-[31.429px] text-black text-center whitespace-nowrap" data-node-id="164:16239">{`Tarragon `}</p>
    </div>
  );
}

function Contents({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white h-[511px] relative w-[1184px]"} data-node-id="164:16240" data-name="Contents">
      <div className="absolute contents left-[427.76px] top-[36.93px]" data-node-id="164:16241" data-name="Front-content">
        <p className="[word-break:break-word] absolute font-['Clash_Display:Medium'] inset-[83.67%_45.19%_8.89%_45.19%] leading-[normal] not-italic text-[30.85px] text-black text-center whitespace-nowrap" data-node-id="164:16242">
          Orange
        </p>
        <p className="[word-break:break-word] absolute font-['Clash_Display:Medium'] inset-[91%_45.71%_7.04%_45.59%] leading-[normal] not-italic text-[7.868px] text-black text-center whitespace-nowrap" data-node-id="164:16243">
          Best way to enjoy fruit juice
        </p>
        <div className="absolute inset-[32%_36.09%_19.72%_36.13%] overflow-clip" data-node-id="164:16244" data-name="Illustrations">
          <div className="absolute inset-[5.99%_9.12%_5.83%_9.18%]" data-node-id="I164:16244;2:306" data-name="Illustrations/jumping">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIllustrationsJumping} />
          </div>
        </div>
        <Logo className="absolute h-[39px] left-[520.04px] top-[105.79px] w-[147px]" />
        <p className="[word-break:break-word] absolute font-['Clash_Display:Medium'] inset-[7.23%_45.99%_90.82%_45.91%] leading-[normal] not-italic text-[8.331px] text-black text-center whitespace-nowrap" data-node-id="164:16246">
          enjoy a refreshing drink
        </p>
      </div>
      <div className="absolute contents left-[796.16px] top-[96px]" data-node-id="164:16247" data-name="back-content">
        <div className="absolute h-[25.735px] left-[850.45px] top-[96px] w-[97px]" data-node-id="164:16248" data-name="Logo">
          <p className="[word-break:break-word] absolute font-['Clash_Display:Medium'] inset-0 leading-[normal] not-italic text-[20.74px] text-black text-center whitespace-nowrap" data-node-id="I164:16248;2:320">{`Tarragon `}</p>
        </div>
        <div className="absolute inset-[68.97%_15.92%_18.67%_75.96%]" data-node-id="164:16249" data-name="image 2">
          <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage2} />
        </div>
        <div className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium inset-[31.96%_15.29%_38.03%_67.24%] leading-[0] not-italic text-[#979797] text-[8.561px] text-center whitespace-pre-wrap" data-node-id="164:16250">
          <p className="leading-[normal] mb-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum neque risus, molestie amet, ullamcorper eu. Gravida neque varius quam nisl in fermentum. Massa adipiscing egestas laoreet posuere ultricies in. Fames sit `}</p>
          <p className="leading-[normal] mb-0">​</p>
          <p className="leading-[normal]">{`pellentesque egestas scelerisque. Tempor interdum volutpat, donec sit lacinia amet. Nisl in et hendrerit aliquam dictumst. Ante pharetra sed eu in lacus, laoreet eget risus semper. Odio quis dolor amet at nunc dictumst phasellus nulla sit. Cursus lectus leo in pretium hendrerit neque. Facilisis mattis `}</p>
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium inset-[69.08%_25.21%_19.97%_68%] leading-[normal] not-italic text-[#979797] text-[8.561px]" data-node-id="164:16251">{`st phasellus nulla sit. Cursus lectus leo in pretium hendrerit neque. Facilisis mattis `}</p>
      </div>
      <div className="absolute contents left-[181.54px] top-[96px]" data-node-id="164:16252" data-name="back-content">
        <div className="absolute h-[25.735px] left-[235.45px] top-[96px] w-[97px]" data-node-id="164:16253" data-name="Logo">
          <p className="[word-break:break-word] absolute font-['Clash_Display:Medium'] inset-0 leading-[normal] not-italic text-[20.74px] text-black text-center whitespace-nowrap" data-node-id="I164:16253;2:320">{`Tarragon `}</p>
        </div>
        <div className="absolute inset-[68.97%_67.83%_18.67%_24.05%]" data-node-id="164:16254" data-name="image 2">
          <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage2} />
        </div>
        <div className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium inset-[31.96%_67.2%_38.03%_15.33%] leading-[0] not-italic text-[#979797] text-[8.561px] text-center whitespace-pre-wrap" data-node-id="164:16255">
          <p className="leading-[normal] mb-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum neque risus, molestie amet, ullamcorper eu. Gravida neque varius quam nisl in fermentum. Massa adipiscing egestas laoreet posuere ultricies in. Fames sit `}</p>
          <p className="leading-[normal] mb-0">​</p>
          <p className="leading-[normal]">{`pellentesque egestas scelerisque. Tempor interdum volutpat, donec sit lacinia amet. Nisl in et hendrerit aliquam dictumst. Ante pharetra sed eu in lacus, laoreet eget risus semper. Odio quis dolor amet at nunc dictumst phasellus nulla sit. Cursus lectus leo in pretium hendrerit neque. Facilisis mattis `}</p>
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium inset-[69.08%_77.12%_19.97%_16.09%] leading-[normal] not-italic text-[#979797] text-[8.561px]" data-node-id="164:16256">{`st phasellus nulla sit. Cursus lectus leo in pretium hendrerit neque. Facilisis mattis `}</p>
      </div>
    </div>
  );
}

function Contents1({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#fff1d5] h-[511px] relative w-[1184px]"} data-node-id="128:7319" data-name="Contents">
      <div className="absolute bg-[#fff8e8] inset-[-0.08%_-0.02%_0.08%_0.01%]" data-node-id="128:8948" data-name="Contents">
        <div className="absolute contents left-0 top-0" data-node-id="128:8949" data-name="BACK">
          <div className="absolute bg-[#fff1d5] h-[510.996px] left-0 top-0 w-[262.049px]" data-node-id="128:8950" data-name="Information field" />
          <div className="[word-break:break-word] absolute font-['Archivo:Regular'] font-normal leading-[0] left-[31.45px] text-[#48233e] text-[9.172px] top-[446.79px] w-[199.157px]" data-node-id="128:8951" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[1.5] mb-0">Best before: see base of can.</p>
            <p className="leading-[1.5]">Please recycle your empty can.</p>
          </div>
          <div className="absolute bg-[#48233e] h-[0.655px] left-[31.45px] top-[435px] w-[199.157px]" data-node-id="128:8952" data-name="Care divider" />
          <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[15.723px] h-[115.957px] items-start left-[31.45px] overflow-clip text-[#48233e] top-[263.36px] w-[199.157px]" data-node-id="128:8953" data-name="Ingredients and care">
            <div className="content-stretch flex flex-col gap-[5.241px] items-start overflow-clip relative shrink-0 w-full" data-node-id="128:8954" data-name="Ingredients">
              <p className="font-['Archivo:Bold'] font-bold leading-[normal] relative shrink-0 text-[9.827px] whitespace-nowrap" data-node-id="128:8955" style={{ fontVariationSettings: '"wdth" 100' }}>
                WHAT’S INSIDE
              </p>
              <p className="font-['Archivo:Regular'] font-normal leading-[1.4] min-w-full relative shrink-0 text-[12.447px] w-[min-content]" data-node-id="128:8956" style={{ fontVariationSettings: '"wdth" 100' }}>
                Pineapple juice. That’s it.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[5.241px] items-start overflow-clip relative shrink-0 w-full" data-node-id="128:8957" data-name="Serving and storage">
              <p className="font-['Archivo:Bold'] font-bold leading-[normal] relative shrink-0 text-[9.827px] whitespace-nowrap" data-node-id="128:8958" style={{ fontVariationSettings: '"wdth" 100' }}>
                MAKE IT A GOOD SIP
              </p>
              <div className="font-['Archivo:Regular'] font-normal leading-[0] min-w-full relative shrink-0 text-[11.792px] w-[min-content]" data-node-id="128:8959" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[1.45] mb-0">Serve chilled. Shake gently.</p>
                <p className="leading-[1.45]">Refrigerate after opening and enjoy within 2 days.</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[55.03px] left-[88.44px] top-[58.31px] w-[79.925px]" data-node-id="128:8960" data-name="Pineapple spiky crown">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPineappleSpikyCrown} />
          </div>
          <div className="absolute h-[144.127px] left-[72.06px] top-[94.99px] w-[114.646px]" data-node-id="128:8961" data-name="Whole pineapple">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWholePineapple} />
          </div>
          <div className="absolute content-stretch flex flex-col h-[10.482px] items-start left-[31.45px] overflow-clip top-[31.45px] w-[199.157px]" data-node-id="128:8962" data-name="Back label">
            <p className="[word-break:break-word] font-['Archivo:Bold'] font-bold leading-[normal] relative shrink-0 text-[#48233e] text-[9.827px] w-full" data-node-id="128:8963" style={{ fontVariationSettings: '"wdth" 100' }}>
              HELLO, BRIGHT SIDE.
            </p>
          </div>
        </div>
        <div className="absolute contents left-[956.9px] top-0" data-node-id="128:8964">
          <p className="[word-break:break-word] absolute font-['Archivo:Bold'] font-bold leading-[normal] left-[956.9px] text-[#234829] text-[11.122px] top-[493.8px] whitespace-nowrap" data-node-id="128:8965" style={{ fontVariationSettings: '"wdth" 100' }}>
            SIP HAPPY.
          </p>
          <p className="[word-break:break-word] absolute font-['Archivo:Regular'] font-normal leading-[1.45] left-[956.9px] text-[#234829] text-[14.087px] top-[381.1px] w-[177.945px]" data-node-id="128:8966" style={{ fontVariationSettings: '"wdth" 100' }}>
            A little tang. A lot of joy. Your daily dose of the bright side.
          </p>
          <div className="[word-break:break-word] absolute font-['Shrikhand:Regular'] italic leading-[0] left-[956.9px] text-[#234829] text-[25.209px] top-[275.8px] w-[183.877px]" data-node-id="128:8967">
            <p className="leading-[1.12] mb-0">Good day.</p>
            <p className="leading-[1.12]">Great squeeze.</p>
          </div>
          <div className="absolute left-[959.87px] size-[48.193px] top-[75.63px]" data-node-id="128:8968" data-name="Little sunshine">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLittleSunshine} />
          </div>
          <p className="[word-break:break-word] absolute font-['Shrikhand:Regular'] italic leading-[normal] left-[956.9px] text-[#234829] text-[32.623px] top-0 whitespace-nowrap" data-node-id="128:8969">
            joomi
          </p>
        </div>
        <div className="absolute h-[406.822px] left-[441.8px] top-[40.5px] w-[284.007px]" data-node-id="128:8970" data-name="front">
          <div className="absolute h-[202.198px] left-[40.14px] top-[150.48px] w-[243.288px]" data-node-id="128:8971" data-name="circles">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCircles} />
          </div>
          <div className="absolute flex h-[271.909px] items-center justify-center left-[100.9px] top-[177.89px] w-[213.155px]" data-node-id="128:8980">
            <div className="flex-none rotate-[-7.77deg]">
              <div className="h-[249.719px] relative w-[181.046px]" data-name="illus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIllus} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] absolute font-['Cascadia_Code:Regular'] font-normal leading-[0] left-[33px] text-[#234829] text-[20px] top-[152.48px] whitespace-nowrap" data-node-id="128:8992">
            <p className="leading-none mb-0 whitespace-pre">{`PINEAPPLE `}</p>
            <p className="leading-none whitespace-pre">JUICE</p>
          </div>
          <p className="[word-break:break-word] absolute font-['Short_Stack:Regular'] leading-[1.2] left-[calc(50%-101.86px)] not-italic text-[#234829] text-[72px] top-[52.44px] whitespace-nowrap" data-node-id="128:8993">
            joomi
          </p>
          <p className="[word-break:break-word] absolute bottom-[96.8%] font-['Archivo:SemiBold'] font-semibold leading-[normal] left-[calc(50%-77.5px)] text-[#234829] text-[11.528px] top-0 whitespace-nowrap" data-node-id="128:8994" style={{ fontVariationSettings: '"wdth" 100' }}>
            A BRIGHT LITTLE PICK-ME-UP.
          </p>
        </div>
        <div className="-translate-y-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[20px] items-start leading-[normal] left-[38.92%] right-[50.46%] text-[#234829] top-[calc(50%+196.4px)]" data-node-id="128:8995">
          <p className="font-['Archivo:Medium'] font-medium relative shrink-0 text-[10.958px] w-full" data-node-id="128:8996" style={{ fontVariationSettings: '"wdth" 100' }}>
            Big tropical energy.
          </p>
          <p className="font-['Archivo:Bold'] font-bold relative shrink-0 text-[13.045px] w-full" data-node-id="128:8997" style={{ fontVariationSettings: '"wdth" 100' }}>
            330 mL
          </p>
        </div>
      </div>
    </div>
  );
}
type PageScreensComponentsProps = {
  className?: string;
  property1?: "Default";
};

function PageScreensComponents({ className, property1 = "Default" }: PageScreensComponentsProps) {
  return (
    <div className={className || "bg-white h-[1080px] overflow-clip relative w-[1920px]"} data-node-id="164:16258">
      <div className="absolute bg-[#fefce3] inset-[-4.83%_-2.5%_-5.94%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[1967.828px_1196.327px]" data-node-id="164:16260" style={{ maskImage: `url("${imgPineappleBg}")` }} data-name="pineapple bg" />
      <div className="absolute flex inset-[43.95%_85%_28%_-1.39%] items-center justify-center" data-node-id="164:16263" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(78.2872cqw,-24.2004cqh)] rotate-[-106.57deg] w-[hypot(-21.7128cqw,-75.7996cqh)]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[26.866px_-526.837px] mask-size-[1967.828px_1196.327px] relative size-full" style={{ maskImage: `url("${imgPineappleBg}")` }} data-name="image 8">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[55.03%_82.35%_28.29%_8.55%] items-center justify-center" data-node-id="164:16264" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(48.4066cqw,-62.2798cqh)] rotate-[-142.99deg] w-[hypot(-51.5934cqw,-37.7202cqh)]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-163.983px_-646.519px] mask-size-[1967.828px_1196.327px] relative size-full" style={{ maskImage: `url("${imgPineappleBg}")` }} data-name="image 9">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
          </div>
        </div>
      </div>
      <div className="absolute contents inset-[24.22%_37.29%_24.22%_46.67%]" data-node-id="164:16265" data-name="Can">
        <div className="absolute inset-[24.22%_37.29%_24.22%_46.67%] mask-position-[-895.89px_-313.778px,_0px_0px] mask-size-[1967.828px_1196.327px,_308.041px_556.872px]" data-node-id="164:16267" style={{ maskImage: `url("${imgPineappleBg}"), url("${imgCan2}")` }} data-name="can 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCan3} />
        </div>
        <div className="absolute contents inset-[25.3%_36.91%_27.79%_45.37%] mix-blend-multiply" data-node-id="164:16268" data-name="Mask group">
          <div className="absolute bg-white inset-[24.62%_-4.78%_28.07%_43.11%] mask-position-[-827.682px_-318.06px,_68.208px_-4.281px,_43.382px_7.37px] mask-size-[1967.828px_1196.327px,_308.041px_556.872px,_340.269px_506.656px] mix-blend-multiply" data-node-id="164:16270" style={{ maskImage: `url("${imgPineappleBg}"), url("${imgCan2}"), url("${imgContents}")` }} data-name="Contents">
            <div className="absolute contents left-[427.76px] top-[36.93px]" data-node-id="I164:16270;2:322" data-name="Front-content">
              <p className="[word-break:break-word] absolute font-['Clash_Display:Medium'] inset-[83.67%_43.83%_8.89%_43.92%] leading-[normal] not-italic text-[30.85px] text-black text-center whitespace-nowrap" data-node-id="I164:16270;2:323">
                Pineapple
              </p>
              <p className="[word-break:break-word] absolute font-['Clash_Display:Medium'] inset-[91%_45.71%_7.04%_45.59%] leading-[normal] not-italic text-[7.868px] text-black text-center whitespace-nowrap" data-node-id="I164:16270;2:324">
                Best way to enjoy fruit juice
              </p>
              <div className="absolute inset-[32%_36.09%_19.72%_36.13%] overflow-clip" data-node-id="I164:16270;2:325" data-name="Illustrations">
                <div className="absolute inset-[11.33%_8.77%_11.36%_0.13%]" data-node-id="I164:16270;2:325;2:302" data-name="Illustrations/chilling">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIllustrationsChilling} />
                </div>
              </div>
              <Logo className="absolute h-[39px] left-[520.04px] top-[105.79px] w-[147px]" />
              <p className="[word-break:break-word] absolute font-['Clash_Display:Medium'] inset-[7.23%_45.99%_90.82%_45.91%] leading-[normal] not-italic text-[8.331px] text-black text-center whitespace-nowrap" data-node-id="I164:16270;2:327">
                enjoy a refreshing drink
              </p>
            </div>
            <div className="absolute contents left-[796.16px] top-[96px]" data-node-id="I164:16270;2:328" data-name="back-content">
              <div className="absolute h-[25.735px] left-[850.45px] top-[96px] w-[97px]" data-node-id="I164:16270;2:329" data-name="Logo">
                <p className="[word-break:break-word] absolute font-['Clash_Display:Medium'] inset-0 leading-[normal] not-italic text-[20.74px] text-black text-center whitespace-nowrap" data-node-id="I164:16270;2:329;2:320">{`Tarragon `}</p>
              </div>
              <div className="absolute inset-[68.97%_15.92%_18.67%_75.96%]" data-node-id="I164:16270;2:330" data-name="image 2">
                <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage2} />
              </div>
              <div className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium inset-[31.96%_15.29%_38.03%_67.24%] leading-[0] not-italic text-[#979797] text-[8.561px] text-center whitespace-pre-wrap" data-node-id="I164:16270;2:331">
                <p className="leading-[normal] mb-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum neque risus, molestie amet, ullamcorper eu. Gravida neque varius quam nisl in fermentum. Massa adipiscing egestas laoreet posuere ultricies in. Fames sit `}</p>
                <p className="leading-[normal] mb-0">​</p>
                <p className="leading-[normal]">{`pellentesque egestas scelerisque. Tempor interdum volutpat, donec sit lacinia amet. Nisl in et hendrerit aliquam dictumst. Ante pharetra sed eu in lacus, laoreet eget risus semper. Odio quis dolor amet at nunc dictumst phasellus nulla sit. Cursus lectus leo in pretium hendrerit neque. Facilisis mattis `}</p>
              </div>
              <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium inset-[69.08%_25.21%_19.97%_68%] leading-[normal] not-italic text-[#979797] text-[8.561px]" data-node-id="I164:16270;2:332">{`st phasellus nulla sit. Cursus lectus leo in pretium hendrerit neque. Facilisis mattis `}</p>
            </div>
            <div className="absolute contents left-[181.54px] top-[96px]" data-node-id="I164:16270;2:333" data-name="back-content">
              <div className="absolute h-[25.735px] left-[235.45px] top-[96px] w-[97px]" data-node-id="I164:16270;2:334" data-name="Logo">
                <p className="[word-break:break-word] absolute font-['Clash_Display:Medium'] inset-0 leading-[normal] not-italic text-[20.74px] text-black text-center whitespace-nowrap" data-node-id="I164:16270;2:334;2:320">{`Tarragon `}</p>
              </div>
              <div className="absolute inset-[68.97%_67.83%_18.67%_24.05%]" data-node-id="I164:16270;2:335" data-name="image 2">
                <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage2} />
              </div>
              <div className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium inset-[31.96%_67.2%_38.03%_15.33%] leading-[0] not-italic text-[#979797] text-[8.561px] text-center whitespace-pre-wrap" data-node-id="I164:16270;2:336">
                <p className="leading-[normal] mb-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum neque risus, molestie amet, ullamcorper eu. Gravida neque varius quam nisl in fermentum. Massa adipiscing egestas laoreet posuere ultricies in. Fames sit `}</p>
                <p className="leading-[normal] mb-0">​</p>
                <p className="leading-[normal]">{`pellentesque egestas scelerisque. Tempor interdum volutpat, donec sit lacinia amet. Nisl in et hendrerit aliquam dictumst. Ante pharetra sed eu in lacus, laoreet eget risus semper. Odio quis dolor amet at nunc dictumst phasellus nulla sit. Cursus lectus leo in pretium hendrerit neque. Facilisis mattis `}</p>
              </div>
              <p className="[word-break:break-word] absolute font-['Inter:Medium'] font-medium inset-[69.08%_77.12%_19.97%_16.09%] leading-[normal] not-italic text-[#979797] text-[8.561px]" data-node-id="I164:16270;2:337">{`st phasellus nulla sit. Cursus lectus leo in pretium hendrerit neque. Facilisis mattis `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[16.28%_78.94%_41%_-2.73%] items-center justify-center" data-node-id="164:16271" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(52.3076cqw,-42.5304cqh)] rotate-[-129.4deg] w-[hypot(-47.6924cqw,-57.4696cqh)]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[52.456px_-228.007px] mask-size-[1967.828px_1196.327px] relative size-full" style={{ maskImage: `url("${imgPineappleBg}")` }} data-name="image 7">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[119.09%] left-0 max-w-none top-0 w-full" src={imgImage7} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[-4.83%_-2.49%_-5.94%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[1967.828px_1196.327px]" data-node-id="164:16273" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1967.8 1196.3' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(6.0247e-15 59.816 -98.391 3.6627e-15 983.91 598.16)'><stop stop-color='rgba(253,248,179,1)' offset='0'/><stop stop-color='rgba(254,252,227,1)' offset='1'/></radialGradient></defs></svg>\")", maskImage: `url("${imgOrangeBg}")` }} data-name="orange bg" />
      <div className="absolute flex inset-[14.97%_62.69%_84.91%_37.24%] items-center justify-center" data-node-id="164:16413" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(22.0463cqw,77.9537cqh)] rotate-[-15.79deg] w-[hypot(-77.9537cqw,22.0463cqh)]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-715.069px_-213.944px] mask-size-[1967.828px_1196.327px] relative size-full" style={{ maskImage: `url("${imgOrangeBg}")` }} data-name="box">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBox} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.9%_24.89%_66%_75.06%] items-center justify-center" data-node-id="164:16415" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(-16.8315cqw,86.2912cqh)] rotate-[10.17deg] w-[hypot(-83.1685cqw,-13.7088cqh)]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1441.076px_-418.319px] mask-size-[1967.828px_1196.327px] relative size-full" style={{ maskImage: `url("${imgOrangeBg}")` }} data-name="bag">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[119.95%] left-[-25.25%] max-w-none top-[-12.93%] w-[153.28%]" src={imgBag} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents inset-[24.22%_41.98%]" data-node-id="164:16278" data-name="Can">
        <div className="absolute inset-[24.22%_41.98%] mask-position-[-805.979px_-313.778px,_0px_0px] mask-size-[1967.828px_1196.327px,_308.041px_556.872px]" data-node-id="164:16280" style={{ maskImage: `url("${imgOrangeBg}"), url("${imgCan2}")` }} data-name="can 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCan3} />
        </div>
        <div className="absolute contents inset-[25.3%_41.59%_27.79%_40.69%] mix-blend-multiply" data-node-id="164:16281" data-name="Mask group">
          <Contents1 className="absolute bg-[#fff1d5] inset-[24.62%_19.18%_28.07%_19.15%] mask-position-[-367.771px_-318.06px,_438.208px_-4.281px,_413.382px_7.37px] mask-size-[1967.828px_1196.327px,_308.041px_556.872px,_340.269px_506.656px] mix-blend-multiply" />
        </div>
      </div>
      <div className="absolute flex inset-[54.64%_48.33%_45.25%_51.6%] items-center justify-center" data-node-id="164:16417" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(-24.9069cqw,75.0931cqh)] rotate-[18.35deg] w-[hypot(-75.0931cqw,-24.9069cqh)]">
          <div className="blur-[10px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-990.778px_-642.275px] mask-size-[1967.828px_1196.327px] relative size-full" style={{ maskImage: `url("${imgOrangeBg}")` }} data-name="star">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[46.02%_50.25%_53.87%_49.69%] items-center justify-center" data-node-id="164:16419" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(18.9171cqw,82.5067cqh)] rotate-[-12.54deg] w-[hypot(81.0829cqw,-17.4933cqh)]">
          <div className="blur-[25px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-954.003px_-549.193px] mask-size-[1967.828px_1196.327px] relative size-full" style={{ maskImage: `url("${imgOrangeBg}")` }} data-name="cart">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCart} />
          </div>
        </div>
      </div>
      <div className="absolute inset-[62.68%_35.49%_24.31%_58.63%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1125.789px_-729.206px] mask-size-[1967.828px_1196.327px]" data-node-id="164:16640" style={{ maskImage: `url("${imgOrangeBg}")` }} data-name="image 12">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
      <div className="absolute flex inset-[19.76%_22.73%_39.56%_53.74%] items-center justify-center" data-node-id="164:16641" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-34.217cqw,60.9444cqh)] rotate-30 w-[hypot(65.783cqw,39.0556cqh)]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1031.82px_-265.667px] mask-size-[1967.828px_1196.327px] relative size-full" style={{ maskImage: `url("${imgOrangeBg}")` }} data-name="image 10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[119.09%] left-0 max-w-none top-0 w-full" src={imgImage7} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[41.5%_57.18%_26.68%_25.23%] items-center justify-center" data-node-id="164:16642" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-39.1096cqw,64.1865cqh)] rotate-[30.91deg] w-[hypot(60.8904cqw,35.8135cqh)]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-484.454px_-500.421px] mask-size-[1967.828px_1196.327px] relative size-full" style={{ maskImage: `url("${imgOrangeBg}")` }} data-name="image 11">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
          </div>
        </div>
      </div>
    </div>
  );
}


function FigmaHeader() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-center justify-center overflow-clip px-[32px] py-[16px] relative rounded-[1000px] shrink-0" data-node-id="164:13642" data-name="header">
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
                  <p className="[word-break:break-word] font-['Roobert:Medium'] leading-[1.2] not-italic relative shrink-0 text-[8px] text-black whitespace-nowrap" data-node-id="164:13840">
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

function FigmaHero1Content() {
  return (
    <div className="h-[1257px] overflow-clip relative shrink-0 w-full" data-node-id="164:13845" data-name="hero 1">
      <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['PP_Palma:Fizzy_Heavy'] from-[#015953] from-[64.626%] leading-none left-[720px] not-italic text-[140px] text-[transparent] text-center to-[#077c74] to-[87.857%] top-[80px] tracking-[-2.8px] w-[1216px]" data-node-id="164:14098">{`Collect reviews. `}</p>
      <div className="absolute contents left-[209.13px] top-[188.04px]" data-node-id="164:14099">
        <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.5)] content-stretch flex items-center left-[calc(50%-9.07px)] overflow-clip p-[11.958px] rounded-[31.887px] top-[188.04px]" data-node-id="164:14100">
          <div className="h-[756.085px] relative rounded-[19.929px] shadow-[0px_0px_15.943px_0px_rgba(0,0,0,0.1)] shrink-0 w-[447.855px]" data-node-id="164:14101" data-name="image 4907">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[19.929px] size-full" src={imgImage4907} />
          </div>
        </div>
        <div className="absolute flex h-[400.698px] items-center justify-center left-[797.19px] top-[487.79px] w-[433.682px]" data-node-id="164:14102">
          <div className="flex-none rotate-8">
            <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex items-center p-[11.368px] relative rounded-[30.314px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)]">
              <div className="h-[327.265px] relative rounded-[20.841px] shadow-[0px_0px_15.157px_0px_rgba(0,0,0,0.1)] shrink-0 w-[366.02px]" data-node-id="164:14103" data-name="image 4908">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20.841px] size-full" src={imgImage4908} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[289.944px] items-center justify-center left-[209.13px] top-[391.22px] w-[336.323px]" data-node-id="164:14104">
          <div className="-rotate-8 flex-none">
            <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex items-center p-[8.576px] relative rounded-[25.729px] shadow-[0px_4.288px_17.153px_0px_rgba(0,0,0,0.1)]">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="164:14105" data-name="review card">
                <div className="col-1 h-[232.847px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.178px_2.178px] mask-size-[312.595px_266.215px] ml-0 mt-0 relative row-1 w-[287.341px]" data-node-id="164:14107" style={{ maskImage: `url("${imgImage4900}")` }} data-name="image 4900">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4901} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[118.789px] left-1/2 top-[1058.04px] w-[1200px]" data-node-id="164:19516">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Roobert:Regular'] leading-[0] left-[600px] not-italic text-[32px] text-[rgba(0,0,0,0.8)] text-center top-0 w-[1200px] whitespace-pre-wrap" data-node-id="164:19517">
          <span className="leading-[1.6]">Build trust with every shopper and get in front of your future customers in AI search engines like</span>
          <span className="leading-[1.6] text-[rgba(0,0,0,0)]">CatGPT, Gemini, Perplexity, and more</span>
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
      </div>
    </div>

  );
}

function FigmaHero2Content() {
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
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.3)] content-stretch flex items-start left-[calc(50%+269.5px)] overflow-clip p-[26.349px] rounded-[26.349px] top-[290px] w-[695px]" data-node-id="164:14175" data-name="Search bar">
        <div className="content-stretch flex h-[48.051px] items-center overflow-clip relative shrink-0 w-[80.086px]" data-node-id="164:14176" data-name="Search affordance">
          <div className="opacity-80 overflow-clip relative shrink-0 size-[52.233px]" data-node-id="164:14177" data-name="glitter-2-svgrepo-com 1">
            <div className="absolute inset-[8.22%_7.94%]" data-node-id="164:14178" data-name="Group">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Roobert:Medium'] leading-[1.5] min-w-px not-italic relative text-[29.643px] text-[rgba(0,0,0,0.8)]" data-node-id="164:14185">
          Suggest me 5–7 moisturizers that are available in Vietnam, across price ranges of 300k, 500k, and 1 million VND.
        </p>
      </div>
    </div>

  );
}

interface Hero3Props {
  progress?: MotionValue<number>;
}

function FigmaHero3Content({ progress }: Hero3Props) {
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
  const defaultProgress = useMotionValue(1);
  const activeProgress = progress ?? defaultProgress;

  // 1. Delivery Box (Top-Left)
  const boxX = useTransform(activeProgress, [0.70, 0.77, 0.84], [230, 85, 0], { clamp: true });
  const boxY = useTransform(activeProgress, [0.70, 0.77, 0.84], [115, -70, 0], { clamp: true });
  const boxScale = useTransform(activeProgress, [0.70, 0.77, 0.84], [0.1, 1.22, 1], { clamp: true });
  const boxRotate = useTransform(activeProgress, [0.70, 0.77, 0.84], [35, -28, -15.8], { clamp: true });
  const boxOpacity = useTransform(activeProgress, [0.70, 0.73, 0.84], [0, 1, 1], { clamp: true });

  // 2. Shopping Bag (Top-Right)
  const bagX = useTransform(activeProgress, [0.72, 0.79, 0.86], [-270, -100, 0], { clamp: true });
  const bagY = useTransform(activeProgress, [0.72, 0.79, 0.86], [20, -90, 0], { clamp: true });
  const bagScale = useTransform(activeProgress, [0.72, 0.79, 0.86], [0.1, 1.20, 1], { clamp: true });
  const bagRotate = useTransform(activeProgress, [0.72, 0.79, 0.86], [-25, 22, 10.2], { clamp: true });
  const bagOpacity = useTransform(activeProgress, [0.72, 0.75, 0.86], [0, 1, 1], { clamp: true });

  // 3. Yellow Star (Mid-Left Foreground)
  const starX = useTransform(activeProgress, [0.74, 0.82, 0.89], [360, 130, 0], { clamp: true });
  const starY = useTransform(activeProgress, [0.74, 0.82, 0.89], [-190, -90, 0], { clamp: true });
  const starScale = useTransform(activeProgress, [0.74, 0.82, 0.89], [0.1, 1.25, 1], { clamp: true });
  const starRotate = useTransform(activeProgress, [0.74, 0.82, 0.89], [-40, 30, 18.35], { clamp: true });
  const starOpacity = useTransform(activeProgress, [0.74, 0.77, 0.89], [0, 1, 1], { clamp: true });

  // 4. Green Shopping Cart Badge (Bottom-Right Foreground)
  const cartX = useTransform(activeProgress, [0.76, 0.84, 0.92], [-290, -110, 0], { clamp: true });
  const cartY = useTransform(activeProgress, [0.76, 0.84, 0.92], [-200, -110, 0], { clamp: true });
  const cartScale = useTransform(activeProgress, [0.76, 0.84, 0.92], [0.1, 1.22, 1], { clamp: true });
  const cartRotate = useTransform(activeProgress, [0.76, 0.84, 0.92], [25, -22, -12.5], { clamp: true });
  const cartOpacity = useTransform(activeProgress, [0.76, 0.79, 0.92], [0, 1, 1], { clamp: true });

  // 5. Central Can subtle tactile reaction pulse
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
        <img
          alt="Joomi Pineapple Juice 330ml Can"
          className="absolute inset-0 h-full w-full object-contain pointer-events-none select-none"
          src={imgCan3}
        />

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
          <div className="absolute inset-0 bg-[#fff8e8]" />

          <p
            className="absolute left-1/2 top-[41px] -translate-x-1/2 font-['Archivo'] text-[11px] font-semibold text-[#234829] tracking-[0.04em] whitespace-nowrap select-none"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            A BRIGHT LITTLE PICK-ME-UP.
          </p>

          <p className="absolute left-1/2 top-[88px] -translate-x-1/2 font-['Short_Stack'] text-[72px] leading-none text-[#234829] tracking-[-0.02em] select-none">
            joomi
          </p>

          <div className="absolute left-[34px] top-[188px] font-['Cascadia_Code'] font-bold text-[19px] leading-[1.05] tracking-tight text-[#234829] select-none">
            <p className="m-0">PINEAPPLE</p>
            <p className="m-0">JUICE</p>
          </div>

          <div className="absolute left-[38px] top-[146px] w-[242px] pointer-events-none select-none">
            <img alt="" className="block w-full h-auto" src={imgCircles} />
          </div>

          <div className="absolute left-[134px] top-[162px] w-[148px] -rotate-[7.77deg] pointer-events-none select-none">
            <img alt="" className="block w-full h-auto" src={imgIllus} />
          </div>

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

function FigmaHowLeft() {
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

function FigmaSlide1() {
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
        className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10 bg-[rgba(0,0,0,0.32)] backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col gap-3 lg:gap-4 p-6 lg:p-7 rounded-[24px] z-10 max-w-[560px] mx-auto text-white"
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

function FigmaSlide2() {
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
        className="relative w-full max-w-[560px] mx-auto bg-white/50 backdrop-blur-2xl border border-white/60 shadow-[0_12px_36px_rgba(0,0,0,0.08)] flex flex-col gap-3 lg:gap-4 p-6 lg:p-7 rounded-[24px] z-10 text-[#1b2230]"
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

function FigmaSlide3() {
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
        className="[word-break:break-word] bg-[rgba(255,255,255,0.5)] backdrop-blur-xl border border-white/30 shadow-md content-stretch flex flex-col gap-[14px] lg:gap-[16px] items-center not-italic px-[28px] lg:px-[32px] py-[16px] lg:py-[20px] relative rounded-[22px] shrink-0 w-full max-w-[560px] mx-auto z-10"
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

function FigmaAiInsights() {
  const [replayKey, setReplayKey] = React.useState(0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.65,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const dashboardVariants = {
    hidden: {
      opacity: 0,
      y: 32,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div
      key={replayKey}
      className="content-stretch flex flex-col items-center overflow-clip py-[120px] relative shrink-0 w-full select-none"
      data-node-id="164:20348"
      data-name="AI insights"
    >
      <motion.div
        className="content-stretch flex flex-col gap-[55px] items-center relative shrink-0 w-full"
        data-node-id="164:21962"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div
          className="content-stretch flex flex-col items-center relative shrink-0 w-full cursor-pointer group"
          data-node-id="184:26465"
          data-name="Content"
          onClick={() => setReplayKey((k) => k + 1)}
          title="Click to replay animation"
        >
          <div
            className="content-stretch flex flex-col gap-0 items-center px-[80px] relative shrink-0 w-full"
            data-node-id="164:20402"
            data-name="Heading and subheading"
          >
            {/* Step 1: AI Insights and Analytics */}
            <motion.div variants={lineVariants} className="w-full flex justify-center py-1">
              <p
                className="[word-break:break-word] bg-clip-text bg-gradient-to-b font-['PP_Palma:Fizzy_Heavy'] from-[#015953] from-[64.626%] leading-[1.2] min-w-full not-italic relative shrink-0 text-[96px] text-[transparent] text-center to-[#077c74] to-[87.857%] tracking-[-1.92px]"
                data-node-id="164:20414"
              >
                AI Insights and Analytics
              </p>
            </motion.div>

            {/* Step 2: that turn customer */}
            <motion.div variants={lineVariants} className="w-full flex justify-center -mt-[12px]" data-node-id="164:20426">
              <p
                className="[word-break:break-word] bg-clip-text bg-gradient-to-b font-['PP_Palma:Fizzy_Heavy'] from-[#015953] from-[64.626%] leading-[1.2] not-italic text-[96px] text-[transparent] text-center to-[#077c74] to-[87.857%] tracking-[-1.92px] w-[1200px]"
                data-node-id="164:20427"
              >
                that turn customer
              </p>
            </motion.div>

            {/* Step 3: feedback into growth */}
            <motion.div variants={lineVariants} className="w-full flex justify-center -mt-[12px]">
              <p
                className="[word-break:break-word] bg-clip-text bg-gradient-to-b font-['PP_Palma:Fizzy_Heavy'] from-[#015953] from-[64.626%] leading-[1.2] not-italic relative shrink-0 text-[96px] text-[transparent] text-center to-[#077c74] to-[87.857%] tracking-[-1.92px] w-[1200px]"
                data-node-id="164:20443"
              >
                feedback into growth
              </p>
            </motion.div>
          </div>
        </div>

        {/* Step 4: Analytics Dashboard Card */}
        <motion.div
          variants={dashboardVariants}
          className="h-[729.859px] relative rounded-[18px] shrink-0 w-[1370px] shadow-[0_24px_60px_rgba(1,61,57,0.18)]"
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
      </motion.div>
    </div>
  );
}

function FigmaCustomerStories() {
  return (
    <div className="h-[1099px] relative shrink-0 w-[1440px]" data-node-id="164:20214" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 1099' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-0.86591 46.326 -100.05 -1.8701 766.14 596.31)'><stop stop-color='rgba(254,252,229,1)' offset='0.36801'/><stop stop-color='rgba(221,244,238,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="customer stories">
      <div className="-translate-x-1/2 absolute h-[1099px] left-1/2 top-[0.14px] w-[1440px]" data-node-id="198:34298" data-name="Background">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBackground1} />
      </div>
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
      <div className="absolute contents left-[316px] top-[190.94px]" data-node-id="164:20218" data-name="main">
        <div className="absolute flex h-[395.091px] items-center justify-center left-[949.77px] top-[398.3px] w-[410px]" data-node-id="164:20255">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="drop-shadow-[0px_9.965px_14.948px_rgba(0,0,0,0.2)] h-[395.091px] relative w-[410px]">
              <div className="absolute contents left-0 top-0" data-node-id="164:20256" data-name="image">
                <div className="absolute flex h-[387.857px] items-center justify-center left-0 top-[-1.74px] w-[503.333px]" data-node-id="164:20258">
                  <div className="-scale-y-100 flex-none rotate-180">
                    <div className="h-[387.857px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[93.333px_4.038px] mask-size-[410px_390.685px] relative w-[503.333px]" style={{ maskImage: `url("${imgScreen2}")` }} data-name="screen 2">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreen3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-0 top-0" data-node-id="164:20259" data-name="gradient">
                <div className="absolute flex h-[457.693px] items-center justify-center left-[-12.73px] top-[-17.99px] w-[422.734px]" data-node-id="164:20261">
                  <div className="flex-none rotate-4 skew-x-4">
                    <div className="bg-gradient-to-b from-[58.655%] from-[rgba(0,0,0,0)] h-[428.132px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_20.288px] mask-size-[410px_390.685px] relative to-[91.614%] to-[rgba(0,0,0,0.8)] w-[423.766px]" style={{ maskImage: `url("${imgScreen2}")` }} data-name="Supplied brand photography" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[28.49px] flex items-center justify-center left-[26.51px] right-[29.49px]" data-node-id="164:20262" style={{ containerType: "size" }}>
                <div className="-scale-x-100 flex-none h-[hypot(0.220491cqw,76.3182cqh)] rotate-[-1.5deg] w-[hypot(-99.7795cqw,23.6818cqh)]">
                  <div className="content-stretch flex items-center justify-between overflow-clip relative w-full" data-name="Read story">
                    <div className="content-stretch flex h-[29.818px] items-center justify-center relative rounded-[19.236px] shrink-0" data-node-id="164:20263" data-name="button">
                      <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[11.93px] text-white whitespace-nowrap" data-node-id="I164:20263;128:8627">
                        Read story
                      </p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center overflow-clip relative rounded-[19.382px] shrink-0 size-[28.327px]" data-node-id="164:20264" data-name="Story action">
                      <div className="relative shrink-0 size-[14.164px]" data-node-id="164:20265" data-name="arrow-up-right">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[171.52px] top-[150.78px]" data-node-id="164:20306" data-name="Card">
                <div className="absolute flex h-[178.304px] items-center justify-center left-[171.52px] top-[150.78px] w-[208.899px]" data-node-id="164:20305">
                  <div className="-scale-y-100 -skew-x-4 flex-none rotate-176">
                    <div className="h-[163.696px] relative w-[209.409px]">
                      <div className="absolute inset-[0.38%_0_1.48%_0]">
                        <img alt="" className="block max-w-none size-full" src={imgRectangle240648328} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[133.647px] items-center justify-center left-[calc(50%+68.46px)] top-[calc(50%+39.85px)] w-[177.211px]" data-node-id="164:20269">
                  <div className="-scale-y-100 -skew-x-4 flex-none rotate-176">
                    <div className="content-stretch flex flex-col items-start relative w-[177.643px]">
                      <div className="flex h-[31.903px] items-center justify-center relative shrink-0 w-[29.891px]" data-node-id="164:20270">
                        <div className="flex-none rotate-[-3.99deg] skew-x-[-3.99deg]">
                          <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative rounded-[745.455px] size-[29.818px]">
                            <div className="relative shrink-0 size-[14.909px]" data-node-id="164:20271" data-name="trending_up">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrendingUp} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex h-[89.352px] items-center justify-center relative shrink-0 w-[177.851px]" data-node-id="164:20274">
                        <div className="flex-none rotate-[-3.99deg] skew-x-[-3.99deg]">
                          <div className="[word-break:break-word] content-stretch flex flex-col gap-[8.945px] items-start justify-center leading-none not-italic relative text-[rgba(0,0,0,0.8)] w-[177.418px]" data-name="Performance">
                            <p className="font-['PP_Palma:Fizzy_Heavy'] relative shrink-0 text-[50.933px] text-right tracking-[-1.0187px] whitespace-nowrap" data-node-id="164:20275">
                              76%
                            </p>
                            <p className="font-['Roobert:Regular'] min-w-full relative shrink-0 text-[16.978px] tracking-[-0.3396px] w-[min-content]" data-node-id="164:20276">
                              cost savings
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute contents h-[30.937px] left-[26.45px] top-[30.69px] w-[247.105px]" data-node-id="164:20310" data-name="logo">
                <div className="absolute flex h-[30.937px] items-center justify-center left-[26.45px] top-[30.69px] w-[247.105px]" data-node-id="164:20309">
                  <div className="-rotate-179 -scale-y-100 flex-none">
                    <div className="bg-white h-[26.636px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[247.105px_30.937px] relative w-[246.677px]" style={{ maskImage: `url("${imgRectangle240648335}")` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute drop-shadow-[0px_8.996px_13.494px_rgba(0,0,0,0.2)] h-[356.659px] left-[316px] top-[421.5px] w-[370.118px]" data-node-id="164:20219">
          <div className="absolute contents left-0 top-0" data-node-id="164:20220" data-name="image">
            <div className="absolute flex h-[413.172px] items-center justify-center left-[-11.5px] top-[-16.24px] w-[381.613px]" data-node-id="164:20222">
              <div className="flex-none rotate-4 skew-x-4">
                <div className="h-[386.487px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.495px_17.429px] mask-size-[370.118px_354.38px] relative rounded-[26.988px] w-[382.545px]" style={{ maskImage: `url("${imgSuppliedBrandPhotography}")` }} data-name="Supplied brand photography">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[26.988px]">
                    <img alt="" className="absolute h-full left-[-29.49%] max-w-none top-0 w-[129.49%]" src={imgSuppliedBrandPhotography1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-0 top-0" data-node-id="164:20223" data-name="gradient">
            <div className="absolute flex h-[413.172px] items-center justify-center left-[-11.5px] top-[-16.24px] w-[381.613px]" data-node-id="164:20225">
              <div className="flex-none rotate-4 skew-x-4">
                <div className="bg-gradient-to-b from-[58.655%] from-[rgba(0,0,0,0)] h-[386.487px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.495px_17.429px] mask-size-[370.118px_354.38px] relative rounded-[26.988px] to-[91.614%] to-[rgba(0,0,0,0.8)] w-[382.545px]" style={{ maskImage: `url("${imgSuppliedBrandPhotography}")` }} data-name="Supplied brand photography" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[89.97px] flex h-[158.343px] items-center justify-center left-[17.5px] w-[195.349px]" data-node-id="164:20226">
            <div className="flex-none rotate-4 skew-x-4">
              <div className="h-[144.683px] relative w-[195.826px]" data-name="card">
                <div className="absolute h-[142.73px] left-0 top-[2.08px] w-[195.826px]" data-node-id="164:20227">
                  <div className="absolute inset-[0.59%_0_1.24%_0]">
                    <img alt="" className="block max-w-none size-full" src={imgRectangle240648329} />
                  </div>
                </div>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-1/2 w-[160.363px]" data-node-id="164:20228">
                  <div className="flex h-[28.8px] items-center justify-center relative shrink-0 w-[26.983px]" data-node-id="164:20229">
                    <div className="flex-none rotate-[-3.99deg] skew-x-[-3.99deg]">
                      <div className="bg-[#e7fac2] content-stretch flex items-center justify-center overflow-clip relative rounded-[672.942px] size-[26.918px]">
                        <div className="relative shrink-0 size-[13.459px]" data-node-id="164:20230" data-name="trending_up">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrendingUp1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[72.275px] items-center justify-center relative shrink-0 w-[160.551px]" data-node-id="164:20233">
                    <div className="flex-none rotate-[-3.99deg] skew-x-[-3.99deg]">
                      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8.075px] items-start leading-none not-italic relative text-[#005b55] w-[160.16px]" data-name="Performance">
                        <p className="font-['PP_Palma:Fizzy_Heavy'] relative shrink-0 text-[40.482px] tracking-[-0.8096px] whitespace-nowrap" data-node-id="164:20234">
                          230%
                        </p>
                        <p className="font-['Roobert:Regular'] min-w-full relative shrink-0 text-[13.494px] tracking-[-0.2699px] w-[min-content]" data-node-id="164:20235">
                          revenue increase
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[30.48px] flex items-center justify-center left-[24.05px] right-[24.84px]" data-node-id="164:20236" style={{ containerType: "size" }}>
            <div className="-rotate-2 flex-none h-[hypot(0.292447cqw,70.6331cqh)] w-[hypot(99.7076cqw,-29.3669cqh)]">
              <div className="content-stretch flex items-center justify-between overflow-clip relative w-full" data-name="Read story">
                <div className="content-stretch flex h-[26.918px] items-center justify-center relative rounded-[17.365px] shrink-0" data-node-id="164:20237" data-name="button">
                  <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[10.77px] text-white whitespace-nowrap" data-node-id="I164:20237;128:8627">
                    Read story
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center overflow-clip relative rounded-[17.496px] shrink-0 size-[25.572px]" data-node-id="164:20238" data-name="Story action">
                  <div className="relative shrink-0 size-[12.786px]" data-node-id="164:20239" data-name="arrow-up-right">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents h-[36.125px] left-[20.14px] top-[27.8px] w-[102.86px]" data-node-id="164:20241" data-name="logo">
            <div className="absolute flex h-[35.861px] items-center justify-center left-[20.14px] top-[27.8px] w-[105.636px]" data-node-id="164:20243">
              <div className="flex-none rotate-[0.08deg]">
                <div className="bg-white h-[35.716px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[102.86px_36.125px] relative w-[105.587px]" style={{ maskImage: `url("${imgRectangle240648327}")` }} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[196.046px] items-center justify-center left-[1010.36px] top-[822.97px] w-[311.609px]" data-node-id="164:21980">
          <div className="-rotate-2 flex-none">
            <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center p-[8px] relative rounded-[22px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)]">
              <div className="bg-white content-stretch flex flex-col gap-[9.897px] items-start overflow-clip p-[18.177px] relative rounded-[14px] shadow-[0px_10.286px_29.691px_0px_rgba(0,0,0,0.15)] shrink-0 w-[289.321px]" data-node-id="164:20327">
                <div className="h-[32px] relative shrink-0 w-[75.469px]" data-node-id="164:20346" data-name="Screenshot 2026-10-31 at 20.52.49 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20261031At2052491} />
                </div>
                <p className="[word-break:break-word] font-['Roobert:SemiBold'] h-[36.354px] leading-none min-w-full not-italic relative shrink-0 text-[18.177px] text-[rgba(0,0,0,0.8)] tracking-[-0.3635px] w-[min-content]" data-node-id="164:20329">{`Hunter & Gather collected 8,000+ product reviews`}</p>
                <p className="[word-break:break-word] font-['Roobert:Regular'] leading-[1.2] min-w-full not-italic relative shrink-0 text-[12.118px] text-[rgba(0,0,0,0.8)] tracking-[-0.2424px] w-[min-content]" data-node-id="164:20330">{`By combining the power of REVIEWS.io and Klaviyo, Hunter & Gather collected over 8,000 reviews and earned a 4.9-star rating.`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[204.394px] items-center justify-center left-[365.26px] top-[756.9px] w-[305.05px]" data-node-id="164:21979">
          <div className="flex-none rotate-5">
            <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center p-[8px] relative rounded-[20px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)]">
              <div className="bg-white content-stretch flex flex-col gap-[9.39px] items-start overflow-clip p-[17.245px] relative rounded-[12px] shadow-[0px_4.695px_28.169px_0px_rgba(0,0,0,0.15)] shrink-0 w-[274.488px]" data-node-id="164:20332">
                <div className="h-[20px] relative shrink-0 w-[72.512px]" data-node-id="164:20338" data-name="image 4913">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[376.28%] left-[-3.78%] max-w-none top-[-135.74%] w-[103.78%]" src={imgImage4913} />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Roobert:SemiBold'] h-[34.491px] leading-none min-w-full not-italic relative shrink-0 text-[17.245px] text-[rgba(0,0,0,0.8)] tracking-[-0.3449px] w-[min-content]" data-node-id="164:20334">
                  Boxraw achieved 98% positive reviews
                </p>
                <p className="[word-break:break-word] font-['Roobert:Regular'] leading-[1.2] min-w-full not-italic relative shrink-0 text-[11.497px] text-[rgba(0,0,0,0.8)] tracking-[-0.2299px] w-[min-content]" data-node-id="164:20335">
                  BOXRAW got 350 reviews in the first 30 days, 98% of them is positive. Results revealed that displaying UGC increased trust and conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[233.596px] items-center justify-center left-[962.7px] top-[190.94px] w-[343.397px]" data-node-id="164:21975">
          <div className="flex-none rotate-[-4.59deg]">
            <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center p-[8px] relative rounded-[24px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)]">
              <div className="bg-white content-stretch flex flex-col gap-[10.666px] items-start overflow-clip p-[19.59px] relative rounded-[15.999px] shadow-[0px_11.085px_31.998px_0px_rgba(0,0,0,0.15)] shrink-0 w-[311.801px]" data-node-id="164:20245">
                <div className="h-[44.34px] relative shrink-0 w-[77.516px]" data-node-id="164:20325" data-name="image 4912">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4912} />
                </div>
                <p className="[word-break:break-word] font-['Roobert:SemiBold'] h-[39.179px] leading-none min-w-full not-italic relative shrink-0 text-[19.59px] text-[rgba(0,0,0,0.8)] tracking-[-0.3918px] w-[min-content]" data-node-id="164:20322">
                  30% Denman’s revenue affected by reviews
                </p>
                <p className="[word-break:break-word] font-['Roobert:Regular'] leading-[1.2] min-w-full not-italic relative shrink-0 text-[13.06px] text-[rgba(0,0,0,0.8)] tracking-[-0.2612px] w-[min-content]" data-node-id="164:20323">
                  In just a year, Denman has collected over 7,000 reviews, and noted that authentic feedback is directly contributing to conversions and sales
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[390.967px] items-center justify-center left-[675.07px] top-[489.39px] w-[289.233px]" data-node-id="164:20277">
          <div className="-rotate-5 flex-none">
            <div className="drop-shadow-[0px_9.798px_14.696px_rgba(0,0,0,0.2)] h-[369.893px] overflow-clip relative rounded-[19.055px] w-[257.981px]">
              <div className="absolute bottom-[-4.62px] h-[385.811px] left-[-149.66px] w-[500.677px]" data-node-id="164:20278" data-name="screen 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreen1} />
              </div>
              <div className="absolute bottom-[0.1px] h-[393.486px] left-[-1.09px] w-[257.981px]" data-node-id="164:20279" style={{ backgroundImage: "linear-gradient(180.07489659480635deg, rgba(0, 0, 0, 0) 70.777%, rgba(0, 0, 0, 0.8) 99.957%)" }} />
              <div className="absolute bottom-[17.83px] content-stretch flex items-center justify-between left-[17.86px] overflow-clip right-[18.05px]" data-node-id="164:20280" data-name="Read story">
                <div className="content-stretch flex h-[29.316px] items-center justify-center relative rounded-[18.913px] shrink-0" data-node-id="164:20281" data-name="button">
                  <p className="[word-break:break-word] font-['Roobert:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[11.73px] text-white whitespace-nowrap" data-node-id="I164:20281;128:8627">
                    Read story
                  </p>
                </div>
                <div className="bg-[rgba(255,255,255,0.3)] content-stretch flex items-center justify-center overflow-clip relative rounded-[19.055px] shrink-0 size-[27.85px]" data-node-id="164:20282" data-name="Story action">
                  <div className="relative shrink-0 size-[13.925px]" data-node-id="164:20283" data-name="arrow-up-right">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowUpRight2} />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[68.49px] h-[159.126px] right-[24.1px] w-[216.818px]" data-node-id="164:20285" data-name="card">
                <div className="absolute h-[152.973px] left-[-1.66px] top-[5.81px] w-[217.765px]" data-node-id="164:20286">
                  <div className="absolute inset-[0.49%_0_0.34%_0.15%]">
                    <img alt="" className="block max-w-none size-full" src={imgRectangle240648330} />
                  </div>
                </div>
                <div className="absolute content-stretch flex flex-col gap-[8.795px] items-end right-[16.02px] top-[20.71px] w-[174.652px]" data-node-id="164:20287">
                  <div className="bg-[#fffcdd] content-stretch flex items-center justify-center overflow-clip relative rounded-[732.901px] shrink-0 size-[29.316px]" data-node-id="164:20288">
                    <div className="flex items-center justify-center relative shrink-0 size-[16.98px]" data-node-id="164:20289">
                      <div className="-rotate-170 -scale-y-100 flex-none">
                        <div className="relative size-[14.658px]" data-name="trending_up">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTrendingUp2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[5.863px] h-[76.222px] items-end leading-none not-italic relative shrink-0 text-[rgba(0,0,0,0.8)] text-right w-full" data-node-id="164:20292">
                    <p className="font-['PP_Palma:Fizzy_Heavy'] relative shrink-0 text-[44.089px] tracking-[-0.8818px] w-full" data-node-id="164:20293">
                      +123%
                    </p>
                    <p className="font-['Roobert:Regular'] relative shrink-0 text-[14.696px] tracking-[-0.2939px] w-full" data-node-id="164:20294">
                      YoY turnover growth
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[178.07px] top-[11.59px]" data-node-id="164:20303" data-name="logo">
                <div className="absolute contents left-[178.07px] top-[11.59px]" data-node-id="164:20304" data-name="Mask group">
                  <div className="absolute bg-white h-[36.423px] left-[178.07px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0.128px] mask-size-[68.259px_41.979px] top-[11.59px] w-[66.805px]" data-node-id="164:20302" style={{ maskImage: `url("${imgRectangle240648334}")` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

function FigmaLogoRowTop() {
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

function FigmaLogoRowBottom() {
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

function FigmaIntegrations() {
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
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[92.001px] items-center left-[223.31px] p-[8px] rounded-[24px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[126.77px] w-[245.848px]" data-node-id="194:33472">
            <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip p-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="184:27458" data-name="reviews.io">
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
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[267.7px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[-8px] w-[157.067px]" data-node-id="194:33440">
            <motion.div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="184:27443" data-name="Integration card / BigCommerce">
              <div className="h-[32px] relative shrink-0 w-[109.067px]" data-node-id="184:27491" data-name="image 4940">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[170.42%] left-0 max-w-none top-[-36.15%] w-full" src={imgImage4940} />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[82.83px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[8px] w-[149.72px]" data-node-id="194:33439">
            <motion.div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="184:27499" data-name="Integration card / Shopify">
              <div className="h-[31.999px] relative shrink-0 w-[101.72px]" data-node-id="184:27501" data-name="image 4941">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4941} />
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[-8px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[104px] w-[171.37px]" data-node-id="194:33438">
            <motion.div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="184:27503" data-name="Integration card / WooCommerce">
              <div className="h-[31.999px] relative shrink-0 w-[123.37px]" data-node-id="184:27506" data-name="image 4942">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4942} />
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[63.57px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[250px] w-[138.24px]" data-node-id="194:33445">
            <motion.div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="184:27508" data-name="Integration card / Klaviyo">
              <div className="absolute contents left-[16px] top-[12px]" data-node-id="184:27517" data-name="Mask group">
                <div className="absolute h-[32px] left-[16px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[90.24px_32px] top-[12px] w-[92.849px]" data-node-id="184:27516" style={{ maskImage: `url("${imgRectangle240648336}")` }}>
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle240648337} />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[473.9px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[234px] w-[216.42px]" data-node-id="194:33443">
            <motion.div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="184:27539" data-name="Integration card / Dotdigital">
              <div className="h-[32px] relative shrink-0 w-[168.42px]" data-node-id="184:27542" data-name="image 4945">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4945} />
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[258px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[294px] w-[169.44px]" data-node-id="194:33444">
            <motion.div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="184:27521" data-name="Integration card / Gorgias">
              <div className="h-[29.048px] relative shrink-0 w-[121.44px]" data-node-id="184:27537" data-name="image 4944">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4944} />
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[529.7px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[104px] w-[146px]" data-node-id="194:33442">
            <motion.div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="184:27529" data-name="Integration card / Attentive">
              <div className="h-[26.457px] relative shrink-0 w-[98px]" data-node-id="184:27545" data-name="image 4946">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[241.56%] left-0 max-w-none top-[-72.21%] w-full" src={imgImage4946} />
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[72px] items-center left-[465.9px] p-[8px] rounded-[18px] shadow-[0px_3.789px_15.157px_0px_rgba(0,0,0,0.1)] top-[8px] w-[157.558px]" data-node-id="194:33441">
            <motion.div className="bg-white content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[10px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-node-id="184:27447" data-name="Integration card / Magento">
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

function FigmaFeedbackHeader() {
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

function FigmaFeedbackCta() {
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

function FigmaTestimonial1() {
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

function FigmaTestimonial2() {
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

function FigmaTestimonial3() {
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

function FigmaTestimonial4() {
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

function FigmaTestimonial5() {
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

function FigmaTestimonial6() {
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

function FigmaTestimonial7() {
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

function FigmaWhatsNew() {
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

function FigmaFooter() {
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

function FigmaMailGraphic() {
  return (
    <div className="absolute aspect-[357.325927734375/394.286376953125] left-[5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7.144px_11.191px] mask-size-[356.775px_407.03px] right-[70.18%] rounded-[9px] top-[10771.15px]" data-node-id="151:12989" style={{ maskImage: `url("${imgImage4902}")` }} data-name="image 4901">
      <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[9px] size-full" src={imgImage4903} />
    </div>

  );
}



const FAQ_DATA = [
  {
    q: "What is REVIEWS.io",
    a: "REVIEWS.io is an ecommerce review platform that helps online brands collect, manage and display verified customer reviews, UGC and survey feedback. You can collect company reviews (about your business) and product reviews (about what you sell), then show them on your site, in emails and in ads to build trust and drive more sales.",
  },
  {
    q: "How much does REVIEWS.io cost, and is there a free trial?",
    a: "Plans start at $29/month and scale with your monthly order volume and feature requirements. Every plan includes a free 14-day trial with full access to review invitations, customizable widgets, and AI-powered insights so you can test the impact before committing.",
  },
  {
    q: "Can I use REVIEWS.io alongside Trustpilot, or switch from it?",
    a: "Yes! Switching takes less than 5 minutes. You can seamlessly import all of your existing verified product and company reviews via CSV or direct migration tools so you never lose a single hard-earned customer review.",
  },
  {
    q: "Do I own my reviews, and can I take them with me?",
    a: "100% yes. Unlike closed platforms that lock your reviews behind paywalls, every review you collect with REVIEWS.io belongs to your brand. You can export your full review database at any time with zero restrictions.",
  },
  {
    q: "When should I send review invitations, and should I send a reminder?",
    a: "Our AI Flow engine automatically calculates the optimal post-delivery window based on shipping carrier data and product category. Adding a single polite reminder 5–7 days later boosts review conversion rates by up to 42%.",
  },
  {
    q: "What is a good review collection rate?",
    a: "Across e-commerce, a typical review collection rate is 5%–12%, while brands using REVIEWS.io's frictionless in-email rating forms, SMS invitations, and Klaviyo flows routinely achieve 15%–24%.",
  },
  {
    q: "Can I ask past customers for reviews?",
    a: "Absolutely! Using our Review Booster tool, you can upload past order history from the last 6–12 months to send a one-off campaign and build hundreds of verified reviews within days of launching.",
  },
];

export default function ReviewsLandingPage() {
  const [viewportScale, setViewportScale] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(900);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Measure viewport so the 1440px Figma design scales cleanly on any screen
  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setViewportHeight(h);
      // Scale down proportionally if screen < 1440px, or fit nicely on larger screens
      setViewportScale(Math.min(1, w / 1440));
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // ============================================================================
  // 1. HERO 1, 2, 3 STICKY STACKING ANIMATION (Henrietta Hero Style)
  // ============================================================================
  const heroTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgressRaw } = useScroll({
    target: heroTrackRef,
    offset: ["start start", "end end"],
  });
  const heroProgress = useSpring(heroProgressRaw, {
    stiffness: 110,
    damping: 26,
    mass: 0.25,
  });

  // Hero 1 transforms as Hero 2 slides up over it (0.0 -> 0.48)
  const hero1Scale = useTransform(heroProgress, [0, 0.45], [1, 0.92]);
  const hero1Radius = useTransform(heroProgress, [0, 0.45], [0, 40]);
  const hero1OverlayOpacity = useTransform(heroProgress, [0, 0.45], [0, 0.28]);
  // Internal scroll within Hero 1 (since Hero 1 is 1257px tall) before Hero 2 covers it
  const hero1InnerY = useTransform(heroProgress, [0, 0.18], [0, -180]);

  // Hero 2 slides up from bottom (0.14 -> 0.48) to lie on top of Hero 1,
  // then scales down as Hero 3 slides up over it (0.55 -> 0.95)
  const hero2Y = useTransform(heroProgress, [0.12, 0.46], ["102vh", "0vh"]);
  const hero2Scale = useTransform(heroProgress, [0.54, 0.94], [1, 0.93]);
  const hero2Radius = useTransform(heroProgress, [0.12, 0.46, 0.94], [44, 0, 40]);
  const hero2OverlayOpacity = useTransform(heroProgress, [0.54, 0.94], [0, 0.28]);
  const hero2InnerY = useTransform(heroProgress, [0.44, 0.58], [0, -210]);

  // Hero 3 slides up from bottom (0.56 -> 0.92) to lie on top of Hero 2
  const hero3Y = useTransform(heroProgress, [0.54, 0.90], ["102vh", "0vh"]);
  const hero3Radius = useTransform(heroProgress, [0.54, 0.90], [44, 0]);
  const hero3InnerY = useTransform(heroProgress, [0.85, 1.0], [0, -140]);

  // Track active Hero index for the indicator pill
  const [activeHero, setActiveHero] = useState(0);
  useEffect(() => {
    return heroProgressRaw.on("change", (v) => {
      if (v < 0.28) setActiveHero(0);
      else if (v < 0.68) setActiveHero(1);
      else setActiveHero(2);
    });
  }, [heroProgressRaw]);

  const scrollToHeroSlide = (idx: number) => {
    if (!heroTrackRef.current) return;
    const rect = heroTrackRef.current.getBoundingClientRect();
    const trackTop = window.scrollY + rect.top;
    const scrollable = heroTrackRef.current.offsetHeight - window.innerHeight;
    const targets = [0.04, 0.47, 0.93];
    window.scrollTo({
      top: trackTop + scrollable * targets[idx],
      behavior: "smooth",
    });
  };

  // ============================================================================
  // 2. "HOW IT WORKS" HORIZONTAL SLIDE STACKING ("Someone call us spicy" style)
  // ============================================================================
  const howTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: howProgressRaw } = useScroll({
    target: howTrackRef,
    offset: ["start start", "end end"],
  });
  const howProgress = useSpring(howProgressRaw, {
    stiffness: 110,
    damping: 26,
    mass: 0.25,
  });

  // Slide 1 stays pinned at x=0
  const slide1X = useTransform(howProgress, [0, 1], [0, 0]);

  // Slide 2 glides horizontally from 100% (completely offscreen right) to 0% (covering Slide 1)
  const slide2X = useTransform(howProgress, [0.12, 0.48], ["100%", "0%"]);

  // Slide 3 glides horizontally from 100% (completely offscreen right) to 0% (covering Slide 2)
  const slide3X = useTransform(howProgress, [0.52, 0.88], ["100%", "0%"]);

  const [activeHowSlide, setActiveHowSlide] = useState(0);
  useEffect(() => {
    return howProgressRaw.on("change", (v) => {
      if (v < 0.3) setActiveHowSlide(0);
      else if (v < 0.68) setActiveHowSlide(1);
      else setActiveHowSlide(2);
    });
  }, [howProgressRaw]);

  const scrollToHowSlide = (idx: number) => {
    if (!howTrackRef.current) return;
    const rect = howTrackRef.current.getBoundingClientRect();
    const trackTop = window.scrollY + rect.top;
    const scrollable = howTrackRef.current.offsetHeight - window.innerHeight;
    const targets = [0.05, 0.49, 0.94];
    window.scrollTo({
      top: trackTop + scrollable * targets[idx],
      behavior: "smooth",
    });
  };

  // ============================================================================
  // 3. "FEEDBACK" 7-CARD TESTIMONIAL STACK ON SCROLL (Henrietta Testimonials)
  // ============================================================================
  const feedbackTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: feedbackProgressRaw } = useScroll({
    target: feedbackTrackRef,
    offset: ["start start", "end end"],
  });
  const feedbackProgress = useSpring(feedbackProgressRaw, {
    stiffness: 110,
    damping: 26,
    mass: 0.25,
  });

  // 7 Testimonial cards: Card 1 is initially visible; Cards 2..7 fly in sequentially
  // and lay directly on top of the stack at their exact Figma coordinates & rotations!
  const card2Y = useTransform(feedbackProgress, [0.03, 0.16], [500, 0]);
  const card2Opacity = useTransform(feedbackProgress, [0.03, 0.08], [0, 1]);

  const card3Y = useTransform(feedbackProgress, [0.18, 0.31], [500, 0]);
  const card3Opacity = useTransform(feedbackProgress, [0.18, 0.23], [0, 1]);

  const card4Y = useTransform(feedbackProgress, [0.33, 0.46], [500, 0]);
  const card4Opacity = useTransform(feedbackProgress, [0.33, 0.38], [0, 1]);

  const card5Y = useTransform(feedbackProgress, [0.48, 0.61], [500, 0]);
  const card5Opacity = useTransform(feedbackProgress, [0.48, 0.53], [0, 1]);

  const card6Y = useTransform(feedbackProgress, [0.63, 0.76], [500, 0]);
  const card6Opacity = useTransform(feedbackProgress, [0.63, 0.68], [0, 1]);

  const card7Y = useTransform(feedbackProgress, [0.78, 0.91], [500, 0]);
  const card7Opacity = useTransform(feedbackProgress, [0.78, 0.83], [0, 1]);

  // ============================================================================
  // 4. CREATIVE SCROLL ANIMATIONS FOR OTHER SECTIONS
  // ============================================================================
  const storiesSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: storiesProgress } = useScroll({
    target: storiesSectionRef,
    offset: ["start end", "center center"],
  });
  const storiesScale = useTransform(storiesProgress, [0, 1], [0.92, 1]);
  const storiesY = useTransform(storiesProgress, [0, 1], [70, 0]);

  const provenWords =
    "Thousands of merchants have grown faster by leveraging customer feedback, UGC and AI insights, enabling them to take data-driven actions.".split(
      " "
    );
  const provenRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: provenProgress } = useScroll({
    target: provenRef,
    offset: ["start 85%", "center 45%"],
  });

  // Compute responsive scale so sticky 100vh sections always fit the screen height & width
  const heroContentScale = viewportScale;
  const howContentScale = Math.min(
    viewportScale,
    Math.max(0.72, (viewportHeight - 40) / 840)
  );
  const feedbackContentScale = Math.min(
    viewportScale,
    Math.max(0.65, (viewportHeight - 100) / 1200)
  );

  return (
    <div className="relative min-h-screen w-full bg-[#fbfdf4] text-[#212126] select-none">
      {/* ====================================================================
          STICKY FLOATING GLASS HEADER (From Figma node 164:13642)
      ==================================================================== */}
      <div className="fixed top-[20px] left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
          }}
          className="pointer-events-auto backdrop-blur-2xl bg-white/75 rounded-[1000px] shadow-[0_12px_36px_rgba(1,89,83,0.16)] border border-white/60 transition-all hover:bg-white/85 hover:shadow-[0_16px_48px_rgba(1,89,83,0.22)]"
        >
          <FigmaHeader />
        </motion.div>
      </div>

      {/* ====================================================================
          REQUIREMENT 1: HERO 1, 2, 3 STICKY PAGE STACKING (Henrietta Reference)
          Each hero frame appears lying on top of the previous page on scroll
      ==================================================================== */}
      <section
        id="hero"
        ref={heroTrackRef}
        className="relative w-full"
        style={{ height: "360vh" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#013d39]">
          {/* ---------------- HERO 1: Collect reviews. ---------------- */}
          <motion.div
            style={{
              scale: hero1Scale,
              borderRadius: hero1Radius,
            }}
            className="absolute inset-0 z-10 flex items-start justify-center overflow-hidden origin-top shadow-2xl"
          >
            {/* Opaque Figma Mint-to-Cream Hero Background */}
            <div
              className="absolute inset-0 bg-cover bg-top"
              style={{
                backgroundImage: `url("${imgBg}"), linear-gradient(180deg, #b9f1d6 0%, #e4ffc0 55%, #fefcdf 100%)`,
              }}
            />
            <motion.div
              style={{
                y: hero1InnerY,
                scale: heroContentScale,
                transformOrigin: "top center",
              }}
              className="relative w-[1440px] shrink-0 pt-[28px]"
            >
              <FigmaHero1Content />
            </motion.div>
            {/* Darkening veil as Hero 2 lies on top */}
            <motion.div
              style={{ opacity: hero1OverlayOpacity }}
              className="absolute inset-0 bg-[#002926] pointer-events-none z-20"
            />
          </motion.div>

          {/* ---------------- HERO 2: Get found by AI. ---------------- */}
          <motion.div
            style={{
              y: hero2Y,
              scale: hero2Scale,
              borderTopLeftRadius: hero2Radius,
              borderTopRightRadius: hero2Radius,
            }}
            className="absolute inset-0 z-20 flex items-start justify-center overflow-hidden origin-top shadow-[0_-28px_70px_rgba(0,45,42,0.35)] border-t border-white/60"
          >
            {/* Opaque Mint-to-Cream background so Hero 2 physically covers Hero 1 */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("${imgBg}"), linear-gradient(180deg, #dcf3ee 0%, #fefdf0 100%)`,
              }}
            />
            <motion.div
              style={{
                y: hero2InnerY,
                scale: heroContentScale,
                transformOrigin: "top center",
              }}
              className="relative w-[1440px] shrink-0 pt-[28px]"
            >
              <FigmaHero2Content />
            </motion.div>
            {/* Darkening veil as Hero 3 lies on top */}
            <motion.div
              style={{ opacity: hero2OverlayOpacity }}
              className="absolute inset-0 bg-[#002926] pointer-events-none z-20"
            />
          </motion.div>

          {/* ---------------- HERO 3: Sell more. (Joomi Can) ---------------- */}
          <motion.div
            style={{
              y: hero3Y,
              borderTopLeftRadius: hero3Radius,
              borderTopRightRadius: hero3Radius,
            }}
            className="absolute inset-0 z-30 flex items-start justify-center overflow-hidden origin-top bg-[#fefcdf] shadow-[0_-28px_70px_rgba(0,45,42,0.38)] border-t border-white/70"
          >
            <motion.div
              style={{
                y: hero3InnerY,
                scale: heroContentScale,
                transformOrigin: "top center",
              }}
              className="relative w-[1440px] shrink-0 pt-[16px]"
            >
              <FigmaHero3Content progress={stackProgress} />
            </motion.div>
          </motion.div>

          {/* Interactive Hero Stack Indicator (Right Rail) */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-lg border border-black/5">
            {[
              { idx: 0, label: "01 · Collect reviews" },
              { idx: 1, label: "02 · Get found by AI" },
              { idx: 2, label: "03 · Sell more" },
            ].map((item) => (
              <button
                key={item.idx}
                onClick={() => scrollToHeroSlide(item.idx)}
                title={item.label}
                className={`group relative flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${activeHero === item.idx
                  ? "w-3.5 h-10 bg-[#057c74]"
                  : "w-3.5 h-3.5 bg-[#057c74]/25 hover:bg-[#057c74]/50"
                  }`}
              >
                <span className="pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-[#015953] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          AI INSIGHTS AND ANALYTICS
          Placed directly after the Sell More section.
          Features the high-res sequential reveal animation from reference.
      ==================================================================== */}
      <section
        id="ai-insights"
        className="relative w-full overflow-hidden flex justify-center bg-[#e1f4f2]"
      >
        {/* Full-bleed background spanning entire screen width so no side mismatch */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={imgBackground}
          />
        </div>
        <div
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
            height: `${1380 * viewportScale}px`,
          }}
          className="relative w-[1440px] shrink-0"
        >
          <FigmaAiInsights />
        </div>
      </section>

      {/* ====================================================================
          REQUIREMENT 2: "HOW IT WORKS" HORIZONTAL SLIDE STACKING
          Modeled after "Someone call us spicy" in henrietta.wearetattoodigital.com
          Slide 1, 2, 3 lie on top of each other horizontally on each scroll!
      ==================================================================== */}
      <section
        id="how-it-works"
        ref={howTrackRef}
        className="relative w-full bg-[#fefbdb]"
        style={{ height: "320vh" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-row items-stretch bg-[#fefbdb]">
          {/* Left 50% Column */}
          <div className="w-1/2 h-full flex flex-col justify-center items-start pl-8 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-28 pr-6 sm:pr-8 lg:pr-10 shrink-0 z-10">
            <FigmaHowLeft />
          </div>

          {/* Right 50% Column - Flush to right edge, no right padding, full image showing */}
          <div
            className="w-1/2 h-full relative overflow-hidden pr-0"
            data-node-id="184:26273"
            data-name="stack"
          >
            {/* SLIDE 1: Collect review (Base layer, fills entire right half) */}
            <motion.div
              style={{ x: slide1X }}
              onClick={() => scrollToHowSlide(0)}
              className="absolute inset-0 z-10 size-full rounded-l-[32px] overflow-hidden shadow-[-16px_0_40px_rgba(0,0,0,0.1)] cursor-pointer"
            >
              <FigmaSlide1 />
            </motion.div>

            {/* SLIDE 2: Elevate conversions (Glides horizontally over Slide 1) */}
            <motion.div
              style={{ x: slide2X }}
              onClick={() => scrollToHowSlide(1)}
              className="absolute inset-0 z-20 size-full rounded-l-[32px] overflow-hidden shadow-[-24px_0_50px_rgba(0,0,0,0.22)] cursor-pointer"
            >
              <FigmaSlide2 />
            </motion.div>

            {/* SLIDE 3: Optimize experience / Survey Insights (Glides horizontally over Slide 2) */}
            <motion.div
              style={{ x: slide3X }}
              onClick={() => scrollToHowSlide(2)}
              className="absolute inset-0 z-30 size-full rounded-l-[32px] overflow-hidden shadow-[-28px_0_60px_rgba(0,40,37,0.35)] cursor-pointer"
            >
              <FigmaSlide3 />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          REQUIREMENT 4B: CUSTOMER STORIES ("PROOF OF PERFORMANCE")
          Animated fan-out & floating review callout cards
      ==================================================================== */}
      <section
        id="customer-stories"
        ref={storiesSectionRef}
        className="relative w-full overflow-hidden flex justify-center bg-[#f4fbe6]"
      >
        <div
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
            height: `${1099 * viewportScale}px`,
          }}
          className="relative w-[1440px] shrink-0"
        >
          <motion.div
            style={{ scale: storiesScale, y: storiesY }}
            className="w-full h-full"
          >
            <FigmaCustomerStories />
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          REQUIREMENT 4C: PROVEN SUCCESS (Scroll Word Reveal + Opposing Marquee)
      ==================================================================== */}
      <section
        ref={provenRef}
        className="relative w-full overflow-hidden flex justify-center bg-[#fbfdf4]"
      >
        <div
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
            height: `${790 * viewportScale}px`,
          }}
          className="bg-[#fbfdf4] content-stretch flex flex-col gap-[32px] items-center p-[80px] relative shrink-0 w-[1440px]"
          data-node-id="164:13891"
          data-name="proven success"
        >
          <div className="content-stretch flex flex-col gap-[32px] items-start leading-[1.2] not-italic relative shrink-0 text-center w-full">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Roobert:SemiBold'] relative shrink-0 text-[#25cecd] text-[24px] tracking-[-0.48px] w-full"
            >
              PROVEN SUCCESS
            </motion.p>
            <p className="font-['PP_Palma:Fizzy_Heavy'] relative shrink-0 text-[#005b55] text-[72px] tracking-[-1.44px] w-full flex flex-wrap justify-center gap-x-[18px] gap-y-[6px]">
              {provenWords.map((word, i) => {
                const start = i / provenWords.length;
                const end = Math.min(1, start + 0.18);
                return (
                  <WordReveal
                    key={i}
                    word={word}
                    progress={provenProgress}
                    range={[start, end]}
                  />
                );
              })}
            </p>
          </div>

          {/* Infinite Opposing Motion Logo Rows */}
          <div className="h-[322px] overflow-hidden relative shrink-0 w-[1440px]">
            {/* Left & Right edge fade gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fbfdf4] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fbfdf4] to-transparent z-10" />

            {/* Top row — 17 logos — moving left to right */}
            <div className="absolute top-[56.55px] left-0 flex w-max">
              <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 65,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex gap-[40px]"
              >
                <FigmaLogoRowTop />
                <FigmaLogoRowTop />
              </motion.div>
            </div>

            {/* Bottom row — 17 logos — moving right to left */}
            <div className="absolute top-[176.55px] left-0 flex w-max">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 65,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex gap-[40px]"
              >
                <FigmaLogoRowBottom />
                <FigmaLogoRowBottom />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          REQUIREMENT 4D: INTEGRATIONS (Floating Ecosystem Hub)
      ==================================================================== */}
      <section
        id="integrations"
        className="relative w-full overflow-hidden flex justify-center bg-[#fbfdf4]"
      >
        <div
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
            height: `${866 * viewportScale}px`,
          }}
          className="relative w-[1440px] shrink-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full [&_div[data-name^='Integration_card']]:transition-transform [&_div[data-name^='Integration_card']]:duration-300 [&_div[data-name^='Integration_card']:hover]:scale-110 [&_div[data-name^='Integration_card']]:cursor-pointer"
          >
            <FigmaIntegrations />
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          REQUIREMENT 3: FEEDBACK FRAME — 7 TESTIMONIAL CARDS STACK ON SCROLL
          Same as the testimonials animation of henrietta.wearetattoodigital.com
      ==================================================================== */}
      <section
        id="feedback"
        ref={feedbackTrackRef}
        className="relative w-full bg-[#fdfce4]"
        style={{ height: "480vh" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#fdfce4]">
          <div
            style={{
              transform: `scale(${feedbackContentScale})`,
              transformOrigin: "center center",
            }}
            className="bg-[#fdfce4] h-[1200px] overflow-visible relative shrink-0 w-[1440px]"
            data-node-id="184:26353"
            data-name="feedback"
          >
            {/* Pinned Section Heading + G2 & Shopify 4.8★ Badges */}
            <FigmaFeedbackHeader />

            {/* Pinned Bottom CTA Button */}
            <div className="cursor-pointer transition-transform hover:scale-105">
              <FigmaFeedbackCta />
            </div>

            {/* 7-CARD SEQUENTIAL SCROLL STACK (Container matching Figma node 200:53990) */}
            <div
              className="absolute -translate-x-1/2 left-1/2 top-[500px] w-[625px] h-[373px] pointer-events-none"
              data-node-id="200:53990"
              data-name="testimonials"
            >
              {/* Card 1: Greyston Bakery (#ffe16b) — Base Card */}
              <motion.div className="absolute inset-0 pointer-events-none z-[11] [&>*]:pointer-events-auto">
                <FigmaTestimonial1 />
              </motion.div>

              {/* Card 2: Concrete Jungle (#afe4c8, rotate-4) */}
              <motion.div
                style={{
                  y: card2Y,
                  opacity: card2Opacity,
                }}
                className="absolute inset-0 pointer-events-none z-[12] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial2 />
              </motion.div>

              {/* Card 3: Zipster (#005b55, -rotate-4) */}
              <motion.div
                style={{
                  y: card3Y,
                  opacity: card3Opacity,
                }}
                className="absolute inset-0 pointer-events-none z-[13] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial3 />
              </motion.div>

              {/* Card 4: KRIOR (#ffe7e7, rotate-4) */}
              <motion.div
                style={{
                  y: card4Y,
                  opacity: card4Opacity,
                }}
                className="absolute inset-0 pointer-events-none z-[14] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial4 />
              </motion.div>

              {/* Card 5: Caruso's Natural Health (#cbefee, -rotate-4) */}
              <motion.div
                style={{
                  y: card5Y,
                  opacity: card5Opacity,
                }}
                className="absolute inset-0 pointer-events-none z-[15] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial5 />
              </motion.div>

              {/* Card 6: Made By Coopers (#fdf6bb, 0deg) */}
              <motion.div
                style={{
                  y: card6Y,
                  opacity: card6Opacity,
                }}
                className="absolute inset-0 pointer-events-none z-[16] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial6 />
              </motion.div>

              {/* Card 7: Jimmy Joy (bg-white, rotate-7) */}
              <motion.div
                style={{
                  y: card7Y,
                  opacity: card7Opacity,
                }}
                className="absolute inset-0 pointer-events-none z-[17] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial7 />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          REQUIREMENT 4E: WHAT'S NEW BANNER (164:19455)
      ==================================================================== */}
      <section className="relative w-full overflow-hidden flex justify-center bg-[#fc0]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
            height: `${328 * viewportScale}px`,
          }}
          className="relative w-[1440px] shrink-0"
        >
          <FigmaWhatsNew />
        </motion.div>
      </section>

      {/* ====================================================================
          REQUIREMENT 4F: INTERACTIVE FAQ ACCORDION (Figma node 198:34207)
      ==================================================================== */}
      <section
        id="faq"
        className="relative w-full overflow-hidden flex justify-center bg-[#04635d] scroll-mt-[120px]"
      >
        <div
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
          }}
          className="bg-[#04635d] content-stretch flex flex-col items-center pt-[184px] pb-[160px] relative shrink-0 w-[1440px]"
          data-node-id="198:34207"
          data-name="FAQ section"
        >
          <div className="content-start flex flex-wrap gap-[64px] items-start max-w-[1280px] px-[80px] relative shrink-0 w-full">
            {/* Left Column: SUPPORT + Frequently asked questions */}
            <div className="sticky top-[140px] flex flex-col gap-[32px] items-start w-[528px] shrink-0">
              <p className="font-['Roobert:SemiBold'] leading-[1.2] relative shrink-0 text-[24px] text-[rgba(48,183,174,0.8)] tracking-[-0.48px]">
                SUPPORT
              </p>
              <p className="font-['PP_Palma:Fizzy_Heavy'] leading-none relative shrink-0 text-[72px] text-[rgba(255,255,255,0.4)] tracking-[-1.44px] w-[528px]">
                Frequently asked questions
              </p>
            </div>

            {/* Right Column: Interactive Accordion for all 7 FAQ items */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-[480px] relative">
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <React.Fragment key={idx}>
                    <div className="w-full">
                      <button
                        onClick={() =>
                          setOpenFaqIndex(isOpen ? null : idx)
                        }
                        className="content-stretch cursor-pointer flex flex-col items-center w-full text-left group py-2"
                      >
                        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative text-left">
                            <p className="font-['Roobert:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[24px] text-white group-hover:text-[#a4e2a7] transition-colors w-full">
                              {item.q}
                            </p>
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{
                                    duration: 0.32,
                                    ease: [0.16, 1, 0.3, 1],
                                  }}
                                  className="overflow-hidden w-full"
                                >
                                  <p className="font-['Roobert:Regular'] leading-[26px] pt-2 text-[18px] text-white/85 w-full">
                                    {item.a}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="relative shrink-0 size-[24px] mt-1"
                          >
                            <img
                              alt={isOpen ? "Collapse" : "Expand"}
                              className="block size-full"
                              src={
                                isOpen
                                  ? imgMinusCircle
                                  : imgPlusCircle
                              }
                            />
                          </motion.div>
                        </div>
                      </button>
                    </div>
                    {idx < FAQ_DATA.length - 1 && (
                      <div className="h-px w-full bg-white/20" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FOOTER (Figma node 151:12970)
      ==================================================================== */}
      <footer className="relative w-full overflow-hidden flex justify-center bg-[#fbfdf4]">
        <div
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
            height: `${690 * viewportScale}px`,
          }}
          className="relative w-[1440px] shrink-0"
        >
          <FigmaFooter />
        </div>
      </footer>
    </div>
  );
}

function WordReveal({
  word,
  progress,
  range,
}: {
  word: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const y = useTransform(progress, range, [10, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {word}
    </motion.span>
  );
}

// Register with Framer Canvas
ReviewsLandingPage.defaultProps = {
  width: "100%",
  height: "100%",
};

addPropertyControls(ReviewsLandingPage, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "REVIEWS.io Landing Page",
  },
});
