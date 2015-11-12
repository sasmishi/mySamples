from azure.storage import TableService, Entity

#Replace account_namenwith your account and account_key with your primary key

table_service = TableService(account_name='myaccount', account_key='myKey')

table_service.create_table('tasktable')

# Adding an entity to table in multiple ways

task1 = {'description' : 'schedule meeting', 'priority' : 300}
table_service.insert_entity('tasktable', 'toDoTasks', '1', task1)

# OR

task2 = {'PartitionKey': 'toDoTasks', 'RowKey': '2', 'description' : 'Pay bills', 'priority' : 200}
table_service.insert_entity('tasktable', task2)

# OR

task3 = Entity()
task.PartitionKey = 'toDoTasks'
task.RowKey = '3'
task.description = 'clean home'
task.priority = 100
table_service.insert_entity('tasktable', task3)
