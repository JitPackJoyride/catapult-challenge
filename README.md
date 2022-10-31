# Challenge Completion Notes
## How I approached the challenge
I first approached the challenge based on the Acceptance Criteria.

That led me to the following steps:
1. Design paper prototypes of the UI
2. Flesh out the main UX concerns for an app like this, mainly:
    - How to make changing the values easy for the user
    - How to make the user aware of what the app can do
    - Offer extra features to make the user enjoy using the app

My notes for the above steps are in the picture below.
![UI/UX notes](https://user-images.githubusercontent.com/40203625/198942210-031b5789-738a-4613-a973-d92bc1e8cb6e.png)

As the challenge description said, some time to push the standard of the UX was encouraged. So, I decided to use better fonts and colors to make the app more appealing to the user. _Fun fact, I used the Catapult landing page as my main source of inspiration for the colors and fonts._

After that, I started coding the app. I first started with the UI, then the backend, and finally wired them together. Unfortunately, I didn't have time to write tests for the UI, but I did write some tests for the backend. While I was coding, I kept a focus on making the code as readable and modular as possible.

The final result can be seen below:
![Savings App Screenshot](https://user-images.githubusercontent.com/40203625/198943990-1b482426-d35d-4d78-9a5a-1a81fe4ab055.png)

![Savings App GIF](https://user-images.githubusercontent.com/40203625/198944887-f91b46a0-1da5-46ea-a21c-d4e371a2e52c.gif)


## What bits of my solution I'm most proud of

### Font
I'm really proud I found a free font similar to the one used in the Catapult landing page. I think being consistent with the brand is important, and I think the font I chose is a good fit.

### Data Validation
I'm proud of the data validation I did for the inputs. I made sure the user can't enter invalid data, both on the frontend and the backend. I also made sure the user can't enter negative numbers, as that doesn't make sense for this app.

### Responsiveness
I'm proud of the responsiveness of the app. I made sure the app looks good on all screen sizes, and I made sure the user can use the app on mobile devices. Although I can make the tap targets bigger, I think the app is usable on mobile devices.

### Maintainability
I'm proud of the way I structured the code and also the extra data input that can be added to the app. For example, the number of years that the savings calculates doesn't have to be 50, it can be any number. The same goes for the intervals for the x-axis of the graph. I think this makes the app more maintainable, as it can be easily adapted to other use cases.

## What bits of the solution I'd like to improve on
### Number formatting
I'd like to improve the way the numbers are formatted, especially on the number inputs. I'd like to make it so the user can enter numbers with commas, like 1,000,000.

### Tests
I'd like to write tests for the UI. I didn't have time to do that, but I think it's important to have tests for the frontend as well. The things I'd like to test are:
- The inputs are validated correctly
- The results are calculated correctly
- The alert for telling the user if they're saving enough or too little is shown correctly
- The graph is rendered correctly

### UX
A big feature I wanted to add to really impress the user is the ability to view multiple savings scenarios at the same time. For example, the user could see how much they'd save if they saved 10% of their income, 20% of their income, and 30% of their income. I didn't have time to implement that, but I think it would be a great feature to add.

### tRPC
I'd like to use tRPC to add better typings for the frontend and backend integration. For now, I'm using duplicate types for the frontend and backend, but I think tRPC would be a great way to avoid that.

### Better explanation of the app
I'd like to add a better explanation of the app to the UI. I think it's important to explain to the user what the app does and how to use it. I think a good way to do that is to add tooltips to the inputs to explain how they calculate the savings.

---
**NOTE:** 

This is the end of the challenge completion notes. The rest of the README is the original README for the project.

----

# Catapult Programming Challenge

This repo is intended to be uploaded to your own Github account in
order to form the submission for the challenge. This project will give you a basic server with a React app, so you don't have to spend time writing boilerplate code. Feel free to make any changes you wish - the existing code is purely intended to get you going faster.

## Run Instructions

To run the app, `cd` into the project root directory and run `yarn install` & `yarn start`
(install Yarn [here](https://yarnpkg.com/en/docs/install)).

Depending on your environment, you might need to install concurrently / Typescript globally.

There is one basic test written in the client, which you can run by performing
`cd client` and then `yarn test`. If you want to add new client tests you can use Jest.

Mocha has been installed on the server to allow you to create server tests if you wish,
although none have been written yet.

## The challenge

Create a web-app that shows how much you can expect to make from your savings over time.

The app must satisfy the following Acceptance Criteria (ACs):

* It should allow the user to vary the initial savings amount, monthly deposit and interest rate through the UI
* It should display how much the user's initial savings amount will be worth over the next 50 years. This should assume that the monthly amount is paid in each month, and the value rises with the interest rate supplied. There are resources online about calculating compound interest totals - e.g. [Wikipedia](https://en.wikipedia.org/wiki/Compound_interest#Investing:_monthly_deposits)
* All calculations must take place server-side, and all monthly projection data should be returned via an endpoint
* The calculations must be triggered onChange of any input, to give live feedback on the input data. The performance (try the slider) should be reasonable.

Since we are currently looking for someone to push up the standard of our product/UX - please spend some time making improvements in this regard. This doesn't have to be anything too flashy - just any opportunities you can see to make the product cleaner/more engaging/slicker.

### Our Guidance

The challenge should not take any more than 2-4 hours. You do not need to complete the challenge in one go.

These are some qualities we value:
 * Well-modularised, robust and clearly-written code
 * Maintainability. Another team member should be able to easily work with your code after you've finished. 
 * Single Responsibility Principle
 * A well-organised codebase. You should think about how your codebase might grow as the project becomes more complex

The UI has been started, as well as an example endpoint on the server. How you connect these and structure logic is up to you! Feel free to make changes to any of the code provided (including the UI) if you wish.

We have chosen to include a basic design system on the client, to give you an idea of how we like to build UIs. For this challenge we have used [Chakra JS](https://chakra-ui.com/docs/getting-started). If you're not familiar with such systems, hopefully this won't be too steep a learning curve. The docs will give you details of all the components/props you can use, but as a head-start, you can pass in styling props to the components including margins/padding etc like this:

```
// This produces a Box (styled div) with a top margin of 2, padding of 3 and a black background colour.
// Colours and spacing properties are defined in `themes/index.tsx`
<Box mt={2} p={3} bg='black'>
```

Although the API might be relatively straightforward, please try and write the API code as if you were building something more complex. We would like to gain an idea of how you would go about structuring API code.

Other than that, feel free to take the challenge in any directions you feel best showcase your strengths!

**Once complete**, please drop us a brief note (either an email, or in the readme somewhere) explaining:
* How you approached the challenge
* What bits of your solution you like
* What bits of your solution you’d like to improve upon

Any images/gifs of the finished product would be helpful too!

### Tooling

The frontend contains some tooling you might be familiar with

#### Typescript

If you like to use Typescript in your workflow, you should get any client warnings/errors appear in your terminal after running `yarn start`.

You can also run the server types using `yarn types`.

We believe strong TS typing will make your code much more robust.

#### Prettier

We believe Prettier makes your life easier! There is an example .prettierrc included in the `frontend` directory - feel free to tweak the settings if you'd prefer.

You might need to give your IDE a nudge to pick the settings up - [here's an example](https://stackoverflow.com/a/58669550/4388938) of how to do that with VS Code

