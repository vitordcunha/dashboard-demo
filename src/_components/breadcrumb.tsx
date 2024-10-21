"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb as BreadcrumbUi,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { Button } from "./ui/button";
import { IconArrowNarrowLeft } from "@tabler/icons-react";

/**
 Renders a breadcrumb navigation component.

 This component creates a breadcrumb trail based on the current URL path.
 It displays each segment of the path as a clickable link, allowing users
 to navigate back to previous levels in the hierarchy.

 @returns {JSX.Element} A React component that displays the breadcrumb navigation.
**/
function Breadcrumb(): JSX.Element {
  const path = usePathname(); // Current url path
  const pathNames =
    path === "/" ? ["dashboard"] : path.split("/").filter((path) => path);

  return (
    <div className="w-full">
      <BreadcrumbUi>
        <BreadcrumbList>
          <Button variant="ghost" size="icon" disabled>
            <IconArrowNarrowLeft />
          </Button>

          <span>/</span>

          {pathNames.map((pathName, index) => (
            <>
              <BreadcrumbItem key={pathName}>
                <BreadcrumbLink
                  href={pathNames.join("/")}
                  className="capitalize"
                >
                  {pathName}
                </BreadcrumbLink>
              </BreadcrumbItem>

              {index + 1 !== pathNames.length && <BreadcrumbSeparator />}
            </>
          ))}
        </BreadcrumbList>
      </BreadcrumbUi>
    </div>
  );
}

export default Breadcrumb;
