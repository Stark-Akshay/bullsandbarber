
// self.addEventListener('push', function(event) {
//     event.waitUntil(
//       self.registration.showNotification('Offers Available', {
//         body: 'New Offers are available at Shop right now!!',
//       })
//     );
//   });

//   function monitorDatabaseChanges() {

//     const q = queryery(collection(db, 'pointoffers'));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//         console.log(snapshot);
//       });
      
//     };

//     self.addEventListener('install', function(event) {
//         event.waitUntil(
//           monitorDatabaseChanges()
//         );
//       });

