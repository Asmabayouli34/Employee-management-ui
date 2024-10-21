# EmployeeManagementUi
Simple Employee Management system built using Angular. User can add , view , delete  and visualise charts by departement and gender using D3.js . 

## Features

-**Add Employess**: User Can add employee by typing fullname , email , choose the gender and departement.
-**Data Visualization**: 
  -Bar chart off employees across departments.
  -Pie chart off gender distribution.
-**Delete Employee**: Remove employee from the list ( list update **dinamically**).
-**Sorting the employee list**: Allow users to sort the list based on various criteria. 

## Technologies used

-**Angular**
-**D3.js**
-**NgModal**

## Instractions

Unsure you have the following installed : 

- [Node.js](https://nodejs.org/en/download/) (v14.x or later)
- [Angular CLI](https://angular.io/cli) (v12.x or later)

   1. **Clone the repository**
       ```bash
   git clone https://github.com/Asmabayouli34/Employee-management-ui.git
   cd employee-management
  
  2. Install the following to install the necessary packages :
    ```bash
    npm install
  3. After installing dependencies run this : 
 ```bash
  ng serve 
  or  
  npm start  
 4. Open the app in a browser (http://localhost:4200/)
   
  
## Future Improvements
1.**Separate Componenets** : Currently , form , employee list , charts and sorting are all contained within a single component. The modular approach would make the application more maintainable and scalable.
2.**Styling Improvement": I would use component library (angular Material) to create more modern design.


