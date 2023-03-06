-- Department Table Seed Data
INSERT INTO department (department_name)
VALUES
  ('Executive Leadership Team'),
  ('Sales'),
  ('Engineering and Operations'),
  ('Marketing and Advertising'),
  ('Lifestyle'),
  ('Employee Relations'),
  ('Human Resources'),
  ('Product and Development');

-- Role Table Seed Data
  INSERT INTO role (title, salary, department_id)
  VALUES
  ('President/CEO', '250000', 1),
  ('Director of Sales', '175000', 2),
  ('Sales Manager', '100000', 2),
  ('Salesperson', '80000', 2),
  ('Director of Engineering', '180000', 3),
  ('Head Engineer', '125000', 3),
  ('Engineer', '80000', 3),
  ('Engineering Intern', '30000', 3),
  ('Director of Marketing', '125000', 4),
  ('Marketing Coordinator', '85000', 4),
  ('Marketing Intern', '30000', 4),
  ('Product Manager', '120000', 8),
  ('Director of Lifestyle', '125000', 5),
  ('Content Creator', '65000', 5),
  ('Director of F&B', '95000', 6),
  ('Head Chef', '80000', 6),
  ('F&B Manager', '70000', 6),
  ('Director of HR', '130000', 7),
  ('HR Coordinator', '75000', 7);

-- Employee Table Seed Data
  INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES 
  ('Noah', 'Bishop', 1, NULL),
  ('Maddy', 'Krenshaw', 2, 1),
  ('Joseph', 'Gooli', 3, 2),
  ('Mark', 'Alvarez', 4, 3),
  ('Martin', 'Brodeur', 4, 3),
  ('Sterling', 'Archer', 5, 1),
  ('Peyton', 'Manning', 6, 5),
  ('Ash', 'Ketchum', 7, 6),
  ('Fiona', 'West', 7, 6),
  ('Elsa', 'Frozen', 8, 6),
  ('Adele', 'Snider', 9, 1),
  ('Blake', 'Garza', 10, 9),
  ('Yu', 'Woo', 10, 9),
  ('John', 'Maddox', 11, 9),
  ('Sarah', 'Hemming', 12, 1),
  ('Leon', 'Draisaital', 13, 12),
  ('Sylvestor', 'Stalone', 14, 1),
  ('Matsuma', 'Kitiyaka', 15, 14),
  ('Frank', 'Butierrez', 16, 14),
  ('Cheryl', 'Koch', 17, 15),
  ('Robert', 'Foster', 17, 15);