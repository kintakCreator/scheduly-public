import { auth } from "@clerk/nextjs";

import { db } from "./db";

export const getSubscriptionData = async () => {
    const { orgId } = auth();

    if (!orgId) {
        return null;
    }

    const subscriptionData = await db.orgSubscription.findUnique({
        where: {
            orgId,
        },
    });

    if (!subscriptionData) {
        return null;
    }

    return subscriptionData;
}