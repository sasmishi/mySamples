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

var query = new azure.TableQuery()
  .select(['Price', 'Available'])
  .where('RowKey eq ?', '3');

 
tableService.queryEntities('Inventory', query, null, function(error, result, response){
      if(error) {
      console.log("Error executing query");
      }
      else {
	      console.log("Query was successful");
	      //console.log(result.entries);
	      console.log("Count: ",result.entries[0].Available._);
	      console.log("Price: ",result.entries[0].Price._);
      }
});

