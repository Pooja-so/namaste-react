# Part 1: Best Practices according to the industry standard. (Not mandatory)

- To keep all source code in /src folder
- To make separate files for separate components
- - To keep the filename same as Component name under the /components folder
- ### some developers write extension .js, .jsx, .tsc .But it hardly matters much. You can use any extensions you like as it hardly matters.
- In import statement for .js files it is not necessary to write .js extension as it will by default consider the file as .js file
- Never keep the hard coded data in /components folder
- ### Always keep th hard coded data in seperate folder. In /utlis folder as utlis means utility that will be used all across the application

- The line of code does not exceed more than 100-200 lines for each component file. If it exceeds break it down further into components. It is good pratice to keep component small, clean and clear.

## Note

### Every module can have two different types of export,

- 1. named export. Use when you to have export multiple things from an file to another file
- 2. default export. Use when you to export single thing by default from an file to another file
- You can have multiple named exports per module but only one default export.

- Note: Names for export declarations must be distinct from each other. Having named exports with duplicate names or using more than one default export will result in a SyntaxError and prevent the module from being evaluated.

# Part 2: React Hooks:

- React App has two layers: UI layer and Data layer. Ui layer displays the data send by the data layer.

- ### React Hooks ( Normal Javascript utility Function )
- There are two most important React hooks:
- 1. useState()
- syntax: const [state variable] = useState(Default value of state variable)
- 2. useEffect()

- React will keep the UI layer in sync with the data layer. In data layer where you have local state variable. As soon as the data layer updates the UI layer will update by re-rendering the componets. Behind the scene: As soon as the state variable updates React will re-render the components. React does the whole task very fast and in an optimize way.

## References

- Code Link - https://bitbucket.org/namastedev/namaste-react-live/src/master/
- React core algorihtm concepts- https://github.com/acdlite/react-fiber-architecture/blob/master/README.md
