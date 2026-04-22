import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      closeButton
      position="top-right"
      richColors
      theme="dark"
      toastOptions={{
        classNames: {
          toast: "!bg-card !border !border-border !text-foreground",
          description: "!text-muted-foreground",
        },
      }}
    />
  );
}
