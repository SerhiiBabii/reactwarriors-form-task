## Task. Form

Fork this repository

Form with 4 steps: 3 steps filling in data, last one displaying filled data

- Step 1 (Basic)

| Fields         | Input type | Validation                   |
| -------------- | ---------- | ---------------------------- |
| firstname      | text       | Must be 5 characters or more |
| lastname       | text       | Must be 5 characters or more |
| password       | password   | Must be 6 characters or more |
| repeatPassword | password   | Must be equal password       |
| gender         | radio      | Required                     |

- Step 2 (Contacts)

| Fields  | Input type | Validation            |
| ------- | ---------- | --------------------- |
| email   | text       | Invalid email address |
| mobile  | text       | Invalid mobile        |
| country | select     | Required              |
| city    | select     | Required              |

- When selecting a specific country, a list of cities of only that country should be displayed, link by id

* Step 3 (Avatar)

| Fields | Input type | Validation |
| ------ | ---------- | ---------- |
| avatar | file       | Required   |

- After uploading the user's avatar, its preview should be shown ("img src='base64'")

- At each step (except step 4) the Back - Forward buttons should be displayed
- When you click the Forward button, the following validation should occur:
  - if valid, show next step fields
  - if not valid, show errors under fields and highlight border
- When you click the Back button, the previous step should be displayed.

- The last 4th step is displaying all the fields that the user entered.

The final view of the form should be as in the example. https://reactwarriors.github.io/reactwarriors-stage-2/
