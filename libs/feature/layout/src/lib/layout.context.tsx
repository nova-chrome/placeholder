import React from 'react';

export interface LayoutState {
  isSidebarOpen: boolean;
  toggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LayoutContext = React.createContext<LayoutState>({
  isSidebarOpen: true,
  toggleSidebar: () => null,
});

export const useLayout = () => {
  return React.useContext(LayoutContext);
};

export const LayoutProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <LayoutContext.Provider
      value={{
        isSidebarOpen: isOpen,
        toggleSidebar: setIsOpen,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
