import iconRepairs from "../../data/images/icons/repairs.png"
import iconService from "../../data/images/icons/service.png"
import iconEstimate from "../../data/images/icons/estimates.png"
import iconDesign from "../../data/images/icons/design.png"
import iconFinance from "../../data/images/icons/financing.png"
import iconInstall from "../../data/images/icons/installs.png"

export const data = [
    {
        id: "gas-service",
        title: "Annual Service & Maintenance",
        desc: "It is beneficial for your health and safety to clean your gas fireplace annually. Gas fireplaces, just like every other appliance in your home, need to be tuned up and maintained regularly in order to avoid large and costly break downs.",
        path: "/services/gas-service",
        icon: iconService
    },
    {
        id: "parts-repairs",
        title: "Parts & Repairs",
        desc: "We have a large inventory of all type of venting, replacement parts, gaskets & gasket kits, wood/gas fireplace door glass, fireplace and BBQ accessories, etc. Give us a shout and let us know what you're looking for, if we don't already have it in stock we can source it for you!",
        path: "/services/parts",
        icon: iconRepairs
    },
    {
        id: "installations",
        title: "Certified Installations",
        desc: "Certified installations are provided by our professional installer crews equipped with WETT Certification and years of spcialized experience.",
        icon: iconInstall
    },
    {
        id: "estimates",
        title: "Free In-Home Estimates",
        desc: "Contact us to book a FREE on site visit and quote with our sales specialist - a very necessary step as we want no surprise expenses for you, or for us, on the day of installation.",
        path: "/contact-us",
        icon: iconEstimate
    },
    {
        id: "design-consultation",
        title: "Design Consultation",
        desc: "If you are looking to warm your home this season, look no further. Whether it is wood, gas, or propane, in a stove, fireplace, or pellet style, you’ll find endless options at South Island Fireplace to achieve the look you want. Contact us by phone, email, or visit our showroom and our product specialists will help you find a fireplace to suit your lifestyle and budget.",
        path: "/contact-us",
        icon: iconDesign
    },
    {
        id: "financing",
        title: "Financing",
        desc: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
        path: "/services/financing",
        icon: iconFinance
    }
]