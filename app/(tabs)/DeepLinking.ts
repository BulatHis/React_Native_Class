import { LinkingOptions, getActionFromState, getStateFromPath } from '@react-navigation/native';
import { Linking } from 'react-native'; 

const linkingPrefix = 'http://localhost:8081/';  

export class DeepLinking {
  static linking: LinkingOptions<{}> = {
    prefixes: [linkingPrefix], 
    config: {
      screens: {
        INIT: 'init',
        AUTH_MAIN: 'auth',  
      },
    },
    getInitialURL() {
      return null;
    },
    subscribe(listener: (url: string) => void) {
      const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
        if (typeof url === 'string') {
          DeepLinking.handleNavigate(url);  
        } else {
          console.error('Received invalid URL:', url);  
        }
      });

      return () => {
        linkingSubscription.remove();  
      };
    },
  };

  static handleInitialNavigate = async (initialUrl: string | null) => {
    if (initialUrl === null) return;  
    await DeepLinking.handleNavigate(initialUrl, true);  
  };

  static handleNavigate = async (url: string, isInitialNavigate?: boolean) => {
    const action = DeepLinking.getActionFromState(DeepLinking.linking.config, url);  
    switch (action?.type) {
      case 'NAVIGATE':
        const { name, params } = action.payload;
        if (name && params) {
          if (isInitialNavigate) {
            navigationRef.current?.replace(name, params);  
            return;
          }
          navigationRef.current?.navigate(name, params);  
        }
        return;
    }
  };

  static getPathWithoutPrefix = (url: string) => {
    let path = '';
    DeepLinking.linking.prefixes.forEach(prefix => {
      if (url.indexOf(prefix) > -1) {
        path = url.replace(prefix, '');  
        return;
      }
    });
    return path;
  };

  static getActionFromState = (config: any, url: string) => {
    const path = DeepLinking.getPathWithoutPrefix(url);  
    const state = getStateFromPath(path, config);  
    if (!state) return null;  
    return getActionFromState(state, config);  
  };
}