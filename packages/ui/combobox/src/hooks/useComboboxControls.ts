import { useMemo } from 'react';
import { useCombobox } from 'downshift';
import { comboboxStore } from '../combobox.store';

export const useComboboxControls = () => {
  const isOpen = comboboxStore.use.isOpen();
  const itemIndex = comboboxStore.use.itemIndex();
  const items = comboboxStore.use.items();

  // Menu combobox
  const {
    closeMenu,
    getMenuProps,
    getComboboxProps,
    getInputProps,
    getItemProps,
  } = useCombobox({
    isOpen,
    highlightedIndex: itemIndex,
    items,
    circularNavigation: true,
  });
  getMenuProps({}, { suppressRefError: true });
  getComboboxProps({}, { suppressRefError: true });
  getInputProps({}, { suppressRefError: true });

  return useMemo(
    () => ({
      closeMenu,
      getMenuProps,
      getItemProps,
    }),
    [closeMenu, getItemProps, getMenuProps]
  );
};
