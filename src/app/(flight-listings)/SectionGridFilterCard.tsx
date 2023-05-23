import React, { FC } from "react";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import FlightCard, { FlightCardProps } from "@/components/FlightCard";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionGridFilterCardProps {
  className?: string;
}

const DEMO_DATA: FlightCardProps["data"][] = [
  {
    id: "1",
    price: "$7,219",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/AA.png",
      name: "American Airlines",
    },
  },
  {
    id: "2",
    price: "$7,102",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/UA.png",
      name: "United Airlines",
    },
  },
  {
    id: "3",
    price: "$7,423",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/AA.png",
      name: "American Airlines",
    },
  },
  {
    id: "1",
    price: "$7,100",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/DL.png",
      name: "Delta Airlines",
    },
  },
  {
    id: "2",
    price: "$7,380",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/AA.png",
      name: "American Airlines",
    },
  },


];

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <Heading2
        heading="CDMX - Phoenix"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            5 flights
            <span className="mx-2">·</span>
            Oneway trip
            <span className="mx-2">·</span>1 Guests
          </span>
        }
      />
      <div className="mb-8 lg:mb-11">
        <TabFilters />
      </div>
      <div className="lg:p-10 lg:bg-neutral-50 lg:dark:bg-black/20 grid grid-cols-1 gap-6  rounded-3xl">
        {DEMO_DATA.map((item, index) => (
          <FlightCard key={index} data={item} />
        ))}

        
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
