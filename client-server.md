# Client-Server Architecture

## Overview

Client-server architecture is a distributed computing model that divides tasks or workloads between service providers, called **servers**, and service requesters, called **clients**. This model is fundamental to modern network applications, including web services, email, and databases.

## Components

- **Client**: A client is an application or device that requests services or resources from a server. Clients typically initiate communication, send requests, and wait for responses. Examples include web browsers, mobile apps, and desktop software.

- **Server**: A server is a system or program that provides services, processes client requests, and delivers responses. Servers manage resources such as data, applications, or files and serve multiple clients concurrently. Examples include web servers, database servers, and file servers.

## How It Works

1. **Request**: The client sends a request to the server, often over a network like the Internet or a local network.
2. **Processing**: The server receives the request, processes it (e.g., querying a database, executing business logic).
3. **Response**: The server sends back a response with the requested data or confirmation of an action.

## Characteristics

- **Separation of Concerns**: Clients focus on the user interface and user interaction, while servers handle data management and processing.
- **Scalability**: Servers can serve multiple clients simultaneously and can be scaled up to handle more requests.
- **Centralized Resources**: Servers centralize data and resources, improving management, security, and backups.
- **Network-Based**: Communication occurs over a network using standardized protocols (e.g., HTTP, FTP).

## Advantages

- Simplifies maintenance and updates by centralizing resources on the server.
- Enables multiple clients to share resources efficiently.
- Provides a structured and scalable approach to application development.

## Examples

- **Web Applications**: Browsers (clients) request web pages from web servers.
- **Email**: Email clients retrieve and send messages through mail servers.
- **Database Access**: Applications query databases hosted on database servers.


---


## REST APIs and Their Components

### What is a REST API?

REST (Representational State Transfer) API is an architectural style for designing networked applications. It uses standard HTTP methods and is stateless, meaning each request from client to server must contain all the information needed to understand and process the request.

### Core Principles of REST:
- **Statelessness:** Each request is independent; the server does not store client context between requests.
- **Client-Server separation:** The client and server are independent; the client handles the UI, while the server manages data and business logic.
- **Uniform Interface:** Standardized way to communicate using HTTP methods.
- **Cacheability:** Responses must define themselves as cacheable or not.
- **Layered System:** Architecture can be composed of hierarchical layers.

### Components of a REST API:

1. **Endpoints (Resources):** URLs representing objects or services (e.g., `/users`, `/products/123`).
2. **HTTP Methods:**
   - **GET:** Retrieve data.
   - **POST:** Create new resources.
   - **PUT:** Update existing resources.
   - **DELETE:** Remove resources.
   - **PATCH:** Partial update of a resource.
3. **Headers:** Metadata such as content type (`application/json`), authentication tokens, etc.
4. **Request Body:** Data sent to the server, typically in JSON format (used in POST, PUT, PATCH).
5. **Response:** Server returns status codes (e.g., 200 OK, 404 Not Found) and data.

### Example:
```http
GET /users/123
Host: example.com
Accept: application/json
