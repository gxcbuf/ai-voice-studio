import { BetterAuthUIProvider } from "./betterauth-ui-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <BetterAuthUIProvider>{children}</BetterAuthUIProvider>;
};

export default Providers;
