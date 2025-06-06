import { Button } from "@/components/ui/button";
import { NavigationMenu as NavigationMenuBase, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { SettingsDropdown } from "./settingsDropdown";
import { GitHubLogoIcon, DiscordLogoIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";
import { OrgSelector } from "./orgSelector";
import { ErrorNavIndicator } from "./errorNavIndicator";
import { WarningNavIndicator } from "./warningNavIndicator";
import { ProgressNavIndicator } from "./progressNavIndicator";
import { SourcebotLogo } from "@/app/components/sourcebotLogo";
import { TrialNavIndicator } from "./trialNavIndicator";
import { IS_BILLING_ENABLED } from "@/ee/features/billing/stripe";
import { env } from "@/env.mjs";
import { getSubscriptionInfo } from "@/ee/features/billing/actions";

const SOURCEBOT_DISCORD_URL = "https://discord.gg/6Fhp27x7Pb";
const SOURCEBOT_GITHUB_URL = "https://github.com/sourcebot-dev/sourcebot";

interface NavigationMenuProps {
    domain: string;
}

export const NavigationMenu = async ({
    domain,
}: NavigationMenuProps) => {
    const subscription = IS_BILLING_ENABLED ? await getSubscriptionInfo(domain) : null;

    return (
        <div className="flex flex-col w-screen h-fit bg-background">
            <div className="flex flex-row justify-between items-center py-1.5 px-3">
                <div className="flex flex-row items-center">
                    <Link
                        href={`/${domain}`}
                        className="mr-3 cursor-pointer"
                    >
                        <SourcebotLogo
                            className="h-11"
                            size="small"
                        />
                    </Link>

                    {env.SOURCEBOT_TENANCY_MODE === 'multi' && (
                        <>
                            <OrgSelector
                                domain={domain}
                            />
                            <Separator orientation="vertical" className="h-6 mx-2" />
                        </>
                    )}

                    <NavigationMenuBase>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href={`/${domain}`} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Search
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href={`/${domain}/agents`} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Agents
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href={`/${domain}/repos`} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Repositories
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            {env.SOURCEBOT_AUTH_ENABLED === 'true' && (
                                <NavigationMenuItem>
                                    <Link href={`/${domain}/connections`} legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Connections
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            )}
                            {env.SOURCEBOT_AUTH_ENABLED === 'true' && (
                                <NavigationMenuItem>
                                    <Link href={`/${domain}/settings`} legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Settings
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            )}
                        </NavigationMenuList>
                    </NavigationMenuBase>
                </div>

                <div className="flex flex-row items-center gap-2">
                    <ProgressNavIndicator />
                    <WarningNavIndicator />
                    <ErrorNavIndicator />
                    <TrialNavIndicator subscription={subscription} />
                    <form
                        action={async () => {
                            "use server";
                            redirect(SOURCEBOT_DISCORD_URL);
                        }}
                    >
                        <Button
                            variant="outline"
                            size="icon"
                            type="submit"
                        >
                            <DiscordLogoIcon className="w-4 h-4" />
                        </Button>
                    </form>
                    <form
                        action={async () => {
                            "use server";
                            redirect(SOURCEBOT_GITHUB_URL);
                        }}
                    >
                        <Button
                            variant="outline"
                            size="icon"
                            type="submit"
                        >
                            <GitHubLogoIcon className="w-4 h-4" />
                        </Button>
                    </form>
                    <SettingsDropdown displaySettingsOption={env.SOURCEBOT_AUTH_ENABLED === 'true'} />
                </div>
            </div>
            <Separator />
        </div>


    )
}