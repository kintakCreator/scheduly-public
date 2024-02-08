import { checkSubscription } from "@/lib/subscription"
import { Info } from "../_components/info";
import { Separator } from "@/components/ui/separator";
import { SubscriptionButton } from "./_components/subscription-button";
import { LucideBan, LucideCheck } from "lucide-react";
import { getSubscriptionData } from "@/lib/get-subscription-data";
import { format } from "date-fns";
import { SubscribedButton } from "./_components/subscribed-button";

const BillingPage = async () => {
    const isPro = await checkSubscription();
    const subscriptionData = await getSubscriptionData();

    return (
        <div className="w-full">
            <Info 
                isPro={isPro}
            />
            <Separator className="my-2" />
            {isPro && subscriptionData ? (
                <div className="flex items-center mb-5 font-medium p-2">
                    <LucideCheck className="h-5 w-5 mr-2" />
                    <p className="text-green-500 font-semibold">Your subscription expires in {format(new Date(subscriptionData?.stripeCurrentPeriodEnd!), "MMM d, yyyy 'at' h:mm a")} </p>
                </div>
            ) : (
                <div className="flex items-center mb-5 font-medium p-2">
                    <LucideBan className="h-5 w-5 mr-2" />
                    <p className="text-red-500 font-semibold">You don&apos;t have Schedule Pro subscription</p>
                </div>
            )}
            <div className="flex items-center">
                <SubscriptionButton 
                    isPro={isPro}
                />
                {isPro && subscriptionData ? (
                    <div className="pl-3">
                        <SubscribedButton isPro={isPro} subscriptionData={subscriptionData}/>
                    </div>
                ) : (<p></p>)}
            </div>
        </div>
    )
}

export default BillingPage;