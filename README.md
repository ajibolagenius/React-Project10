# Advanced Form with React + Formik

A robust React form implementation using Formik and Yup for form management and validation.

## Features

- Complete form validation using Yup schema
- Real-time error feedback
- Field validation includes:
  - Name (max 15 characters)
  - Email validation
  - Password (min 8 characters)
  - Password confirmation matching
  - Country selection

## Tech Stack

- React
- Formik (Form Management)
- Yup (Validation Schema)
- Vite (Build Tool)

## Form Fields

1. **Name**
   - Required field
   - Maximum 15 characters

2. **Email**
   - Required field
   - Valid email format validation

3. **Password**
   - Required field
   - Minimum 8 characters

4. **Confirm Password**
   - Required field
   - Must match password field

5. **Country**
   - Required field
   - Dropdown selection (USA, Canada, UK)

## Getting Started

1. Install dependencies:
```bash
npm install
```
2. Run the development server:
```bash
npm run dev
```
