import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExpCard = ({experience}) => {
  return (
    <div className="w-full">
      <div className="p-4 border rounded-md">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex flex-row space-x-5 justify-start items-center flex-wrap">
                <div className="w-20 border rounded-full overflow-hidden mx-auto mb-5 md:mb-2">
                  <img src={experience.companyImageUrl} alt="" />
                </div>

                <div className="flex flex-col justify-start items-start space-y-1">
                  <div className="">
                    <span className="border-r mr-4 px-2 text-xl">
                      {experience.role}
                    </span>
                    <span className="text-sm text-gray-400">
                      {experience.duration}
                    </span>
                  </div>

                  <h2 className="pb-3 px-2 text-gray-400 dark:text-gray-200">{experience.compnayName}</h2>

                  <div className="flex flex-row justify-start gap-3 items-center flex-wrap">
                    {experience.techStack.map((stack) => {
                      return (
                        <div className="bg-gray-50 py-1 px-3 rounded-full text-[12px] dark:text-black">
                          {stack}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div>
                {experience.keyPoints.map((point) => {
                  return (
                    <p className="my-1">
                      <IoIosCheckmarkCircleOutline className="inline mr-2"/>
                      {point}
                    </p>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ExpCard;
