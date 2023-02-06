//calculatedLoanAmount (** Assign the following business logic to calculate the loan amount. By creating a JavaScript function)
//To calculate the loan amount, we use the loan equation formula in its original form: P V = P M T i [ 1 − 1 ( 1 + i) n]. Present Value = Payment * interest[1 -1(1+ interest rate) periods] Example: Your bank offers a loan at an annual interest rate of 6%, and you are willing to pay $250 monthly for 4 years (48 months).
function calculatedLoanAmount(interestRate, numYears, amount) {
    presentValue = amount * interestRate[1 -1 (1 + interestRate) * numYears]
    console.log(presentValue)
}

//Req 2: Create an array of loans and add five instances of the above JavaScript objects based on the above specifications 
const customerOne = {
    //Id
    customerID = 123,
    //customerName
    customerName = 'John Miller',
    //phoneNumber
    phoneNumber = 2345679876,
    //address
    address = '245 N Line Rd',
    //loanAmount
    loanAmount = 235000,
    //interest
    interest = 4.5,
    //loanTermYears
    loanTermYears = 20;
    //loanType
    loanType = 'Home Loan',
    //description
    description = 'Loan on purchase of first home'
    }
    
    const customerTwo = {
    //Id
    customerID = 124,
    //customerName
    customerName = 'Rose Lambert',
    //phoneNumber
    phoneNumber = 9879872345,
    //address
    address = '11 S Cove Ln',
    //loanAmount
    loanAmount = 65000,
    //interest
    interest = 9.9,
    //loanTermYears
    loanTermYears = 15,
    //loanType
    loanType = 'Student Loan',
    //description
    description = 'Loan to complete bachelors degree'
    }

//Req 3: List all the array elements with the grand total loan amount using console.log statements.
