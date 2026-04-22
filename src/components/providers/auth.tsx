import {
  createContext,
  type PropsWithChildren,
  useMemo,
  useState,
} from "react";

type AuthContextValue = {
  customerName: string;
  isAuthenticated: boolean;
  signIn: (name: string) => void;
  signOut: () => void;
  completeCallback: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [customerName, setCustomerName] = useState("");

  const value = useMemo<AuthContextValue>(
    () => ({
      customerName,
      isAuthenticated: customerName.length > 0,
      signIn: setCustomerName,
      signOut: () => setCustomerName(""),
      completeCallback: async () => {
        await new Promise((resolve) => window.setTimeout(resolve, 900));
        setCustomerName("Client Premium");
      },
    }),
    [customerName],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
