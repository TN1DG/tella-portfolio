"use client";

interface TemplateProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateProps) {
  // For the single-page structure, we just pass through the children
  // All navigation and layout is handled in the main page component
  return (
    <>
      {children}
    </>
  );
}
