The following code attempts to retrieve data from a Firebase Realtime Database, but it fails silently without providing any error messages.  The `on('value', ...)` callback never executes. 

```javascript
const database = firebase.database();
const ref = database.ref('path/to/data');

ref.on('value', (snapshot) => {
  console.log(snapshot.val());
});
```