interface Experience {
  startDate: Date;
  endDate: Date | "present";
  position: string;
  company: string;
  keyPoints: string[];
  skills: string[];
  link: string;
}

export type { Experience };
