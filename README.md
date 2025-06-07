# Healthcare Patient Management System Using MongoDB

## Project Overview
This project is a **Healthcare Patient Management System** designed to efficiently manage diverse and complex patient data. The system leverages **MongoDB**, a flexible document-oriented NoSQL database, to store and handle semi-structured medical records, including personal details, medical history, prescriptions, doctor notes, and appointment logs.

Traditional relational databases often struggle with the variability and volume of healthcare data. MongoDB’s schema-less design, powerful querying, and aggregation capabilities make it an ideal choice for this domain.

## Features
- Add new patient records with detailed fields such as patient ID, personal info, medical history, prescriptions, and doctor notes.
- Search patient records by multiple criteria like patient ID, name, medical condition, or visit date.
- Update patient records with new diagnoses, prescriptions, and lab reports.
- Securely delete patient records with verification and audit logging.
- Optimized searching through indexes and efficient query handling.
- Generate insightful healthcare analytics using MongoDB’s aggregation framework (e.g., patient counts by condition, most prescribed medications, visit frequency).
- Optional user authentication with role-based access control for healthcare staff.
- Data validation and clear error handling for reliable data entry.

## Objectives
- Demonstrate practical use of MongoDB for managing complex healthcare data.
- Enable flexible choice of frontend and backend technologies.
- Provide hands-on experience with NoSQL data modeling and query optimization.
- Support generation of meaningful clinical and administrative reports through aggregation.

## Core Modules

### Insert New Patient Record
- Add a patient with fields such as:
  - Patient ID
  - Name, Age, Gender, Contact Info
  - Allergies, Medical History
  - Current Prescriptions, Doctor Notes
- Data stored in a `patients` collection in MongoDB.

### Search Patient Record
- Search by patient ID, name, condition, or visit date.
- Utilize MongoDB operators like `$regex`, `$in`, `$or` and text indexes.
- Support pagination and sorting.

### Update Patient Record
- Modify existing data (diagnoses, prescriptions, lab reports).
- Use MongoDB update operators like `$set`, `$push`, `$pull`, `$addToSet`.

### Delete Patient Record
- Remove records by unique identifiers.
- Include verification prompts and logs for auditing.

### Optimize Search
- Index commonly searched fields.
- Monitor and optimize queries using `.explain()`.

### Aggregation and Analytics
- Generate reports such as:
  - Number of patients per condition
  - Most prescribed medications
  - Average patient age per department
  - Visit frequency per month
- Optionally visualize data using frontend chart libraries (e.g., Chart.js, D3.js).

### Authentication Module (Optional)
- Admin and healthcare staff login.
- Role-based access control.
- JWT or session-based authentication.

### Data Validation & Error Handling
- Validate formats for phone, email, date of birth.
- Provide user-friendly error messages.

## Technology Stack
- **Frontend & Backend:** Next.js (React framework with API routes for backend functionality)
- **Database:** MongoDB

## Getting Started
1. Clone this repository.
2. Set up your MongoDB database and get the connection URI.
3. Configure environment variables for MongoDB connection.
4. Run the Next.js development server:
   ```bash
   npm run dev

## Add 
```bash
.env.local at root
```
1. MONGODB_URI
2. NEXTAUTH_SECRET
3. NEXTAUTH_URL
