import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const headingFont = localFont({
    src: "../../../public/fonts/font.woff2"
});

export const FeaturesPart = () => {
    return (
        <div className="flex items-center justify-center flex-col pt-5 bg-white">
            <h1 className={cn("text-3xl md:text-5xl text-neutral-800", headingFont.className)}>Why Scheduly?</h1>
            <div className="pt-14 pb-10 pl-48 md:pl-0 lg:pl-0">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        <CarouselItem className="pl-2 md:pl-4">
                            <div className="p-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-2xl">New design</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <span className="text-sm md:text-md text-neutral-400">
                                            Scheduly&apos;s beautiful and adaptive design will make your interaction with it smooth and comfortable
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-2 md:pl-4">
                            <div className="p-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-2xl">Favorable prices</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <span className="text-sm md:text-md text-neutral-400">
                                            Scheduly offers you the best and value for your money solution
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="pl-2 md:pl-4">
                            <div className="p-1">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-2xl">The convenience of Scheduly</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <span className="text-sm md:text-md text-neutral-400">
                                            With our intuitive interface and tooltips, you will easily understand Scheduly
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}