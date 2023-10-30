import { useState } from "react";

export const useToggle = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const openModal = () => setOpen(true);
  const close = () => setOpen(false);
  const toggleModal = () => setOpen((open) => !open);
  return { openModal, close, toggleModal, open };
};
