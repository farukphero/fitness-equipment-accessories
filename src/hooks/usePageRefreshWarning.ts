import { useEffect } from 'react';

const usePageRefreshWarning = (shouldWarn: boolean) => {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (shouldWarn) {
        const message = 'You have unsaved changes, do you really want to leave?';
        e.returnValue = message; // Standard for most browsers
        return message; // Required for some browsers
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [shouldWarn]);
};

export default usePageRefreshWarning;
