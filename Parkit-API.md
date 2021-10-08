## Parkit API

Parkit is an API of a parking management system developed using Node.js,Express.js and MongoDB.

It makes parking easier for vehicles as it gets you the nearest to exit and available parking slot and Also makes it easier for Parking Owners/Workers to keep track of each car (time stayed,fees calculation,car/driver details(parking license and driver's national id number ))



Features:



- [x]  Users are either Admins or Moderators
- [x] When a User signs up,User role is automatically recognized using the user's card ID (Using the first three numbers of the card ID)and assigned to that User for authorized actions in the future
- [x] A User(Admin/Moderator) can login with his card ID and password
- [x] A User(Admin/Moderator) can read his own profile
- [x] A User(Admin/Moderator) can update his own profile
- [x] An Admin can Read/Delete a Moderator using the moderator's card ID number
- [x] An Admin can read all users(Admins/Moderators)

---



- [x] An Admin can create a floor by providing the floor number and the number of parking slots.

  This will generate a floor with labeled parking slots 

  example: (1A,1B,1C,.....1Z,1AA,1BB,..) and each slot has its own document and they are all connected to the floor as a virtual

- [x] An Admin can delete a floor by providing the floor number as a param.This will cascade delete all the parking slots from the db and if there are vehicles it will delete them too from the db 

  

---

- [x] A User(Admin/Moderators) can get the nearest available parking slot for a vehicle and display it
- [x] A User(Admin/Moderators) can reserve a slot for a vehicle
- [x] A User(Admin/Moderators) can checkout a vehicle by providing the parking slot the vehicle was parking at.
- [x] The checkout route will calculate the parking fees and display it using the starting and ending time and date

---

- [x] A User(Admin/Moderators) can display a floor with its slots and parked vehicles using the floor number as a param
- [x] A User(Admin/Moderators) can display all floors with their slots and parked vehicles
- [x] A User(Admin/Moderators) can display a parking slot with its parked vehicle using its parking slot as a param
- [x] A User(Admin/Moderators) can display all parking slots with their parked vehicles + Pagination
- [x] A User(Admin/Moderators) can display a vehicle with the parking slot using the license plate of the car as a param
- [x] A User(Admin/Moderators) can display all vehicles with their parking slots + Pagination





---











