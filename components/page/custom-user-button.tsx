"use client";

import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import { BuildingIcon } from "lucide-react";

export default function UserMenu() {
    return (
        <UserButton>
            <UserButton.UserProfilePage 
                label="Organizations"
                labelIcon={<BuildingIcon className="size-4" />}
                url="/organizations" 
            >
                <div className="p-8">
                    <h2 className="text-xl font-bold mb-4">Manage Organization</h2>
                    <p className="text-muted-foreground mb-6 text-sm">
                        Switch or create a new organization to manage your projects.
                    </p>
                    <OrganizationSwitcher 
                        hidePersonal={true}
                        afterCreateOrganizationUrl="/submit"
                        afterSelectOrganizationUrl="/submit"
                        appearance={{
                            elements: {
                                rootBox: "w-full"
                            }
                        }}
                    />
                </div>
            </UserButton.UserProfilePage>
        </UserButton>
    );
}