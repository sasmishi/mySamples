//var http = require('http')

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

var task1 = {
	PartitionKey: {'_':'myPartitionKey'},
	RowKey: {'_':'1'},
	Products: {'_':'Coke'},
	Available: {'_':'5'}
};	

var task3 = {
	PartitionKey: {'_':'myPartitionKey'},
	RowKey: {'_':'3'},
	Products: {'_':'Dew'},
	Available: {'_':'7'}
};

tableService.insertEntity('Inventory', task3, function(error, result, response){
	if(!error) {
		console.log("Inserted an entity into the table");	
	}
});

