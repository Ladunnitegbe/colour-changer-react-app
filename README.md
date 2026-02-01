# Hex Color Generator (React)

A simple and interactive **Hex Color Generator** built with **React**. Clicking the button generates a random hex color, updates the display background, and shows the corresponding hex code.

This project demonstrates the transition from **vanilla JavaScript DOM manipulation** to **React’s state-driven UI approach**.

---

##  Features

* Generates random hex colors (`#RRGGBB`)
* Updates UI dynamically using React state
* Clean, centered UI with modern styling
* Beginner-friendly React example

---

## Built With

* **React** (Functional Components)
* **JavaScript (ES6)**
* **CSS3**

---

## Project Structure

```
src/
│── App.jsx
│── HexColor.jsx
│── index.css
│── main.jsx
```

---

## How It Works

* A React `useState` hook stores the current color
* Clicking the button triggers a function that:

  * Generates a random hex color
  * Updates the state
* React automatically re-renders the UI using the new state

```js
const [color, setColor] = useState("#FFFFFF");
```

```js
setColor(getRandomColor());
```

---

## Learning Objectives

* Understanding **state management** in React
* Handling **events** with `onClick`
* Applying **dynamic inline styles** in JSX
* Writing reusable, component-based UI

---

## Possible Improvements

* Copy color code to clipboard
* Add color history
* Add animation or transition effects
* Convert to reusable custom hook

---

## Preview

> Click **Generate Random Color** to see the magic

---

## Contributing

Contributions, issues, and feature requests are welcome!

---

## License

This project is open source and available under the **MIT License**.


