--
-- Dumping data for table `user`
--

INSERT INTO `user` (creation_date, email, first_name, last_name, last_name_affix, password, phone)
VALUES ('2024-04-20 16:35:40.657987', 'yasin.el.bouazzati@hva.nl', 'Yasin', 'Bouazzati', 'el',
        '$2a$10$RPLR0HculL54plmpQ2VL0OXjn5WpCj7Rndkf5tYMNyGq/7aJyOoRq', '123456789'),
       ('2024-04-22 09:52:10.402740', 'mo@hva.nl', 'Mohaned', 'Al-jabori', '',
        '$2a$10$J1b4WoGprvVOSal.alWmCu5D8I.7FAqmkgTkjP8qlpN/aaF29MGo2', '123456789'),
       ('2024-04-22 09:58:18.004249', 'abcdefgmo@hva.nl', 'Mohaned', 'Al-jabori', '',
        '$2a$10$CLUHZrJwFFRi89noDc.DEutUKVGqs0UzwvdQ5eIQFKlddstf768yq', '123456789'),
       ('2024-04-22 11:47:53.315800', 'test@hva.nl', 'test', 'test', '',
        '$2a$10$GRk6jwKzpYsHZ8PjQdCTNe.PmD.XK9fPsZfxrzMicIqUYG8gr0TQ6', '123456789'),
       ('2024-04-22 11:51:52.170131', 'testing@hva.nl', 'test', 'test', '',
        '$2a$10$YNLSkAHiH.Y/k4HdbLiEAO2gaAWWTNg7wLzf3ebrhUCUk8l5P4RT.', '123456789');

--
-- Dumping data for table `task`
--

