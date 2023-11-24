const emberFirebaseConfig = {
  firebaseConfig: {
    apiKey: 'AIzaSyDnx4hyxiCtKhPrhDHnFiVOw-qTRGzzUQc',
    authDomain: 'fir-bie2025-2023.firebaseapp.com',
    projectId: 'fir-bie2025-2023',
    storageBucket: 'fir-bie2025-2023.appspot.com',
    messagingSenderId: '736192198389',
    appId: '1:736192198389:web:edbdaf2e3f27c0b918b7bc',
    measurementId: 'G-7XHF1K7XCG',
  },
  firestore: {
    emulator: {
      hostname: 'localhost',
      port: 8080,
    },
  },

  auth: {
    emulator: {
      hostname: 'localhost',
      port: 9099,
    },
  },
};

module.exports = emberFirebaseConfig;
