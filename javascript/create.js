var azure = require('azure-storage');

var tableService = azure.createTableService();

tableService.createTableIfNotExists('Inventory', function(error, result, response){
	if(error) {
		console.log("Error creating table: ");
	}
	else{
		console.log("Inventory table created successfully");	
	}
})

