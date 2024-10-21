import { Avatar as AvatarUi, AvatarFallback, AvatarImage } from "./ui/avatar"; //-

/**
 * Renders an avatar component with a fallback image and text.
 *
 * This component uses the AvatarUi, AvatarFallback, and AvatarImage components
 * to create a configurable avatar display. It includes a primary image source
 * and a text fallback if the image fails to load.
 *
 * @returns {JSX.Element} A React component representing the avatar.
 */
function Avatar(): JSX.Element {
  return (
    <AvatarUi>
      <AvatarFallback>
        <AvatarImage
          src="https://api.dicebear.com/9.x/lorelei/svg?flip=true"
          alt="@shadcn"
          className="size-8"
        />
        <AvatarFallback>CN</AvatarFallback>
      </AvatarFallback>
    </AvatarUi>
  );
}

export default Avatar;
