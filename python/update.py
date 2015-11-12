from azure.storage import TableService, Entity

#Replace account_name with your account and account_key with your primary key

table_service = TableService(account_name='myaccount', account_key='myKey')

table_service.create_table('tasktable')

# Updating an entity to table in multiple ways

task1 = {'description' : 'schedule doctor appointment', 'priority' : 300}
table_service.update_entity('tasktable', 'toDoTasks', '1', task1)

task2 = {'PartitionKey': 'toDoTasks', 'RowKey': '2', 'description' : 'Pay bills', 'priority' : 200}
table_service.insert_or_replace_entity('tasktable', task2)


