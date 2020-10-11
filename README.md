## Create Simple, Secure, and Stylish Node Apps with Express

This project is connected with two blog posts from Auth0 where you learn how to create a simple yet stylish app using Node and Express and how to secure it using Passport.js and Auth0.

[Create a Simple and Stylish Node Express App](https://auth0.com/blog/create-a-simple-and-stylish-node-express-app/)

Learn how to build the foundation of a simple Node.js and Express app by creating a user interface and API.

[Create a Simple and Secure Node Express App](https://auth0.com/blog/create-a-simple-and-secure-node-express-app/)

Learn how to secure a simple Node.js and Express app by adding user authentication with Passport.js and Auth0.

## Get Started

Clone the repo:

```bash
git clone git@github.com:auth0-blog/wab-portal-express.git
```

Make `wab-portal-express` the current working directory:

```bash
cd wab-portal-express
```

Checkout the `add-passport` branch:

```bash
git checkout add-passport
```

Install the project dependencies:

```bash
npm i
```

## Set Up Auth0

### Step 1: Signing up and creating an Auth0 application

If you are new to Auth0, <a href="https://auth0.com/signup" data-amp-replace="CLIENT_ID" data-amp-addparams="anonId=CLIENT_ID(cid-scope-cookie-fallback-name)">sign up for a free Auth0 account here</a>.

Once you are signed in, you are welcomed into the Auth0 Dashboard. In the left sidebar menu, click on ["Applications"](https://manage.auth0.com/#/applications).

Next, click on the **Create Application** button present in the "Applications" view. A modal titled "Create Application" opens up. You can provide a **Name** for the application and choose its **type**:

**Name**: WHATABYTE Express Portal

**Application type**: Regular Web Applications

Click on **Create**.

### Step 2: Creating a communication bridge between Express and Auth0

To configure your Auth0 application, click on the **Settings** tab. Once there, populate the following fields like so:

**Allowed Callback URLs**:

```bash
http://localhost:3000/callback, http://localhost:8000/callback
```

**Allowed Logout URLs**:

```bash
http://localhost:3000/, http://localhost:8000/
```

Save these settings by scrolling down and clicking on **Save Changes**.

### Step 3: Adding Auth0 configuration variables to Node.js

Under the project directory, create a hidden file called `.env` to store configuration variables and secrets that your app needs:

```bash
touch .env
```

Add the following to `.env`:

```bash
AUTH0_CLIENT_ID=
AUTH0_DOMAIN=
AUTH0_CLIENT_SECRET=
SESSION_SECRET=
AUTH0_CALLBACK_URL=http://localhost:3000/callback
```

- `AUTH0_DOMAIN` is your **Domain** value from the "Settings".

- `AUTH0_CLIENT_ID` is your **Client ID** from the "Settings".

- `AUTH0_CLIENT_SECRET` is your **Client Secret** from the "Settings".

Execute the following command to generate a suitable string for the session secret:

```bash
node -e "console.log(crypto.randomBytes(32).toString('hex'))"
```

Copy and paste the output of the command above as the value for `SESSION_SECRET` in `.env`.

**Make sure to add this `.env` file to `.gitignore` so that it isn't committed to version control**.

## Run the Express Web App with Live Reload

Run the server using `nodemon` under the hood:

```bash
npm run dev
```

In a separate terminal window, serve the client from a static server using Browsersync under the hood:

```bash
npm run ui
```

> Browsersync proxies the server running on port `8000` with `nodemon`. Check out the npm script commands present in `package.json` for more details.

To see the app in action, visit [`http://localhost:3000`](http://localhost:3000) on your browser.