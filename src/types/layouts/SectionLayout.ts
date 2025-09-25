import type { ReactNode } from "react";

export interface SectionLayoutProps {
  title: string;
  showViewAll?: boolean;
  onViewAllClick?: () => void;
  children: ReactNode;
  className?: string;
}
