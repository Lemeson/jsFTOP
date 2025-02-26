let db;

// Function to open the database
function openDatabase() {
    const dbRequest = indexedDB.open("MyDatabase", 1);

    dbRequest.onupgradeneeded = function (event) {
        db = event.target.result;
        if (!db.objectStoreNames.contains("MyStore")) {
            db.createObjectStore("MyStore", { keyPath: "id" });
            console.log("✅ Object store 'MyStore' created!");
        }
    };

    dbRequest.onsuccess = function (event) {
        db = event.target.result;
        console.log("✅ Database opened successfully!");
    };

    dbRequest.onerror = function (event) {
        console.error("❌ Database error:", event.target.error);
    };
}

// Function to add data
function addData() {
    if (!db) {
        console.error("⚠ Database not ready yet. Try again later.");
        return;
    }

    const transaction = db.transaction("MyStore", "readwrite");
    const store = transaction.objectStore("MyStore");

    const data = { id: 1, name: "John Doe", age: 29 };

    const request = store.add(data);
    request.onsuccess = () => console.log("✅ Data added successfully!");
    request.onerror = (event) => console.error("❌ Error adding data:", event.target.error);
}

// Open the database when the script loads
openDatabase();

// Add event listener to the button to add data
document.getElementById("addDataBtn").addEventListener("click", addData);




// exemples below  to be used with form:
//open/create datbase on brownser
//const dbRequest = indexedDB.open("UserDatabase", 1);

// dbRequest.onupgradeneeded = function (event) {
//     const db = event.target.result;
//     db.createObjectStore("Users", { keyPath: "id", autoIncrement: true });
//     console.log("Database created!");
// };

// dbRequest.onsuccess = function () {
//     console.log("Database opened successfully!");
// };


// //store:

// document.getElementById("userForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form from reloading the page

//     const name = document.getElementById("name").value;
//     const age = document.getElementById("age").value;

//     const dbRequest = indexedDB.open("UserDatabase", 1);

//     dbRequest.onsuccess = function (event) {
//         const db = event.target.result;
//         const transaction = db.transaction("Users", "readwrite");
//         const store = transaction.objectStore("Users");

//         store.add({ name, age });

//         console.log("Data saved:", { name, age });
//         document.getElementById("userForm").reset(); // Clear form after saving
//         displayData(); // Refresh list
//     };
// });

// //retireve/display
// function displayData() {
//     const dbRequest = indexedDB.open("UserDatabase", 1);

//     dbRequest.onsuccess = function (event) {
//         const db = event.target.result;
//         const transaction = db.transaction("Users", "readonly");
//         const store = transaction.objectStore("Users");
//         const getAllRequest = store.getAll();

//         getAllRequest.onsuccess = function () {
//             const dataList = document.getElementById("dataList");
//             dataList.innerHTML = ""; // Clear the list before adding new data

//             getAllRequest.result.forEach(user => {
//                 const li = document.createElement("li");
//                 li.textContent = `👤 ${user.name} (Age: ${user.age})`;
//                 dataList.appendChild(li);
//             });
//         };
//     };
// }

// // Call displayData when page loads
// window.onload = displayData;
