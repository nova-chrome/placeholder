import React from 'react';

export interface SidebarState {
  isOpen: boolean;
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = React.createContext<SidebarState>({
  isOpen: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleOpen: () => {},
});

export const useSidebar = () => {
  return React.useContext(SidebarContext);
};

export const SidebarProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        toggleOpen: setIsOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
