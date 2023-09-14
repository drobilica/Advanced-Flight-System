
---

### **Final Exam Project: Airplane Ticket Reservation System with Conversational Agent**

#### **Objective**:
Develop an interactive prototype user interface for a virtual system to reserve airplane tickets, including a conversational agent for flight search and reservation.

#### **Functional Requirements**:

1. **Flight Search**:
   - Users should be able to search for available flights.
   - Search criteria should include:
     - **Airline (Avio-prevoznik)**
     - **Departure Location (Polazna lokacija)**
     - **Destination Location (Odredišna lokacija)**
     - **Flight Duration (Vreme trajanja leta)**
     - **Flight Length (Dužina leta)**
     - **Flight Category/Class (Kategorija leta/Klasa)**
     - **Number of Remaining Seats (Broj preostalih mesta)**
     - **Price Range (Rang cena)**
     - **User Reviews (Recenzije drugih korisnika)**

2. **Conversational Agent**:
   - The application contains a text-based conversational agent.
   - The agent can be activated from any part of the application.
   - It provides a greeting message and allows flight search through dialogue with the user using the same parameters mentioned above.
   - The agent's response contains summarized information about the found flight, including a link to detailed flight information.
   - A separate dialogue allows flight reservations through the agent.
   - The name and symbol of the agent are up to the student's creativity.

3. **Flight Selection and Reservation**:
   - Users can choose and reserve a flight from a set of offered flights (minimum of 10 available).
   - Display detailed information for each flight, including name (source-destination), departure airport, arrival airport, description, image, flight class, price, flight time, and user reviews.
   - The application should maintain a record of reserved flights with standard functionalities such as adding, modifying, and deleting.
   - The flight journal contains all the information about reserved flights.
   - Each flight has a status: upcoming, completed, or canceled. Only completed flights can be rated.

4. **User Interaction**:
   - Users can create, modify, and delete flight reservations, but can only modify or delete their own reservations.
   - Users can rate only their completed flights. Ratings are part of each flight. Presentation of ratings is up to the author's creativity but should be prominently displayed and easily understandable.
   - Reservations are saved in a journal. Flight data from the journal can be changed unless the flight status is 'completed'.

5. **User Profiles**:
   - The application has one type of user: passenger.
   - Each user has a personal profile containing data such as name, contact details (email, phone, address), details about favorite flight destinations, and login credentials.
   - Profile data can be modified.
   - Users can primarily view available flights, read reviews, and add interesting flights to their journal when defining their reservations.
   - To reserve a flight and access the journal and reservations within it, users must log in (if they have an account) or register (if they don't have an account).
   - During registration, users must enter all profile details.

6. **Device Compatibility**:
   - The prototype is designed for mobile devices of choice, including phones, tablets, or laptops.

---
