# Automation Framework

# Automation Framework

A test automation framework built with Playwright and TypeScript for UI and API testing.

## Tech Stack

- **Playwright** - End-to-end testing framework
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting
- **GitHub Actions** - CI/CD pipeline

## Project Structure

├── tests/
│ ├── ui/
│ │ ├── specs/ # UI test specifications
│ │ └── pages/ # Page Object Model classes
│ ├── api/
│ │ ├── specs/ # API test specifications
│ │ └── models/ # TypeScript interfaces
│ └── data/
│ ├── pageData/ # Page validation data
│ └── testData/ # Test input data
├── config/
│ ├── .env.example # Environment variables template
│ └── global-setup.ts # Global test configuration
├── .github/
│ └── workflows/
│ └── playwright.yml # CI/CD pipeline
├── playwright.config.ts # Playwright configuration
├── tsconfig.json # TypeScript configuration
└── .eslintrc.json # ESLint configuration

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm

### Installation

1. Clone the repository:

````bash
git clone https://github.com/marcosecheveste93/automation-framework.git
cd automation-framework

Install dependencies:
npm install

Install Playwright browsers:
npx playwright install

Set up environment variables:
cp config/.env.example config/.env

Running Tests
Run all tests
npm test

Run UI tests only
npm run test:ui

Run API tests only
npm run test:api

Run tests in headed mode
npm run test:headed

Run tests in debug mode
npm run test:debug

View test report
npm run report

Test Coverage
UI Tests (Sauce Demo)
Test	Description
Login	Verify successful login and inventory page display
Sort Products	Verify products sort by price (low to high)
Checkout	E2E flow: login, add to cart, complete checkout
API Tests (ReqRes)
Test	Description
GET User	Fetch user by ID and validate response structure
POST User	Create new user and verify response
PUT User	Update existing user and validate changes
CI/CD Pipeline
The project uses GitHub Actions for continuous integration:

Trigger: Push or PR to main/master branches
Jobs:
UI Tests (parallel)
API Tests (parallel)
Artifacts: HTML reports retained for 30 days
Setting up CI/CD
Add these secrets in your GitHub repository settings:

Secret	Value
UI_BASE_URL	https://www.saucedemo.com/
API_BASE_URL	https://reqres.in/api
API_KEY	Your ReqRes API key (get one at https://reqres.in)
STANDARD_USER	standard_user
PASSWORD	secret_sauce
Code Quality
Run ESLint:

npm run lint

Fix ESLint issues:

npm run lint:fix

Author
Marcos Echeveste

License
ISC


Luego commitea y crea el PR:

```bash
git add README.md
git commit -m "Update README with complete project documentation"
git push -u origin feature/update-readme

gh pr create --title "Update README with complete project documentation" --body "Added comprehensive README with:
- Project structure overview
- Installation instructions
- Test running commands
- Test coverage documentation
- CI/CD setup guide
- Code quality commands"
````
