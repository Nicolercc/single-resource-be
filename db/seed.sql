\c tasks_dev;

INSERT INTO tasks (name, description, deadline, category, assigned_to, status) VALUES 
    ('Finish Project Proposal', 'Prepare and finalize the project proposal document for client meeting', '2023-11-10', 'Work', 'John Smith', 'In Progress'),
    ('Buy Groceries', 'Purchase vegetables, fruits, and household items', '2023-11-11', 'Personal', 'Self', 'Pending'),
    ('Prepare Presentation', 'Create a presentation for the upcoming team meeting', '2023-11-13', 'Work', 'Jane Doe', 'In Progress'),
    ('Call Mom', 'Catch up with mom and discuss family matters', NULL, 'Personal', 'Self', 'Pending'),
    ('Review Code Changes', 'Review and merge recent code changes from the development branch', '2023-11-15', 'Work', 'Alice Johnson', 'Completed'),
    ('Client Meeting', 'Meet with the new client to discuss project requirements and expectations', '2023-11-18', 'Work', 'John Smith', 'Scheduled'),
    ('Dentist Appointment', 'Visit the dentist for a regular checkup and cleaning', '2023-11-25', 'Personal', 'Self', 'Pending');