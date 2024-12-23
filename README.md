# DevTinder

DevTinder is a MERN stack-based application that connects like-minded developers. Inspired by Tinder, it allows developers to interact, connect, and build meaningful professional relationships.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building the Project](#building-the-project)
- [Upcoming Features](#upcoming-features)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- [x] User can create an account.
- [x] User can sign in.
- [x] Feed displaying developer profiles.
- [x] Ability to mark profiles as Interested or Ignore.
- [x] Connection requests are sent to Interested profiles.
- [x] View and manage received connection requests (Accept/Reject).
- [x] Accepted requests appear in the Connections tab.
- [x] Edit profile details on the Profile page.
- [x] Securely sign out.

---

## Tech Stack

- **Frontend**: React.js, Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT

---

## Setup and Installation

Follow these steps to get the project running on your local machine:

### Prerequisites

- Node.js and npm installed.
- MongoDB instance running locally or in the cloud.

### Clone the Repository

```bash
git clone https://github.com/akshaygelani/devtinder.git
cd devtinder
```

### Install Dependencies

#### For the Backend

```bash
cd backend
npm install
```

#### For the Frontend

```bash
cd frontend
npm install
```

### Environment Variables

- Create a `.env` file in the `backend` and `frontend` directory
- Refer `.env.sample` in the respective directory

---

### Running the Development Server

#### Start the Backend

```bash
cd backend
npm run dev
```

#### Start the Frontend

```bash
cd frontend
npm run dev
```

By default:

- Backend runs at `http://localhost:3000`
- Frontend runs at `http://localhost:3001`

---

### Building the Project

#### For the Frontend

```bash
cd frontend
npm run build
```

This will generate a production-ready build of the frontend in the `build` folder.

---

## Upcoming Features

- [ ] Real-time chat with connections.
- [ ] Personalized feed suggestions based on skills and interest.
- [ ] Notifications for new connection requests.
- [ ] Many more to come...

---

## Contributing

Contributions are welcome! If you’d like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Happy Coding!
