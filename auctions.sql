/*Drop Tables*/
DROP TABLE IF EXISTS auctions CASCADE;

/*Create Tables*/
CREATE TABLE auctions (
auction_id INT NOT NULL PRIMARY KEY,
year INT NOT NULL,
month VARCHAR(45) NOT NULL,
day INT NOT NULL,
time VARCHAR(10) NOT NULL,
storage_facility VARCHAR(45) NOT NULL,
units INT NULL,
address VARCHAR(45) NOT NULL,
city VARCHAR(45) NOT NULL,
state VARCHAR(2) NOT NULL,
phone VARCHAR(15) NOT NULL,
auctioneer VARCHAR(45) NOT NULL
);

/*Populate Tables*/
INSERT INTO auctions (auction_id, year, month, day, time, storage_facility, units, address, city, state, phone, auctioneer) 
VALUES (1, '2018', 'August', 24, '8:00 AM', 'StoragePro', 5, '2660 Turnpike Rd.', 'Stockton', 'CA', '(209) 546-1744', 'Nor Cal Storage Auctions');
INSERT INTO auctions (auction_id, year, month, day, time, storage_facility, units, address, city, state, phone, auctioneer) 
VALUES (2, '2018', 'August', 24, '8:45 AM', 'StoragePro', 5, '15550 S. Harlan Rd.', 'Lathrop', 'CA', '(209) 983-1773', 'Nor Cal Storage Auctions');
INSERT INTO auctions (auction_id, year, month, day, time, storage_facility, units, address, city, state, phone, auctioneer) 
VALUES (3, '2018', 'August', 24, '9:15 AM', 'Secured Self Storage', 5, '5524 Pirrone Rd.', 'Salida', 'CA', '(509) 545-6826', 'Nor Cal Storage Auctions');
INSERT INTO auctions (auction_id, year, month, day, time, storage_facility, units, address, city, state, phone, auctioneer) 
VALUES (4, '2018', 'August', 24, '10:00 AM', 'Extra Space', 5, '2101 Sylvan Ave.', 'Modesto', 'CA', '(209) 353-5744', 'Nor Cal Storage Auctions');
INSERT INTO auctions (auction_id, year, month, day, time, storage_facility, units, address, city, state, phone, auctioneer) 
VALUES (5, '2018', 'August', 24, '10:45 AM', 'McHenry Self Storage', 5, '1234 McHenry Ave.', 'Modesto', 'CA', '(209) 544-9285', 'Nor Cal Storage Auctions');
INSERT INTO auctions (auction_id, year, month, day, time, storage_facility, units, address, city, state, phone, auctioneer) 
VALUES (6, '2018', 'August', 24, '11:30 AM', 'Extra Space', 5, '1533 Cummins Dr.', 'Modesto', 'CA', '(209) 226-3435', 'Nor Cal Storage Auctions');
INSERT INTO auctions (auction_id, year, month, day, time, storage_facility, units, address, city, state, phone, auctioneer) 
VALUES (7, '2018', 'August', 24, '12:00 PM', 'Extra Space', 5, '2201 Crows Landing Rd.', 'Modesto', 'CA', '(209) 272-0521', 'Nor Cal Storage Auctions');
INSERT INTO auctions (auction_id, year, month, day, time, storage_facility, units, address, city, state, phone, auctioneer) 
VALUES (8, '2018', 'August', 27, '8:30 AM', 'Extra Space', 5, '3855 Madison Ave.', 'North Highlands', 'CA', '(916) 238-6718', 'Nor Cal Storage Auctions');
INSERT INTO auctions (auction_id, year, month, day, time, storage_facility, units, address, city, state, phone, auctioneer) 
VALUES (9, '2018', 'August', 27, '9:30 AM', 'RV Storage Depot', 5, '4250 Roseville Rd.', 'North Highlands', 'CA', '(916) 481-7300', 'Nor Cal Storage Auctions');
INSERT INTO auctions (auction_id, year, month, day, time, storage_facility, units, address, city, state, phone, auctioneer) 
VALUES (10, '2018', 'August', 27, '10:30 AM', 'LifeStorage of Pell Industrial', 5, '1300 El Camino Ave.', 'Sacramento', 'CA', '(916) 927-1300', 'Nor Cal Storage Auctions');
INSERT INTO auctions (auction_id, year, month, day, time, storage_facility, units, address, city, state, phone, auctioneer) 
VALUES (11, '2018', 'August', 27, '11:45 AM', 'LifeStorage of Pell Industrial', 5, '4161 Pell Dr.', 'Sacramento', 'CA', '(916) 564-4646', 'Nor Cal Storage Auctions');

/* Drop Tables */
/*DROP TABLE IF EXISTS auctions CASCADE;
DROP TABLE IF EXISTS pictures CASCADE;*/

/* Create Tables */
/*CREATE TABLE auctions (
auction_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
year INT NOT NULL,
month ENUM('January','February','March','April','May','June','July','August','September','October','November','December') NOT NULL,
day INT NOT NULL,
time VARCHAR(5) NOT NULL,
facility VARCHAR(45), NOT NULL,
address VARCHAR(45) NOT NULL,
city VARCHAR(45) NOT NULL,
state ENUM('CA') NOT NULL,
phone VARCHAR(45) NOT NULL,
units VARCHAR(45) NOT NULL
);

CREATE TABLE pictures (
picture_id INT NOT NULL, AUTO_INCREMENT, PRIMARY KEY,
auction_id INT NOT NULL,
picture_link VARCHAR(100),
FOREIGN KEY auctions_fk (auction_id) REFERENCES auctions (auction_id) ON UPDATE CASCADE
);*/

/* Populate Tabels */
/*INSERT INTO auctions (auction_id,year,month,day,time,facility,address,city,state,phone,units)
VALUES (null,'2017','November','20','11:00','Extra Space','2053 W. Steele Ln.','Santa Rosa','CA','(707)527-6471','6-7 units');

INSERT INTO auctions (auction_id,year,month,day,time,facility,address,city,state,phone,units)
VALUES (null,'2017','November','20','11:45','Extra Space','496 Hearn Ave.','Santa Rosa','CA','(707)526-1230','5 units');

INSERT INTO auctions (auction_id,year,month,day,time,facility,address,city,state,phone,units)
VALUES (null,'2017','November','20','13:00','Life Storage','601 Martin Ave.','Rohnert Park','CA','(707)585-1312','5 units');

INSERT INTO auctions (auction_id,year,month,day,time,facility,address,city,state,phone,units)
VALUES (null,'2017','November','20','13:30','Extra Space','6635 Redwood Dr.','Rohnert Park','CA','(707)495-9152','5 units');
*/