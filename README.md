# Eco Habits App

A React Native mobile application that helps users track and maintain eco-friendly habits. Built with Expo and Firebase.

## Features

- User authentication (email/password)
- Track eco-friendly habits
- View progress and statistics
- Daily eco tips
- Profile management

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- Firebase account

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd eco-habits-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Email/Password authentication
   - Create a new web app and get your Firebase configuration
   - Replace the Firebase configuration in `firebase.js` with your own

4. Start the development server:
```bash
npx expo start
```

5. Run on your device:
   - Install the Expo Go app on your mobile device
   - Scan the QR code with your device's camera
   - Or press 'i' for iOS simulator or 'a' for Android emulator

## Project Structure

```
eco-habits-app/
├── assets/
│   └── eh.png           # App logo and icons
├── screens/
│   ├── LoginScreen.js
│   ├── SignupScreen.js
│   ├── HomeScreen.js
│   ├── MyHabitsScreen.js
│   ├── AddHabitScreen.js
│   └── ProfileScreen.js
├── services/
│   └── database.js
├── dataconnect/
│   ├── connector/
│   │   ├── connector.yaml
│   │   ├── mutations.gql
│   │   └── queries.gql
│   └── schema/
│       └── schema.gql
├── App.js
├── app.json            # Expo configuration
├── firebase.js
├── firestore.rules
└── package.json
```

## App Configuration

The app uses Expo's configuration system defined in `app.json`. Key configurations include:

- App name: "Eco-Habits-App"
- Version: 1.0.0
- Orientation: Portrait
- Icons and splash screen using `assets/eh.png`
- Platform-specific configurations for iOS and Android

## Firebase Configuration

1. Create a new Firebase project
2. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password authentication
3. Set up Firestore:
   - Go to Firestore Database
   - Create a new database
   - Set up security rules (see below)

### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      match /habits/{habitId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
