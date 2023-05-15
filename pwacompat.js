if (!!navigator.platform && /iPhone|iPod|iPad/.test(navigator.platform) && !window.MSStream) {
    document.querySelector('link[rel="manifest"]').href = '/manifest-ios.json';
  }