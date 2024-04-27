import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given('I go to main page', () => {
    cy.visit("/")
    // Cypress.Cookies.debug(true) 
    // cy.clearCookie('session_id')
    // cy.setCookie('session_id', '3b41c5d5-e436-48e5-a13d-6afb485edf06')
    // indexedDB.open("MYMCI-WEBSITE-V1.0.3",2).(, "3b41c5d5-e436-48e5-a13d-6afb485edf06")
    // const request = indexedDB.open("MYMCI-WEBSITE-V1.0.3",2)
    // request.onupgradeneeded = (event) => {
    //     const db = event.target.result
    //     // Create an objectStore for this database
    //     const objectStore = db.createObjectStore("session_id", { keyPath: "myKey" });
    //   };
    // cy.loginBySessionData()
    // function addSessionDataToIndexedDB(sessionData) {
    //   // نام پایگاه داده و نسخه
    //   const dbName = 'MYMCI-WEBSITE-V1.0.3';
    //   const dbVersion = 2;
    //   // ایجاد یک درخواست برای باز کردن IndexedDB
    //   const request = indexedDB.open(dbName, dbVersion);
    
    //   // این ایونت زمانی اجرا می‌شود که پایگاه داده برای اولین بار ایجاد شود یا نیاز به به‌روزرسانی باشد
    //   request.onupgradeneeded = function(event) {
    //     const db = event.target.result;
    //     // ایجاد یک object store با نام 'sessionStore' و کلید اصلی 'sessionId'
    //     const objectStore = db.createObjectStore('sessionStore', { keyPath: 'sessionId' });
    //   };
    
    //   request.onsuccess = function(event) {
    //     // دریافت نمونه پایگاه داده
    //     const db = event.target.result;
    //     // ایجاد یک transaction برای نوشتن داده
    //     const transaction = db.transaction('sessionStore', 'readwrite');
    //     // دریافت object store
    //     const objectStore = transaction.objectStore('sessionStore');
    //     // اضافه کردن داده‌های session به object store
    //     const addRequest = objectStore.add(sessionData);
    
    //     addRequest.onsuccess = function() {
    //       console.log('Session data added to the store successfully');
    //     };
    
    //     addRequest.onerror = function(event) {
    //       console.error('Error in adding session data to the store', event.target.error);
    //     };
    //   };
    
    //   request.onerror = function(event) {
    //     console.error('Database error: ', event.target.error);
    //   };
    // }
    // const sessionData = {
    //     device: {  
    //     "appVersion": "1.0.3",
    //     "deviceType": "WEB",
    //     "fcmToken": "",
    //     "id": "672d8aca-2325-43d2-b8cb-92ffb07c3927",
    //     "manufacturer": "Chrome",
    //     "model": "121.0.0.0",
    //     "os": "Linux",
    //     "osVersion": "-",
    //     "screenHeight": 1080,
    //     "screenWidth": 1920,
    //     "udid": "26bc1447-a8c0-e61a-9e16-b68e2b421d2e"},
    //     "sessionId": '3b41c5d5-e436-48e5-a13d-6afb485edf06',
    //     "sharedKey": {
    //     sharedKeyAsBase64
    //     : 
    //     "gOs9cEqe0xlGPXS8QjbGtFJbwLV76T9MylJWcsn91WA=",
    //     sharedKeyAsHex
    //     : 
    //     "80eb3d704a9ed319463d74bc4236c6b4525bc0b57be93f4cca525672c9fdd560"
    //     },
    //     "version": '1.0.3'
    //   };
    //   addSessionDataToIndexedDB(sessionData);
  cy.login()
})

