<div align="center">
  <img src="static/punk_domus.svg" alt="PunkDomus Logo" width="200"/>
  <h1>PUNKDOMUS</h1>
  <p>A digital nexus for cyberpunk-infused software development, documentation, and bleeding-edge projects.</p>
  <p>
    <img src="https://img.shields.io/badge/license-MIT-FC5D7F.svg" alt="License: MIT">
    <img src="https://img.shields.io/badge/status-transmitting-21DEEA.svg" alt="Status: Transmitting">
  </p>
</div>

---

## > Accessing the Grid...

**PunkDomus** is a content-focused platform built with Nuxt.js, designed to be a repository of knowledge at the intersection of code and cybernetics. This is a space to explore articles, technical documentation, and personal notes (HandNotes) through a retro-futuristic interface.

The project is structured to serve content from local Markdown files, providing a fast, static-generated experience, true to the Jamstack philosophy.

## > System Core: Tech Stack

*   **[Nuxt.js](https://nuxtjs.org/)**: The Intuitive Web Framework, used for Server-Side Rendering (SSR) and Static Site Generation (SSG).
*   **[Vue.js](https://vuejs.org/)**: The progressive JavaScript framework that powers the user interface.
*   **[@nuxt/content](https://content.nuxtjs.org/)**: A git-based Headless CMS that fetches and processes Markdown files from the `content/` directory.
*   **[Docker](https://www.docker.com/)**: For containerizing the application, ensuring a consistent development and production environment.

## > Powering Up: Getting Started

To get a local instance of PunkDomus running, you'll need Node.js and npm installed.

### 1. Clone the Repository

```bash
git clone https://github.com/mrpunkdasilva/PunkDomus.git
cd PunkDomus
```

### 2. Install Dependencies

Connect to the network and download the required packages.

```bash
npm install
```

## > Engaging the Interface: Running the Project

Once the dependencies are installed, you can run the project in different modes.

### Development Mode

To run the project with hot-reloading at `http://localhost:3000`:

```bash
npm run dev
```

This is the recommended mode for development, as it reflects changes in real-time.

### Production Build

To build the application for production:

```bash
npm run build
```

To start the production server after building:

```bash
npm run start
```

### Static Generation

To generate a fully static version of the site:

```bash
npm run generate
```

The static files will be placed in the `dist/` directory.

## > Network Protocols: Docker

Alternatively, you can use Docker and Docker Compose to run the project in a containerized environment.

```bash
# Build and start the containers in detached mode
docker compose up --build -d
```

The application will be available at `http://localhost:3000`.

## > System License

This project operates under the **MIT License**. See the [LICENSE](LICENSE) file for full details. Feel free to fork, modify, and distribute as you see fit.

---

<div align="center">
  <p>End of Line.</p>
</div>
