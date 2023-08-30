import React, { createContext, useContext, useState } from 'react';

interface EventContextProps {
  children: React.ReactNode; // Accept children as a prop
}

interface EventDetails {
  id: string;
  title: string;
  start: string;
  end: string;
  // Add any other properties you need
}

interface EventContextType {
  event: EventDetails | null;
  setEvent: React.Dispatch<React.SetStateAction<EventDetails | null>>;
  setSelectedEvent: React.Dispatch<React.SetStateAction<EventDetails | null>>;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventContextProvider');
  }
  return context;
};

const EventContextProvider: React.FC<EventContextProps> = ({ children }) => {
  const [event, setEvent] = useState<EventDetails | null>(null);

  const value: EventContextType = {
    event,
    setEvent,
    setSelectedEvent: setEvent,
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;

