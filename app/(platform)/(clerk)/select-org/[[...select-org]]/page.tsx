import { OrganizationList, UserButton } from "@clerk/nextjs";
import { UserIcon } from "lucide-react";
 
export default function CreateOrganizationPage() {
    return (
        <OrganizationList
            hidePersonal
            afterSelectOrganizationUrl="/organization/:id"
            afterCreateOrganizationUrl="/organization/:id"
        />
    )
}