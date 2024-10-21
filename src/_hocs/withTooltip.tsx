import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/_components/ui/tooltip";

interface WithTooltipProps {
  tooltipContent: string;
}

/**
 * Higher-order component that wraps a given component with a tooltip.
 *
 * @template P - The props type of the wrapped component.
 * @param {React.ComponentType<P>} WrappedComponent - The component to be wrapped with a tooltip.
 * @returns {React.FC<P & WithTooltipProps>} A new component that renders the wrapped component with a tooltip.
 *
 * @example
 * const ButtonWithTooltip = withTooltip(Button);
 * <ButtonWithTooltip tooltipContent="Click me!" onClick={() => {}} />
 */
function withTooltip<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithTooltipProps> {
  const WithTooltip: React.FC<P & WithTooltipProps> = ({
    tooltipContent,
    ...props
  }: WithTooltipProps & P) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <WrappedComponent {...(props as P)} />
        </TooltipTrigger>

        <TooltipContent>
          <p>{tooltipContent}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return WithTooltip;
}

export default withTooltip;
