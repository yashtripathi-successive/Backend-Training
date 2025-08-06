## 1. Monolithic Architecture

Description: Entire application is built as a single, unified unit.

**Key Features**:

All components (UI, business logic, data access) tightly integrated

Easy to develop initially, but can become complex and hard to maintain as app grows

Single deployable artifact (one executable or package)

**Use Case**: Small to medium applications, MVPs

**Drawbacks**: Difficult to scale parts independently, hard to adopt new technologies in parts of app

## 2. Microservices Architecture

Description: Application split into small, loosely coupled services each responsible for specific business capabilities.

**Key Features**:

Each service runs independently

Services communicate via APIs (REST, messaging)

Enables independent deployment and scaling

**Use Case**: Large, complex systems requiring scalability and flexibility

**Drawbacks**: Increased complexity in deployment and communication

## 3. Layered (N-tier) Architecture

Description: Application organized into layers with distinct responsibilities.

**Key Layers**:

Presentation (UI)

Business Logic

Data Access

Database

**Use Case**: Enterprise apps, clear separation of concerns

**Drawbacks**: Can become rigid and hard to change across layers

## 4. Service-Oriented Architecture (SOA)

Description: Similar to microservices but often uses larger, enterprise-level services communicating via an enterprise service bus (ESB).

**Key Features**:

Services share a communication protocol (SOAP, REST)

Focus on reusability and integration

**Use Case**: Large organizations integrating many systems

**Drawbacks**: Can be heavyweight and complex

## 5. Event-Driven Architecture

Description: Components interact by producing and consuming events asynchronously.

**Key Features**:

Loose coupling through event brokers or message queues

Good for real-time or distributed systems

**Use Case**: IoT, financial systems, real-time apps

**Drawbacks**: Debugging and tracing can be challenging

## 6. Serverless Architecture

Description: Functions run in the cloud without managing servers, triggered by events.

**Key Features**:

Automatic scaling and pay-per-use

Highly modular and event-driven

**Use Case**: Cloud-native apps, APIs, microservices functions

**Drawbacks**: Vendor lock-in and cold start latency