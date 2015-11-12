from azure.storage import TableService, Entity

table_service = TableService(account_name='myaccount', account_key='myKey')

task = table_service.get_entity('tasktable', 'toDoTasks', '1')
print(task.description)
print(task.priority)

task = table_service.get_entity('tasktable', 'toDoTasks', '4')
print(task.description)
print(task.priority)




