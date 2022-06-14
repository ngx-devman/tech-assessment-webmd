# Medscape Technical Assessment
This coding assignment is designed to give us some understanding of your coding proficiency. It was designed to be finished in an hour or less. Although you are free to take as much time as you'd like to complete the test, we recommend limiting yourself to one hour. 

**You will not be automatically rejected for submitting an incomplete test.**

Please fork this repository, answer the questions in your local fork, push the answers up to your Github fork, and then email Wanjiao Zhang <wzhang@webmd.net> with a link to your repository.

## Alternative Option
Instead of completing this test, you may provide us with a link to a Git repository that houses a project you feel accurately demonstrates your current skill level. The project should be in JavaScript (ideally using Vue.js). This project needs to be sufficiently complex. A static HTML page or simple task scheduler is not enough. 

## Part One
Create a file in the `src/question-1` directory containing your answers to this section. Answers should be written in Javascript.

#### Question 1
Create a function that accepts an array, and returns the array in reverse **without using array.reverse**.

Test conditions:
```
source - ['Dog', 'Cat', 'Bear', 'Whale']
return - ['Whale', 'Bear', 'Cat', 'Dog']
```

#### Question 2

Create a function that determines if a string is a palindrome. A palindrome is a word or phrase that is spelled 
the same forwards and reversed.

Test conditions:
```
Radar - returns true
Radars - returns false
Never odd or even - returns true
```

## Part Two
Please follow the instructions below to make a simple JS app that consumes an API

- Build a simple page/view that displays a **responsive** list of cat facts, using (or not using) as many components as you'd like
- You **must** use Vue.js
- You **must** use this endpoint to complete this task: https://catfact.ninja/facts?limit=9
- Each separate fact returned by the response from the above endpoint should be displayed as a card
  - The cards should be displayed on a grid or in a single column, depending on resolution
    - Desktop resolutions: 3x3 grid 
    - Mobile and tablet resolutions: Single column
- You may use a component library of your choice (such as Quasar, Bootstrap, Vuetify, etc.) or you may use Vanilla CSS
#### Bonus
- Implement automated testing
- Feel free to add another feature or two that think would improve the app, or demonstrate your understanding of Vue/APIs.

Once you have completed the app, please add the code to the `question-2` directory. You should include the `package.json` file so that we can install dependencies and run the application. **Do not** include the `node_modules` directory!

## Result
Created new simple ``` Quasar app ``` by following the instruction of ** Part 2 **
using https://catfact.ninja/facts? endpoint with ``` limit ``` and ``` page ``` queries to display `` cat data ``depending on queries like ```per page ``` and ``` per limited length ```

![image](https://user-images.githubusercontent.com/57170337/172924777-ef6b48d7-31cf-40bf-9291-fc17e7e8cbaf.png)
### Using pagination and select option to filter data and display them from the existing API.
![image](https://user-images.githubusercontent.com/57170337/173470526-cf6b81c4-9b76-4488-824e-3c1de97486d0.png)