INSERT INTO `task` (category, creation_date, description, price, title, user_id)
VALUES ('TASK2', '2024-04-24 22:01:09.591056', 'I need somebody to upgrade my RAM', 12.00, 'Upgrade Ram', 5),
       ('TASK3', '2024-04-24 22:02:20.359462', 'Need someone to fix the leaky faucet in the kitchen', 25.00,
        'Fix Leaky Faucet', 5),
       ('OTHER', '2024-04-24 22:02:36.219980', 'Looking for someone to mow the lawn in my backyard', 20.00,
        'Mow the Lawn', 5),
       ('TASK1', '2024-04-24 22:02:39.185417', 'Help needed to assemble a new IKEA bookshelf', 30.00,
        'Assemble IKEA Furniture', 5),
       ('TASK2', '2024-04-24 22:02:43.786494', 'Want to paint the walls of my bedroom, need assistance', 40.00,
        'Paint Bedroom Walls', 5),
       ('TASK3', '2024-04-24 22:02:48.503734', 'Looking for someone to install a ceiling fan in the living room',
        35.00, 'Install Ceiling Fan', 5),
       ('OTHER', '2024-04-24 22:02:50.957600', 'Garage needs a good cleaning, seeking help', 15.00,
        'Clean Garage', 5),
       ('TASK1', '2024-04-24 22:02:54.084261', 'Need assistance in organizing clothes and items in the closet',
        20.00, 'Organize Closet', 5),
       ('TASK2', '2024-04-24 22:02:59.689747', 'Want to replace old light fixtures with new ones', 50.00,
        'Install New Light Fixtures', 5),
       ('TASK3', '2024-04-24 22:03:01.972983', 'Hedge in the backyard needs trimming, looking for help', 25.00,
        'Trim Hedge', 5),
       ('OTHER', '2024-04-24 22:03:10.522821', 'Garage door is stuck, need someone to fix it', 45.00,
        'Fix Garage Door', 5),
       ('TASK1', '2024-04-24 22:05:01.795738',
        'Looking for someone to install security cameras around the house', 60.00, 'Install Security Camera', 5),
       ('TASK2', '2024-04-24 22:05:05.251374', 'Need help setting up a new home theater system', 70.00,
        'Set Up Home Theater System', 5),
       ('TASK3', '2024-04-24 22:05:07.186680', 'Want to build raised garden beds in the backyard', 55.00,
        'Build Raised Garden Beds', 5),
       ('OTHER', '2024-04-24 22:05:09.119850', 'Bathroom drain is clogged, need assistance to unclog it', 20.00,
        'Unclog Drain', 5),
       ('TASK1', '2024-04-24 22:05:11.075168', 'Need help hanging picture frames around the house', 15.00,
        'Hang Picture Frames', 5),
       ('TASK2', '2024-04-24 22:05:13.316434', 'Fence in the backyard is broken, need someone to fix it', 40.00,
        'Fix Broken Fence', 5),
       ('TASK3', '2024-04-24 22:05:15.340030', 'Want to install a smart thermostat, need assistance', 50.00,
        'Install Smart Thermostat', 5),
       ('OTHER', '2024-04-24 22:05:18.082537', 'Gutters are clogged, need help cleaning them', 30.00,
        'Clean Gutters', 5),
       ('TASK1', '2024-04-24 22:05:19.886875', 'Roof is leaking, need someone to fix it', 100.00,
        'Fix Leaking Roof', 5),
       ('TASK2', '2024-04-24 22:05:22.075005', 'Looking for help to plant trees in the garden', 35.00,
        'Plant Trees', 5),
       ('TASK3', '2024-04-24 22:08:42.005692', 'Need to replace the old kitchen sink with a new one', 80.00,
        'Install New Kitchen Sink', 5),
       ('OTHER', '2024-04-24 22:08:48.719824', 'Want to hang outdoor lights in the backyard', 25.00,
        'Hang Outdoor Lights', 5),
       ('TASK1', '2024-04-24 22:08:50.798878', 'Floors in the hallway are squeaky, need them fixed', 45.00,
        'Fix Squeaky Floors', 5),
       ('TASK2', '2024-04-24 22:08:53.023693', 'Looking for someone to install a pet door for my dog', 30.00,
        'Install Pet Door', 5),
       ('TASK3', '2024-04-24 22:08:56.015147', 'Window in the living room is broken, need it repaired', 50.00,
        'Repair Broken Window', 5),
       ('OTHER', '2024-04-24 22:08:57.745943', 'Swimming pool needs cleaning, seeking assistance', 75.00,
        'Clean Swimming Pool', 5),
       ('TASK1', '2024-04-24 22:08:59.422440', 'Need help organizing storage in the garage', 20.00,
        'Organize Garage Storage', 5),
       ('TASK2', '2024-04-24 22:09:01.441638', 'Door lock in the front door is jammed, need it fixed', 35.00,
        'Fix Jammed Door Lock', 5),
       ('TASK3', '2024-04-24 22:09:03.415890', 'Want to install window blinds in the bedroom', 40.00,
        'Install Window Blinds', 5),
       ('OTHER', '2024-04-24 22:09:06.104099', 'Need help mounting the TV on the wall in the living room', 60.00,
        'Mount TV on Wall', 5),
       ('TASK1', '2024-04-24 22:09:34.458639', 'Toilet in the bathroom is leaking, need it fixed', 35.00,
        'Fix Leaking Toilet', 5),
       ('TASK2', '2024-04-24 22:09:36.877453', 'Want to install a swing set in the backyard', 150.00,
        'Install Backyard Swing Set', 5),
       ('TASK3', '2024-04-24 22:09:38.869054', 'Windows need cleaning, looking for assistance', 25.00,
        'Clean Windows', 5),
       ('OTHER', '2024-04-24 22:09:40.579556', 'Stairs in the house are creaky, need them fixed', 45.00,
        'Fix Creaky Stairs', 5),
       ('TASK1', '2024-04-24 22:09:42.543734', 'Want to install storage shelves in the garage', 55.00,
        'Install Garage Storage Shelves', 5),
       ('TASK2', '2024-04-24 22:09:44.455941', 'Front door needs a fresh coat of paint', 30.00,
        'Paint Front Door', 5),
       ('TASK3', '2024-04-24 22:09:46.461848', 'Fence gate in the backyard is broken, need it fixed', 40.00,
        'Fix Broken Fence Gate', 5),
       ('OTHER', '2024-04-24 22:09:48.694309', 'Kitchen pantry needs organizing, seeking help', 20.00,
        'Organize Kitchen Pantry', 5),
       ('TASK1', '2024-04-24 22:09:50.469205', 'Bushes in the front yard are overgrown, need trimming', 40.00,
        'Trim Overgrown Bushes', 5),
       ('OTHER', '2024-04-24 22:09:52.362997', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('OTHER', '2024-04-25 23:48:11.878745', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('OTHER', '2024-04-25 23:48:13.492750', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('OTHER', '2024-04-25 23:48:14.557519', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('OTHER', '2024-04-25 23:48:17.253760', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK3', '2024-04-25 23:48:34.912834', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK3', '2024-04-25 23:48:35.881776', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK3', '2024-04-25 23:48:36.831632', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK3', '2024-04-25 23:48:37.464590', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK3', '2024-04-25 23:48:38.188137', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK3', '2024-04-25 23:48:38.775501', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK3', '2024-04-25 23:48:39.500609', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK3', '2024-04-25 23:48:40.121624', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK2', '2024-04-25 23:48:45.452775', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK2', '2024-04-25 23:48:46.063327', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK2', '2024-04-25 23:48:46.695546', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK2', '2024-04-25 23:48:47.469130', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:50.890407', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:51.600905', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:52.118487', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:52.731008', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:53.235958', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:53.820324', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:54.481178', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:55.017239', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:55.730770', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:56.341245', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:57.016364', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:57.604858', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:58.340107', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('TASK1', '2024-04-25 23:48:59.068944', 'Want to install a bathroom exhaust fan', 70.00,
        'Install Bathroom Exhaust Fan', 5),
       ('OTHER', '2024-04-26 12:22:05.634738', 'kamer opruimen', 5.00, 'kamer opruimen', 5),
       ('OTHER', '2024-04-26 12:23:56.811687', 'kamer ', 5.00, 'nog een kamer opruimen', 5),
       ('OTHER', '2024-04-26 12:45:05.709705', 'Ik heb iemand nodig om mijn voortuin te maaien', 10.00,
        'Voortuin maaien', 5),
       ('OTHER', '2024-04-26 13:13:53.838032', 'Ik zoek iemand om mijn huis te schilderen', 50.00,
        'Huis schilderen', 5),
       ('TASK1', '2024-05-06 13:34:12.957002', 'description', 12.00, 'test title', 5),
       ('OTHER', '2024-05-07 23:52:52.740331', 'fix', 1.00, 'fix', 5);


--
-- Dumping data for table `task_contact_info`
--

INSERT INTO `task_contact_info` (city, email, house_number, house_number_suffix, phone, postal_code, street,
                                 task_id)
VALUES ('city', 'laila@test.nl', '1', NULL, '12345678', '1234cv', 'street', 12);

--
-- Dumping data for table `user_address`
--

INSERT INTO `user_address` (city, house_number, house_number_suffix, postal_code, street, user_id)
VALUES ('Zaandam', '1', NULL, '1234 BN', 'Oost-Dorsch', 1),
       ('Zaandam', '1', NULL, '1234 BN', 'Oost-Dorsch', 3),
       ('Example City', '123', 'A', '12345AA', 'Main Street', 5);