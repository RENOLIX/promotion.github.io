import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Spinner } from "../../components/ui/spinner";
import { useAuth } from "../../hooks/use-auth";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { completeCallback } = useAuth();
  const [status, setStatus] = useState<"loading" | "error">("loading");
  const [error, setError] = useState("");

  const navigateHome = useCallback(() => navigate("/", { replace: true }), [navigate]);

  const retry = useCallback(async () => {
    setStatus("loading");
    setError("");

    try {
      await completeCallback();
      navigateHome();
    } catch {
      setStatus("error");
      setError("Impossible de terminer la synchronisation de session.");
    }
  }, [completeCallback, navigateHome]);

  useEffect(() => {
    void retry();
  }, [retry]);

  if (status === "error" && error) {
    return (
      <div className="flex h-svh flex-col items-center justify-center gap-6 px-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-medium text-destructive">Something went wrong</p>
          <p className="max-w-md text-sm text-muted-foreground">{error}</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={navigateHome} variant="secondary">
            Return home
          </Button>
          <Button onClick={() => void retry()}>Try again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-svh flex-col items-center justify-center gap-4">
      <Spinner className="size-8" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
}
