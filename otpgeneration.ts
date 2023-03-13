interface UserData {
  aadhar: string;
  pan: string;
  name: string;
  mobile: string;
}

// Define a Map to store the user data
const usersMap = new Map<string, UserData>();

// Function to generate a random 6-digit OTP
function generateOTP(): string {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

// Function to handle the form submission
function handleSubmit(event: Event) {
  event.preventDefault();
  
  // Get the form fields
  const aadharInput = document.getElementById('aadhar') as HTMLInputElement;
  const panInput = document.getElementById('pan') as HTMLInputElement;
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const mobileInput = document.getElementById('mobile') as HTMLInputElement;
  const otpInput = document.getElementById('otp') as HTMLInputElement;
  
  // Get the values from the form fields
  const aadhar = aadharInput.value;
  const pan = panInput.value;
  const name = nameInput.value;
  const mobile = mobileInput.value;
  const otp = otpInput.value;
  
  // Check if the OTP matches
  if (otp === localStorage.getItem('otp')) {
    // Clear the OTP from local storage
    localStorage.removeItem('otp');
    
    // Check if the Aadhar number is already in the map
    if (usersMap.has(aadhar)) {
      alert('This Aadhar number is already registered.');
    } else {
      // Add the user data to the map
      const userData: UserData = { aadhar, pan, name, mobile };
      usersMap.set(aadhar, userData);
      // Display the user data in a table
      displayUsersTable();
    }
  } else {
    alert('The OTP you entered is incorrect. Please try again.');
  }
}

// Function to generate a new OTP and store it in local storage
function generateAndStoreOTP() {
  const otp = generateOTP();
  localStorage.setItem('otp', otp);
  alert(`Your OTP is ${otp}. Please enter it to confirm your details.`);
}

// Function to display the user data in a table
function displayUsersTable() {
  const usersTable = document.getElementById('users-table');
  if (usersTable) {
    // Clear the existing table rows
    usersTable.innerHTML = '';
    // Create a new table row for each user
    usersMap.forEach((userData, aadhar) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${aadhar}</td>
        <td>${userData.pan}</td>
        <td>${userData.name}</td>
        <td>${userData.mobile}</td>
      `;
      usersTable.appendChild(row);
    });
  }
}

// Attach event listeners to the form and button
const form = document.getElementById('user-form');
if (form) {
  form.addEventListener('submit', handleSubmit);
}
const generateOTPButton = document.getElementById('generate-otp');
if (generateOTPButton) {
  generateOTPButton.addEventListener('click', generateAndStoreOTP);
}
