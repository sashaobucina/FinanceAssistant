# FinanceAssistant
NLP financial query engine and data aggregator.

Use natural language to ask the Finance Assistant questions about the financial world such as:
- "What is the income statement for GOOGL?"
- "How is the FOREX doing?"
- "What is stock price for AAPL?"

## Demo
![](res/demo.gif)

## Installation

The following are needed to run the code:

- [Docker](https://www.docker.com/products/docker-desktop)
- [npm](https://www.npmjs.com/get-npm)
- [Node](https://nodejs.org/en/)

The Node version tested on is 10.15.0. You can manage multiple Node versions through [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md), the Node version manager.

## Run

In a terminal shell, run the following to start up the Docker container housing the NLP model.

```bash
sh backend/rasa-docker-run.sh
```

In another shell, start up the backend server with the following command

```bash
cd backend
npm install
npm start
```

Lastlty, traverse to the frontend directory and start the frontend component.

```bash
cd react-frontend
npm install
npm start
```

Now the frontend should be available on **localhost:3000**

## TODO
- ~~Aggregate and normalize all financial statement data into common form (backend)~~
- ~~Add frontend support for companyProfile intent (frontend)~~
- ~~Show historical stock prices as time graph (frontend)~~
- ~~Fix header navbar hamburger bug when clicking on page link in dropdown~~
- ~~Finish help component~~
- Dockerize environment and create custom Docker network
- Add more intents to support more functionality
- Add complete intent descriptions
- Improve model accuracy
- Deploy and setup hosting for production
