# The Local – Frontend

The Local is a multi-vendor marketplace platform designed to connect local offline stores with customers, allowing local businesses to showcase and sell their products online.

## Project Status

🚧 Currently under development.

## Tech Stack

- Next.js
- React.js
- TypeScript
- Tailwind CSS

## Project Structure

```text
the-local-frontend/
│
├── app/
│   ├── (customer)/
│   │   ├── page.tsx
│   │   ├── stores/
│   │   ├── products/
│   │   ├── cart/
│   │   └── account/
│   │
│   ├── (seller)/
│   │   └── seller/
│   │       ├── dashboard/
│   │       ├── products/
│   │       ├── orders/
│   │       └── settings/
│   │
│   ├── (rider)/
│   │   └── rider/
│   │       ├── dashboard/
│   │       ├── deliveries/
│   │       └── earnings/
│   │
│   └── (auth)/
│       ├── login/
│       └── register/
│
├── components/
│   ├── customer/
│   ├── seller/
│   ├── rider/
│   └── shared/
│
└── lib/
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/asadkhan41376/the-local-frontend.git
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Planned Features

- Customer interface
- Store listing and details
- Product browsing
- Shopping cart
- Authentication
- Seller dashboard
- Product and order management
- Rider dashboard

## Backend

[The Local Backend Repository](https://github.com/asadkhan41376/the-local-backend)

## Developer

Mohammad Asad

[GitHub](https://github.com/asadkhan41376) | [Portfolio](https://my-project-port.vercel.app/)