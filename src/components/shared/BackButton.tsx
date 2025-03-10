"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();

  return (
    <ArrowLeft
      onClick={() => router.back()}
      className={`size-7 lg:size-8 hover:text-primary cursor-pointer ${className}`}
    />
  );
};

export default BackButton;
