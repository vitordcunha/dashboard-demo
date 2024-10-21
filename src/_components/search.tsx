import { Command, CommandInput } from "./ui/command";

/**
 * Search component that renders a command input field.
 * This component provides a search interface using the Command component.
 *
 * @returns {JSX.Element} A div containing a Command component with a CommandInput child.
 */
function Search(): JSX.Element {
  return (
    <div className="w-full relative">
      <Command className="rounded-lg border md:min-w-[450px]">
        <CommandInput placeholder="Type a command or search" />
      </Command>
    </div>
  );
}

export default Search;
