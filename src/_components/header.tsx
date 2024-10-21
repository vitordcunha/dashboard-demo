import { IconBell, IconSettings } from "@tabler/icons-react";

import withTooltip from "@/_hocs/withTooltip";

import LanguageSelector from "./language-selector";
import Breadcrumb from "./breadcrumb";
import { Button } from "./ui/button";
import Search from "./search";

/**
 * Renders the header component of the dashboard.
 *
 * This component includes a breadcrumb navigation, search functionality,
 * notification button, settings button, and language selector.
 *
 * @returns {JSX.Element} A div containing the header elements
 */
function Header(): JSX.Element {
  return (
    <div className="border-b border-b-border h-20 w-full p-4 flex items-center justify-between">
      <Breadcrumb />

      <Search />

      <div className="flex gap-2 w-full justify-end">
        <NotificationButtonWithTooltip tooltipContent="Notifications" />
        <SettingsButtonWithTooltip tooltipContent="Settings" />
        <LanguageSelector />
      </div>
    </div>
  );
}

const NotificationButtonWithTooltip = withTooltip(() => (
  <Button variant="outline" size="icon">
    <IconBell className="text-border" />
  </Button>
));

const SettingsButtonWithTooltip = withTooltip(() => (
  <Button variant="outline" size="icon">
    <IconSettings className="text-border" />
  </Button>
));

export default Header;
