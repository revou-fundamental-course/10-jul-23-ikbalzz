


// function
// get values
// count
// output




function calculateBmi() {
    // get value
    let height = document.getElementById ('height').value
    let age = document.getElementById ('age').value
    let weight = document.getElementById ('weight').value

    // count and output

    let bmi = (weight / (height * height) * 703)

    document.getElementById('heading').innerHTML = 'Your BMI status is :'
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(1)


    if (bmi <= 18.5) {
        document.getElementById('message').innerHTML = ' You are underweight'
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('message').innerHTML = 'You are normal weight'
    }
    else if (bmi >= 24.9 && bmi <= 29.9) {
        document.getElementById('message').innerHTML = 'You are overweight'
    }
    else {
        document.getElementById('message').innerHTML = 'You are obise + overweight'
    }

}

// clear

function reload() {
    window.location.reload()
}
