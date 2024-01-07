# Secoda Take-Home Assessment Table Application

## Features

(1) Displays a table of the top 10 results from a cryptocurrency API and <br/>
(2) Refreshes every minute <br/>

### Technologies: 
(1) Using nextjs server side fetching extern api, avoiding exposing secret api-key on the client-side. <br/>
(2) React query for state management. <br/>
(3) Mantine for UI.  <br/>
(4) Refer to Third party section below.

### UI Screenshots: 
Normal UI:
<img width="1728" alt="Screenshot 2024-01-07 at 12 29 49 PM" src="https://github.com/tianxumou/matthew-secoda-takehome/assets/155783048/405c3bd5-dc73-42aa-8a11-1509aeaa732c">

Loading UI: 
<img width="1728" alt="Screenshot 2024-01-07 at 12 33 33 PM" src="https://github.com/tianxumou/matthew-secoda-takehome/assets/155783048/dede1837-e4a2-47fb-b374-82560f5ebe1b">

Error UI: 
<img width="1728" alt="Screenshot 2024-01-07 at 12 33 41 PM" src="https://github.com/tianxumou/matthew-secoda-takehome/assets/155783048/79eee9f6-b155-4de0-91c0-e4b871b0e5de">



### Third party used and how to install: 

(1) Icons: npm install react-icons --save <br/>
(2) Loading Shimmer Skeleton: npm install react-loading-skeleton <br/>
(3) Used Mantine get started template: https://mantine.dev/getting-started/#get-started-with-a-template (https://github.com/mantinedev/next-app-template) <br/>
(4) Mock Service Worker API for testing: npm install msw --save-dev <br/>
  
### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### TODOs:
- `unit test` – due to limited time couldn't get to it much, would love to extend unit test.
- `e2e test` – would love to provide e2e coverage.
- `search bar` - out of scope but could be added like in the UI provided.
- `Pagination` - out of scope but could be added like in the UI provided.
- `WatchList` - out of scope but could be added like in the UI provided.

