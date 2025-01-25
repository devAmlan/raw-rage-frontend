import { nanoid } from "nanoid";
import productOneImageOne from "../../../public/assets/product-one/image-1.png";
import productTwoImageOne from "../../../public/assets/product-two/image-1.png";
import productThreeImageOne from "../../../public/assets/product-three/image-2.png";
import productThreeImageTwo from "../../../public/assets/product-three/image-2.png";
import productThreeImageThree from "../../../public/assets/product-three/image-3.jpg";
import productFourImageOne from "../../../public/assets/product-four/image-1.jpg";
import productFiveImageOne from "../../../public/assets/product-five/image-1.jpg";
import productSixImageOne from "../../../public/assets/product-six/image-1.jpg";
import productSevenImageOne from "../../../public/assets/product-seven/image-1.jpg";
import productEightImageOne from "../../../public/assets/product-eight/image-1.jpg";
import productEightImageTwo from "../../../public/assets/product-eight/image-2.jpg";
import productEightImageThree from "../../../public/assets/product-eight/image-3.jpg";
import productNineImageOne from "../../../public/assets/product-nine/image-1.jpg";
import productTenImageOne from "../../../public/assets/product-ten/image-1.jpg";
import productElevenImageOne from "../../../public/assets/product-eleven/image-1.jpeg";
import productTwelveImageOne from "../../../public/assets/product-twelve/image-1.png";
import productThirteenImageOne from "../../../public/assets/product-thirteen/image-1.jpeg";

