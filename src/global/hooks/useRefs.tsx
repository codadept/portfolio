import { createRef } from "react";

/**
 * Generates an array of React refs.
 *
 * @param {number} length - The number of refs to generate.
 * @returns {React.RefObject<HTMLDivElement>[]} An array of React refs.
 */
const useRefs = (length: number): React.RefObject<HTMLDivElement>[] => {
  const refs: React.RefObject<HTMLDivElement>[] = [];
  for (let i = 0; i < length; i++) {
    refs.push(createRef<HTMLDivElement>());
  }
  return refs;
};

export default useRefs;
