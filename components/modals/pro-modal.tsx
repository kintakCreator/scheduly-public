"use client";

import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { toast } from "sonner";
import { OrgSubscription } from "@prisma/client";
import { LucideCheck } from "lucide-react";
import { format } from "date-fns";

export const ProModal = () => {
    const isSubscribed = useProModal((state) => state.subscribed) as boolean;
    const subscriptionData = useProModal((state) => state.subscriptionData) as OrgSubscription;
    const isOpen = useProModal((state) => state.isOpen);
    const onClose = useProModal((state) => state.onClose);

    const { execute, isLoading } = useAction(stripeRedirect, {
        onSuccess: (data) => {
            window.location.href = data;
        },
        onError: (error) => {
            toast.error(error);
        },
    });

    const onClick = () => {
        execute({});
    };

    return (
        <Dialog
            open={isOpen}
            onOpenChange={onClose}
        >
            <DialogContent className="max-w-md p-0 overflow-hidden">
                <div className="aspect-video relative flex items-center justify-center">
                    <Image 
                        src="/hero.svg"
                        alt="Hero"
                        className="object-hover"
                        fill
                    />
                </div>
                <div className="text-neutral-700 mx-auto p-7">
                        {!isSubscribed ? 
                            (<h2 className="font-semibold text-xl">Update to Scheduly Pro <b>Today</b>!</h2>) : 
                            (<h2 className="font-semibold text-xl">Your Schedule Pro subscription</h2>)
                        }
                    <p className="pt-3 flex justify-center items-center text-xs font-semibold text-neutral-700">
                        Explore the best of Scheduly!
                    </p>
                    <div className="pt-4 pl-5 pb-6">
                        <ul className="text-sm list-disc">
                            <li>Unlimited boards</li>
                            <li>Admin features</li>
                            <li>Advanced checklists</li>
                            <li>And more!</li>
                        </ul>
                    </div>
                    {isSubscribed && subscriptionData ? (
                        <div className="flex font-medium">
                            <LucideCheck className="h-4 w-4 mr-2" />
                            <p className="text-green-500 text-xs">Your subscription expires in {format(new Date(subscriptionData?.stripeCurrentPeriodEnd!), "MMM d, yyyy 'at' h:mm a") }</p>
                        </div>
                    ) : (
                        <Button
                            disabled={isLoading}
                            onClick={onClick}
                            className="w-full"
                            variant="primary"
                        >
                            Upgrade Now
                        </Button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};