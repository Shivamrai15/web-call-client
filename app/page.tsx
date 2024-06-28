import { FaReact, FaHistory, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { SiSocketdotio, SiPrisma } from "react-icons/si";
import { PiScreencastFill } from "react-icons/pi";
import { HiPaperAirplane } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/utils/header";
import { Footer } from "@/components/utils/footer";
import { FeatureCard } from "@/components/cards/feature-card";


export default function Home() {

    return (
        <main className="h-full overflow-y-auto space-y-16 md:space-y-32">
            <Header/>
            <section className="px-6 space-y-20">
                <div className="flex flex-col items-center justify-center space-y-10">
                    <span className="text-xs bg-neutral-200 px-3 py-2 rounded-full">
                        Find the project on github
                    </span>
                    <div className="max-w-2xl w-full text-center text-lg text-zinc-600 font-medium">
                        An open source video conferencing platform. Connect, collaborate, and communicate via video calls with ease.
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="max-w-4xl w-full ">
                        <div className="w-full aspect-video rounded-xl bg-muted">

                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-10">
                    <div className="max-w-2xl w-full text-center text-lg text-zinc-600 font-medium">
                        This project was built using the following technologies
                    </div>
                    <div className="max-w-2xl flex items-center justify-center flex-wrap text-gray-800 gap-x-10 gap-y-6">
                        <RiNextjsFill className="h-16 w-16" />
                        <FaReact className="h-14 w-14" />
                        <TbBrandNodejs className="h-14 w-14" />
                        <SiSocketdotio className="h-14 w-14" />
                        <RiTailwindCssFill className="h-16 w-16" />
                        <SiPrisma className="h-12 w-12" />
                    </div>
                </div>
            </section>
            <section className="w-full px-6 space-y-10">
                <div className="flex flex-col items-center justify-center space-y-10">
                    <span className="text-xs bg-neutral-200 px-3 py-2 rounded-full">
                        Features
                    </span>
                    <div className="max-w-4xl w-full text-center space-y-10">
                        <h3 className="text-3xl md:text-5xl font-bold text-zinc-800">
                            Features for Enhanced Communication
                        </h3> 
                        <p className="text-lg text-zinc-600 font-medium text-justify sm:text-center">
                            This project provides a range of features designed to enhance communication efficiency and effectiveness. These include high-definition video calls, seamless screen sharing, and comprehensive call history tracking.
                        </p>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <div className="max-w-5xl grid sm:grid-cols-3 w-full gap-6">
                        <FeatureCard
                            Icon={HiPaperAirplane}
                            title="Partcipent Invites"
                            description="Invite participants to your meeting via an invite link or an invite email."
                        />
                        <FeatureCard
                            Icon={PiScreencastFill}
                            title="Screen Share"
                            description="Share your screen with other participants in your call."
                        />
                        <FeatureCard
                            Icon={FaHistory}
                            title="Accessing call history"
                            description="Keep track of your past interactions with the call history feature."
                        />
                    </div>
                </div>
            </section>
            <section className="w-full py-10 md:py-24 px-6">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="max-w-3xl w-full space-y-4">
                        <h3 className="text-xl md:text-3xl text-zinc-800 font-semibold text-center">
                            This is an open source project
                        </h3>
                        <p className="text-center text-lg text-zinc-600 font-medium" >
                            WebCall is open source. Check out the GitHub repository to get started.
                        </p>
                    </div>   
                    <Button asChild size="lg" >
                        <a href="" target = "noreferrer" >
                            <FaGithub className="h-5 w-5 mr-3" />
                            <span>Github Repo</span>
                        </a>
                    </Button>
                </div>
            </section>
            <Footer/>
        </main>
    );
}
