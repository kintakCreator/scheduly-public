"use client";

import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { OrgSubscription } from "@prisma/client";

interface SubscribedModal {
    isPro: boolean;
    subscriptionData: OrgSubscription;
};

export const SubscribedButton = ({
    isPro,
    subscriptionData,
}: SubscribedModal) => {
    const proModal = useProModal();

    const onClick = () => {
        proModal.onOpen(isPro, subscriptionData);
    }

    return (
        <Button
            variant="primary"
            onClick={onClick}
        >
            Pro features
        </Button>
    );
};