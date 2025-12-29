# Personal Finance Dashboard

Personal Finance Dashboard is a web application designed to help users track expenses and visualize their spending through clear and interactive charts.

---

##  How to Run the Project

1. Download or clone the repository
2. Open the file `nhome.html` in any modern web browser
3. The application runs locally without any additional setup

---

##  Features & Functionality

###  Profile Management
- Users can create up to **10 profiles**
- Each profile can be named freely
- All profiles are displayed on the left side with **checkboxes**
- Users can select one or multiple profiles
- Expenses related to the selected profiles are displayed in the expenses table

In the **Manage Profiles** page, users can:
- View profile details such as the **last update time**
- Delete profiles using the delete button next to each profile

---

###  Expense Management
- The main page displays an **expenses table**
- Users can:
  - Add new expenses
  - Edit existing expenses
  - Delete expenses directly from the table
- When adding an expense, the user selects the profile it belongs to
- The expenses table updates **instantly** after any change

---

###  Data Export
- An **Export** button is available above the expenses table
- All currently displayed data can be exported as an **XLSX (Excel) file**

---

###  Data Analysis & Visualization
The **Analyze** page provides financial insights based on the selected profiles.

> Note: When profiles are checked or unchecked, the page must be reloaded to update the charts.

Available charts and statistics include:
- **Pie chart** showing total expenses per category
- **Horizontal bar chart** displaying the top 5 most spent categories
- **Total expenses** summary
- **Average expense per day**, calculated between the oldest and newest dates
- **Bar chart** showing total expenses per weekday
- **Line chart** showing total expenses over time (by date)

---

##  Data Storage & Persistence

- All application data is stored using **localStorage**
- Stored data includes:
  - User profiles
  - Checked/selected profiles
  - Expense records
- Data **persists** even after refreshing or closing the browser

---

##  Technologies Used

- **HTML5**
- **CSS**
- **JavaScript**
- **Chart.js** for data visualization
- **SheetJS (XLSX)** for exporting data to Excel
- **CountUp.js** for animated numeric values
- **jQuery** for DOM manipulation and event handling

---
##  Author

- Name: **OUDIA THARIK ALMUNTASIR AHMED**
- GitHub: **https://github.com/OudaiAhmed144**

---

##  Notes & Limitations

- The maximum number of profiles is limited to **10**
- Chart data updates require a page reload after changing selected profiles
- JavaScript must be enabled for the application to function correctly
