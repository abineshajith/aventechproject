<html>
  
<head>
  <meta charset="utf-8">
  <title>Account Details</title>
<link href="bank_account_details.css" rel="stylesheet"></head><link href="bank_account_details.css" rel="stylesheet">
<body>
    <h1 id="heading">BANK ACCOUNT DETAILS</h1>
    <h2 id="heading">WELCOME TO YES BANK</h2>
    <div id="total-body">
        
  <input type="checkbox" id="acccheck" onclick="show()">

  <label for="account-input">Account Number:</label>

  <input type="text" id="account-input" disabled>

  <br>
  <br>
  <input type="checkbox" id="phonecheck" onclick="view()">
  <label for="phone-input">Phone Number:</label>
  <input type="text" id="phone-input" disabled>

  
  <br>
  <br>

  <button onclick="displayAccountDetails()">Submit</button>
  <br>
  <div id="withdraw">
  <strong id="ancher">CLICK HERE:</strong>&nbsp;<a href="withdraw.html">CASH WITHDRAW</a>
  </div>
  <div id="deposit">
    <strong id="ancher">CLICK HERE:</strong>&nbsp;<a href="cash_deposit.html">CASH DEPOSIT</a>
  </div>
  <br>
  <br>
  

  <div id="account-details"></div>
</div>

  <script src="bank_accountdetails.js"></script>
</body>
</html>

