# Parkit API

### Parkit is an API of a parking management system developed using Node.js,Express.js and MongoDB.</br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" height=40 width=40 /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" height=40 width=40/><img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" height=40 width=40 />  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" height=40 width=40 />





It makes parking easier for vehicles as it gets you the nearest to exit and available parking slot and Also makes it easier for Parking Owners/Workers to keep track of each car (time stayed,fees calculation,car/driver details(parking license and driver's national id number ))



### Features and what can be done:



- [x]  Users are either Admins or Moderators
- [x] When a User signs up,User role is automatically recognized using the user's card ID (Using the first three numbers of the card ID)and assigned to that User for authorized actions in the future
- [x] A User(Admin/Moderator) can login with his card ID and password
- [x] A User(Admin/Moderator) can read his own profile
- [x] A User(Admin/Moderator) can update his own profile
- [x] An Admin can Read/Delete a Moderator using the moderator's card ID number (An Admin can't delete any other Admin)
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
### Postman collection
![image](https://user-images.githubusercontent.com/78238174/136584844-d16bf759-3c4e-4fa1-8814-2a5ad42d8803.png)
</br>![image](https://user-images.githubusercontent.com/78238174/136584970-b57253fe-2899-4e57-a1a8-ebea70a3c1d0.png)


### Routes and Demonstration of some requests

- Signup

![image](https://user-images.githubusercontent.com/78238174/136580443-8ca6d394-3443-4932-9085-b7a387f79363.png)


- Login

![image](https://user-images.githubusercontent.com/78238174/136580559-a127635a-31a7-42fc-ae0b-c903ae5e721e.png)

---
- Read Own Profile (Admin/Moderator)

![image](https://user-images.githubusercontent.com/78238174/136585492-51d4831c-924c-4cd2-8105-03ceaa9430ae.png)

- Update Own Profile (Admin/Moderator)

![image](https://user-images.githubusercontent.com/78238174/136585909-1dfbb249-14ab-4445-970b-967b5064761d.png)

- Delete a User(a moderator to be precise)by Card ID (Admin)

![image](https://user-images.githubusercontent.com/78238174/136586367-0ca9c861-f2e3-4001-ab5e-3cf91f012131.png)

- Read a User(Another Admin or a Moderator)by Card ID (Admin)

![image](https://user-images.githubusercontent.com/78238174/136586818-b11fc610-45e1-4e21-b28d-ab9ec1f9a3c7.png)

- Read all Users(Admins(including the logged in admin) and Moderators)  (Admin)

![image](https://user-images.githubusercontent.com/78238174/136587307-76eef669-6a71-4270-ab47-b3dffb45d60e.png)


---
- Create a Floor (Admin)

![image](https://user-images.githubusercontent.com/78238174/136587804-ad220e25-d692-4da0-89a7-9261b9d382ff.png)
![image](https://user-images.githubusercontent.com/78238174/136588038-e56ba834-00c4-4d84-97f6-05c8db69ac84.png)
![image](https://user-images.githubusercontent.com/78238174/136588133-6e8ef8e7-1959-4fde-88eb-08346670a451.png)
![image](https://user-images.githubusercontent.com/78238174/136588390-666e2c90-baad-4cc1-95e3-d1dc4e5c86bf.png)

- Delete a Floor (Admin)

![image](https://user-images.githubusercontent.com/78238174/136596463-251fa840-6c73-4b54-ac0a-83a25b57c8d8.png)
 Note:This will also delete parking slots documents and vehicles(if there is any) documents ((Parking slots and Vehicles associated with the deleted floor 'just to be precise' ))


---
- Reserve the nearest available parking slot for a vehicle (Admin/Moderator)

![image](https://user-images.githubusercontent.com/78238174/136589342-a2903bd2-9d80-4f32-b8c9-9a43664a8993.png)
![image](https://user-images.githubusercontent.com/78238174/136589522-9d5de944-0fd9-40ce-ad80-ab735f9886e2.png)
![image](https://user-images.githubusercontent.com/78238174/136591468-6d210baa-4831-4c04-88e0-41966ff17ea4.png)


- Checkout and Calculate Parking fees

![image](https://user-images.githubusercontent.com/78238174/136593289-677124dd-db28-480a-930c-b0772245106a.png)




- Get nearest available parking slot (Admin/Moderator)

![image](https://user-images.githubusercontent.com/78238174/136588788-29767e84-e882-476c-81a1-8ff1ef526901.png)
---
- Display a Floor(including slots and vehicles) by providing the floor number as a request param (Admin/Moderator)

![image](https://user-images.githubusercontent.com/78238174/136590162-8ed32873-5128-4f32-be1b-67f518589317.png)

- Display all floors(including slots and vehicles) (Admin/Moderator)

![image](https://user-images.githubusercontent.com/78238174/136609528-2a6fd8a5-48c8-4c0a-9898-000c6328a769.png)

![image](https://user-images.githubusercontent.com/78238174/136609497-65d9998f-1f4c-46da-acd5-a6eac182b208.png)


- Display a Parking Slot by providing the slot name as a req param (Admin/Moderator)

![image](https://user-images.githubusercontent.com/78238174/136591870-0aa4b42c-592a-4942-92f2-1a389d93fa32.png)

- Display all Parking Slots (Admin/Moderator)

![image](https://user-images.githubusercontent.com/78238174/136609822-48a3cb5c-2209-4078-bda4-341ded8da794.png)

- Display a Vehicle by providing its license plate as a req param (Admin/Moderator)

![image](https://user-images.githubusercontent.com/78238174/136592127-a8c10a9a-b6ad-4c94-8045-5bfde92471f8.png)

- Display all vehicles (Admin/Moderator)

![image](https://user-images.githubusercontent.com/78238174/136609992-726f37ee-ba25-49d1-9939-9d5e3f741075.png)


</br>
<img src="https://media.giphy.com/media/44VMzCwVi6iEU/giphy.gif" height=300 width=370 >

