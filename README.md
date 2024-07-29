#install all dependencies
npm i 
#to run the application change the directory to src and execute
node index.js
#api's
#users
/users/create(Post-add data)
/users/:id(Get-get by Id)
#example json
{
email:"text"
nam:"textmail"
mobile:"3456789"
}
#expenses
/expenses/add(Post-add data)
/expenses/user/:id(Get-by id)
/expenses/all(Get-all data)
/expenses/balance-sheet(Get-balance sheet)
#example json
{
  "description": "Dinner",
  "amount": 3000,
  "splitMethod": "equal",
  "participants": [
  { "user": "60d0fe4f5311236168a109ca", "amountOwed": 1000 },
    { "user": "60d0fe4f5311236168a109cb", "amountOwed": 1000 },
    { "user": "60d0fe4f5311236168a109cc", "amountOwed": 1000 }
  ]
}
