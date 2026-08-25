import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="eyebrow mb-4">Error 404</p>
      <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track.
      </p>
      <Link to="/">
        <Button className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
