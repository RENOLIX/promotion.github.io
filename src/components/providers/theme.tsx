import { type PropsWithChildren, useEffect } from "react";

export function ThemeProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return <>{children}</>;
}
