
![Logo](https://user-images.githubusercontent.com/114569709/207836708-d900bd9d-a756-4d8b-b206-0c5369fe4c02.png)


# WDT App - Dashboard Management

This is a webapp that's created with the thought that a receptionist would use it to
check employee's and part-time delivery drivers work status. 

The app will generate 5 random fulltime employee's to a table and give you the ability to
check them in or out of office and set the estimated amount of time they will be out of office.
If they are out longer then estimated, then the app will create a toast notification with the
employee's name and tell you when they should have been back. 

The app also have some input fields where you can provide information about 
part-time delivery drivers. Here you can provide name, telephone, 
delivery address, estimated return time and what vehicle they are using. 
When you submit the data, it will populate the bottom table called "Delivery Board".
If a driver is not back at the estimated time, a toast will be triggered with the late 
drivers contact information. This table also has a "clear" button for you to delete drivers
as they finish their deliveries.


## Screenshots

![App Screenshot](https://user-images.githubusercontent.com/114569709/207836751-dd75ac69-7a94-40d4-bc23-b96908f3d7e0.jpg)


## How to run the app locally

To deploy this webapp, download the files in this repository.
Download and open Visual Studios Code.

Then open the folder containing these files in Visual Studios Code. 
Go to extensions and download the "Live Server" extension.

Right Click the index.js file and click "Open with live server".
The webapp should open in your browser now. 

Or

If you dont need the ability to edit the code, just open the downloaded file folder, 
click into the "Web Application" folder, and double click the index.html file to open the
app for a demo/use.


## Plugins

* Jquery
* Bootstrap
* Font-Awesome
* Toastr

These are all plugins that are used in the app,
all of these plugins are connected with the use of cdn links for this project.



## 🚀 About Me
My name is Lasse Stavland. 
I'm a backend developer student at Noroff in Norway.

This is my 1st semester task, and all work provided in this app are my own.


