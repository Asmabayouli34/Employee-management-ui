# EmployeeManagementUi
Simple Employee Management system built using Angular. Users can add, view, delete, and visualize charts by department and gender using D3.js.

## Features

- **Add Employees**: Users can add employees by typing full name, email, and choosing gender and department.
- **Data Visualization**: 
  - Bar chart of employees across departments.
  - Pie chart of gender distribution.
- **Delete Employee**: Remove employees from the list (list updates **dynamically**).
- **Sorting the Employee List**: Allow users to sort the list based on various criteria.

## Technologies Used

- **Angular**
- **D3.js**
- **NgModel**

## Instructions

Ensure you have the following installed: 

- [Node.js](https://nodejs.org/en/download/) (v14.x or later)
- [Angular CLI](https://angular.io/cli) (v12.x or later)

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Asmabayouli34/Employee-management-ui.git
    cd employee-management
    ```

2. **Install the necessary packages:**
    ```bash
    npm install
    ```

3. **Run the application:**
    ```bash
    ng serve
    ```
    or
    ```bash
    npm start
    ```

4. **Open the app in a browser:** [http://localhost:4200/](http://localhost:4200/)
   
## Future Improvements
1. **Separate Components**: Currently, the form, employee list, charts, and sorting are all contained within a single component. A modular approach would make the application more maintainable and scalable.
2. **Styling Improvement**: I would use a component library (like Angular Material) to create a more modern design.
