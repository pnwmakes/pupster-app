# 🐶 Pupster App

Welcome to **Pupster**, a playful dog discovery app built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and internationalization support via `react-i18next`.

Users can search for dog breeds, like random dogs, switch between light and dark mode, and explore breed-specific images fetched from the [Dog CEO API](https://dog.ceo/dog-api/).

---

## 🌟 Features

-   🔍 **Breed Search**: Type in a dog breed and get images with autocomplete filtering.
-   🐾 **Discover Dogs**: Like or dislike random dogs. Build your “friends” counter!
-   🌗 **Dark Mode**: Toggle between light and dark themes using local storage.
-   🌍 **Internationalization (i18n)**: Supports English and Spanish translations.
-   🎥 **Intro Video**: Embedded video walkthrough in the homepage.
-   🧩 **Responsive Design**: Built with TailwindCSS for responsive styling.

---

## 🛠️ Tech Stack

-   **Framework**: Next.js 14
-   **Styling**: Tailwind CSS 3
-   **State Management**: React hooks
-   **i18n**: `react-i18next` + custom translation files
-   **Icons**: `@heroicons/react`
-   **Fonts**: Custom local fonts loaded with `next/font`
-   **API**: [Dog CEO API](https://dog.ceo/dog-api/)

---

## 🚀 Getting Started

1. **Clone the repo**

    ```bash
    git clone https://github.com/your-username/pupster-app.git
    cd pupster-app
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    ```

4. **Open in browser**
   Go to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
app/
  ├─ components/
  │   └─ Header.js
  ├─ context/
  │   └─ ThemeContext.js
  ├─ locales/
  │   ├─ en/translation.json
  │   └─ es/translation.json
  ├─ fonts/
  │   └─ GeistSans.woff, GeistMono.woff
  ├─ globals.css
  ├─ i18n.js
  ├─ page.js (Home)
  ├─ discover.js
  └─ search.js
```

---

## 🌐 Internationalization

English (`en`) and Spanish (`es`) translations are stored in the `locales` folder.

To add a new language:

1. Create a folder with the language code inside `locales`
2. Add a `translation.json` file with your keys
3. Update the `i18n.js` file to include the new language

---

## 📦 Scripts

| Script          | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start dev server on port 3000 |
| `npm run build` | Build the app for production  |
| `npm run start` | Start production server       |
| `npm run lint`  | Run linter                    |

---

## 🐾 API Reference

All breed and image data is pulled from the [Dog CEO API](https://dog.ceo/dog-api/). No API key required.

---

## 📦 Deployment

You can deploy the app easily to [Vercel](https://vercel.com/) by connecting your GitHub repo and hitting **Deploy**.

---

## 📄 License

MIT

---