export const products = [
  {
    id: nanoid(),
    name: "MK677,RAD140 & Cycle support",
    slug: "mk677-rad140-cycle-support",
    price: 5500.0,
    items: [
      {
        name: "MK-677 (Ibutamoren)",
        benefits:
          "MK-677 is a growth hormone secretagogue, meaning it stimulates the release of growth hormone (GH) and increases levels of insulin-like growth factor 1 (IGF-1). It is commonly used for muscle growth, fat loss, and overall body recomposition. It can also improve sleep quality, enhance recovery, and support joint health due to its impact on collagen synthesis.",
        uses: "Increased muscle mass, fat loss, better sleep, and improved skin and joint health.",
      },
      {
        name: "RAD-140 (Testolone)",
        benefits:
          "RAD-140 is a selective androgen receptor modulator (SARM) that is often used to help increase muscle mass, strength, and fat loss without the negative side effects associated with anabolic steroids. It works by binding to androgen receptors in muscle tissue, promoting muscle growth and fat loss.",
        uses: "Lean muscle gain, strength improvement, and fat loss.",
      },
      {
        name: "Cycle Support",
        benefits:
          "Cycle support supplements are designed to support overall health and mitigate side effects that can arise during the use of compounds like SARMs or anabolic steroids. These supplements can protect liver health, cardiovascular function, hormonal balance, and kidney function. Common ingredients in cycle support include liver protectants (like TUDCA or NAC), heart and blood pressure support, and estrogen control.",
        uses: "Reducing side effects and protecting health while on performance-enhancing cycles.",
      },
    ],

    userGuide:
      "When combined: MK-677 and RAD-140 may complement each other during a muscle-building or fat-loss phase. MK-677 supports muscle growth and recovery by increasing growth hormone levels, while RAD-140 directly stimulates muscle growth and fat loss through androgen receptors. Using cycle support is recommended to minimize risks and side effects, especially with SARMs like RAD-140, which can have effects on hormone balance and liver health.",
    completeUserGuide: (
      <div className="">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            MK-677 (Ibutamoren):
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              <strong>Dosage:</strong> The typical dosage for MK-677 is around{" "}
              <strong>10-25 mg per day</strong>.
            </li>
            <li>
              <strong>Timing:</strong> It’s best taken once per day, preferably
              before bed, since it can improve sleep quality. This timing also
              enhances its growth hormone-boosting effects during sleep.
            </li>
            <li>
              <strong>Cycle Duration:</strong> MK-677 can be taken for{" "}
              <strong>8-12 weeks</strong> continuously, but some users choose to
              cycle it off after a few months. It's usually well-tolerated for
              extended periods, but taking breaks is important for maintaining
              receptor sensitivity.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            RAD-140 (Testolone):
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              <strong>Dosage:</strong> A common dosage is{" "}
              <strong>10-20 mg per day</strong>, depending on your experience
              with SARMs.
            </li>
            <li>
              <strong>Timing:</strong> RAD-140 can be taken{" "}
              <strong>once per day</strong>, ideally in the morning or early
              afternoon, as it has a half-life of around 20 hours. Some users
              prefer splitting the dose into two smaller doses (morning and
              afternoon) if they experience any overstimulation.
            </li>
            <li>
              <strong>Cycle Duration:</strong> RAD-140 is typically cycled for{" "}
              <strong>6-8 weeks</strong>. Longer cycles may increase the risk of
              side effects, particularly those related to testosterone
              suppression.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Cycle Support:
          </h2>
          <p className="text-gray-700 mb-4">
            Cycle support supplements help protect vital organs and balance
            hormones while using compounds like MK-677 and RAD-140. The exact
            supplements may vary, but here are the common components and how to
            use them:
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              <strong>Liver Support</strong> (e.g., TUDCA, NAC, Milk Thistle):
              These support liver function, which can be stressed during SARMs
              use. Use them <strong>daily</strong> (usually 500-1000 mg of TUDCA
              or NAC, or the recommended dosage on the product label).
            </li>
            <li>
              <strong>Cardiovascular Support</strong> (e.g., Fish Oil, CoQ10,
              Hawthorn Berry): These support heart health and blood pressure.
              Typically, you would use <strong>1-2 grams of fish oil</strong>{" "}
              and <strong>100-200 mg of CoQ10</strong> daily.
            </li>
            <li>
              <strong>Estrogen Control</strong> (e.g., Arimistane, Aromasin, or
              DIM): Depending on your individual response, you may need estrogen
              control to help mitigate any potential estrogenic effects (e.g.,
              water retention, gynecomastia) while on RAD-140. Dosing varies
              based on the product, but typically <strong>25-50 mg/day</strong>{" "}
              is used for estrogen control if necessary.
            </li>
            <li>
              <strong>Testosterone Support</strong> (e.g., Tongkat Ali,
              Ashwagandha): These can help maintain natural testosterone levels
              during a cycle of RAD-140, as SARMs can suppress endogenous
              testosterone production. Follow the product’s suggested dosing,
              but these are usually taken daily.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            General Cycle Guidelines:
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              <strong>Week 1-6/8 (RAD-140 and MK-677):</strong>
              <ul className="list-inside list-disc pl-5">
                <li>RAD-140: 10-20 mg daily</li>
                <li>MK-677: 10-25 mg daily (usually taken before bed)</li>
                <li>
                  Cycle support: Use daily throughout the cycle for liver,
                  heart, and hormone support
                </li>
              </ul>
            </li>
            <li>
              <strong>Post-Cycle (if necessary):</strong>
              <ul className="list-inside list-disc pl-5">
                <li>
                  After completing the RAD-140 cycle, you may consider a
                  post-cycle therapy (PCT) to help recover natural testosterone
                  production, although MK-677 typically doesn’t cause
                  significant suppression of testosterone.
                </li>
                <li>
                  PCT usually lasts for <strong>4-6 weeks</strong>, and involves
                  compounds like <strong>Clomid</strong> or{" "}
                  <strong>Nolvadex</strong> to help restore hormonal balance.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Important Notes:
          </h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              <strong>Hydration and Diet:</strong> Always stay hydrated and
              maintain a healthy diet rich in protein, healthy fats, and
              essential vitamins and minerals to support muscle growth and
              recovery.
            </li>
            <li>
              <strong>Monitoring Health:</strong> It’s important to monitor your
              health, particularly liver, kidney, and heart function, while
              using compounds like SARMs and MK-677. Regular blood work can help
              you stay informed about any potential imbalances.
            </li>
          </ul>
        </div>
      </div>
    ),
    disclaimer:
      "When using MK-677 (Ibutamoren), RAD-140 (Testolone), and cycle support, it's important to follow proper dosing protocols and understand their timing for optimal effectiveness and safety. Below is a general guide on how these substances are typically used. Keep in mind, individual experiences may vary, and consulting with a healthcare professional before starting is recommended.",

    images: [
      {
        src: productThirteenImageOne,
        alt: "Slide 1",
      },
    ],
    category: "SARMs",
    code: "CODE2",
  },
  {
    id: nanoid(),
    name: "Anawar",
    slug: "ana-war",
    price: 1999.0,
    description: "",
    images: [
      {
        src: productTwoImageOne,
        alt: "Slide 1",
      },
    ],
    category: "SARMs",
    code: "CODE2",
    about: {
      "Anavar (oxandrolone)": {
        description:
          "Anavar (oxandrolone) is an anabolic steroid known for its mild nature compared to other steroids. It has several potential benefits, which include:",
        benefits: [
          {
            label: "Increased Muscle Mass and Strength",
            description:
              "Anavar is known to promote lean muscle growth and improve strength, especially in those who are in a calorie deficit or recovering from injury.",
          },
          {
            label: "Fat Loss",
            description:
              "It can help with fat loss by increasing metabolism, which makes it popular among bodybuilders and athletes during cutting phases to maintain muscle mass while reducing body fat.",
          },
          {
            label: "Improved Recovery",
            description:
              "Anavar can speed up recovery times after intense workouts or injuries due to its effects on protein synthesis and muscle repair.",
          },
          {
            label: "Enhanced Performance",
            description:
              "Some athletes use Anavar to boost their endurance, stamina, and overall physical performance without significant water retention, which is common with other steroids.",
          },
          {
            label: "Preserving Lean Muscle",
            description:
              "It is often used during a calorie deficit (like during a cutting phase) to preserve muscle mass while reducing fat, making it popular for those seeking a leaner physique.",
          },
          {
            label: "Bone Health",
            description:
              "Anavar has been shown to potentially aid in increasing bone density, which could be beneficial for individuals suffering from osteoporosis or bone-related conditions.",
          },
          {
            label: "Milder Side Effects",
            description:
              "Compared to other anabolic steroids, Anavar tends to have fewer and milder side effects, particularly in terms of liver toxicity and estrogenic effects (such as water retention).",
          },
        ],
      },
    },
  },
  {
    id: nanoid(),
    name: "LGD-4033",
    slug: "lgd-4033",
    price: 2200.0,
    description: "",
    images: [
      {
        src: productSixImageOne,
        alt: "Slide 1",
      },
    ],
    category: "SARMs",
    code: "CODE2",
    about: {
      "LGD-4033 (Ligandrol)": {
        description:
          "It is a Selective Androgen Receptor Modulator (SARM) known for its strong anabolic effects, particularly in terms of muscle growth and strength enhancement. Here are the primary benefits of LGD-4033:",
        benefits: [
          {
            label: "Muscle Growth",
            description:
              "LGD-4033 is one of the most potent SARMs for promoting muscle hypertrophy. It helps to significantly increase lean muscle mass by binding to androgen receptors in muscle tissues, leading to enhanced protein synthesis.",
          },
          {
            label: "Strength Gains",
            description:
              "Users often experience substantial strength increases during a cycle with LGD-4033, making it ideal for strength athletes and bodybuilders looking to improve their performance.",
          },
          {
            label: "Fat Loss",
            description:
              "While primarily used for muscle building, LGD-4033 can indirectly assist with fat loss by increasing lean muscle mass. More muscle mass means a higher metabolic rate, which helps burn more calories even at rest.",
          },
          {
            label: "Improved Recovery",
            description:
              "LGD-4033 can aid in quicker recovery from intense workouts or injuries, reducing muscle soreness and promoting faster healing. This makes it popular for both performance enhancement and recovery after hard training.",
          },
          {
            label: "Preservation of Lean Muscle",
            description:
              "LGD-4033 is particularly beneficial in cutting cycles, as it helps preserve lean muscle mass while the body burns fat. This is important because calorie deficits typically lead to muscle loss, but LGD-4033 mitigates this.",
          },
          {
            label: "Joint Health",
            description:
              "Some users report that LGD-4033 can help with joint health and alleviate joint pain, which may be particularly useful for people who train intensely and experience wear and tear on their joints.",
          },
        ],
      },
    },
  },
  {
    id: nanoid(),
    name: "BOLD-E250",
    slug: "bold-e250",
    price: 2250.0,
    description:
      "Slow-releasing micellar casein protein perfect for overnight muscle recovery and growth.",
    images: [
      {
        src: productThreeImageOne,
        alt: "Slide 1",
      },
      {
        src: productThreeImageTwo,
        alt: "Slide 2",
      },
      {
        src: productThreeImageThree,
        alt: "Slide 3",
      },
    ],
    category: "Steriods",
    code: "CODE1",
    about: {
      "BOLD-E250": {
        description:
          "Boldenone Undecylenate, also knows as Equipoise, is a synthetic derivative of testosterone very similar to Dianabol is a powerful anabolic steroid known to enhance muscle building, fat loss, recovery, strength, and stamina. Here's how it works in these areas:",
        benefits: [
          {
            label: "Muscle Building",
            description:
              "Boldenone is known for Appetite Stimulation leading to better Nutrients loading and metabolism.  Accelerated  protein Synthesis in muscle cells, results into  increased muscle mass. It promotes the retention of nitrogen, a building block of protein, thus facilitating muscle growth.Increased Metabolic Rate and Fat Loss : While not a primary fat burner, Boldenone can indirectly influence fat loss through its powerful muscle-building effects. More muscle mass can lead to a higher basal metabolic rate (BMR), meaning the body burns more calories at rest. It also help in redistributing fat improved body composition and form.",
          },
          {
            label: "Enhanced Recovery",
            description:
              "By improving nitrogen retention and protein synthesis, Boldenone accelerates muscles repair and recover faster after intense workouts, reducing downtime and allowing for more frequent training sessions.",
          },
          {
            label: "Increased Strength and Stamina",
            description:
              "Boldenone is known to increase red blood cell production, which enhances oxygen carrying capacity to the muscles leading to better performance, Increased Stamina and strength.",
          },
          {
            label: "Alpha Bulk Unleashed",
            description: "Attain muscle and power beyond conventional limits.",
          },
          {
            label: "Muscular Strength",
            description:
              "Experience a surge in strength for powerful, impactful workouts.",
          },
          {
            label: "Extended Half-Life",
            description:
              "Undecylenate ester ensures effectiveness with less frequent injections.",
          },
        ],
      },
    },
  },
  {
    id: nanoid(),
    name: "Natural Cut Stack",
    slug: "natural-cut-stack",
    price: 1899.0,
    description: "",
    images: [
      {
        src: productNineImageOne,
        alt: "Slide 1",
      },
    ],
    category: "SARMs",
    code: "CODE2",
    about: {
      "Anavar (Oxandrolone)": {
        description:
          "Anavar is a mild anabolic steroid known for its relatively low androgenic properties, which makes it popular among both men and women.",
        benefits: [
          {
            label: "Muscle Preservation",
            description:
              "Anavar is often used during cutting cycles to help preserve lean muscle mass while burning fat.",
          },
          {
            label: "Fat Loss",
            description:
              "It promotes fat loss by increasing metabolism without significant water retention or bloating.",
          },
          {
            label: "Strength Gains",
            description:
              "Users often report increases in strength without large gains in body weight, making it ideal for athletes who need strength without added bulk.",
          },
          {
            label: "Minimal Side Effects",
            description:
              "Anavar is known for having fewer side effects compared to other steroids. It is less likely to cause issues like hair loss or liver toxicity (though it can still strain the liver when used in excess).",
          },
          {
            label: "Improved Recovery",
            description:
              "Anavar can enhance recovery after intense exercise by promoting quicker muscle repair and reducing muscle.",
          },
        ],
      },
      "Stanozolol (Winstrol or Stanacut)": {
        description:
          "Stanozolol is another anabolic steroid known for its ability to promote lean muscle gain and fat loss while improving athletic performance. 'Stanacut' is a brand name for stanozolol.",
        benefits: [
          {
            label: "Fat Loss and Lean Muscle",
            description:
              "Stanozolol is commonly used for its fat-burning properties while helping retain lean muscle mass, which is why it’s favored in cutting cycles.",
          },
          {
            label: "Increased Strength and Endurance",
            description:
              "Users often experience notable improvements in strength, endurance, and overall athletic performance.",
          },
          {
            label: "Improved Vascularity",
            description:
              "Stanozolol can improve vascularity (visible veins) by reducing water retention and promoting a more defined appearance.",
          },
          {
            label: "Joint Support",
            description:
              "Interestingly, stanozolol is sometimes used by athletes for joint support, as it may help alleviate joint pain (especially during cutting phases).",
          },
        ],
      },
    },
  },
  {
    id: nanoid(),
    name: "MK-677",
    slug: "mk-677",
    price: 1500.0,
    description: "",
    images: [
      {
        src: productEightImageOne,
        alt: "Slide 1",
      },
      {
        src: productEightImageTwo,
        alt: "Slide 2",
      },
      {
        src: productEightImageThree,
        alt: "Slide 3",
      },
    ],
    category: "SARMs",
    code: "CODE2",
    about: {
      "MK-677 (Ibutamoren)": {
        description:
          "MK-677, also known as Ibutamoren, is a compound that stimulates the secretion of growth hormone. It is often used for its potential benefits, which include:",
        benefits: [
          {
            label: "Increased Muscle Mass",
            description:
              "By boosting growth hormone and IGF-1 (Insulin-like Growth Factor 1) levels, MK-677 may help promote muscle growth and improve recovery.",
          },
          {
            label: "Fat Loss",
            description:
              "Higher growth hormone levels can support fat breakdown and help with weight management, potentially leading to a leaner physique.",
          },
          {
            label: "Improved Bone Density",
            description:
              "Growth hormone plays a role in bone health, and MK-677 may help increase bone density, which could be beneficial for individuals at risk of osteoporosis.",
          },
          {
            label: "Enhanced Recovery and Healing",
            description:
              "The compound may accelerate the healing process from injuries and improve overall recovery by stimulating growth factors that repair tissue.",
          },
          {
            label: "Better Sleep Quality",
            description:
              "MK-677 has been reported to improve sleep quality, particularly the deep stages of sleep, which is important for recovery and overall health.",
          },
          {
            label: "Anti-Aging Effects",
            description:
              "Since growth hormone has anti-aging properties, MK-677 may have potential benefits for skin elasticity, cognitive function, and overall vitality.",
          },
        ],
      },
    },
  },
  {
    id: nanoid(),
    name: "RAD-140",
    slug: "rad-140",
    price: 1299.0,
    description: "",
    images: [
      {
        src: productTenImageOne,
        alt: "Slide 1",
      },
    ],
    category: "SARMs",
    code: "CODE2",
    about: {
      "RAD-140 (Testolone)": {
        description:
          "RAD-140, also known as Testolone, is a selective androgen receptor modulator (SARM) that has garnered attention for its potential benefits, especially in muscle building and fat loss. Some of the reported benefits of RAD-140 include:",
        benefits: [
          {
            label: "Muscle growth",
            description:
              "RAD-140 is known for its potent anabolic effects, helping to increase muscle size and strength by binding to androgen receptors in muscle tissue.",
          },
          {
            label: "Fat Loss",
            description:
              "Some users report a reduction in body fat, likely due to an increase in lean muscle mass and overall metabolic rate.",
          },
          {
            label: "Improved strength and endurance",
            description:
              "RAD-140 can enhance performance in workouts, leading to better strength and endurance during training.",
          },
          {
            label: "Bone health",
            description:
              "Like other SARMs, RAD-140 may support bone density by acting on androgen receptors in bones, potentially reducing the risk of osteoporosis.",
          },
          {
            label: "Reduced risk of side effects",
            description:
              "RAD-140 is believed to have a lower risk of side effects compared to anabolic steroids, such as liver toxicity, though more research is needed.",
          },
        ],
      },
    },
  },
  {
    id: nanoid(),
    name: "Bulking Combo",
    slug: "bulking-combo",
    price: 5199.0,
    description: "",
    images: [
      {
        src: productFourImageOne,
        alt: "Slide 1",
      },
    ],
    category: "SARMs",
    code: "CODE2",
    about: {
      "MK-677 (Ibutamoren)": {
        description:
          "MK-677, also known as Ibutamoren, is a compound that stimulates the secretion of growth hormone. It is often used for its potential benefits, which include:",
        benefits: [
          {
            label: "Growth Hormone Release",
            description:
              "MK-677 stimulates the secretion of growth hormone (GH) and increases levels of insulin-like growth factor 1 (IGF-1), which may aid in muscle growth, fat loss, and improved recovery.",
          },
          {
            label: "Muscle Mass and Strength",
            description:
              "By promoting GH release, MK-677 may help increase lean muscle mass, improve strength, and promote faster recovery after exercise.",
          },
          {
            label: "Fat Loss",
            description:
              "It may contribute to fat reduction by increasing metabolic rate, although its primary focus is muscle preservation.",
          },
          {
            label: "Improved Sleep",
            description:
              "ome users report better sleep quality, which indirectly supports muscle recovery and overall well-being.",
          },
          {
            label: "Anti-Aging Effects",
            description:
              "Due to its impact on GH levels, it is sometimes used for its potential anti-aging benefits, such as improved skin elasticity, bone health, and overall vitality.",
          },
        ],
      },
      "RAD-140 (Testolone)": {
        description:
          "RAD-140, also known as Testolone, is a selective androgen receptor modulator (SARM) that has garnered attention for its potential benefits, especially in muscle building and fat loss. Some of the reported benefits of RAD-140 include:",
        benefits: [
          {
            label: "Muscle Growth",
            description:
              "RAD-140 is known for its strong anabolic effects, promoting significant muscle growth by binding to androgen receptors in the muscles.",
          },
          {
            label: "Fat Loss",
            description:
              "RAD-140 may also enhance fat loss due to its ability to increase muscle mass, which in turn boosts metabolism.",
          },
          {
            label: "Strength Gains",
            description:
              "Users often experience significant improvements in strength, which can help improve workout performance.",
          },
          {
            label: "Neuroprotective Effects",
            description:
              "Some studies suggest RAD-140 may have neuroprotective properties, offering benefits to brain health and cognition.",
          },
        ],
      },
      "YK-11": {
        description:
          "YK-11 is a synthetic selective androgen receptor modulator (SARM) that has gained attention for its potential muscle-building and fat-loss effects. Some of the reported benefits of YK11 include:",
        benefits: [
          {
            label: "Muscle Growth",
            description:
              "YK-11 is a potent SARM that acts as a myostatin inhibitor, potentially allowing for substantial muscle growth beyond normal limits. It also promotes muscle differentiation.",
          },
          {
            label: "Fat Loss",
            description:
              "YK-11 may help in fat loss by increasing lean muscle mass, thus improving metabolism.",
          },
          {
            label: "Increased Strength",
            description:
              "Like other SARMs, it can contribute to greater strength and performance in physical activities.",
          },
          {
            label: "Bone Health",
            description:
              "YK-11 may support bone density, possibly reducing the risk of fractures and supporting joint health.",
          },
        ],
      },
    },
  },
  {
    id: nanoid(),
    name: "DIANA 10",
    slug: "diana-10",
    price: 1199.0,
    description: "",
    images: [
      {
        src: productFiveImageOne,
        alt: "Slide 1",
      },
    ],
    category: "SARMs",
    code: "CODE2",
    about: {
      "DIANA 10": {
        description:
          "Here are some potential benefits of Dianabol, though they come with caution:",
        benefits: [
          {
            label: "Increased Muscle Mass",
            description:
              "Dianabol is known for its ability to help users gain substantial muscle mass quickly.",
          },
          {
            label: "Improved Strength",
            description:
              "It can enhance strength, which helps in lifting heavier weights and improving performance in workouts.",
          },
          {
            label: "Enhanced Recovery",
            description:
              "It may reduce recovery time after intense workouts, allowing athletes to train harder and more frequently.",
          },
          {
            label: "Increased Protein Synthesis",
            description:
              "Dianabol can promote protein synthesis, a key process in muscle growth.",
          },
          {
            label: "Improved Nitrogen Retention",
            description:
              "By improving nitrogen retention in muscles, it helps maintain a positive anabolic environment.",
          },
          {
            label: "Better Performance",
            description:
              "Athletes and bodybuilders often use Dianabol to improve endurance and overall physical performance.",
          },
          {
            label: "Enhanced Red Blood Cell Production",
            description:
              "This can increase oxygen delivery to muscles, improving stamina and endurance.",
          },
          {
            label: "Boosted Metabolism",
            description:
              "Some users report that it helps with fat loss when combined with proper training and diet.",
          },
          {
            label: "Faster Gains in Bulk",
            description:
              "For those looking for rapid increases in muscle size, Dianabol is popular due to its potent effects.",
          },
          {
            label: "Increased Appetite",
            description:
              "It may lead to a noticeable increase in appetite, supporting calorie intake for muscle growth.",
          },
        ],
      },
    },
  },
  {
    id: nanoid(),
    name: "MK-2866",
    slug: "mk2866",
    price: 1999.0,
    description: "",
    images: [
      {
        src: productSevenImageOne,
        alt: "Slide 1",
      },
    ],
    category: "SARMs",
    code: "CODE2",
    about: {
      "MK2866 (Ostarine)": {
        description:
          "MK2866, also known as Ostarine, is a selective androgen receptor modulator (SARM) that is commonly used for its potential benefits in muscle growth and fat loss. Some of the primary benefits of MK2866 include:",
        benefits: [
          {
            label: "Muscle Growth",
            description:
              "Ostarine helps to increase lean muscle mass by binding to androgen receptors in the muscles, leading to enhanced protein synthesis.",
          },
          {
            label: "Fat Loss",
            description:
              "While primarily used for muscle building, LGD-4033 can indirectly assist with fat loss by increasing lean muscle mass. More muscle mass means a higher metabolic rate, which helps burn more calories even at rest.",
          },
          {
            label: "Increased Strength and Endurance",
            description:
              "Users often report improvements in strength and endurance, which can help improve workout performance.",
          },
          {
            label: "Improved Bone Health",
            description:
              "Ostarine may support bone density and health, potentially reducing the risk of bone fractures.",
          },
          {
            label: "Recovery and Healing",
            description:
              "It has potential benefits for speeding up recovery from injuries by promoting tissue repair and regeneration.",
          },
          {
            label: "Minimal Side Effects",
            description:
              "Compared to anabolic steroids, Ostarine has fewer androgenic side effects, such as hair loss or virilization in women.",
          },
        ],
      },
    },
  },
  {
    id: nanoid(),
    name: "YK-11",
    slug: "yk-11",
    price: 1200.0,
    description: "",
    images: [
      {
        src: productElevenImageOne,
        alt: "Slide 1",
      },
    ],
    category: "SARMs",
    code: "CODE2",
    about: {
      YK11: {
        description:
          "YK-11 is a synthetic selective androgen receptor modulator (SARM) that has gained attention for its potential muscle-building and fat-loss effects. Some of the reported benefits of YK11 include:",
        benefits: [
          {
            label: "Increased muscle mass",
            description:
              "YK11 may help increase lean muscle mass by binding to androgen receptors in the muscles.",
          },
          {
            label: "Fat Loss",
            description:
              "It may also contribute to fat loss, though this effect is less studied compared to its muscle-building potential.",
          },
          {
            label: "Bone health",
            description:
              "Some research suggests that YK11 might promote bone health by increasing the production of a protein called follistatin, which inhibits myostatin, a protein that limits muscle growth.",
          },
          {
            label: "Improved strength",
            description:
              "Users may experience increased strength and performance during workouts.",
          },
        ],
      },
    },
  },
  {
    id: nanoid(),
    name: "Ultimate PCT Stack:",
    slug: "ultimate-pct-stack",
    price: 5500.0,
    dosing: [
      {
        label: "PCT-Matrix",
        description: "2 tablets everyday",
      },
      {
        label: "Letrox-2000",
        description: "2mg thrice a week",
      },
      {
        label: "Cabergline",
        description: " 1 tablet everyday",
      },
      {
        label: "Heucotec",
        description: "1000iu Everyday",
      },
      {
        label: "Livodrome",
        description: "2 capsules twice a day after meals",
      },
      {
        label: "Essattovite Men",
        description: "2 capsules with breakfast",
      },
    ],
    description: "",
    images: [
      {
        src: productTwelveImageOne,
        alt: "Slide 1",
      },
    ],
    category: "PCT",
    code: "CODE3",
  },
  {
    id: nanoid(),
    name: "Advance Cut Stack",
    slug: "advance-cut-stack",
    price: 1899.0,
    description: "",
    images: [
      {
        src: productOneImageOne,
        alt: "Slide 1",
      },
    ],
    category: "SARMs",
    code: "CODE2",
    about: {
      "MK-2866 (Ostarine)": {
        description:
          "MK-2866, or Ostarine, is a Selective Androgen Receptor Modulator (SARM) designed to enhance muscle growth, fat loss, and overall athletic performance.",
        benefits: [
          {
            label: "Muscle Preservation",
            description:
              "Ostarine helps to maintain and build lean muscle mass, making it especially beneficial during cutting cycles (when fat loss is the goal) or for those recovering from injury.",
          },
          {
            label: "Fat Loss",
            description:
              "It promotes fat loss by increasing muscle mass, which in turn boosts metabolism and supports a leaner physique.",
          },
          {
            label: "Increased Strength and Performance",
            description:
              "Many users report increased strength and improved performance during workouts, which can be beneficial for both muscle building and athletic training.",
          },
          {
            label: "Joint Health",
            description:
              "Ostarine has potential benefits for joint health, helping to reduce joint pain and promote healing, making it useful for those recovering from injuries.",
          },
          {
            label: "Minimal Side Effects",
            description:
              "Ostarine is known for having a relatively mild side effect profile compared to traditional anabolic steroids. It has low androgenic effects, meaning it’s less likely to cause issues like hair loss or virilization in women.",
          },
        ],
      },
      "GW-501516 (Cardarine)": {
        description:
          "GW-501516, also known as Cardarine, is not a SARM but a peroxisome proliferator-activated receptor delta (PPARδ) agonist, primarily used for fat loss and endurance enhancement.",
        benefits: [
          {
            label: "Fat Loss",
            description:
              "Cardarine helps in burning fat by increasing the body’s ability to use stored fat as fuel, making it effective during cutting cycles or for individuals aiming to lose weight.",
          },
          {
            label: "Improved Endurance",
            description:
              "One of Cardarine's most well-known benefits is its ability to enhance endurance and stamina. Users often report being able to train harder and for longer periods without fatigue, which can significantly improve athletic performance.",
          },
          {
            label: "Increased Energy",
            description:
              "By improving the body’s ability to metabolize fat, Cardarine can provide more energy during physical activities and daily tasks.",
          },
          {
            label: "Improved Cardiovascular Health",
            description:
              "Some studies suggest that Cardarine may offer benefits to cardiovascular health by improving lipid profiles, such as lowering triglycerides and increasing HDL cholesterol.",
          },
        ],
      },
    },
  },
];
