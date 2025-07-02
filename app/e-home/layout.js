"use client";
import { useEffect, useState } from "react";

export default function EHomeLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex fixed inset-0 z-50 justify-center items-center bg-white">
        <span className="block w-7 h-7 rounded-full border-4 border-green-600 border-solid animate-spin border-t-transparent" />
      </div>
    );
  }

  return <>{children}</>;
}
