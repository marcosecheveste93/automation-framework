# Automation Framework (Playwright + TypeScript)

Test automation framework built with **Playwright** and **TypeScript** for **UI** and **API** testing.

- **UI target:** SauceDemo
- **API target:** ReqRes

---

## Tech Stack

- Playwright
- TypeScript
- ESLint
- GitHub Actions (CI)

---

## Project Structure

```text
.
├── tests/
│   ├── ui/
│   │   ├── specs/           # UI test specifications
│   │   └── pages/           # Page Object Model classes
│   ├── api/
│   │   ├── specs/           # API test specifications
│   │   └── models/          # TypeScript interfaces
│   └── data/
│       ├── pageData/        # Page validation data
│       └── testData/        # Test input data
├── config/
│   ├── .env.example         # Environment variables template
│   └── global-setup.ts      # Global test configuration
├── .github/
│   └── workflows/
│       └── playwright.yml   # CI pipeline
├── playwright.config.ts
├── tsconfig.json
└── .eslintrc.json
```

---

## Getting Started

### Prerequisites

- Node.js (LTS)
- npm

### Installation

```bash
git clone https://github.com/marcosecheveste93/automation-framework.git
cd automation-framework
npm install
npx playwright install
```

### Environment Variables

Copy the example env file:

```bash
cp config/.env.example config/.env
```

---

## Running Tests

Run all tests:

```bash
npm test
```

Run UI tests only:

```bash
npm run test:ui
```

Run API tests only:

```bash
npm run test:api
```

Run headed mode:

```bash
npm run test:headed
```

Run debug mode:

```bash
npm run test:debug
```

View the HTML report:

```bash
npm run report
```

---

## Test Coverage

### UI Tests (SauceDemo)

| Test          | Description                                            |
| ------------- | ------------------------------------------------------ |
| Login         | Verify successful login and inventory page display     |
| Sort Products | Verify products sort by price (low to high)            |
| Checkout      | End-to-end flow: login, add to cart, complete checkout |

### API Tests (ReqRes)

| Test      | Description                                      |
| --------- | ------------------------------------------------ |
| GET User  | Fetch user by ID and validate response structure |
| POST User | Create new user and verify response              |
| PUT User  | Update existing user and validate changes        |

---

## CI/CD (GitHub Actions)

This project uses GitHub Actions for continuous integration:

- Triggers: push / pull request to `main`
- Jobs:
  - UI tests
  - API tests
- Artifacts: Playwright HTML reports

### Required GitHub Secrets

| Secret        | Example Value                                      |
| ------------- | -------------------------------------------------- |
| UI_BASE_URL   | https://www.saucedemo.com/                         |
| API_BASE_URL  | https://reqres.in/api                              |
| `API_KEY`     | Your ReqRes API key (get one at https://reqres.in) |
| STANDARD_USER | standard_user                                      |
| PASSWORD      | secret_sauce                                       |

---

## Code Quality

Run ESLint:

```bash
npm run lint
```

Fix ESLint issues automatically:

```bash
npm run lint:fix
```

---

## Notes

This repository is intended as a learning and portfolio project to practice Playwright automation with clean structure and good testing practices.

---

## Author

Marcos Echeveste
