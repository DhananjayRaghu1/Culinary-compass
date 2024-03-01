body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
}

main {
    padding: 1rem;
}

.search-container {
    margin-bottom: 1rem;
}

input[type="text"] {
    padding: 0.5rem;
    width: 60%;
    border: 1px solid #ccc;
}

button {
    padding: 0.5rem 1rem;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}

#recipe-results {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}
