# Eco Habits App 🌱  
A simple, interactive mobile app that helps users build and maintain eco-friendly habits through daily challenges, visual tracking, and personalized profiles.

---

## 📦 Installation  

### 📥 Download the APK  
- [**Click here to download the Eco Habits APK**](https://expo.dev/accounts/crystalkim/projects/eco-habits-app/builds/745d62dc-97dd-47f2-8228-e5f0d8239815)

### 📁 Install on Android:
1. Locate the downloaded APK using your File Manager.  
2. Enable **“Install from unknown sources”** if prompted.  
3. Tap **Install** to proceed.

### 🔄 Backup APK  
If the direct link expires, download the APK from the GitHub release:  
🔗 [**Backup APK – GitHub Release v1.0**](application-745d62dc-97dd-47f2-8228-e5f0d8239815.apk)

---

## 👩‍💻 Developer Info  
- **Name:** Pyae Shunn Le Maung
- **Student ID:** 6631503081  
- **Framework:** React Native (Expo)  
- **Backend:** Firebase (Auth, Firestore, Storage)  
- **GitHub Repo:** [Eco Habits App](https://github.com/Crystal-stillalive/Eco-Habits-App.git)

---

## 🧠 App Concept and Design  

### 🎯 User Personas
- **Emily (Age 24)** – Wants to build eco-friendly habits to reduce carbon footprint.
- **Lucus (Age 29)** – Needs a simple way to track eco-friendly behavior and stay motivated.  

### ✅ App Goals
- Help users build and maintain eco-friendly habits such as recycling and using public transport  
- Track daily activities related to environmental sustainability  
- Provide tips and daily challenges for sustainable living   

---

## 🌟 Key Features  
- 🔐 **User Authentication** – Secure login/signup, password reset  
- ✅ **Habit Tracking** – Create custom eco habits with frequencies  
- 📆 **Daily Challenges** – Auto-generated, trackable green tasks  
- 💡 **Eco Tips & Facts** – Daily education for sustainable living  
- 👤 **Profile Management** – Display name, avatar  

---

## 🔁 User Flow Summary  
Open app > Login/Sign up > 
Go to Dashboard > View habits, challenges, and tips > 
Tap "Add New Habit" > Set goal (daily/weekly/monthly) > 
Tap "View Challenge" > Complete challenge > 
Change name, password or profile picture in Profile > Log out

---

## 🧰 Tech Stack  

### Frontend
- React Native (Expo)  
- React Navigation  
- React Native Chart Kit  

### Backend
- Firebase Auth  
- Firestore  
- Firebase Storage  

---

## 🛠 Setup & Configuration  

### Prerequisites
- Node.js v14+  
- npm / yarn  
- Expo CLI  
- Firebase account  

### 🔧 Setup Steps
```bash
git clone https://github.com/Crystal-stillalive/Eco-Habits-App.git
cd eco-habits-app
npm install
npx expo start
```

Then:
- Setup Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Enable **Email/Password** Auth
- Add Firebase config to `firebase.js`

---

## 🔐 Firebase Security Rules  

```js
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

---

## 🧾 Project Structure  
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

---

## 🔢 Scripts & Dependencies  

### Common Scripts
- `npm start` – Start development server  
- `npm run android` – Run on Android  
- `npm run ios` – Run on iOS  
- `npm run web` – Run in browser  

### Key Libraries
- `@react-navigation/native`  
- `@react-navigation/bottom-tabs`  
- `react-native-chart-kit`  
- `expo-image-picker`  
- `firebase`

---

## 🖼 Screenshots  
Here’s a preview of the Eco Habits App UI:

- **Login Page**  
  <img src="https://i.imgur.com/5QoK31V.png" alt="Login" width="150"/>

- **Sign Up Page**  
  <img src="https://i.imgur.com/q2ihfh0.png" alt="Sign Up" width="150"/>

- **Home Page**  
  <img src="https://i.imgur.com/38L27JA.png" alt="Home" width="150"/>

- **Daily Challenge Page**  
  <img src="https://i.imgur.com/iwWz8w8.png" alt="Challenge" width="150"/>

- **My Eco Habits Page**  
  <img src="https://i.imgur.com/GdCcw1y.png" alt="Habits" width="150"/>

- **Add New Habit Page**  
  <img src="https://i.imgur.com/xp7tjiu.png" alt="Add Habit" width="150"/>

- **Profile Page**  
  <img src="https://i.imgur.com/aUPPBGl.png" alt="Profile" width="150"/>

---

## 🚀 Deployment Info  
- **Build Type:** Release  
- **Tested On:** Android  
- **Install Method:** Manual APK installation  

---
