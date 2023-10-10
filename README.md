# FlashCards Starter Kit



Abstract at the top (A sentence or two describing the project)
A GIF of the working application
Technologies used
Install/Setup instructions

## Fork This Repo

On the top right corner of this page, click the **Fork** button.

## Setup

Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies using the command:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have skipped tests in your `card` test file show up.

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Your project is running...
```

*Note that you will not need to you run this file until you are running your `game` file in Iteration 3. Prior to that, you should strive to use TDD to drive your code. You should check the functionality of your application by running your tests via `npm test`.*


## Where to Add Your Code

**Create all of your feature code files in the `src` directory.** Use the `module.exports` and `require` syntax to share code across files.

## How to View Your Code in Action

Once you are working through Iteration 3, you will want to run the `node index.js` command in your terminal to run the game.

When the game is functioning appropriately, you will be prompted for each question, have the opportunity to select an answer, and will be given feedback. You will be able to play through the entire deck of cards:

[(https://www.loom.com/share/137d775675d84d9fb23cfc32677b105b)]

---

## Test Files Organization



Run your test suite using the command:

```bash
npm test
```
