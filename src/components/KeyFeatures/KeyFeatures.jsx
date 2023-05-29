import FeaturesCard from "./FeaturesCard";
import { FcFlowChart , FcEngineering, FcFilingCabinet, FcRotateToPortrait, FcDataConfiguration, FcRatings, FcDebt, FcCircuit, FcComboChart, FcBullish, FcDoughnutChart} from "react-icons/fc";


const KeyFeatures = () => {

  const features = [
    {
      id: 1,
      serviceName: "Web Development",
      img: <FcFlowChart className=" h-20 w-20 bg-[#ffdc60] rounded-full p-3 -mt-16  shadow-md mb-8 " />,
      serviceDetails: "Custom web application development using MERN stack.",
    },
    {
      id: 2,
      serviceName: "Mobile App Development",
      img: <FcEngineering className=" h-20 w-20 bg-[#ffdc60] rounded-full p-3 -mt-16  shadow-md mb-8 " />,
      serviceDetails: "Native mobile app development for iOS and Android using React Native.",
    },
    {
      id: 3,
      serviceName: "Backend Development",
      img: <FcFilingCabinet className=" h-20 w-20 bg-[#ffdc60] rounded-full p-3 -mt-16  shadow-md mb-8 " />,
      serviceDetails: "API development and server-side logic implementation using Node.js and Express.",
    },
    {
      id: 4,
      serviceName: "Frontend Development",
      img: <FcRotateToPortrait className=" h-20 w-20 bg-[#ffdc60] rounded-full p-3 -mt-16  shadow-md mb-8 " />,
      serviceDetails: "Building interactive user interfaces with React and Redux.",
    },
    {
      id: 5,
      serviceName: "Database Design",
      img: <FcDataConfiguration className=" h-20 w-20 bg-[#ffdc60] rounded-full p-3 -mt-16  shadow-md mb-8 " />,
      serviceDetails: "Designing efficient database schemas using MongoDB.",
    },
    {
      id: 6,
      serviceName: "UI/UX Design",
      img: <FcRatings className=" h-20 w-20 bg-[#ffdc60] rounded-full p-3 -mt-16  shadow-md mb-8 " />,
      serviceDetails: "Creating visually appealing and user-friendly interfaces.",
    },
    {
      id: 7,
      serviceName: "E-commerce Development",
      img: <FcComboChart className=" h-20 w-20 bg-[#ffdc60] rounded-full p-3 -mt-16  shadow-md mb-8 " />,
      serviceDetails: "Building online stores with secure payment gateways and inventory management.",
    },
    {
      id: 8,
      serviceName: "Deployment and DevOps",
      img: <FcDoughnutChart className=" h-20 w-20 bg-[#ffdc60] rounded-full p-3 -mt-16  shadow-md mb-8 " />,
      serviceDetails: "Setting up production environments, continuous integration, and deployment pipelines.",
    },
  ];



  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="text-center mt-14 text-3xl font-semibold text-cyan-600">Our Key Features</h3>
      <p className="text-center mt-1 mb-10 text-lg ">what is the spaciality of our features</p>
      <div className="p-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-14
       gap-x-7">
        {features.map(feature => <FeaturesCard key={feature.id} feature={feature}></FeaturesCard>)}
      </div>

    </div>
  )
}

export default KeyFeatures