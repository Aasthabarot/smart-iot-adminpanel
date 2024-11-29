import Card from "components/card";
import { MdMap } from "react-icons/md";

const WeeklyRevenueWithMap = () => {
  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      

      <div className="md:mt-16 lg:mt-0">
        <div className="h-[250px] w-full xl:h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.888723188615!2d72.50063727963459!3d23.02785762546138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bb4a9c3d63f%3A0x24ac4f903302756d!2sStellarmind.ai!5e0!3m2!1sen!2sin!4v1732853122417!5m2!1sen!2sin"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Card>
  );
};

export default WeeklyRevenueWithMap;
