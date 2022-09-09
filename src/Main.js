import { Provider } from "react-redux";
import { useState, useLayoutEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";

import AppContent from "./AppContent";
import { Loading } from "./components";
import { fontAssets } from "./theme/fonts";
import store, { persistor } from "./store";
import { imageAssets } from "./theme/images";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";

export default function Main() {
  const [loadingAssets, setLoadingAssets] = useState(true);

  // Preload assets before the initial render.
  const handleLoadAssets = async () => {
    await Promise.all([...imageAssets, ...fontAssets]);
    setLoadingAssets(false);
  };

  useLayoutEffect(() => {
    handleLoadAssets();
  }, []);

  return loadingAssets ? (
    <Loading />
  ) : (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <LocaleProvider>
          <ThemeProvider>
            <AppContent />
          </ThemeProvider>
        </LocaleProvider>
      </PersistGate>
    </Provider>
  );
}
