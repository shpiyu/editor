# Charles Butler Editor

I created this simple WYSIWYG editor app to learn react.

Visit the application hosted on firebase
https://c-m-editor.firebaseapp.com 

Features of this application

  - Responsive and mobile first design
  - Ability to drag and drop imags
  - Basic text formatting
  - Ability to add hyperlink
  - Edit/Update created post
  - Preview post
  - Export to PDF (via browser's print method)
  - Save & create multiple post
  - Delete post
  - Supports emoji
  - Uses firebase relatime database to store posts


Setting up project in your local machine :  
- Requires node
- Clone this repository `git clone https://github.com/shpiyu/editor.git`
- Install dependencies `npm install`
- Start local server `npm start`

## Automated Deployment

This project is configured for automated deployment to Firebase Hosting using GitHub Actions.

### Prerequisites

For the deployment to work, you need to create a service account in your Firebase project and add its JSON key as a secret in your GitHub repository:

1.  **Create a Firebase Service Account:**
    *   Go to your Firebase project console.
    *   Navigate to Project settings > Service accounts.
    *   Generate a new private key (JSON file).
2.  **Add Secret to GitHub:**
    *   In your GitHub repository, go to Settings > Secrets and variables > Actions.
    *   Click on "New repository secret".
    *   Name the secret `FIREBASE_SERVICE_ACCOUNT`.
    *   Paste the entire content of the JSON key file you downloaded from Firebase into the secret value field.

The GitHub Action workflow in `.github/workflows/firebase-deploy.yml` uses this secret to authenticate with Firebase and deploy the application.
