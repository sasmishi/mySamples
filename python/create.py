from azure.storage import TableService, Entity

table_service = TableService(account_name='myaccount', account_key='mykey')

# To create a Table 
table_service.create_table('tasktable')


