# Guitar Guru

Guitar Guru is a browser-based interactive experience where users learn the basics of music through piano and guitar. This is my first project, built with HTML, Sass, and TypeScript. The notes were recorded from my own piano and guitar, and the instruments respond both audibly and visually to provide a real-life experience. The goal was to create an interactive experience that works seamlessly.

## Table of Contents

- [Installation](#installation-instructions)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Installation Instructions

### Forking and Cloning the Repository

1. **Fork the repository**:
   - Navigate to the repository on GitHub.
   - Click the "Fork" button in the top-right corner of the page.

2. **Clone the forked repository**:
   - Open your terminal or command prompt.
   - Run the following command, replacing `<your-username>` with your GitHub username:
     ```sh
     git clone https://github.com/<your-username>/repository-name.git
     ```
   - Navigate to the project directory:
     ```sh
     cd repository-name
     ```

### Installing Dependencies

Before running the project, you need to install the required dependencies.

1. **Install Node.js**:
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Install npm (Node Package Manager)**:
   - npm is installed automatically with Node.js.

3. **Install project dependencies**:
   - Run the following command to install the dependencies listed in `package.json`:
     ```sh
     npm install
     ```

### Installing TypeScript and Sass

The project uses TypeScript and Sass. Follow these steps to install them globally:

1. **Install TypeScript**:
   - Run the following command to install TypeScript globally:
     ```sh
     npm install -g typescript
     ```

2. **Install Sass**:
   - Run the following command to install Sass globally:
     ```sh
     npm install -g sass
     ```

### Running the Project

After installing the dependencies, you can run the project.

1. **Compile TypeScript files**:
   - Run the following command to compile TypeScript files:
     ```sh
     tsc
     ```

2. **Compile Sass files**:
   - Run the following command to compile Sass files:
     ```sh
     sass src/scss:dist/css
     ```

3. **Start the development server**:
   - Depending on your setup, you may have different scripts to start your project. Here is a common example:
     ```sh
     npm start
     ```

### Common Commands

Here are some common npm scripts you might use during development:

- **Build the project**:
  ```sh
  npm run build


## Usage

Users will click guitars to reveal information about music theory and how the game works. Upon revealing instructions, users will use their keyboard to play the instruments.

## Configuration

Game is Mac friendly and may have problems with Windows commands. Users just need a computer, keyboard, and mouse. Not mobile or tablet friendly.

## Contributing

1. Fork the repository.  
2. Create a new branch:  
   ```sh
   git checkout -b feature-name
   ``` 
3. Make your changes.  
4. Commit your changes:  
  ```sh
   git commit -m "Description of the changes"
  ```
5.Push to the branch:  
  ```sh
   git push origin feature-name   
  ```
6. Create a pull request on GitHub.   

## License 

This project is licensed under the MIT License

## Credits

  ** background image: (firmbee)  https://unsplash.com/photos/YtQAhNbqa2o
  ** electric guitar: https://www.iconarchive.com/show/lesters-electric-guitar-icons-by-wackypixel/Burst-Guitar-icon.html
