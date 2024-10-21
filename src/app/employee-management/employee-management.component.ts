import { Component } from '@angular/core';
import * as d3 from 'd3';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent {
  employees: any[] = [];
  newEmployee = {
    fullName: '',
    email: '',
    department: '',
    gender: ''
  };
 
  sortBy: string = 'fullName';
 //Add employee after validiting inputs ,dynamiclly updating the list , and chart sections 
  addEmployee(form: NgForm) {
    if (form.invalid) {
      return; 
    }
//Check if the email format is valid 
    if (!this.validateEmail(this.newEmployee.email)) {
      alert('Invalid email address.');
      return;
    }
    this.employees.push({ ...this.newEmployee });
    form.resetForm();
    this.newEmployee = { fullName: '', email: '', department: '', gender: '' };
    this.updateCharts();
  }
  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  //Delete employer by their index
  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
    this.updateCharts();
  }
//Sort Employees based on the cirrent sorting criteria 'sortBy' , the function compares two employee objects a and b at a time 
   sortEmployees() {
    this.employees.sort((a, b) => {
      if (a[this.sortBy] < b[this.sortBy]) return -1;
      if (a[this.sortBy] > b[this.sortBy]) return 1;
      return 0;
    });
  }
//Get the latest updates for  our chars bar and pie 
  updateCharts() {
    this.updateBarChart();
    this.updatePieChart();
  }
//update bar char 
  updateBarChart() {
    const departmentData = d3.rollup(
      this.employees,
      v => v.length,
      d => d.department
    );

    const data = Array.from(departmentData, ([key, value]) => ({ key, value }));

    const svg = d3.select('#barChart');
    svg.selectAll('*').remove(); 

    const margin = { top: 20, right: 30, bottom: 40, left: 40 },
      width = 500 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .domain(data.map(d => d.key))
      .range([0, width])
      .padding(0.2);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) as number])
      .range([height, 0]);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
      
      svg.append("defs").append("linearGradient")
      .attr("id", "linear-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%")
      .selectAll("stop")
      .data([
        { offset: "0%", color: "steelblue" }, 
        { offset: "100%", color: "#f7b733" }   
      ])
      .enter().append("stop")
      .attr("offset", d => d.offset)
      .attr("stop-color", d => d.color);

      g.append('g')
      .selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')  
      .attr('x', d => x(d.key)!)
      .attr('y', d => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.value))
      .attr("fill", "url(#linear-gradient)");
  
  
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append('g')
      .call(d3.axisLeft(y));
  }

  //update bar char 
  updatePieChart() {
    const genderData = d3.rollup(
      this.employees,
      v => v.length,
      d => d.gender
    );

    const data = Array.from(genderData, ([key, value]) => ({ key, value }));

    const svg = d3.select('#pieChart');
    svg.selectAll('*').remove(); 

    const width = 300,
      height = 300,
      radius = Math.min(width, height) / 2;

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3.pie<any>()
      .value(d => d.value)
      .sort(null);

    const path = d3.arc<any>()
      .outerRadius(radius - 10)
      .innerRadius(0);

    const arc = g.selectAll('.arc')
      .data(pie(data))
      .enter().append('g')
      .attr('class', 'arc');
    const customColors = [ '#ffce56', '#4bc0c0', '#f67019'];
    arc.append('path')
      .attr('d', path)
      .attr('fill', (d, i) => customColors[i % customColors.length]);

    arc.append('text')
      .attr('transform', d => `translate(${path.centroid(d)})`)
      .attr('dy', '0.35em')
      .text(d => d.data.key);
  }
}
