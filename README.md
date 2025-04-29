# Eco Habits App 🌱

A React Native mobile application that helps users track and maintain eco-friendly habits. Built with Expo and Firebase, this app encourages sustainable living through daily challenges and habit tracking.

## Features

- **User Authentication**
  - Secure email/password login
  - Profile management
  - Password reset functionality

- **Habit Tracking**
  - Create and manage eco-friendly habits
  - Set custom frequencies (daily/weekly/monthly)
  - Track progress and completion
  - Categorize habits (energy, water, waste, etc.)

- **Daily Challenges**
  - New environmental challenge every day
  - Detailed impact information
  - Practical tips for completion
  - Progress tracking

- **Eco Tips & Facts**
  - Daily eco tips
  - Environmental impact facts
  - Educational content

- **Profile Management**
  - Custom profile picture
  - Display name customization
  - Password management
  - Progress statistics

## Tech Stack

- **Frontend**
  - React Native
  - Expo
  - React Navigation
  - React Native Chart Kit

- **Backend**
  - Firebase Authentication
  - Firestore Database
  - Firebase Storage

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- Firebase account
- iOS Simulator (for Mac users) or Android Emulator

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
├── assets/              # App assets and images
├── screens/             # App screens
│   ├── LoginScreen.js
│   ├── SignupScreen.js
│   ├── HomeScreen.js
│   ├── MyHabitsScreen.js
│   ├── AddHabitScreen.js
│   ├── ProfileScreen.js
│   └── DailyChallengeScreen.js
├── services/            # Backend services
│   └── database.js      # Firebase database operations
├── dataconnect/         # Firebase Data Connect configuration
├── App.js              # Main app component
├── app.json            # Expo configuration
├── firebase.js         # Firebase configuration
├── firestore.rules     # Firestore security rules
└── package.json        # Dependencies and scripts
```

## App Configuration

The app uses Expo's configuration system defined in `app.json`. Key configurations include:

- App name: "Eco-Habits-App"
- Version: 1.0.0
- Orientation: Portrait
- Icons and splash screen
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

## Development

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start the app on Android
- `npm run ios` - Start the app on iOS
- `npm run web` - Start the app in web browser

### Dependencies

Key dependencies include:
- @react-navigation/native
- @react-navigation/bottom-tabs
- @react-native-picker/picker
- firebase
- expo-image-picker
- react-native-chart-kit

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or suggestions, please open an issue in the repository. 
