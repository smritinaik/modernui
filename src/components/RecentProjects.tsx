"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function RecentProjects() {
    return (
        <main className="bg-black">
            <div className="flex flex-col gap-15 max-w-4xl mx-auto mc-10">
            <h3 className='text-center mt-20 md:mt-0 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-900'>3 STEPS</h3>
            </div>
        <CardContainer className="inter-var grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Card 1 */}
            <div className="p-2">
                <CardBody
                    className="bg-gray-50 relative group/card 
                        dark:hover:shadow-lg dark:hover:shadow-blue-900/[0.4] 
                        dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
                        w-auto sm:w-[18rem] h-auto rounded-lg p-4 border 
                        sm:transform-gpu sm:perspective-1000 hover:scale-102 
                        sm:hover:translateZ-[15px]">
                    <CardItem
                        translateZ="10"
                        className="text-lg font-bold text-neutral-600 dark:text-white"
                    >
                        Project 1
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="5"
                        className="text-neutral-500 text-xs max-w-xs mt-2 dark:text-neutral-300"
                    >
                        Description for project 1.
                    </CardItem>
                    <CardItem
                        translateZ="20"
                        rotateX={10}
                        rotateZ={-5}
                        className="w-full mt-4"
                    >
                        <Image
                            src="/cardimg.jpg"
                            height="600"
                            width="600"
                            className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-md"
                            alt="Project 1"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-10">
                        <CardItem
                            translateZ={10}
                            translateX={-10}
                            as="button"
                            className="px-3 py-1 rounded-lg text-xs font-normal dark:text-white"
                        >
                            Try now →
                        </CardItem>
                        <CardItem
                            translateZ={10}
                            translateX={10}
                            as="button"
                            className="px-3 py-1 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            Sign up
                        </CardItem>
                    </div>
                </CardBody>
            </div>

            {/* Card 2 */}
            <div className="p-2">
                <CardBody
                    className="bg-gray-50 relative group/card 
                        dark:hover:shadow-lg dark:hover:shadow-blue-900/[0.4] 
                        dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
                        w-auto sm:w-[18rem] h-auto rounded-lg p-4 border 
                        sm:transform-gpu sm:perspective-1000 hover:scale-102 
                        sm:hover:translateZ-[15px]">
                    <CardItem
                        translateZ="10"
                        className="text-lg font-bold text-neutral-600 dark:text-white"
                    >
                        Project 2
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="5"
                        className="text-neutral-500 text-xs max-w-xs mt-2 dark:text-neutral-300"
                    >
                        Description for project 2.
                    </CardItem>
                    <CardItem
                        translateZ="20"
                        rotateX={10}
                        rotateZ={-5}
                        className="w-full mt-4"
                    >
                        <Image
                            src="/cardimg2.webp"
                            height="600"
                            width="600"
                            className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-md"
                            alt="Project 2"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-10">
                        <CardItem
                            translateZ={10}
                            translateX={-10}
                            as="button"
                            className="px-3 py-1 rounded-lg text-xs font-normal dark:text-white"
                        >
                            Try now →
                        </CardItem>
                        <CardItem
                            translateZ={10}
                            translateX={10}
                            as="button"
                            className="px-3 py-1 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            Sign up
                        </CardItem>
                    </div>
                </CardBody>
            </div>

            {/* Add additional cards manually following the same structure */}
            {/* Card 3 */}
            <div className="p-2">
                <CardBody
                    className="bg-gray-50 relative group/card 
                        dark:hover:shadow-lg dark:hover:shadow-blue-900/[0.4] 
                        dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
                        w-auto sm:w-[18rem] h-auto rounded-lg p-4 border 
                        sm:transform-gpu sm:perspective-1000 hover:scale-102 
                        sm:hover:translateZ-[15px]">
                    <CardItem
                        translateZ="10"
                        className="text-lg font-bold text-neutral-600 dark:text-white"
                    >
                        Project 3
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="5"
                        className="text-neutral-500 text-xs max-w-xs mt-2 dark:text-neutral-300"
                    >
                        Description for project 3.
                    </CardItem>
                    <CardItem
                        translateZ="20"
                        rotateX={10}
                        rotateZ={-5}
                        className="w-full mt-4"
                    >
                        <Image
                            src="/cardimg3.webp"
                            height="600"
                            width="600"
                            className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-md"
                            alt="Project 3"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-10">
                        <CardItem
                            translateZ={10}
                            translateX={-10}
                            as="button"
                            className="px-3 py-1 rounded-lg text-xs font-normal dark:text-white"
                        >
                            Try now →
                        </CardItem>
                        <CardItem
                            translateZ={10}
                            translateX={10}
                            as="button"
                            className="px-3 py-1 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            Sign up
                        </CardItem>
                    </div>
                </CardBody>
            </div>

            
        </CardContainer>
        </main>
    );
}

export default RecentProjects;