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

tableService.retrieveEntity('Inventory', 'myPartitionKey', '3', function(error, result, response){
	if(!error) {
		console.log("retrieving count from the table");	
		console.log(result);
	}

});

# OR
var getvalues = tableService.retrieveEntity('Inventory', 'myPartitionKey', '1', function(error, result, response){
	if(!error){
		console.log("retrieved Successfully");
	}
	else {
		console.log("values are: ", getvalues);
	}
});
	
